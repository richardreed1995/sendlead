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
    
    const { email } = data

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required' },
        { status: 400 }
      )
    }

    // Sample A-tier lead data
    const sampleLead = {
      tier: 'A',
      score: 168,
      name: 'James Wilson',
      email: 'james.wilson@techsolutions.co.uk',
      phone: '07700 900XXX',
      businessName: 'Tech Solutions Ltd',
      tradingHistory: '3+ years',
      monthlyTurnover: '£75,000',
      loanAmount: '£50,000 - £100,000',
      purpose: 'Business Expansion',
      creditProfile: 'Excellent (750+)',
      cardPayments: 'Yes, majority of sales',
      homeowner: 'Yes, with mortgage',
      urgency: 'ASAP',
      businessType: 'Limited Company',
      previousFunding: 'Yes, fully repaid'
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
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
              color: #ffffff; 
              padding: 24px;
              text-align: center;
            }
            .header h1 {
              margin: 0 0 8px 0;
              font-size: 22px;
              font-weight: 700;
            }
            .header .subtitle {
              margin: 0;
              font-size: 14px;
              opacity: 0.9;
            }
            .tier-badge {
              display: inline-block;
              background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
              color: white;
              padding: 8px 20px;
              border-radius: 20px;
              font-weight: 700;
              font-size: 16px;
              margin-top: 12px;
            }
            .content { 
              padding: 24px; 
              background-color: #ffffff;
            }
            .score-box {
              background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
              border: 2px solid #16a34a;
              border-radius: 12px;
              padding: 16px;
              text-align: center;
              margin-bottom: 24px;
            }
            .score-label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #166534;
              margin-bottom: 4px;
            }
            .score-value {
              font-size: 32px;
              font-weight: 700;
              color: #166534;
            }
            .score-max {
              font-size: 16px;
              color: #16a34a;
            }
            .section { 
              margin-top: 20px; 
              padding-top: 20px; 
              border-top: 1px solid #e5e7eb;
            }
            .section:first-of-type {
              margin-top: 0;
              padding-top: 0;
              border-top: none;
            }
            .section-title {
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              color: #2563eb;
              margin: 0 0 12px 0;
            }
            .info-grid {
              display: grid;
              gap: 12px;
            }
            .info-row {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #f3f4f6;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            .info-label {
              color: #6b7280;
              font-size: 13px;
            }
            .info-value {
              color: #111827;
              font-weight: 600;
              font-size: 13px;
              text-align: right;
            }
            .contact-box {
              background: #f8fafc;
              border-radius: 8px;
              padding: 16px;
              margin-top: 20px;
            }
            .contact-item {
              display: flex;
              align-items: center;
              margin-bottom: 12px;
            }
            .contact-item:last-child {
              margin-bottom: 0;
            }
            .contact-icon {
              width: 36px;
              height: 36px;
              background: #2563eb;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 12px;
            }
            .contact-details {
              flex: 1;
            }
            .contact-label {
              font-size: 11px;
              text-transform: uppercase;
              color: #6b7280;
              letter-spacing: 0.5px;
            }
            .contact-value {
              font-weight: 600;
              color: #111827;
              font-size: 14px;
            }
            .contact-value a {
              color: #2563eb;
              text-decoration: none;
            }
            .cta-section {
              background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
              border-radius: 8px;
              padding: 20px;
              text-align: center;
              margin-top: 24px;
            }
            .cta-title {
              font-weight: 700;
              color: #1e40af;
              margin: 0 0 8px 0;
              font-size: 16px;
            }
            .cta-text {
              color: #3b82f6;
              font-size: 13px;
              margin: 0;
            }
            .footer { 
              padding: 16px 24px;
              background: #f9fafb;
              border-top: 1px solid #e5e7eb; 
              font-size: 11px; 
              color: #9ca3af;
              text-align: center;
            }
            .demo-banner {
              background: #fef3c7;
              border: 1px solid #f59e0b;
              border-radius: 8px;
              padding: 12px 16px;
              margin-bottom: 20px;
              text-align: center;
            }
            .demo-banner-text {
              color: #92400e;
              font-size: 13px;
              font-weight: 600;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔥 New A-Tier Lead</h1>
              <p class="subtitle">Business Loan Enquiry</p>
              <div class="tier-badge">⭐ TIER A - High Priority</div>
            </div>
            
            <div class="content">
              <div class="demo-banner">
                <p class="demo-banner-text">📋 This is a sample lead notification from Sendlead</p>
              </div>

              <div class="score-box">
                <div class="score-label">Qualification Score</div>
                <div class="score-value">${sampleLead.score}<span class="score-max">/200</span></div>
              </div>

              <div class="section">
                <h2 class="section-title">📞 Contact Information</h2>
                <div class="contact-box">
                  <div class="contact-item">
                    <div class="contact-icon">
                      <span style="color: white;">👤</span>
                    </div>
                    <div class="contact-details">
                      <div class="contact-label">Name</div>
                      <div class="contact-value">${sampleLead.name}</div>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="contact-icon">
                      <span style="color: white;">📧</span>
                    </div>
                    <div class="contact-details">
                      <div class="contact-label">Email</div>
                      <div class="contact-value"><a href="mailto:${sampleLead.email}">${sampleLead.email}</a></div>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="contact-icon">
                      <span style="color: white;">📱</span>
                    </div>
                    <div class="contact-details">
                      <div class="contact-label">Phone</div>
                      <div class="contact-value"><a href="tel:${sampleLead.phone}">${sampleLead.phone}</a></div>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="contact-icon">
                      <span style="color: white;">🏢</span>
                    </div>
                    <div class="contact-details">
                      <div class="contact-label">Business</div>
                      <div class="contact-value">${sampleLead.businessName}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="section">
                <h2 class="section-title">💰 Funding Requirements</h2>
                <div class="info-grid">
                  <div class="info-row">
                    <span class="info-label">Loan Amount</span>
                    <span class="info-value">${sampleLead.loanAmount}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Purpose</span>
                    <span class="info-value">${sampleLead.purpose}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Urgency</span>
                    <span class="info-value">🚨 ${sampleLead.urgency}</span>
                  </div>
                </div>
              </div>

              <div class="section">
                <h2 class="section-title">📊 Business Profile</h2>
                <div class="info-grid">
                  <div class="info-row">
                    <span class="info-label">Trading History</span>
                    <span class="info-value">${sampleLead.tradingHistory}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Monthly Turnover</span>
                    <span class="info-value">${sampleLead.monthlyTurnover}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Business Type</span>
                    <span class="info-value">${sampleLead.businessType}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Card Payments</span>
                    <span class="info-value">${sampleLead.cardPayments}</span>
                  </div>
                </div>
              </div>

              <div class="section">
                <h2 class="section-title">✅ Qualification Details</h2>
                <div class="info-grid">
                  <div class="info-row">
                    <span class="info-label">Credit Profile</span>
                    <span class="info-value">${sampleLead.creditProfile}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Homeowner Status</span>
                    <span class="info-value">${sampleLead.homeowner}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Previous Funding</span>
                    <span class="info-value">${sampleLead.previousFunding}</span>
                  </div>
                </div>
              </div>

              <div class="cta-section">
                <h3 class="cta-title">⚡ Act Fast!</h3>
                <p class="cta-text">This lead is marked as high urgency. Contact within 5 minutes for best results.</p>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 0;">This is a sample notification from Sendlead Sales Room</p>
              <p style="margin: 8px 0 0 0;">To start receiving real leads, contact us at sales@sendlead.io</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Sendlead <noreply@notification.sendlead.co>',
      to: email,
      subject: '🔥 Sample Lead: A-Tier Business Loan - £50,000-£100,000',
      html: emailHtml,
    })

    if (result.error) {
      console.error('Resend API error:', result.error)
      return NextResponse.json(
        { success: false, error: result.error.message || 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Sample lead email sent successfully:', result.data?.id)
    return NextResponse.json({ success: true, messageId: result.data?.id }, { status: 200 })
  } catch (error: unknown) {
    console.error('Failed to send sample lead email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send notification'
    const errorStack = error instanceof Error ? error.stack : undefined
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    )
  }
}






