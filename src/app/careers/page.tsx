import { HeroHeader } from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../card';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Careers",
  description: "Join Sendlead's growing team. We're hiring Account Strategists, Creative Strategists, and Data Analysts. Remote positions with UK hours.",
};

const jobListings = [
  {
    id: 'account-strategist',
    title: 'Account Strategist',
    location: 'Remote, UK hours',
    type: 'Full-time',
    description: 'We are a fast-growing lead generation company that specialises in delivering exclusive, AI-qualified prospects to finance, healthcare, and insurance businesses.',
    shortDescription: 'Develop deep expertise in lead generation strategy whilst gaining invaluable insights into how successful businesses scale their sales operations.'
  },
  {
    id: 'creative-strategist',
    title: 'Creative Strategist',
    location: 'Remote, UK hours',
    type: 'Full-time',
    description: 'We create branded funnels and multi-touch nurture sequences that consistently outperform industry benchmarks.',
    shortDescription: 'Develop campaigns that not only generate leads but also pre-warm prospects for higher conversion rates.'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    location: 'Remote, UK hours',
    type: 'Full-time',
    description: 'We focus on metrics beyond leads, such as CLTV, ROI, and revenue attribution. We experiment like scientists—precise, focused, and curious.',
    shortDescription: 'Uncover data insights that drive our entire operation and identify which lead characteristics correlate with highest lifetime value.'
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-3 sm:mb-4 lg:mb-5">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>Join Our Growing Team</span>
                </div>
              </div>
              
              <div className="mb-3 sm:mb-4 lg:mb-5">
                <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-medium">
                  Careers at Sendlead
                </h1>
              </div>
              <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
                We're looking for talented individuals to join our growing team. All positions are remote with UK hours.
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                <h2 className="text-balance text-4xl font-medium lg:text-5xl">Current Openings</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  We're hiring for three key positions to help us scale our lead generation services
                </p>
              </div>
              
              <div className="space-y-8">
                {jobListings.map((job) => (
                  <Card key={job.id} className="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-semibold text-gray-900 mb-3">
                            {job.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="size-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="size-4" />
                              {job.type}
                            </div>
                          </div>
                          <CardDescription className="text-lg text-gray-700 mb-4">
                            {job.description}
                          </CardDescription>
                          <p className="text-base text-gray-600">
                            {job.shortDescription}
                          </p>
                        </div>
                        <div className="ml-6">
                          <Link href={`/careers/${job.id}`}>
                            <Button className="group-hover:bg-[#1f7fd9] transition-colors duration-300">
                              View Full Details
                              <ArrowRight className="ml-2 size-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground mb-4">
                  Don't see a role that fits? We're always looking for talented people.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="size-5 text-gray-500" />
                  <span className="text-lg">
                    Send your CV to{' '}
                    <a href="mailto:richard@sendlead.co" className="text-blue-600 hover:underline font-semibold">
                      richard@sendlead.co
                    </a>
                  </span>
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
