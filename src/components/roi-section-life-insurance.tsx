import LeadROICalculator from "@/components/roi-calculator-life-insurance";

export default function ROISectionLifeInsurance() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Calculate Your Lead ROI</h2>
          <p className="text-muted-foreground text-base md:text-lg">See exactly how much you can earn from qualified life insurance leads</p>
        </div>
        
        <LeadROICalculator />
      </div>
    </section>
  );
}
