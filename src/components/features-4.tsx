import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';

export default function Features() {
    return (
        <section id="overview" className="py-6 md:py-10 scroll-mt-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Six Reasons To Choose Sendlead</h2>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Exclusive, AI-qualified prospects delivered instantly to your CRM.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">100% Exclusive to You</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Every prospect comes to you and only you. No more racing 5 other companies to make first contact. You're the only business they hear from.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">AI-Powered Qualification</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Our systematic qualification process checks 15+ data points before any lead reaches you. Only serious buyers with verified budgets get through.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Instant CRM Delivery</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Prospects appear in your system within seconds of qualification. Call while they're still highly engaged and ready to buy.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Pre-Warmed Prospects</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We don't stop at generating leads. Every prospect receives a multi-touch bespoke nuture flow that's been proven to double lead conversion rates.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Transparent Pricing</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">£100 per lead, 50 leads minimum trial period. No long-term contracts, scale up and down as you need. Simple and straightforward.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Proven Results</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Our partners see 67% average improvement in conversion rates and 85% connect rates within 24 hours.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
