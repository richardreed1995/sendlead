import { Button } from "@/components/ui/button";
import Link from "next/link";

const results = [
  {
    title: "Independent Mortgage Broker",
    subtitle: "£900K Pipeline In 90 Days",
    description: "Generated a £900k pipeline in 90 days using our lead system. Went from purely referral-based to systematic, predictable lead generation that scales."
  },
  {
    title: "Mortgage Brokerage Firm",
    subtitle: "180 Qualified Leads Monthly",
    description: "Closed £2.4M in mortgages within 6 months from 180 qualified leads we delivered. No competition for leads, no shared prospects, just exclusive opportunities."
  },
  {
    title: "Remortgage Specialist",
    subtitle: "334% Revenue Increase",
    description: "Scaled from £65k to £280k monthly revenue in 4 months by targeting homeowners trapped in high-rate mortgages. Our targeting found the right prospects immediately."
  },
  {
    title: "Commercial Mortgage Broker",
    subtitle: "214% Revenue Increase",
    description: "Increased monthly revenue from £35k to £110k in 4 months working exclusively with qualified property investors we delivered. No cold calling required."
  }
];

export default function ResultsSectionMortgage() {
  return (
    <section className="py-16 md:py-20 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Mortgage Lead Results</h2>
          <p className="text-zinc-300 text-lg">Here's what our mortgage brokers actually achieve</p>
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
