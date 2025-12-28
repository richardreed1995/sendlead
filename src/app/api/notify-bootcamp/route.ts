import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, error: 'Email service not configured' }, 
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const data = await request.json()
    const { email } = data

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // 1. Send internal notification via Resend
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; }
            .header { background: #f8f8f8; padding: 10px 20px; border-bottom: 1px solid #eee; margin: -20px -20px 20px; }
            .label { font-weight: bold; color: #666; }
            .value { margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Bootcamp Access Request</h2>
            </div>
            <p>A new user has requested access to the 7-Day Lead Generation Bootcamp.</p>
            <div class="label">Email Address:</div>
            <div class="value">${email}</div>
            <div class="label">Requested At:</div>
            <div class="value">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</div>
          </div>
        </body>
      </html>
    `

    const internalEmailPromise = resend.emails.send({
      from: 'Sendlead <noreply@notification.sendlead.co>',
      to: 'richard@sendlead.co',
      subject: `New Bootcamp Lead: ${email}`,
      html: emailHtml,
    })

    // 2. Push to Kit (formerly ConvertKit)
    const kitApiKey = process.env.KIT_API_KEY
    const kitSequenceId = process.env.KIT_SEQUENCE_ID
    const kitFormId = process.env.KIT_FORM_ID
    const kitTagId = process.env.KIT_TAG_ID
    
    let kitPromise: Promise<any> = Promise.resolve(null)
    let kitIntegrationAttempted = false
    
    if (kitApiKey) {
      if (kitSequenceId) {
        // Add to a Sequence
        kitIntegrationAttempted = true
        kitPromise = fetch(`https://api.convertkit.com/v3/sequences/${kitSequenceId}/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ api_key: kitApiKey, email }),
        })
      } else if (kitFormId) {
        // Subscribe to a Form
        kitIntegrationAttempted = true
        kitPromise = fetch(`https://api.convertkit.com/v3/forms/${kitFormId}/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ api_key: kitApiKey, email }),
        })
      } else if (kitTagId) {
        // Subscribe to a Tag
        kitIntegrationAttempted = true
        kitPromise = fetch(`https://api.convertkit.com/v3/tags/${kitTagId}/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ api_key: kitApiKey, email }),
        })
      }

      if (kitIntegrationAttempted) {
        kitPromise = kitPromise
          .then(res => res.json())
          .catch(err => {
            console.error('Failed to push to Kit:', err)
            return null
          })
      } else {
        console.warn('Kit integration skipped: Neither KIT_SEQUENCE_ID, KIT_FORM_ID nor KIT_TAG_ID configured')
      }
    } else {
      console.warn('Kit integration skipped: KIT_API_KEY not configured')
    }

    // Wait for both to complete
    await Promise.all([internalEmailPromise, kitPromise])

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Failed to process bootcamp lead:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to process lead' },
      { status: 500 }
    )
  }
}

