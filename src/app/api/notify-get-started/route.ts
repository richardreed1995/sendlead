import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured',
          hint: 'RESEND_API_KEY environment variable is missing'
        }, 
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const data = await request.json()
    
    const { leadType, buyingLeads, salesReps, leadCapacity, contact, completedAt } = data

    // Format the email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #1a1a1a; 
              margin: 0; 
              padding: 0; 
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            }
            .header { 
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              color: #ffffff; 
              padding: 16px 20px;
              text-align: left;
            }
            .header h1 {
              margin: 0;
              font-size: 18px;
              font-weight: 600;
              letter-spacing: -0.3px;
            }
            .content { 
              padding: 20px; 
              background-color: #ffffff;
            }
            .intro {
              margin-bottom: 12px;
              color: #4a4a4a;
              font-size: 13px;
            }
            .section { 
              margin-top: 12px; 
              padding-top: 12px; 
              border-top: 1px solid #e8e8e8;
            }
            .section:first-of-type {
              margin-top: 0;
              padding-top: 0;
              border-top: none;
            }
            .section-title {
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              color: #666666;
              margin: 0 0 6px 0;
            }
            .field { 
              margin-bottom: 8px;
              padding: 4px 0;
            }
            .field:last-child {
              margin-bottom: 0;
            }
            .label { 
              font-weight: 500; 
              color: #888888;
              font-size: 10px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 3px;
              display: block;
            }
            .value { 
              color: #1a1a1a; 
              font-size: 13px;
              font-weight: 500;
            }
            .two-column {
              width: 100%;
              border-collapse: collapse;
            }
            .column {
              width: 50%;
              padding-right: 12px;
              vertical-align: top;
            }
            .column:last-child {
              padding-right: 0;
            }
            .value a {
              color: #1a1a1a;
              text-decoration: none;
              border-bottom: 1px solid #d0d0d0;
            }
            .value a:hover {
              border-bottom-color: #1a1a1a;
            }
            .footer { 
              margin-top: 12px; 
              padding-top: 10px; 
              border-top: 1px solid #e8e8e8; 
              font-size: 10px; 
              color: #888888;
              text-align: center;
            }
            .timestamp {
              font-weight: 500;
              color: #666666;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Enquiry Received</h1>
            </div>
            <div class="content">
              <p class="intro">A new enquiry has been submitted through the get-started flow.</p>
              
              <div class="section">
                <h2 class="section-title">Lead Overview</h2>
                <table class="two-column" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td class="column" style="width: 50%; padding-right: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Type of Leads</span>
                        <div class="value">${leadType || 'Not specified'}</div>
                      </div>
                      <div class="field">
                        <span class="label">Number of Sales Reps</span>
                        <div class="value">${salesReps || 'Not specified'}</div>
                      </div>
                    </td>
                    <td class="column" style="width: 50%; padding-left: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Bought Leads Before</span>
                        <div class="value">${buyingLeads === true ? 'Yes' : buyingLeads === false ? 'No' : 'Not specified'}</div>
                      </div>
                      <div class="field">
                        <span class="label">Leads Per Month</span>
                        <div class="value">${leadCapacity ? leadCapacity.replace('-', ' - ') : 'Not specified'}</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="section">
                <h2 class="section-title">Contact Information</h2>
                <table class="two-column" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td class="column" style="width: 50%; padding-right: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Name</span>
                        <div class="value">${contact?.name || 'Not provided'}</div>
                      </div>
                      <div class="field">
                        <span class="label">Email</span>
                        <div class="value"><a href="mailto:${contact?.email || ''}">${contact?.email || 'Not provided'}</a></div>
                      </div>
                    </td>
                    <td class="column" style="width: 50%; padding-left: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Phone</span>
                        <div class="value"><a href="tel:${contact?.phone || ''}">${contact?.phone || 'Not provided'}</a></div>
                      </div>
                      <div class="field">
                        <span class="label">Website</span>
                        <div class="value"><a href="${contact?.website || ''}" target="_blank">${contact?.website || 'Not provided'}</a></div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="footer">
                <p class="timestamp" style="margin: 0;"><strong>Submitted:</strong> ${completedAt ? new Date(completedAt).toLocaleString('en-GB', { timeZone: 'Europe/London' }) : 'Just now'}</p>
                <p style="margin-top: 4px; margin-bottom: 0;">Automated notification from Sendlead</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Sendlead <noreply@notification.sendlead.co>',
      to: 'richard@sendlead.co',
      subject: `New Get Started Form Submission - ${contact?.name || 'Unknown'}`,
      html: emailHtml,
    })

    if (result.error) {
      console.error('Resend API error:', result.error)
      return NextResponse.json(
        { success: false, error: result.error.message || 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Notification email sent successfully:', result.data?.id)
    return NextResponse.json({ success: true, messageId: result.data?.id }, { status: 200 })
  } catch (error: any) {
    console.error('Failed to send notification email:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error?.message || 'Failed to send notification',
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      },
      { status: 500 }
    )
  }
}

