import Features from "@/components/features-4";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BenefitsPropertyInvestment() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Features />
        
        <div className="text-center mt-12">
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
