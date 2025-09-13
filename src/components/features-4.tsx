import { Users, Filter, Clock, Thermometer, Calculator, TrendingUp } from 'lucide-react';

export default function Features() {
    return (
        <section id="overview" className="py-6 md:py-10 scroll-mt-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Six Challenges We Solve</h2>
                    <p className="text-muted-foreground text-base md:text-lg">
                        High-quality prospects that only come to you, delivered straight to your CRM.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Users className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Shared Leads</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Every prospect comes to you and only you. No more racing 5 other companies to make first contact. You're the only business they hear from.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Filter className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Unqualified Leads</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Our systematic qualification process checks 15+ data points before any lead reaches you. Only serious buyers with verified budgets get through.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Clock className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Slow Response Times</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Prospects appear in your system within seconds of qualification. Call whilst they're still highly engaged and ready to buy.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Thermometer className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Cold Prospects</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We don't stop at generating leads. Every prospect receives a multi-touch bespoke nurture flow that's been proven to double lead conversion rates.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Calculator className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Unpredictable Pricing</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Fixed price per lead. No long-term contracts, scale up and down as you need. Simple and straightforward.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Poor Conversions</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Our partners see 67% average improvement in conversion rates and 85% connect rates within 24 hours.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
