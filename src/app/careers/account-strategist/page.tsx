import { HeroHeader } from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Strategist | Sendlead Careers",
  description: "Join Sendlead as an Account Strategist. Develop deep expertise in lead generation strategy whilst gaining insights into how successful businesses scale their sales operations. Remote position with UK hours.",
};

export default function AccountStrategistPage() {
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
                  Account Strategist
                </h1>
                <div className="flex flex-wrap gap-6 text-lg text-gray-600 mb-6">
                  <span>Remote, UK hours</span>
                  <span>Full-time</span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We are a fast-growing lead generation company that specialises in delivering exclusive, AI-qualified prospects to finance, healthcare, and insurance businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Section */}
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="prose prose-lg max-w-none prose-headings:text-left prose-p:text-left prose-ul:text-left prose-li:text-left">
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">About Our Company</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We work with ambitious companies who want to scale their revenue through high-quality leads delivered straight to their CRM.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-3">About the Role</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                We are looking for a strategic and relationship-focused Account Strategist to join our team. In this role, you will develop deep expertise in lead generation strategy whilst gaining invaluable insights into how successful businesses scale their sales operations.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                You will be working directly with business owners, sales directors, and growth teams across multiple high-value industries. You will manage the complete client journey from onboarding through to ongoing optimisation. We're looking for someone who can build trust, solve problems creatively, and drive results without needing constant supervision.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                This is a full-time, well-paid remote position ideal for ambitious professionals who want to make a real impact. No previous lead generation experience is required. We have our own proven methodology and we're happy to teach our process. Our team is small, dynamic, and we're proud of our flat organisational structure where everyone takes ownership of their results.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Responsibilities</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">Manage client relationships and develop bespoke lead generation strategies for each account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">Conduct onboarding calls and ongoing strategy sessions with clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">Analyse performance data to identify optimisation opportunities and implement improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">Collaborate with internal teams to ensure seamless lead delivery and quality</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Requirements</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">Strategic thinking with strong relationship-building skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">Working hours are flexible but overlap with UK business hours is essential for client communication</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tools we use</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">We collaborate on Slack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">We manage client data through our custom CRM system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">We track performance through advanced analytics dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-base text-gray-700">We've built extensive automation for lead qualification, delivery, and reporting so you can focus on strategy and relationship management. All the operational complexity is handled behind the scenes.</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">You'll like us if</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You thrive in a fully remote environment with flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You want ownership over client outcomes and strategic decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You enjoy building long-term partnerships rather than transactional relationships</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">You won't like us if</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You prefer rigid processes and constant supervision</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You're uncomfortable with ambiguity or solving complex client challenges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You don't like being accountable for client success metrics</span>
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
                  "How would you approach onboarding a new client in the business loans sector who is currently getting 20 leads per month but only converting 5%?"
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