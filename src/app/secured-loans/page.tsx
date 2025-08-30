import HeroSectionSecuredLoans from "@/components/hero-section-secured-loans";
import TestimonialsSecuredLoans from "@/components/testimonials-secured-loans";
import AutomationFlowsSecuredLoans from "@/components/automation-flows-secured-loans";
import BenefitsSecuredLoans from "@/components/benefits-secured-loans";
import FAQSSecuredLoans from "@/components/faqs-secured-loans";
import CTASecuredLoans from "@/components/cta-secured-loans";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ResultsSectionSecuredLoans from "@/components/results-section-secured-loans";
import CostComparisonSecuredLoans from "@/components/cost-comparison-secured-loans";
import FinalCTASecuredLoans from "@/components/final-cta-secured-loans";
import ROISectionSecuredLoans from "@/components/roi-section-secured-loans";
import CallToAction from "@/components/call-to-action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Secured Loan Lead Generation",
  description: "Get qualified secured loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading secured loan brokers across the UK.",
};

export default function SecuredLoansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionSecuredLoans />
        <BenefitsSecuredLoans />
        <ResultsSectionSecuredLoans />
        <AutomationFlowsSecuredLoans />
        <TestimonialsSecuredLoans />
        <ROISectionSecuredLoans />
        <CostComparisonSecuredLoans />
        <FAQSSecuredLoans />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
