import { HeroHeader } from '@/components/header';
import Image from 'next/image';
import FooterSection from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sendlead | Parlance AI Agent",
  description: "Discover how Sendlead's Parlance AI agent triples your appointment bookings through intelligent lead nurturing and automated scheduling.",
};

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function ParlanceBlog() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">{today} <span className="mx-2">|</span> <span className="font-medium">Sendlead Team</span></div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Sendlead Launches Parlance</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">The AI Agent That Triples Your Appointment Bookings</div>
            <div className="w-full aspect-[16/7] relative rounded-2xl overflow-hidden mb-4">
              <Image src="/parlance.png" alt="SendLead Parlance AI Agent" fill className="object-cover" />
            </div>
          </div>
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            <p> We’re thrilled to introduce <b>Parlance</b> to our Sendlead customers—a revolutionary AI agent that’s already helping businesses set <b>3x as many appointments</b> as traditional follow-up methods.</p> 
            <p>If you’ve been struggling with lead nurturing, missed follow-ups, or simply don’t have enough hours in the day to chase every prospect, Parlance is about to change everything for your business.</p>
            <h2>The Problem Every Business Faces</h2>
            <p>You generate leads through ads, website forms, and referrals. But then what? The biggest challenge facing lead generation isn’t getting more leads—it’s converting those leads into customers. Small improvements in conversion rates have massive impacts on ROI and overall business success.</p>
            <p>The trends we’re seeing across the industry make this challenge even more pronounced. It’s harder than ever to get leads on the phone—cold calling response rates continue to decline, and prospects are increasingly screening their calls. Even when you do manage to reach them, today’s buyers want more time and information before making a decision. They expect instant responses to their questions, detailed information at their fingertips, and the ability to move through the sales process at their own pace.</p>
            <p>Traditional sales approaches that rely on phone calls and manual follow-ups simply can’t keep up with these evolving buyer expectations. Businesses struggle with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Delayed response times to new enquiries</li>
              <li>Inconsistent follow-up processes</li>
              <li>Limited availability outside business hours</li>
              <li>Manual scheduling that leads to missed opportunities</li>
              <li>Inability to provide instant, detailed information when prospects need it</li>
            </ul>
            <p>The result? Valuable leads slip through the cracks whilst you’re busy with other aspects of your business, and prospects move on to businesses that can meet their expectations for immediate, comprehensive service.</p>
            <h2>Introducing Parlance: Your AI-Powered Conversion System</h2>
            <p>Parlance isn’t just another chatbot. It’s a sophisticated AI agent that integrates seamlessly with WhatsApp, your website, and your existing CRM to provide additional qualification, book leads onto calendars, and automate follow-up to close more deals. Think of it as your most dedicated sales representative who never sleeps, never forgets a follow-up, and never has an off day.</p>
            <p>Parlance is included as part of our service, providing a complete solution for lead conversion and appointment booking. What makes Parlance truly powerful is that it addresses the modern buyer’s expectations head-on. It provides real-time information instantly, answers detailed questions comprehensively, and maintains automated follow-up sequences that nurture prospects through their decision-making process—all without requiring them to get on a phone call until they’re ready.</p>
            <p>Parlance is powered by your individual data sets—it learns from your specific business, your customers’ interactions, and your successful conversion patterns. As more customers interact with Parlance, it becomes smarter and more effective at handling your unique sales process. All conversation data and insights are stored securely in your CRM, ensuring you maintain complete control over your customer information.</p>
            <h3>What Makes Parlance Different?</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Instant Response Times</b>: Parlance engages your leads within seconds of capture, ensuring no opportunity is missed due to delayed responses.</li>
              <li><b>Natural Conversations</b>: Gone are the days of robotic, templated responses. Parlance converses naturally, answers questions intelligently, and builds genuine rapport with your prospects.</li>
              <li><b>Seamless Appointment Booking</b>: Parlance doesn’t just chat—it books. Connected directly to your calendar, it can show availability, schedule appointments, send confirmations, and even handle rescheduling requests.</li>
              <li><b>Human Handoff</b>: When a prospect is ready to close or needs complex assistance, Parlance smoothly transfers the conversation to you, complete with conversation history and lead scoring.</li>
            </ul>
            <h2>How Parlance Works</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <b>Lead Capture & Instant Engagement:</b> The moment a lead submits their information, Parlance sends a personalised WhatsApp message confirming their interest and starting the conversation.
              </li>
              <li>
                <b>Intelligent Qualification:</b> Through natural conversation, Parlance asks the right questions to qualify your lead, understanding their budget, timeline, and specific needs.
              </li>
              <li>
                <b>Objection Handling:</b> Trained on your most common objections, Parlance provides thoughtful responses that address concerns and move prospects closer to booking.
              </li>
              <li>
                <b>Appointment Scheduling:</b> When a prospect is ready, Parlance seamlessly books them into your calendar, sends confirmation details, and sets up automated reminders.
              </li>
              <li>
                <b>Warm Handoff:</b> For complex discussions or closing conversations, Parlance transfers the chat to you with complete context and lead scoring.
              </li>
            </ol>
            <h2>The Future of Lead Nurturing is Here</h2>
            <p>The businesses that thrive in 2025 and beyond will be those that can respond fastest, follow up most consistently, and convert leads most effectively. Parlance gives you all three advantages.</p>
            <p>With automated lead nurturing becoming essential for business growth, Parlance provides human-like service at machine-like scale.</p>
            <hr />
            <p><i>For existing Sendlead customers, Parlance is now available as part of your service. Contact our support team to activate Parlance for your account and begin experiencing 3x more appointment bookings.</i></p>
            <p><i>New to Sendlead? Discover how our complete lead nurturing solution, including Parlance, can transform your business. Visit sendlead.co to learn more about our AI-powered sales automation platform.</i></p>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
} 