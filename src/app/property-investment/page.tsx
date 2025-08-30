import HeroSectionPropertyInvestment from "@/components/hero-section-property-investment";
import TestimonialsPropertyInvestment from "@/components/testimonials-property-investment";
import AutomationFlowsPropertyInvestment from "@/components/automation-flows-property-investment";
import BenefitsPropertyInvestment from "@/components/benefits-property-investment";
import FAQSPropertyInvestment from "@/components/faqs-property-investment";
import CTAPropertyInvestment from "@/components/cta-property-investment";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ResultsSectionPropertyInvestment from "@/components/results-section-property-investment";
import CostComparisonPropertyInvestment from "@/components/cost-comparison-property-investment";
import FinalCTAPropertyInvestment from "@/components/final-cta-property-investment";
import ROISectionPropertyInvestment from "@/components/roi-section-property-investment";
import CallToAction from "@/components/call-to-action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Property Investment Lead Generation",
  description: "Get qualified property investment leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading property investment brokers across the UK.",
};

export default function PropertyInvestmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionPropertyInvestment />
        <BenefitsPropertyInvestment />
        <ResultsSectionPropertyInvestment />
        <AutomationFlowsPropertyInvestment />
        <TestimonialsPropertyInvestment />
        <ROISectionPropertyInvestment />
        <CostComparisonPropertyInvestment />
        <FAQSPropertyInvestment />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
