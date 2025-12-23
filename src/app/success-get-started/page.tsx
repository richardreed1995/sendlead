"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { trackEvent } from "@/components/meta-pixel-events"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessGetStartedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Track successful application submission
    trackEvent("SubmitApplication")

    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        trackEvent("Schedule")
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col text-foreground font-sans">
      {/* Logo */}
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>

      <div className="text-center py-8 px-4 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">Application Submitted Successfully!</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Thank you for your interest in Sendlead. We've received your application and will be in touch within 24 hours to discuss your specific needs and next steps.
          </p>
          <p className="text-muted-foreground text-sm mb-12">
            You'll receive a confirmation email shortly. If you have any immediate questions, please don't hesitate to reach out.
          </p>

          {/* Google Slides Embed */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">Step 1: Review our presentation</h2>
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl border bg-background aspect-video w-full max-w-4xl">
                <iframe 
                  src="https://docs.google.com/presentation/d/e/2PACX-1vT0iytBEzOi-IAyZ7w4OhexIDvX4g45yrD-SYEeZeHrPEuGV5iXmRMzN3wnW9gVPkxN2wLGwMT9udo1/pubembed?start=false&loop=false&delayms=3000" 
                  frameBorder="0" 
                  width="1200" 
                  height="500" 
                  allowFullScreen={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Booking - Full Width */}
        <section className="w-full py-12 sm:py-16 bg-muted/30 mb-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">Step 2: Book a call</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Choose how you'd like to connect with us
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
                <Link 
                  href="https://wa.me/447874467689?text=I%27m%20interested%20in%20working%20with%20Sendlead.%20Please%20can%20you%20send%20me%20some%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full px-8 py-8 sm:px-10 sm:py-7 flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Message on WhatsApp
                  </Button>
                </Link>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  or book a call below
                </p>
              </div>
            </div>
            
            <div className="calendly-inline-widget w-full" 
                 data-url={isMobile 
                   ? "https://calendly.com/richard-sendlead/sendlead-intro?hide_event_type_details=1&hide_gdpr_banner=1"
                   : "https://calendly.com/richard-sendlead/sendlead-intro?hide_gdpr_banner=1"
                 } 
                 style={{
                   minWidth: '320px', 
                   height: '700px',
                   width: '100%'
                 }}>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2998FD] text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Review the presentation above</h3>
                  <p className="text-muted-foreground">Please review the presentation above to understand our process, then we'll book in for a call to meet and discuss pricing & terms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2998FD] text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Agree to a test order</h3>
                  <p className="text-muted-foreground">We'll agree on a test order so you can see the quality of leads we generate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2998FD] text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">We'll create a branded funnel</h3>
                  <p className="text-muted-foreground">We'll adapt one of our proven funnels with your branding and qualification points</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2998FD] text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">We'll integrate with your CRM</h3>
                  <p className="text-muted-foreground">We'll integrate the funnel with your CRM and setup email notifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2998FD] text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">You'll start receiving leads</h3>
                  <p className="text-muted-foreground">You'll start receiving leads within 24hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  q: "Do You Do Revenue Share?",
                  a: "No, we do not do pure revenue share agreements under any circumstances. There are options of a hybrid model with a lower cost per lead and lower percentage of revenue share after several orders are completed and a good working relationship is established."
                },
                {
                  q: "How Are These Leads Generated?",
                  a: "We generate over 99% of our leads through paid advertising using Meta (Facebook and Instagram). We drive traffic, send it to a landing page with an application form, and then sync the form to your CRM."
                },
                {
                  q: "Are you compliant with data privacy regulations?",
                  a: "Absolutely. We're fully compliant with UK GDPR, ICO guidelines, and industry-specific regulations. All prospects explicitly consent to contact from your business, and we maintain comprehensive data protection and privacy policies."
                },
                {
                  q: "How do I know the leads will be high quality?",
                  a: "Quality is our primary differentiator. Our BANT qualification system with OTP verification ensures every lead meets strict criteria. We offer a 100% replacement guarantee for any lead that doesn't meet our quality standards, and our data shows 85% connect rates within 24 hours."
                },
                {
                  q: "Why is your cost-per-lead higher than some other providers?",
                  a: "Rather than comparing cost per lead, consider cost per acquisition. Our leads convert at 2-3x the rate of typical lead sources due to exclusive access and rigorous qualification. This makes your effective cost per customer actually lower despite the higher per-lead investment."
                },
                {
                  q: "We've tried lead generation before and it didn't work - why would this be different?",
                  a: "Previous poor experiences are common with low-quality, shared leads. Our approach is fundamentally different: exclusive leads, BANT qualification, OTP verification, and pre-warming through nurture sequences. We offer a small trial batch specifically for businesses with previous bad experiences - let the results speak for themselves."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-background rounded-lg border overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-8 text-foreground">{faq.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
