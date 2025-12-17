"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap, Mail, Plug, Layers } from "lucide-react"
function ReasonBadge({ number }: { number: number }) {
    return (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#2998FD]/10 text-[#2998FD] border border-[#2998FD]/20">
            Reason #{number}
        </span>
    )
}

export default function WhySendleadPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-8 md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 md:mb-6">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span>Trusted by brokers and sales teams across the UK</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl font-bold text-gray-900">
                        7 Reasons Why You Should Partner With{" "}
                        <span className="text-[#2998FD]">Sendlead</span>
                    </h1>

                    {/* Mobile Hero Image */}
                    <div className="mt-6 md:hidden">
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                            <Image
                                src="/Dashboard1.jpg"
                                alt="Sendlead dashboard"
                                fill
                                className="object-cover object-left-top"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reasons Section */}
            <section className="pb-20">
                <div className="mx-auto max-w-6xl px-4">
                    
                    {/* Reason 1 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-32">
                        <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-5xl font-bold mb-2">100%</div>
                                <div className="text-xl font-medium mb-4">Exclusive Leads</div>
                                <div className="mt-4 bg-[#2998FD] rounded-full px-6 py-2 inline-block text-sm font-semibold">
                                    PAY PER QUALIFIED LEAD
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <ReasonBadge number={1} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                You Only Pay For Qualified, Exclusive Leads
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                No ad spend. No retainers. No setup fees. No wasted budget on tyre-kickers.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You pay a fixed price per lead, and every single one is yours alone. We legally guarantee exclusivity in our contract, so you'll never compete with another broker chasing the same prospect.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We're ruthless about quality. Our 15+ point qualification system filters out 87% of prospects before they ever reach you. We check for genuine intent, financial capacity, decision-making authority, and readiness to proceed. Only prospects who meet every criteria make it through.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                You're not paying for clicks or impressions. You're paying for people who are ready to have a conversation.
                            </p>
                        </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-32">
                        <div className="order-2 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/Dashboard1.jpg"
                                alt="Dashboard preview"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-1">
                            <ReasonBadge number={2} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                Start With a Small Test Order, No Commitment Required
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We believe in earning your business, not locking you into it.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                That's why we start every partnership with a simple test order of 50 leads. See the quality for yourself. Judge us on results, not sales pitches.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                If it works, scale up. If you want to take a different direction, no problem. No contracts locking you in, no awkward conversations, no pressure.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                This is how confident we are in what we deliver.
                            </p>
                        </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-32">
                        <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2998FD] to-[#1f7fd9] p-8 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-5xl font-bold mb-2">48</div>
                                <div className="text-xl font-medium">Hours To Launch</div>
                                <div className="mt-4 bg-white/20 rounded-full px-6 py-2 inline-block text-sm font-semibold">
                                    REAL-TIME DELIVERY
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <ReasonBadge number={3} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                Your Team Will Be Receiving Leads Within 48 Hours
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Once you place your first order, we move fast.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We'll build a branded funnel that looks and feels like your business. We'll integrate with your CRM, set up real-time notifications, and have everything ready to go within 48 hours.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Leads are delivered the moment they qualify. Straight to your email, a shared Google Sheet, and directly into your CRM if you have one. Your team can follow up while prospects are still engaged and in buying mode.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                No lengthy onboarding. No waiting weeks to see results. You'll be up and running before the week is out.
                            </p>
                        </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-32">
                        <div className="order-2 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 p-6 md:p-8">
                            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xs md:text-sm font-bold text-gray-900 text-center">Free Nurture</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 text-center">Sequence</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Layers className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xs md:text-sm font-bold text-gray-900 text-center">Branded</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 text-center">Match Screen</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Plug className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xs md:text-sm font-bold text-gray-900 text-center">CRM</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 text-center">Integration</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xs md:text-sm font-bold text-gray-900 text-center">Real-Time</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 text-center">Notifications</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-1">
                            <ReasonBadge number={4} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                We Help You Convert, Not Just Generate
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Most lead providers hand over a list and disappear. We don't.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Included with your first order, you'll receive a free nurture sequence designed to warm up your leads before your team even picks up the phone. Plug it into your existing system and let it run alongside your sales process.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Every prospect also sees a dedicated matching screen tailored to your business, complete with clear next steps. This branded experience builds trust from first contact and improves conversion rates before your brokers make a single call.
                            </p>
                        </div>
                    </div>

                    {/* Reason 5 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-32">
                        <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                            <Image
                                src="/dashboar3.jpg"
                                alt="Lead verification"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <ReasonBadge number={5} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                Every Lead Is Verified Before It Reaches You
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Nothing kills momentum like chasing dead numbers and fake emails.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                That's why we verify every lead in real-time before it enters your system. We use OTP verification on both email and phone, so you know the contact details are genuine before your team picks up the phone.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                This means fewer wasted calls, higher connect rates, and more meaningful conversations for your sales team.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                If a lead does slip through that doesn't meet our standards, we replace it. No questions asked.
                            </p>
                        </div>
                    </div>

                    {/* Reason 6 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-32">
                        <div className="order-2 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col items-center justify-center text-white">
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">£0</div>
                                <div className="text-xl font-medium mb-4">Hidden Costs</div>
                                <div className="text-sm text-gray-300">Transparent Pricing</div>
                            </div>
                        </div>
                        <div className="order-1 md:order-1">
                            <ReasonBadge number={6} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                Transparent Pricing With No Hidden Costs
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                What you see is what you pay. Full stop.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                No setup fees. No platform costs. No minimum spend requirements beyond your test order. No surprise charges buried in the small print.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You agree a price per lead upfront, and that's exactly what you pay. Scale up when business is good, scale down when it's quieter. We flex with your needs, not against them.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                This isn't a retainer relationship where you're paying whether leads come in or not. You only pay for what we deliver.
                            </p>
                        </div>
                    </div>

                    {/* Reason 7 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-20">
                        <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 p-6 md:p-8">
                            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Users className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xl md:text-2xl font-bold text-gray-900">500+</div>
                                    <div className="text-[10px] md:text-xs text-gray-500">Clients</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xl md:text-2xl font-bold text-gray-900">10M+</div>
                                    <div className="text-[10px] md:text-xs text-gray-500">Leads</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Star className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xl md:text-2xl font-bold text-gray-900">4.9/5</div>
                                    <div className="text-[10px] md:text-xs text-gray-500">Rating</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xl md:text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-[10px] md:text-xs text-gray-500">Guarantee</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <ReasonBadge number={7} />
                            <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-900">
                                Built For Teams Who Are Ready To Scale
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                If you've already got a solid sales process and a team who know how to convert, we're the missing piece.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You don't need more leads. You need better leads. Exclusive prospects who've been qualified, verified, and pre-warmed before they hit your CRM.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We handle the top of the funnel so your team can focus on what they do best: turning conversations into customers.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Whether you need 50 leads a month or 500, we scale with you. No penalties for slowing down, no pressure to overcommit. Just a reliable partner who delivers quality, month after month.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-16 px-4">
                <div className="mx-auto max-w-3xl">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
                        {/* Trust indicators */}
                        <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span>Rated 4.9/5 based on 500+ reviews</span>
                        </div>

                        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to see what qualified, exclusive leads look like?
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-6">
                            Start with a test order of 50 leads. No ongoing commitment, no setup fees, just results.
                        </p>

                        <Link href="/get-started">
                            <Button 
                                size="lg" 
                                className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>

                        <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-1">
                            <Shield className="w-3 h-3" />
                            100% Money-Back Guarantee
                        </p>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-8 pb-24 md:pb-8 border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Sendlead. All rights reserved.</p>
                </div>
            </footer>

            {/* Sticky Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 md:hidden">
                <div className="px-4 py-3">
                    <Link href="/get-started" className="block">
                        <Button 
                            size="lg" 
                            className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white py-4 text-base font-semibold rounded-xl shadow-lg"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <p className="text-center text-xs text-gray-500 mt-2">
                        No setup fees • Start with 50 leads
                    </p>
                </div>
            </div>
        </div>
    )
}
