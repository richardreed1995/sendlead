import HeroSectionLifeInsurance from "@/components/hero-section-life-insurance";
import TestimonialsLifeInsurance from "@/components/testimonials-life-insurance";
import AutomationFlowsLifeInsurance from "@/components/automation-flows-life-insurance";
import BenefitsLifeInsurance from "@/components/benefits-life-insurance";
import FAQSLifeInsurance from "@/components/faqs-life-insurance";
import CTALifeInsurance from "@/components/cta-life-insurance";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ResultsSectionLifeInsurance from "@/components/results-section-life-insurance";
import CostComparisonLifeInsurance from "@/components/cost-comparison-life-insurance";
import FinalCTALifeInsurance from "@/components/final-cta-life-insurance";
import ROISectionLifeInsurance from "@/components/roi-section-life-insurance";
import CallToAction from "@/components/call-to-action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Life Insurance Lead Generation",
  description: "Get qualified life insurance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading life insurance brokers across the UK.",
};

export default function LifeInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionLifeInsurance />
        <AutomationFlowsLifeInsurance />
        <ResultsSectionLifeInsurance />
        <BenefitsLifeInsurance />
        <TestimonialsLifeInsurance />
        <ROISectionLifeInsurance />
        <CostComparisonLifeInsurance />
        <FAQSLifeInsurance />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
