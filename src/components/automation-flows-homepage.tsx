import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const flows = [
  {
    title: "We Show You The Numbers First",
    description: "Before you spend a penny, we analyse your business and show you exactly how much money you could make by working with us. No surprises, just clear projections based on real industry data.",
    image: "/Group 13.png",
    alt: "We Show You The Numbers First",
  },
  {
    title: "We Create Your Funnel",
    description: "We build a complete customer acquisition system that looks and feels like your brand. When potential customers interact with us, they think they're dealing directly with you.",
    image: "/Group 12.png",
    alt: "We Create Your Funnel",
  },
  {
    title: "We Find The Right Customers",
    description: "Using our proven qualification system, we filter out tyre-kickers and time-wasters. We only send you people who are genuinely interested and can afford your services. We even verify their contact details so you know they're real.",
    image: "/Group 14.png",
    alt: "We Find The Right Customers",
  },
  {
    title: "We Advertise Everywhere",
    description: "We run targeted campaigns across Facebook, Google, and other platforms to reach your ideal customers wherever they spend their time online.",
    image: "/Group 16.png",
    alt: "We Advertise Everywhere",
  },
  {
    title: "We Help You Close The Deal",
    description: "We don't just hand over leads and disappear. Our 24-step follow-up system nurtures prospects until they're ready to buy, making your job much easier.",
    image: "/Group 15.png",
    alt: "We Help You Close The Deal",
  },
  {
    title: "We Guarantee Quality",
    description: "If any lead turns out to be fake or invalid, we replace it for free. You only pay for genuine prospects.",
    image: "/Group 20.png",
    alt: "We Guarantee Quality",
  },
  {
    title: "You See Everything",
    description: "We provide detailed reports showing exactly how many leads convert, your return on investment, and where your best customers are coming from.",
    image: "/Group 19.png",
    alt: "You See Everything",
  }
];

export default function AutomationFlowsHomepage() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center md:space-y-8 mb-16">
          <h2 className="text-balance text-2xl font-bold md:text-xl lg:text-5xl">How We Help You Get More Customers</h2>
          <p className="text-muted-foreground text-base md:text-lg">We generate high-quality leads for your business and help you convert them into paying customers. Think of us as your dedicated customer acquisition team.</p>
        </div>
        
        <div className="space-y-16 mb-16">
          {flows.map((flow, index) => (
              <div key={flow.title} className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-gray-900 font-bold text-xl">{index + 1})</span>
                    <h3 className="text-lg font-medium text-gray-900 md:text-2xl">{flow.title}</h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed md:text-lg">
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
