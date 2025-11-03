import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSectionBusinessLoans() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
              <span className="text-yellow-500">★★★★★</span>
              <span>Trusted by Leading Business Loan Brokers</span>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              Get Qualified Business Loan Leads<br />Delivered To Your CRM
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            Grow your business with qualified business loan leads delivered in real-time at a fixed cost.
          </p>
          
          {/* CTA Button - Desktop Above Image */}
          <div className="hidden md:flex justify-center mb-8">
            <Link href="/get-started">
              <Button size="lg" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Dashboard Image - Mobile and Desktop */}
          <div className="relative mx-auto max-w-4xl mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <Image
                className="w-full h-auto rounded-xl object-cover object-left-top"
                src="/Dashboard1.jpg"
                alt="Sendlead dashboard screenshot showing business loan leads"
                width={1200}
                height={750}
                priority
              />
            </div>
          </div>
          
          {/* CTA Button - Mobile Below Image */}
          <div className="md:hidden flex justify-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
