import HeroSectionBusinessLoans from "@/components/hero-section-business-loans";
import AutomationFlowsBusinessLoans from "@/components/automation-flows-business-loans";
import BenefitsBusinessLoans from "@/components/benefits-business-loans";
import FAQSBusinessLoans from "@/components/faqs-business-loans";
import CTABusinessLoans from "@/components/cta-business-loans";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonBusinessLoans from "@/components/cost-comparison-business-loans";
import FinalCTABusinessLoans from "@/components/final-cta-business-loans";
import ROISectionBusinessLoans from "@/components/roi-section-business-loans";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Business Loan Lead Generation",
  description: "Get qualified business loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading business loan brokers across the UK.",
};

export default function BusinessLoansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionBusinessLoans />
        <AutomationFlowsBusinessLoans />
        <BenefitsBusinessLoans />
        <CompetitiveAdvantages />
        <ROISectionBusinessLoans />
        <CostComparisonBusinessLoans />
        <FAQSBusinessLoans />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
