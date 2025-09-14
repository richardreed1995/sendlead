import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BootcampTargetAudience() {
  const audiencePoints = [
    "Relying on referrals or expensive shared leads",
    "Struggling with unqualified prospects wasting their time",
    "Without consistent leads each week", 
    "Tired of competing with multiple brokers for the same prospect",
    "Wanting a proven system to get exclusive, qualified leads",
    "Ready to scale to higher monthly profit consistently"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            This bootcamp is designed for:
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Finance brokers who are:
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-8">
            {audiencePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#2998FD] rounded-full mt-3"></div>
                <p className="text-lg text-foreground">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="#hero">
              <Button size="lg" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
