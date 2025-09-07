import { HeroHeader } from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Strategist | Sendlead Careers",
  description: "Join Sendlead as a Creative Strategist. Develop campaigns that not only generate leads but also pre-warm prospects for higher conversion rates. Remote position with UK hours.",
};

export default function CreativeStrategistPage() {
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
                  Creative Strategist
                </h1>
                <div className="flex flex-wrap gap-6 text-lg text-gray-600 mb-6">
                  <span>Remote, UK hours</span>
                  <span>Full-time</span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We create branded funnels and multi-touch nurture sequences that consistently outperform industry benchmarks.
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
                We are a fast-growing lead generation company that specialises in delivering exclusive, AI-qualified prospects to finance, healthcare, and insurance businesses.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-3">About the Role</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                We are looking for a creative and data-driven Creative Strategist to join our team. In this role, you will develop campaigns that not only generate leads but also pre-warm prospects for higher conversion rates. You'll gain deep insights into what messaging and creative approaches work across different industries and buyer personas.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                You will own the creative strategy from concept through execution, working with high-value clients who expect exceptional results. We're looking for someone who combines creative thinking with analytical rigour.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                This is a full-time, well-paid remote position perfect for creative professionals who want to see their work directly impact revenue. No previous lead generation experience is required. We'll teach you our proven frameworks for creating high-converting campaigns. Our team values creativity, experimentation, and data-driven decision making.
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Responsibilities</h2>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Develop creative strategies for client campaigns across multiple channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Design and optimise landing pages, email sequences, and nurture flows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">A/B test creative elements to maximise conversion rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Create branded assets that maintain consistency throughout the customer journey</span>
                </li>
              </ul>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3 mb-12">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Creative mindset with strong analytical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">Experience with design tools and understanding of conversion optimisation principles</span>
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
                  <span className="text-lg text-gray-700">We design in Figma and Canva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We build campaigns using our proprietary funnel builder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We track performance through comprehensive analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">We've automated the technical implementation so you can focus on strategy and creative development. The boring technical stuff is handled automatically.</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">You'll like us if</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You love seeing your creative work drive measurable business results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You enjoy testing new ideas and iterating based on data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You want creative freedom within a performance-driven framework</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">You won't like us if</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You prefer brand work over performance marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You're not comfortable with your work being measured on conversion metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-700">You don't like adapting creative based on performance data</span>
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
                  "What creative strategy would you use to pre-warm prospects for a life insurance client, and how would you measure success?"
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