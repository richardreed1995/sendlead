import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const flows = [
  {
    title: "Strategy & Qualification Setup",
    description: "We capture your exact target client profile, lending criteria, and delivery preferences. No generic leads - everything is tailored to your specific business loan requirements.",
    image: "/Group 13.png",
    alt: "Financial + ROI Modelling"
  },
  {
    title: "Build Targeting Infrastructure",
    description: "We create precision-targeted campaigns using proven business loan lead generation systems. Our AI qualification process ensures only serious business owners reach you.",
    image: "/Group 12.png",
    alt: "Build Branded Assets"
  },
  {
    title: "Real-Time Lead Delivery",
    description: "Qualified leads sync instantly to your CRM with complete contact details and qualification data. No delays, no aged leads, no manual data entry required.",
    image: "/Group 14.png",
    alt: "Qualification"
  },
  {
    title: "Automated Follow-Up Systems",
    description: "Leads receive immediate confirmation they'll hear from you, plus ongoing nurture sequences that keep them engaged until they're ready to proceed with their loan application.",
    image: "/Group 15.png",
    alt: "Follow-up"
  },
  {
    title: "Performance Tracking & Optimisation",
    description: "Weekly reporting on lead quality, conversion rates, and campaign performance. We continuously optimise to improve your results over time.",
    image: "/Group 19.png",
    alt: "Performance Analytics + Reporting"
  }
];

export default function AutomationFlowsBusinessLoans() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">How We Generate Your Business Loan Leads</h2>
          <p className="text-muted-foreground text-base md:text-lg">Our proven 5-step process for delivering qualified business loan leads</p>
        </div>
        
        <div className="space-y-16 mb-16">
          {flows.map((flow, index) => (
            <div key={flow.title} className={`flex flex-col lg:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-gray-900">{flow.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {flow.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-4 h-80 flex items-center justify-center overflow-hidden">
                  <Image
                    src={flow.image}
                    alt={flow.alt}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/get-started">
            <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
