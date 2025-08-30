import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTACarFinance() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Ready to Get Qualified Car Finance Leads Delivered to Your CRM?
          </h2>
          <p className="text-xl text-gray-600">
            Stop competing for shared leads. Stop wasting time on unqualified prospects. Get exclusive, qualified car finance leads delivered directly to your system.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
