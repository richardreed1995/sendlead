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
                        <span>Trusted by leading brokers and sales teams</span>
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
                                Get qualified leads without worrying about ad spend, retainers, setup fees, or budget wasted on unqualified prospects.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Our 15+ point qualification system filters out 87% of prospects before they reach you. We check for genuine intent, financial capacity, decision-making authority, and readiness to proceed. Only prospects who meet every criterion make it through.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                You pay for people who are ready to have a conversation, not for clicks or impressions.
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
                                Start With a Small Test Order With No Commitment Required
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We believe in earning your business rather than locking you into it.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Every partnership starts with a test order of 50 leads. You can see the quality for yourself and judge us on results rather than sales pitches.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                If the leads work for you, you can scale up. If you want to take a different direction, that is your choice. There are no long-term contracts and no minimum ongoing commitments.
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
                                Your Team Will Receive Leads Within 48 Hours
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Once you place your first order, we get you set up quickly.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We integrate with your CRM, set up real-time notifications, and have everything ready within 48 hours. Leads are delivered the moment they qualify.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                There is no lengthy onboarding process. You will be up and running within two days of placing your order.
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
                                With your first order, you receive a free nurture sequence designed to warm up your leads before your team contacts them. You can plug it into your existing system and let it run alongside your sales process.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Each prospect also sees a dedicated matching screen tailored to your business with clear next steps. This branded experience helps build trust from first contact and supports conversion rates before your brokers make a call.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                We focus on helping you close deals, not just filling your pipeline.
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
                                Chasing incorrect phone numbers and invalid emails wastes your team's time.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We verify every lead in real-time before it enters your system. We use OTP verification on both email and phone, so you know the contact details are accurate before your team picks up the phone.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                This results in fewer wasted calls, higher connect rates, and more productive conversations for your sales team.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                                If a lead does not meet our standards, we replace it without charge.
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
                                What you see is what you pay.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                There are no setup fees, no platform costs, no minimum spend requirements beyond your test order, and no additional charges.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You agree a price per lead upfront, and that is what you pay. You can scale up when business increases and scale down when it slows. We adjust to your needs.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                This is not a retainer relationship where you pay regardless of results. You only pay for the leads we deliver.
                            </p>
                        </div>
                    </div>

                    {/* Reason 7 */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mb-16 md:mb-20">
                        <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 p-6 md:p-8">
                            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Users className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xl md:text-2xl font-bold text-gray-900">50+</div>
                                    <div className="text-[10px] md:text-xs text-gray-500">Clients</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-lg md:text-xl font-bold text-gray-900">100,000+</div>
                                    <div className="text-[10px] md:text-xs text-gray-500">Leads</div>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 flex flex-col items-center justify-center">
                                    <Star className="w-6 h-6 md:w-8 md:h-8 text-[#2998FD] mb-1 md:mb-2" />
                                    <div className="text-xl md:text-2xl font-bold text-gray-900">5/5</div>
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
                                If you have a working sales process and a team who know how to convert, we provide the missing piece.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You need qualified leads, not more leads. We deliver exclusive prospects who have been qualified, verified, and pre-warmed before they reach your CRM.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We handle the top of the funnel so your team can focus on what they do well: turning conversations into customers.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Whether you need 50 leads a month or 500, we scale with you. There are no penalties for reducing volume and no pressure to overcommit. We aim to be a reliable partner who delivers consistent quality.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-16 px-4">
                <div className="mx-auto max-w-3xl">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
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


