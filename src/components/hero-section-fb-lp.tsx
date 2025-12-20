"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionFBLP() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Get Qualified Leads Delivered To Your CRM
            </h1>
          </div>
          <p className="text-sm sm:text-lg lg:text-xl leading-6 sm:leading-8 text-muted-foreground mb-4 sm:mb-4 lg:mb-5">
            Grow your business with high-quality, exclusive leads delivered to you in real-time. Start with a small test order of 50 leads — no ongoing commitment, just pay per qualified lead.
          </p>
          
          {/* Google Slides Embed - Mobile Optimized */}
          <div className="mt-6 sm:mt-12">
            <div className="w-full overflow-hidden">
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vQWhEL2ygPv69B7JCeyCW2enghcT7iN7ICFeWD5Bf7ZPnHIOuhN3an8nyVvprNfClbgOtyxjJWzQqkq/pubembed?start=false&loop=false&delayms=3000" 
                frameBorder="0" 
                width="100%" 
                height="400"
                allowFullScreen={true}
                className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                style={{ 
                  minHeight: '280px',
                  border: 'none',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 sm:mt-8">
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white w-full sm:w-auto py-7 sm:py-2 text-lg sm:text-base font-bold"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
