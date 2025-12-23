"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { trackEvent } from "@/components/meta-pixel-events"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function SuccessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    // Track successful application submission
    trackEvent("SubmitApplication")
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
        <section className="py-8 md:py-16 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <h1 className="text-balance text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
              Thanks for booking a call
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I have sent you a confirmation of our call to the email you booked the call with. Please accept and check you can see the call on your calendar.
            </p>
          </div>
        </section>

        {/* While You Wait */}
        <section className="py-10 md:py-24 bg-muted/30">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-4xl font-medium">While You Wait</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Review this presentation. It will give you more information on Sendlead, our process, and how we can work together.
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

        {/* Common Questions / What to Expect (Replaces How It Works) */}
        <section className="py-10 md:py-24 bg-background">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-medium text-foreground">How many new customers can I expect from the leads?</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  The exact number depends on your vertical and how effectively you follow up, but our partners typically see conversion rates between 10-30%. Even at the lower end, the return on investment is significant. If you're receiving consistent, qualified leads and converting just one in ten, that's a steady stream of new customers you wouldn't have had otherwise. Combine that with a solid follow-up process and timely outreach, and those numbers climb quickly. The leads are there; your results scale with how well you work them.
                </p>
              </div>
              
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-medium text-foreground">How likely am I to achieve this?</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Every lead we deliver has been through a rigorous qualification process before it reaches you. We verify key criteria, filter out tyre-kickers, and only pass through prospects who genuinely match what you're looking for. Crucially, leads are delivered in real time and are completely exclusive to you, so you're not competing with other providers chasing the same prospect. Our partners consistently report strong conversion rates because they're speaking to fresh, qualified leads with genuine intent, not recycled data that's been sold multiple times. We're invested in your success too. The better you perform, the longer we work together, so quality isn't just a promise, it's how we operate.
                </p>
              </div>

              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-medium text-foreground">How long does it take?</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Most partners receive their first lead within 7 days of purchasing a lead package. We use that time to get everything set up properly, including configuring your account on our lead distribution platform, building you a branded matching page, and creating a bespoke email nurture sequence tailored to your business. Once that's in place, leads start flowing and you're ready to go.
                </p>
              </div>

              <div className="space-y-2 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-medium text-foreground">How much do I need to do?</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Very little beyond what you already do best, which is having conversations and closing deals. We handle the advertising, the targeting, the qualification, and the delivery. Leads arrive directly to you, ready to be contacted. Your job is simply to pick up the phone, build rapport, and convert. No marketing expertise required, no ad spend to manage, no guesswork. Just qualified opportunities, delivered consistently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10 md:py-24 bg-muted/30">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl font-medium text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3 md:space-y-4">
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
                    className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-8 text-sm md:text-base">{faq.q}</span>
                    <ChevronDown 
                      className={`w-4 h-4 md:w-5 md:h-5 text-muted-foreground transition-transform duration-200 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-96 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{faq.a}</p>
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
