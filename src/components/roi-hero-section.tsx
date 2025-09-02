'use client';

import { Button } from '@/components/ui/button';

export default function ROIHeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background py-32 sm:py-36 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-medium">
              Calculate Your Lead ROI
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            See exactly how much profit you can generate from our qualified leads. 
            Our leads consistently deliver some of the highest ROI in the market.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="sm" 
              className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white"
              onClick={scrollToCalculator}
            >
              Calculate Your ROI
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

