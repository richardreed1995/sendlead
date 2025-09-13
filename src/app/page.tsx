import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Features4 from "@/components/features-4";
import Methodology from "@/components/methodology";
import CallToAction from "@/components/call-to-action";
import Faqs3 from "@/components/faqs-3";
import Footer from "@/components/footer";
import AutomationFlowsHomepage from "@/components/automation-flows-homepage";
import type { Metadata } from "next";
import CompetitiveAdvantages from "@/components/competitive-advantages";

export const metadata: Metadata = {
  title: "Sendlead | Lead Generation Agency",
  description: "Sendlead is a data-driven B2B lead generation agency delivering qualified leads for technology companies. Discover our proven 7-step methodology for systematic growth and ROI.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header>
        <HeroSection />
      </header>
      <main className="flex-1 flex flex-col gap-12">
        <LogoCloud />
        <AutomationFlowsHomepage />
        <CompetitiveAdvantages />
        <Methodology />
        <Features4 />
        <Faqs3 />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
