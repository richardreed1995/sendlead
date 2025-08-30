import { Button } from "@/components/ui/button";
import Link from "next/link";

const results = [
  {
    title: "Independent Secured Loan Broker",
    subtitle: "£850K Funded In 90 Days",
    description: "Generated £850k in secured loan approvals in 90 days using our lead system. Went from purely referral-based to systematic, predictable lead generation that scales."
  },
  {
    title: "Multi-Lender Secured Finance Firm",
    subtitle: "140 Qualified Leads Monthly",
    description: "Closed £2.8M in secured loans within 6 months from 140 qualified leads we delivered. No competition for leads, no shared prospects, just exclusive opportunities."
  },
  {
    title: "Property Secured Loan Specialist",
    subtitle: "298% Revenue Increase",
    description: "Scaled from £42k to £167k monthly revenue in 4 months by targeting property owners needing secured finance. Our targeting found the right prospects immediately."
  },
  {
    title: "Asset Secured Loan Broker",
    subtitle: "187% Revenue Increase",
    description: "Increased monthly revenue from £38k to £109k in 4 months working exclusively with qualified asset owners we delivered. No cold calling required."
  }
];

export default function ResultsSectionSecuredLoans() {
  return (
    <section className="py-16 md:py-20 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Secured Loan Lead Results</h2>
          <p className="text-zinc-300 text-lg">Here's what our secured loan brokers actually achieve</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">{result.title}</h3>
                <p className="text-base font-semibold text-zinc-300 tracking-wide">{result.subtitle}</p>
                <hr className="border-t border-zinc-700 w-full" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/get-started">
            <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
