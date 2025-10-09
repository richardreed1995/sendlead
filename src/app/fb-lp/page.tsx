"use client"

import HeroSectionFBLP from "@/components/hero-section-fb-lp";
import LogoCloud from "@/components/logo-cloud";
import Features4 from "@/components/features-4";
import Methodology from "@/components/methodology";
import CallToAction from "@/components/call-to-action";
import Faqs3 from "@/components/faqs-3";
import FooterFBLP from "@/components/footer-fb-lp";
import AutomationFlowsHomepage from "@/components/automation-flows-homepage";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import { HeroHeaderFBLP } from "@/components/header-fb-lp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FBLandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeaderFBLP />
      <main className="flex-1 flex flex-col">
        <HeroSectionFBLP />
        {/* Get Started Section - Mobile Optimized */}
        <section id="calendly-embed" className="py-12 sm:py-16 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Get Started
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                Choose how you'd like to connect with us
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
                <Link 
                  href="https://wa.me/447874467689?text=I%27m%20interested%20in%20working%20with%20Sendlead.%20Please%20can%20you%20send%20me%20some%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full px-8 py-8 sm:px-10 sm:py-7 flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Message on WhatsApp
                  </Button>
                </Link>
                
                <p className="text-base sm:text-lg text-gray-600">
                  or book a call below
                </p>
              </div>
            </div>
            
            <div className="calendly-inline-widget w-full" 
                 data-url={isMobile 
                   ? "https://calendly.com/richard-sendlead/sendlead-intro?hide_event_type_details=1&hide_gdpr_banner=1"
                   : "https://calendly.com/richard-sendlead/sendlead-intro?hide_gdpr_banner=1"
                 } 
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
      <FooterFBLP />
    </div>
  );
}
