import HeroSectionBusinessGrants from "@/components/hero-section-business-grants";
import AutomationFlowsBusinessGrants from "@/components/automation-flows-business-grants";
import BenefitsBusinessGrants from "@/components/benefits-business-grants";
import FAQSBusinessGrants from "@/components/faqs-business-grants";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonBusinessGrants from "@/components/cost-comparison-business-grants";
import ROISectionBusinessGrants from "@/components/roi-section-business-grants";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Business Grant Lead Generation",
  description: "Get qualified business grant leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading business grant consultants across the UK.",
};

export default function BusinessGrantsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionBusinessGrants />
        <AutomationFlowsBusinessGrants />
        <BenefitsBusinessGrants />
        <CompetitiveAdvantages />
        <ROISectionBusinessGrants />
        <CostComparisonBusinessGrants />
        <FAQSBusinessGrants />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
