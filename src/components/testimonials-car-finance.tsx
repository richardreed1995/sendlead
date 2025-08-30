import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    quote: "Sendlead transformed our car finance business completely. We were stuck competing for scraps from the big lead companies, now we get exclusive prospects who actually want to speak with us. Revenue doubled in four months.",
    name: "Michael O'Connor",
    role: "Managing Director",
    company: "O'Connor Auto Finance"
  },
  {
    quote: "Finally found a lead company that understands car finance brokers. No more chasing dead leads or fighting five other brokers for the same client. The qualification process actually works.",
    name: "Lisa Patel",
    role: "Founder",
    company: "Patel Motors Finance"
  },
  {
    quote: "Been in car finance for 15 years and tried every lead source going. Sendlead is the only one that consistently delivers quality prospects. Our conversion rate went from 12% to 28%.",
    name: "Andrew Wilson",
    role: "Senior Partner",
    company: "Wilson Vehicle Solutions"
  }
];

export default function TestimonialsCarFinance() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What Our Car Finance Partners Say</h2>
          <p className="text-muted-foreground text-lg">Real feedback from car finance brokers who've transformed their businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 shadow-sm">
              <blockquote className="text-gray-700 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
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
