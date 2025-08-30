import HeroSectionMortgage from "@/components/hero-section-mortgage";
import TestimonialsMortgage from "@/components/testimonials-mortgage";
import AutomationFlowsMortgage from "@/components/automation-flows-mortgage";
import BenefitsMortgage from "@/components/benefits-mortgage";
import FAQsMortgage from "@/components/faqs-mortgage";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ResultsSectionMortgage from "@/components/results-section-mortgage";
import CostComparisonMortgage from "@/components/cost-comparison-mortgage";
import ROISectionMortgage from "@/components/roi-section-mortgage";
import CallToAction from "@/components/call-to-action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Mortgage Lead Generation",
  description: "Get qualified mortgage leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading mortgage brokers across the UK.",
};

export default function MortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionMortgage />
        <BenefitsMortgage />
        <ResultsSectionMortgage />
        <AutomationFlowsMortgage />
        <TestimonialsMortgage />
        <ROISectionMortgage />
        <CostComparisonMortgage />
        <FAQsMortgage />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
