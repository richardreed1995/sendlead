"use client"

import HeroSectionFBLP from "@/components/hero-section-fb-lp";
import Features4 from "@/components/features-4";
import Methodology from "@/components/methodology";
import Faqs3 from "@/components/faqs-3";
import FooterFBLP from "@/components/footer-fb-lp";
import AutomationFlowsHomepage from "@/components/automation-flows-homepage";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import { HeroHeaderFBLP } from "@/components/header-fb-lp";

export default function FBLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeaderFBLP />
      <main className="flex-1 flex flex-col">
        <HeroSectionFBLP />
        <CompetitiveAdvantages />
        <Features4 />
        <AutomationFlowsHomepage />
        <Methodology />
        <Faqs3 />
      </main>
      <FooterFBLP />
    </div>
  );
}
