"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionFBLP() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
              <span className="text-yellow-500">★★★★★</span>
              <span>Trusted by Leading Brokers</span>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              Get Qualified Leads Delivered To Your CRM
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            We'll generate qualified leads from your perfect fit prospects with proven systems. All delivered directly to your CRM.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="sm" 
              className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white"
              onClick={() => {
                const calendlySection = document.getElementById('calendly-embed');
                if (calendlySection) {
                  calendlySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Google Slides Embed - Mobile Optimized */}
          <div className="mt-12">
            <div className="w-full overflow-hidden">
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vT0iytBEzOi-IAyZ7w4OhexIDvX4g45yrD-SYEeZeHrPEuGV5iXmRMzN3wnW9gVPkxN2wLGwMT9udo1/pubembed?start=false&loop=false&delayms=3000" 
                frameBorder="0" 
                width="100%" 
                height="400"
                allowFullScreen={true}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                style={{ 
                  minHeight: '300px',
                  border: 'none',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
