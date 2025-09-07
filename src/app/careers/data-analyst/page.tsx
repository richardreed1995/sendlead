import { HeroHeader } from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst | Sendlead Careers",
  description: "Join Sendlead as a Data Analyst. Uncover data insights that drive our entire operation and identify which lead characteristics correlate with highest lifetime value. Remote position with UK hours.",
};

export default function DataAnalystPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6">
                <Link href="/careers" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowLeft className="size-4" />
                  Back to Careers
                </Link>
              </div>
              
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 mb-4">
                  Data Analyst
                </h1>
                <div className="flex flex-wrap gap-6 text-lg text-gray-600 mb-6">
                  <span>Remote, UK hours</span>
                  <span>Full-time</span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We focus on metrics beyond leads, such as CLTV, ROI, and revenue attribution. We experiment like scientists—precise, focused, and curious.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <div className="prose prose-lg max-w-none prose-headings:text-left">
              
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Our Company</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a fast-growing lead generation company that specialises in delivering exclusive, AI-qualified prospects to finance, healthcare, and insurance businesses.
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mb-4">About the Role</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are looking for a detail-oriented and insight-driven Data Analyst to join our team. In this role, you will uncover the data insights that drive our entire operation. You'll identify which lead characteristics correlate with highest lifetime value, optimise our 14+ point qualification system, and provide the intelligence that keeps us ahead of competitors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You will work with complex datasets spanning the entire customer journey from lead to revenue. We're looking for someone who can find patterns in noise and translate data into actionable strategies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This is a full-time, well-paid remote position ideal for analytical minds who want their insights to directly impact business growth. Experience with lead generation data is helpful but not required. We'll teach you our specific metrics and methodologies. Our team relies on data for every decision, and your insights will shape our strategy.
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Responsibilities</h2>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Analyse lead quality, conversion patterns, and revenue attribution across client accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Build and maintain reporting dashboards for internal teams and clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Identify optimisation opportunities through data analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Support A/B testing and experiment design across campaigns</span>
                </li>
              </ul>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Strong analytical skills with experience in data analysis tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Ability to translate complex data into clear, actionable insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">UK time zone for team collaboration</span>
                </li>
              </ul>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Tools we use</h2>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We analyse data in Python and SQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We create dashboards in Tableau and custom reporting tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We track everything through our comprehensive analytics platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We capture detailed data at every touchpoint so you'll have rich datasets to work with. The infrastructure is already built—you focus on the insights.</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">You'll like us if</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You enjoy digging into complex datasets to find meaningful patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You want your analysis to directly influence business strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You like working in a data-driven environment where insights matter</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">You won't like us if</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You prefer theoretical analysis over practical business applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You're not comfortable with the fast pace of performance marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You don't like having your insights tested and measured in real campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">How to Apply</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're interested in understanding how you approach problems, and there are no right or wrong answers.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Record a 3-minute video (camera optional, tools like Loom recommended) answering this question:
              </p>
              
              <div className="bg-gray-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-lg text-gray-800 font-medium italic">
                  "What key metrics would you track to identify which lead characteristics predict highest lifetime value, and why?"
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In your response, focus on explaining your thought process rather than listing credentials.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Send your video link to <a href="mailto:richard@sendlead.co" className="text-blue-600 hover:text-blue-800 font-semibold">richard@sendlead.co</a>
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-12">
                <p className="text-sm text-yellow-800 font-medium">
                  <strong>Note:</strong> Please do not send a CV or text application. We're interested in understanding how you approach problems, and there are no right or wrong answers.
                </p>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Questions?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Have questions about this role? We'd love to hear from you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Email us at <a href="mailto:richard@sendlead.co" className="text-blue-600 hover:text-blue-800 font-semibold">richard@sendlead.co</a>
              </p>
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