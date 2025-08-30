import HeroSectionCarFinance from "@/components/hero-section-car-finance";
import TestimonialsCarFinance from "@/components/testimonials-car-finance";
import AutomationFlowsCarFinance from "@/components/automation-flows-car-finance";
import BenefitsCarFinance from "@/components/benefits-car-finance";
import FAQSCarFinance from "@/components/faqs-car-finance";
import CTACarFinance from "@/components/cta-car-finance";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ResultsSectionCarFinance from "@/components/results-section-car-finance";
import CostComparisonCarFinance from "@/components/cost-comparison-car-finance";
import ROISectionCarFinance from "@/components/roi-section-car-finance";
import CallToAction from "@/components/call-to-action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Car Finance Lead Generation",
  description: "Get qualified car finance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading car finance brokers across the UK.",
};

export default function CarFinancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionCarFinance />
        <BenefitsCarFinance />
        <ResultsSectionCarFinance />
        <AutomationFlowsCarFinance />
        <TestimonialsCarFinance />
        <ROISectionCarFinance />
        <CostComparisonCarFinance />
        <FAQSCarFinance />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
