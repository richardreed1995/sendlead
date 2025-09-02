import LeadROICalculator from '@/components/LeadROICalculator';
import { HeroHeader } from '@/components/header';
import Footer from '@/components/footer';
import CallToAction from '@/components/call-to-action';
import ROIHeroSection from '@/components/roi-hero-section';
import { Logo } from '@/components/logo';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | ROI Calculator",
  description: "Calculate your return on investment for qualified leads. See exactly how much profit you can generate from our exclusive, phone-verified leads.",
};

export default function ROIPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <ROIHeroSection />

        {/* Calculator Section */}
        <section id="roi-calculator" className="py-20 md:py-24 bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LeadROICalculator />
          </div>
        </section>

        {/* Calculator Explanation */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">How the ROI Calculation Works</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground text-base">Input Definitions:</p>
                <p><strong>Number of Leads:</strong> The total quantity of leads you plan to purchase from us.</p>
                <p><strong>Conversion Rate (%):</strong> The percentage of leads that convert into paying customers (typically 10-25% depending on your industry and sales process).</p>
                <p><strong>Average Deal Value (£):</strong> The average monetary value of each successful conversion or sale.</p>
                <p><strong>Commission Rate / Margin (%):</strong> Your profit margin or commission percentage on each deal (e.g., 1-10% depending on your business model).</p>
                <p><strong>Repeat Business (%):</strong> The percentage of customers who return for additional services or products.</p>
                <p><strong>Referrals Per Client:</strong> The average number of new customers each client refers to your business.</p>
                <p className="font-semibold text-foreground text-base">Calculation Methodology:</p>
                <p><strong>Immediate ROI (90 Days):</strong> Based on your conversion rate, we calculate how many leads will convert within the first 90 days. This gives you the immediate return on your lead investment.</p>
                <p><strong>Repeat Customers Drive Profit:</strong> The cost to acquire the customer is paid only once. Any repeat business is huge margin - this is where the real profit lies.</p>
                <p><strong>No Revenue Share:</strong> You are not paying us revenue share. You are buying the leads once and keeping all future revenue from each customer.</p>
                <p><strong>Cost per Lead:</strong> All calculations are based on £100 per lead - our standard pricing for exclusive, qualified, phone and email verified leads.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Competitive Advantages Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto max-w-6xl space-y-8">
              <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                <h2 className="text-balance text-4xl font-medium lg:text-5xl">Competitive Advantages</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  See how Sendlead compares to other lead providers
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {/* Column Headers */}
                  <div className="bg-zinc-800 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                    <h3 className="text-lg font-semibold text-white text-center">Feature</h3>
                  </div>
                  <div className="bg-zinc-800 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex justify-center">
                      <img src="/logo-white.png" alt="Sendlead" className="h-8 w-auto" />
                    </div>
                  </div>
                  <div className="bg-zinc-800 p-4">
                    <h3 className="text-lg font-semibold text-white text-center">Other Providers</h3>
                  </div>
                </div>
                
                {/* Comparison Rows */}
                <div className="divide-y divide-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 flex items-center justify-center">
                      <h4 className="font-medium text-foreground">Lead Exclusivity</h4>
                    </div>
                    <div className="p-4 bg-green-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        <span className="text-sm text-foreground">100% exclusive leads</span>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-bold text-sm">✗</span>
                        <span className="text-sm text-muted-foreground">Shared leads</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 flex items-center justify-center">
                      <h4 className="font-medium text-foreground">Lead Qualification</h4>
                    </div>
                    <div className="p-4 bg-green-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        <span className="text-sm text-foreground">AI powered qualification</span>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-bold text-sm">✗</span>
                        <span className="text-sm text-muted-foreground">Manual qualification</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 flex items-center justify-center">
                      <h4 className="font-medium text-foreground">Delivery Speed</h4>
                    </div>
                    <div className="p-4 bg-green-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        <span className="text-sm text-foreground">Real time delivery</span>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-bold text-sm">✗</span>
                        <span className="text-sm text-muted-foreground">Batch delivery</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 flex items-center justify-center">
                      <h4 className="font-medium text-foreground">Sector Expertise</h4>
                    </div>
                    <div className="p-4 bg-green-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        <span className="text-sm text-foreground">Multi sector expertise</span>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-bold text-sm">✗</span>
                        <span className="text-sm text-muted-foreground">Limited sector focus</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 flex items-center justify-center">
                      <h4 className="font-medium text-foreground">Pricing Structure</h4>
                    </div>
                    <div className="p-4 bg-green-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        <span className="text-sm text-foreground">Transparent pricing</span>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-bold text-sm">✗</span>
                        <span className="text-sm text-muted-foreground">Hidden fees</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 flex items-center justify-center">
                      <h4 className="font-medium text-foreground">Performance</h4>
                    </div>
                    <div className="p-4 bg-green-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        <span className="text-sm text-foreground">Proven results</span>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-bold text-sm">✗</span>
                        <span className="text-sm text-muted-foreground">Inconsistent results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
