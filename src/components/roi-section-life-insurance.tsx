import LeadROICalculator from "@/components/roi-calculator-life-insurance";

export default function ROISectionLifeInsurance() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-white">Calculate Your Lead ROI</h2>
          <p className="text-gray-300 text-base md:text-lg">See exactly how much you can earn from qualified life insurance leads</p>
        </div>
        
        <LeadROICalculator />
      </div>
    </section>
  );
}
