import { Target, Settings, TrendingUp } from "lucide-react";

export default function BootcampReasons() {
  const reasons = [
    {
      title: "Learn Top Broker Secrets",
      description: "Discover the exact methods elite brokers use to consistently attract qualified prospects whilst others struggle with inconsistent lead flow.",
      icon: Target
    },
    {
      title: "Master Closing Systems",
      description: "Get the proven qualification frameworks and follow-up sequences that top performers use to convert significantly more leads into paying clients.",
      icon: Settings
    },
    {
      title: "Scale Your Business",
      description: "Access the same insider strategies that successful brokers typically guard closely. Learn the exact system for predictable, qualified lead generation.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-6 md:py-10">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Join The Bootcamp?</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Get the system that top brokers use to fill their calendar with qualified leads.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <IconComponent className="size-5 text-zinc-500" />
                  <h3 className="text-base font-semibold">{reason.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
