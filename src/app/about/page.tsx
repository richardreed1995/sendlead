import { HeroHeader } from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../card';
import { Globe, Shield, Target, TrendingUp, Eye, Award, BarChart3, ShieldCheck, Handshake, Clock } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | About Us",
  description: "Learn about Sendlead, the UK's leading lead generation agency. Discover our founder's story, values, partnerships, and mission to deliver qualified prospects that convert into revenue.",
};

const partnershipCards = [
    {
        icon: <Globe className="size-7 text-zinc-300" />,
        title: 'Meta Partner',
        description: 'Certified Meta Business Partner with advanced advertising privileges and algorithm optimisation access.',
    },
    {
        icon: <Shield className="size-7 text-zinc-300" />,
        title: 'Google Partner',
        description: 'Premier Google Partner status with priority support and beta feature access.',
    },
    {
        icon: <Target className="size-7 text-zinc-300" />,
        title: 'TikTok Partner',
        description: 'Official TikTok Business Partner for emerging audience targeting and creative formats.',
    },
    {
        icon: <TrendingUp className="size-7 text-zinc-300" />,
        title: 'Smartlead Partner',
        description: 'Certified Smartlead partner for enterprise-grade email infrastructure and deliverability.',
    },
];

const valuesCards = [
    {
        icon: <Eye className="size-5 text-zinc-500" />,
        title: 'Transparency',
        description: 'Complete visibility into our qualification processes, lead sources, and performance metrics. No black box operations.',
    },
    {
        icon: <Award className="size-5 text-zinc-500" />,
        title: 'Quality Over Quantity',
        description: "We'd rather deliver 50 properly qualified exclusive leads than 500 shared, unvetted prospects. Quality drives ROI.",
    },
    {
        icon: <BarChart3 className="size-5 text-zinc-500" />,
        title: 'Data-Driven',
        description: 'Every decision is backed by performance data. We continuously test and optimise based on conversion metrics, not assumptions.',
    },
    {
        icon: <ShieldCheck className="size-5 text-zinc-500" />,
        title: 'Compliance First',
        description: 'Full GDPR, FCA, and ASA compliance across all campaigns. We do things properly from day one.',
    },
    {
        icon: <Handshake className="size-5 text-zinc-500" />,
        title: 'Partnership Approach',
        description: 'We\'re invested in your long-term success, not just lead volume. We adapt and optimise based on your feedback and results.',
    },
    {
        icon: <Clock className="size-5 text-zinc-500" />,
        title: 'Speed to Market',
        description: 'Leads are delivered within seconds of qualification. No delays, no batching, no waiting. Speed kills deals, so we eliminate it.',
    },
];


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        {/* Hero Section - Using mortgage page structure with new copy */}
        <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Trust Indicator Tab */}
              <div className="mb-3 sm:mb-4 lg:mb-5">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>Trusted by Leading UK Businesses</span>
                </div>
              </div>
              
              <div className="mb-3 sm:mb-4 lg:mb-5">
                <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-medium">
                  About Sendlead
                </h1>
              </div>
              <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
                Meet your lead generation specialists who actually deliver exclusive, qualified prospects that convert into revenue.
              </p>
              
              <div className="flex justify-center">
                <Link href="/get-started">
                  <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Letter Section - Left aligned with light grey background */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="relative z-10 mx-auto max-w-4xl space-y-6 md:space-y-8 text-left">
                <Card className="bg-white shadow-md p-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-base md:text-lg">
                      Rich here, the founder of Sendlead.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      I spent years working in digital marketing and enterprise sales, helping companies scale their lead generation. The same problems existed everywhere - businesses paying thousands for leads that never converted, sales teams chasing unqualified prospects, marketing budgets wasted on volume instead of quality.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      In early 2023, I decided to build something different. Instead of another lead generation company promising quantity, I wanted to focus entirely on exclusive, properly qualified leads that actually convert.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      For the first few months I did everything myself. I made every mistake in the book - said yes to companies outside our expertise, tried to accommodate every custom request, worked far too many hours on campaigns that didn't deliver results.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      But through those early experiments, I learned what truly matters in lead generation. Not fancy technology or clever tactics - just rigorous qualification, exclusive delivery, and obsessive focus on conversion rates over vanity metrics.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      Now we work with a select few partners whose values align with ours - businesses that understand quality leads drive better results than chasing vanity metrics.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      Our leads are exclusive, phone and email verified, and come with complete qualification data. We track conversion rates, optimise based on results, and only work with businesses that value quality over volume.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                      If you're looking to scale with qualified leads instead of wasting time on unvetted prospects, we'd love to chat.
                    </p>
                    <div className="pt-4">
                      <div className="flex items-center gap-6">
                        <img 
                          src="/1662043117466.jpeg" 
                          alt="Richard Reed" 
                          className="w-24 h-24 rounded-lg object-cover border-2 border-gray-200"
                        />
                        <div>
                          <p className="text-foreground font-semibold text-lg">Richard Reed</p>
                          <p className="text-muted-foreground text-base">Founder, Sendlead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships Section - Methodology style cards */}
        <section className="py-16 md:py-24 bg-zinc-900 text-white">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="mx-auto max-w-xl text-center space-y-4">
              <h2 className="text-balance text-4xl font-medium lg:text-5xl mb-4">Our Partnerships</h2>
              <p className="text-zinc-300 text-lg">We work with the best platforms to deliver superior results</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
              {partnershipCards.map((card) => (
                <Card key={card.title} className="bg-zinc-950 border-zinc-800 text-white shadow-md flex flex-col h-full">
                  <CardHeader className="flex flex-col items-start gap-1 border-none px-4 pt-5 pb-0">
                    <div className="flex items-center gap-2 w-full">
                      {card.icon}
                      <CardTitle className="text-left text-base font-semibold">{card.title}</CardTitle>
                    </div>
                    <hr className="border-t border-zinc-700 my-3 w-full" />
                  </CardHeader>
                  <CardContent className="flex-1 flex items-start justify-start px-4 pb-5 pt-0">
                    <CardDescription className="text-left text-zinc-300 text-sm leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Features style cards with updated content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
              <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Values</h2>
              <p className="text-muted-foreground text-base md:text-lg">
                How we deliver results
              </p>
            </div>

            <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
              {valuesCards.map((card) => (
                <div key={card.title} className="space-y-3">
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <h3 className="text-base font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section - Link to careers page */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                <h2 className="text-balance text-4xl font-medium lg:text-5xl">Join Our Team</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  <strong>We're looking for talented individuals to join our growing team</strong>
                </p>
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground">
                  We have exciting opportunities for Customer Success Managers, Lead Generation Specialists, and Data Analysts.
                </p>
                <p className="text-base text-muted-foreground">
                  All positions are remote with UK hours. View our current openings and detailed job descriptions.
                </p>
                
                <div className="flex justify-center">
                  <Link href="/careers">
                    <Button size="lg" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                      View Open Positions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
