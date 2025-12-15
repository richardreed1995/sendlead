"use client"

import { useEffect, useState } from "react"
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
    <div className="min-h-screen bg-white flex flex-col">
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
          <h1 className="text-3xl font-black text-gray-900 mb-4">Application Submitted Successfully!</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for your interest in Sendlead. We've received your application and will be in touch within 24 hours to discuss your specific needs and next steps.
          </p>
          <p className="text-gray-500 text-sm mb-12">
            You'll receive a confirmation email shortly. If you have any immediate questions, please don't hesitate to reach out.
          </p>

          {/* Google Slides Embed */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Review our presentation</h2>
            <div className="flex justify-center">
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vQWhEL2ygPv69B7JCeyCW2enghcT7iN7ICFeWD5Bf7ZPnHIOuhN3an8nyVvprNfClbgOtyxjJWzQqkq/pubembed?start=false&loop=false&delayms=3000" 
                frameBorder="0" 
                width="1200" 
                height="500" 
                allowFullScreen={true}
                className="max-w-full rounded-lg shadow-lg"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review the presentation above</h3>
                  <p className="text-gray-600">Please review the presentation above to understand our process, then we'll book in for a call to meet and discuss pricing & terms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Agree to a test order</h3>
                  <p className="text-gray-600">We'll agree on a test order so you can see the quality of leads we generate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We'll create a branded funnel</h3>
                  <p className="text-gray-600">We'll adapt one of our proven funnels with your branding and qualification points</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We'll integrate with your CRM</h3>
                  <p className="text-gray-600">We'll integrate the funnel with your CRM and setup email notifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">You'll start receiving leads</h3>
                  <p className="text-gray-600">You'll start receiving leads within 24hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                >
                  <h3 className="font-medium text-gray-900 pr-4">Do You Do Revenue Share?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 0 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">No, we do not do pure revenue share agreements under any circumstances. There are options of a hybrid model with a lower cost per lead and lower percentage of revenue share after several orders are completed and a good working relationship is established.</p>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                >
                  <h3 className="font-medium text-gray-900 pr-4">How Are These Leads Generated?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 1 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">We generate over 99% of our leads through paid advertising using Meta (Facebook and Instagram). We drive traffic, send it to a landing page with an application form, and then sync the form to your CRM.</p>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                >
                  <h3 className="font-medium text-gray-900 pr-4">Are you compliant with data privacy regulations?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 2 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">Absolutely. We're fully compliant with UK GDPR, ICO guidelines, and industry-specific regulations. All prospects explicitly consent to contact from your business, and we maintain comprehensive data protection and privacy policies.</p>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                >
                  <h3 className="font-medium text-gray-900 pr-4">How do I know the leads will be high quality?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 3 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">Quality is our primary differentiator. Our BANT qualification system with OTP verification ensures every lead meets strict criteria. We offer a 100% replacement guarantee for any lead that doesn't meet our quality standards, and our data shows 85% connect rates within 24 hours.</p>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                >
                  <h3 className="font-medium text-gray-900 pr-4">Why is your cost-per-lead higher than some other providers?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 4 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">Rather than comparing cost per lead, consider cost per acquisition. Our leads convert at 2-3x the rate of typical lead sources due to exclusive access and rigorous qualification. This makes your effective cost per customer actually lower despite the higher per-lead investment.</p>
                  </div>
                )}
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                >
                  <h3 className="font-medium text-gray-900 pr-4">We've tried lead generation before and it didn't work - why would this be different?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 5 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">Previous poor experiences are common with low-quality, shared leads. Our approach is fundamentally different: exclusive leads, BANT qualification, OTP verification, and pre-warming through nurture sequences. We offer a small trial batch specifically for businesses with previous bad experiences - let the results speak for themselves.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 