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
    
    const { leadType, numLeads, customMetrics, roiResults, contact, completedAt } = data

    // Format lead type: "business-loans" -> "Business Loans"
    const formatLeadType = (type: string | null) => {
      if (!type) return 'Not specified'
      return type
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    // Format currency
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0
      }).format(amount)
    }

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
            .highlight-box {
              background-color: #f5f5f5;
              border: 1px solid #e0e0e0;
              border-radius: 6px;
              padding: 12px;
              margin-top: 8px;
            }
            .highlight-value {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a1a;
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
              <h1>ROI Calculator Completed</h1>
            </div>
            <div class="content">
              <p class="intro">A potential partner has completed the ROI calculator and viewed their results.</p>
              
              <div class="section">
                <h2 class="section-title">Lead Requirements</h2>
                <table class="two-column" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td class="column" style="width: 50%; padding-right: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Type of Leads</span>
                        <div class="value">${formatLeadType(leadType)}</div>
                      </div>
                    </td>
                    <td class="column" style="width: 50%; padding-left: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Leads Per Month</span>
                        <div class="value">${numLeads || 'Not specified'}</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="section">
                <h2 class="section-title">Their Business Metrics</h2>
                <table class="two-column" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td class="column" style="width: 50%; padding-right: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Conversion Rate</span>
                        <div class="value">${customMetrics?.conversionRate || 0}%</div>
                      </div>
                      <div class="field">
                        <span class="label">Commission Rate</span>
                        <div class="value">${customMetrics?.commissionRate || 0}%</div>
                      </div>
                    </td>
                    <td class="column" style="width: 50%; padding-left: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Average Deal Value</span>
                        <div class="value">${formatCurrency(customMetrics?.avgDealValue || 0)}</div>
                      </div>
                      <div class="field">
                        <span class="label">Repeat Business Rate</span>
                        <div class="value">${customMetrics?.repeatBusinessRate || 0}%</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="section">
                <h2 class="section-title">ROI Results Shown</h2>
                <div class="highlight-box">
                  <table class="two-column" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="column" style="width: 50%; padding-right: 12px; vertical-align: top;">
                        <div class="field">
                          <span class="label">Monthly Investment</span>
                          <div class="value">${formatCurrency(roiResults?.totalInvestment || 0)}</div>
                        </div>
                        <div class="field">
                          <span class="label">Immediate ROI</span>
                          <div class="highlight-value">${(roiResults?.immediateROI || 0).toFixed(1)}%</div>
                        </div>
                      </td>
                      <td class="column" style="width: 50%; padding-left: 12px; vertical-align: top;">
                        <div class="field">
                          <span class="label">Expected Conversions</span>
                          <div class="value">${roiResults?.leadsConverted || 0} clients/month</div>
                        </div>
                        <div class="field">
                          <span class="label">Lifetime ROI</span>
                          <div class="highlight-value">${(roiResults?.lifetimeROI || 0).toFixed(1)}%</div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
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
                    </td>
                    <td class="column" style="width: 50%; padding-left: 12px; vertical-align: top;">
                      <div class="field">
                        <span class="label">Email</span>
                        <div class="value"><a href="mailto:${contact?.email || ''}">${contact?.email || 'Not provided'}</a></div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="footer">
                <p class="timestamp" style="margin: 0;"><strong>Submitted:</strong> ${completedAt ? new Date(completedAt).toLocaleString('en-GB', { timeZone: 'Europe/London' }) : 'Just now'}</p>
                <p style="margin-top: 4px; margin-bottom: 0;">Automated notification from Sendlead ROI Calculator</p>
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
      subject: `ROI Calculator Completed - ${contact?.name || 'Unknown'} (${formatLeadType(leadType)})`,
      html: emailHtml,
    })

    if (result.error) {
      console.error('Resend API error:', result.error)
      return NextResponse.json(
        { success: false, error: result.error.message || 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('ROI quiz notification email sent successfully:', result.data?.id)
    return NextResponse.json({ success: true, messageId: result.data?.id }, { status: 200 })
  } catch (error: any) {
    console.error('Failed to send ROI quiz notification email:', error)
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



