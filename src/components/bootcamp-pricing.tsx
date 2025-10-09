import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BootcampPricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center md:space-y-6 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Get Instant Access
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Start your journey to predictable lead generation today
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Pricing Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
              <h3 className="text-2xl font-semibold mb-2">
                7-Day Lead Generation Bootcamp
              </h3>
              <div className="mt-4">
                <span className="text-5xl font-bold">£28</span>
                <span className="text-lg ml-2">one-time</span>
              </div>
              <p className="mt-3 text-blue-100">Instant access to all materials</p>
            </div>

            {/* What's Included */}
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg mb-4">What&apos;s Included:</h4>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">7 In-Depth Video Modules</p>
                    <p className="text-sm text-muted-foreground">Step-by-step system breakdown</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Done-For-You Templates</p>
                    <p className="text-sm text-muted-foreground">Copy-paste campaign frameworks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Lead Generation Calculator</p>
                    <p className="text-sm text-muted-foreground">Forecast your ROI accurately</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Downloadable Resources</p>
                    <p className="text-sm text-muted-foreground">Checklists, worksheets, and guides</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Instant Access</p>
                    <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <Link href="https://buy.stripe.com/9B628k3ubgwS4WKd8qcbC00" target="_blank">
                  <Button 
                    className="w-full text-lg h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Enroll Now - £28
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  Secure payment powered by Stripe
                </p>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border border-green-200">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-green-900">30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

