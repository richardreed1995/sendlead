import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BootcampCurriculum() {
  const curriculum = [
    {
      day: "DAY 1",
      title: "Nail Your ICP & Dream Scenario",
      description: "Define the exact customers most likely to convert and map your perfect lead journey from first contact to completion."
    },
    {
      day: "DAY 2", 
      title: "The ROI Formula",
      description: "Calculate the true cost of leads vs. lifetime value, and discover why most brokers lose money on cheap leads that seem like bargains."
    },
    {
      day: "DAY 3",
      title: "Client Attraction Methods", 
      description: "Rank lead generation methods that actually work at scale and why most brokers choose the wrong approach for their business stage."
    },
    {
      day: "DAY 4",
      title: "Master Lead Qualification",
      description: "Build your personal lead scoring system that filters out time-wasters and identifies serious buyers with verified budgets."
    },
    {
      day: "DAY 5",
      title: "Landing Pages & Quizzes That Convert",
      description: "Create interactive lead magnets that qualify prospects whilst building trust, plus the psychology behind forms that actually convert."
    },
    {
      day: "DAY 6",
      title: "Build Your Follow-Up Factory",
      description: "Develop systematic nurture sequences that convert leads between multiple touches, plus CRM automation that works whilst you sleep."
    },
    {
      day: "DAY 7",
      title: "Scale-Ready Systems",
      description: "Prepare your business infrastructure to handle high-volume lead flow without burning out, plus when to partner with proven lead providers."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What You'll Experience in The 7-Day Bootcamp</h2>
          <p className="text-muted-foreground text-base md:text-lg">Our comprehensive 7-day programme for finance brokers</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {curriculum.map((item, index) => (
              <div key={item.title} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-black text-white px-4 py-2 rounded-lg font-bold text-sm">
                    {item.day}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#hero">
            <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
