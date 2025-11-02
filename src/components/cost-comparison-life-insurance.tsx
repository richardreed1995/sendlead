import { Button } from "@/components/ui/button";
import Link from "next/link";

const costItems = [
  { item: "Lead generation software", cost: "£1,200+", time: "100+ hours" },
  { item: "Professional landing pages", cost: "£2,500", time: "60 hours" },
  { item: "Qualification system setup", cost: "£1,000+", time: "120 hours" },
  { item: "CRM integration", cost: "£500+", time: "40 hours" },
  { item: "Campaign management", cost: "£2,000+", time: "80+ hours monthly" },
  { item: "Ad spend (minimum viable)", cost: "£3,000+", time: "Ongoing risk" }
];

export default function CostComparisonLifeInsurance() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">The Real Cost of DIY Life Insurance Lead Generation</h2>
            <p className="text-muted-foreground text-base md:text-lg">See what it actually costs to build your own lead generation system</p>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-gray-900">
              <div>What You Need</div>
              <div className="text-center">Monthly Cost</div>
              <div className="text-center">Setup Time</div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {costItems.map((costItem, index) => (
                <div key={index} className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-700">{costItem.item}</div>
                  <div className="text-center font-medium text-gray-900">{costItem.cost}</div>
                  <div className="text-center text-gray-600">{costItem.time}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center bg-green-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Total: £10,200+ monthly plus 400+ hours of work</h3>
          </div>

          <div className="text-center">
            <Link href="/get-started">
              <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
