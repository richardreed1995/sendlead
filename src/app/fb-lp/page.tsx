"use client"

import HeroSectionFBLP from "@/components/hero-section-fb-lp";
import LogoCloud from "@/components/logo-cloud";
import Features4 from "@/components/features-4";
import Methodology from "@/components/methodology";
import CallToAction from "@/components/call-to-action";
import Faqs3 from "@/components/faqs-3";
import Footer from "@/components/footer";
import AutomationFlowsHomepage from "@/components/automation-flows-homepage";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import { HeroHeaderFBLP } from "@/components/header-fb-lp";
import { useEffect } from "react";

export default function FBLandingPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeaderFBLP />
      <main className="flex-1 flex flex-col">
        <HeroSectionFBLP />
        {/* Calendly Embed Section - Mobile Optimized */}
        <section id="calendly-embed" className="py-12 sm:py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Book Your Free Strategy Call
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Let's discuss how we can help you generate qualified leads for your business.
              </p>
            </div>
            <div className="calendly-inline-widget w-full" 
                 data-url="https://calendly.com/richard-sendlead/sendlead-intro?hide_gdpr_banner=1" 
                 style={{
                   minWidth: '320px', 
                   height: '700px',
                   width: '100%'
                 }}>
            </div>
          </div>
        </section>

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
