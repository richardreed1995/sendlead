import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTASecuredLoans() {
  return (
    <section className="py-16 md:py-20 bg-[#2998FD] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Ready to Get Qualified Secured Loan Leads Delivered to Your CRM?
          </h2>
          <p className="text-xl text-blue-100">
            Stop competing for shared leads. Stop wasting time on unqualified prospects. Get exclusive, qualified secured loan leads delivered directly to your system.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="bg-white text-[#2998FD] hover:bg-gray-100">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
