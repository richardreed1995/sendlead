import { Users, Filter, Clock, Thermometer, Calculator, TrendingUp } from "lucide-react";

export default function BootcampBenefits() {
  const challenges = [
    {
      icon: Users,
      title: "Shared Leads",
      description: "Every prospect comes to you and only you. No more racing 5 other companies to make first contact. You're the only business they hear from."
    },
    {
      icon: Filter,
      title: "Unqualified Leads",
      description: "Our systematic qualification process checks 15+ data points before any lead reaches you. Only serious buyers with verified budgets get through."
    },
    {
      icon: Clock,
      title: "Slow Response Times",
      description: "Prospects appear in your system within seconds of qualification. Call whilst they're still highly engaged and ready to buy."
    },
    {
      icon: Thermometer,
      title: "Cold Prospects",
      description: "We don't stop at generating leads. Every prospect receives a multi-touch bespoke nurture flow that's been proven to double lead conversion rates."
    },
    {
      icon: Calculator,
      title: "Unpredictable Pricing",
      description: "Fixed price per lead. No long-term contracts, scale up and down as you need. Simple and straightforward."
    },
    {
      icon: TrendingUp,
      title: "Poor Conversions",
      description: "Our partners see 67% average improvement in conversion rates and 85% connect rates within 24 hours."
    }
  ];

  return (
    <section className="py-6 md:py-10 bg-gray-50">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Six Challenges This Bootcamp Helps Solve</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            High-quality prospects that only come to you, delivered straight to your CRM.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <IconComponent className="size-5 text-zinc-500" />
                  <h3 className="text-base font-semibold">{challenge.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
