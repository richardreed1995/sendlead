import LeadROICalculator from "./roi-calculator-wealth-management";

export default function ROISectionWealthManagement() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-white">Project Your Assets Under Management ROI</h2>
          <p className="text-gray-300 text-base md:text-lg">Quickly model the revenue impact of every wealth management lead we send you</p>
        </div>

        <LeadROICalculator />
      </div>
    </section>
  );
}

