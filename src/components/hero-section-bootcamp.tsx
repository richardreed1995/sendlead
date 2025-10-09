"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionBootcamp() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-blue-50 border border-blue-200 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-blue-700 font-medium">
              <span>🎓 7-Day Lead Generation Bootcamp</span>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              How To Fill Your Calendar with<br className="hidden sm:block" /> Qualified Meetings
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            Learn the system top brokers use to turn marketing spend into consistent, high-quality customers that scale finance businesses.
          </p>
          
          {/* CTA Button */}
          <div className="max-w-md mx-auto mb-8">
            <div className="space-y-4">
              <Link href="https://buy.stripe.com/9B628k3ubgwS4WKd8qcbC00" target="_blank">
                <Button 
                  size="lg" 
                  className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Instant Access
                </Button>
              </Link>
              <p className="text-sm text-gray-600">
                Secure payment • Start immediately • Complete at your own pace
              </p>
            </div>
          </div>
          
          {/* Course Image - Mobile and Desktop */}
          <div className="relative mx-auto max-w-4xl mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <Image
                className="w-full h-auto rounded-xl object-cover object-left-top"
                src="/course.jpg"
                alt="7-Day Lead Generation Bootcamp Course Preview"
                width={1200}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
