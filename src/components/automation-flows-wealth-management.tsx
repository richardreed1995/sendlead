import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const flows = [
  {
    title: "We Model Your Asset Growth",
    description: "Before any campaign launches, we audit your wealth management practice and map out realistic AUM growth scenarios using historic conversion data and fee structures.",
    image: "/Group 13.png",
    alt: "Wealth ROI Modelling"
  },
  {
    title: "We Build Your Branded Acquisition Funnel",
    description: "Our team designs a full acquisition journey that mirrors your brand — from landing experiences to nurture assets — so every touchpoint feels like an extension of your practice.",
    image: "/Group 12.png",
    alt: "Wealth Management Funnel"
  },
  {
    title: "We Target High-Value Prospects",
    description: "Using layered data, we qualify prospects for investable assets, portfolio size, and advisory needs. Only HNW and mass affluent households that match your mandate make it through.",
    image: "/Group 14.png",
    alt: "High-Net-Worth Targeting"
  },
  {
    title: "We Nurture Until They Are Ready",
    description: "A 24-step follow-up framework warms prospects with portfolio insights, retirement planning prompts, and meeting reminders until they are ready to speak with your advisers.",
    image: "/Group 15.png",
    alt: "Wealth Prospect Nurture"
  },
  {
    title: "You Track Everything In Real Time",
    description: "Enjoy transparent dashboards with live visibility on pipeline value, conversion stages, and return on spend so you can forecast revenue with confidence.",
    image: "/Group 19.png",
    alt: "Asset Growth Analytics"
  }
];

export default function AutomationFlowsWealthManagement() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">How We Win Wealth Management Clients For You</h2>
          <p className="text-muted-foreground text-base md:text-lg">Our five-step system keeps your diary full of serious investors</p>
        </div>

        <div className="space-y-16 mb-16">
          {flows.map((flow, index) => (
            <div key={flow.title} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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

