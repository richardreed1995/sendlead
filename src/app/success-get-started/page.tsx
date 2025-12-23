"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { trackEvent } from "@/components/meta-pixel-events"
import Link from "next/link"
import { ChevronDown, Calendar, MessageSquare, FileText, CheckCircle, ArrowRight, Settings, Phone, BarChart3, Mail } from "lucide-react"
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
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="py-6 border-b border-border/40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
              Thanks for Getting in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              You're one step away from receiving high-quality leads. Book a call below and we'll discuss your requirements and get you set up.
            </p>
          </div>
        </section>

        {/* Calendly Section */}
        <section className="pb-16 w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-3">Book Your Call</h2>
            <p className="text-muted-foreground">Choose a time that works for you.</p>
          </div>
          
          <div className="w-full">
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

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-2 text-sm md:text-base">
            <span className="text-muted-foreground">Prefer WhatsApp?</span>
            <Link 
              href="https://wa.me/447874467689?text=I%27m%20interested%20in%20working%20with%20Sendlead.%20Please%20can%20you%20send%20me%20some%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2998FD] hover:text-[#1f7fd9] font-medium flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Message us here
            </Link>
          </div>
        </section>

        {/* While You Wait */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium">While You Wait</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a look at our presentation to see how we work with brokers like you.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl border bg-background aspect-video w-full max-w-4xl mx-auto">
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
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">How It Works</h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Book a call",
                  desc: "We'll discuss your requirements, pricing, and answer any questions."
                },
                {
                  icon: CheckCircle,
                  title: "Start with a test order",
                  desc: "Try a small batch so you can see the lead quality firsthand."
                },
                {
                  icon: Settings,
                  title: "We build your funnel",
                  desc: "A branded, proven funnel tailored to your qualification criteria."
                },
                {
                  icon: Mail,
                  title: "CRM integration",
                  desc: "Leads delivered straight into your system with email notifications."
                },
                {
                  icon: BarChart3,
                  title: "Leads within 24 hours",
                  desc: "Once live, you'll start receiving leads the same day."
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-6 md:p-8 rounded-xl border bg-card hover:border-[#2998FD]/30 transition-colors group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#2998FD]/10 flex items-center justify-center text-[#2998FD] font-semibold text-lg group-hover:bg-[#2998FD] group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
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
                    <span className="font-medium pr-8">{faq.q}</span>
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
        </section>
      </main>
    </div>
  )
}

