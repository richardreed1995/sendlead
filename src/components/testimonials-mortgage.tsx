import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestimonialsMortgage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What Our Mortgage Partners Say</h2>
          <p className="text-muted-foreground text-base md:text-lg">Real feedback from mortgage brokers who've transformed their businesses</p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-12">
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "Sendlead transformed our mortgage business completely. We were stuck competing for scraps from the big lead companies, now we get exclusive prospects who actually want to speak with us. Revenue doubled in four months."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">David Reynolds</p>
                <p className="text-sm text-gray-500">Managing Director, Elite Mortgage Group</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "Finally found a lead company that understands mortgage brokers. No more chasing dead leads or fighting five other brokers for the same client. The qualification process actually works."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Emma Watson</p>
                <p className="text-sm text-gray-500">Principal, Watson Financial Services</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "Been in mortgages for 15 years and tried every lead source going. Sendlead is the only one that consistently delivers quality prospects. Our conversion rate went from 8% to 23%."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Robert Chen</p>
                <p className="text-sm text-gray-500">Partner, Chen & Partners Mortgage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
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
