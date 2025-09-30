import LeadROICalculator from '@/components/LeadROICalculator';
import { HeroHeader } from '@/components/header';
import Footer from '@/components/footer';
import CallToAction from '@/components/call-to-action';
import ROIHeroSection from '@/components/roi-hero-section';
import { Logo } from '@/components/logo';
import CompetitiveAdvantages from '@/components/competitive-advantages';
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
                <p><strong>Cost per Lead:</strong> You can adjust this value to match your actual lead costs. Our standard pricing for exclusive, qualified, phone and email verified leads starts at £100 per lead.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Competitive Advantages Section */}
        <CompetitiveAdvantages />

        {/* CTA Section */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
