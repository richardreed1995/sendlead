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

    await resend.emails.send({
      from: 'Sendlead <noreply@notification.sendlead.co>',
      to: 'richard@sendlead.co',
      subject: `New Bootcamp Lead: ${email}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Failed to send bootcamp notification:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send notification' },
      { status: 500 }
    )
  }
}

