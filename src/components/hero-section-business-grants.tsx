import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionBusinessGrants() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
              <span className="text-yellow-500">★★★★★</span>
              <span>Trusted by 50+ Business Grant Consultants</span>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              Get Qualified Business Grant Leads Delivered To Your CRM
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            We'll generate qualified business grant leads from your perfect fit prospects with proven systems. All delivered directly to your CRM.
          </p>
          
          <div className="flex justify-center">
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
