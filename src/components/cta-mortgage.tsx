import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTAMortgage() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-white">Ready to Get Qualified Mortgage Leads Delivered to Your CRM?</h2>
          <p className="text-muted-foreground text-base md:text-lg text-white">
            Stop competing for shared leads. Stop wasting time on unqualified prospects. Get exclusive, qualified mortgage leads delivered directly to your system.
          </p>
        </div>
        <div className="mt-12">
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
