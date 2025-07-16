import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'shield-check',
            question: 'Are leads completely exclusive to my business?',
            answer: 'Yes, absolutely. Each lead is exclusively yours and never shared with competing businesses in your sector.',
        },
        {
            id: 'item-2',
            icon: 'users',
            question: 'What sets you apart from other providers?',
            answer: "We're your growth partner, not just a lead source. We provide sales nurturing support (at no additional cost) and a 24 step lead nurturing process if your team is missing important systems such as email follow-up flows, SMS followups, and other sales processes.",
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'How quickly will I receive leads after signing up?',
            answer: "Leads are delivered instantly to your CRM the moment they're qualified. Setup typically takes 24-48 hours after contract signing.",
        },
        {
            id: 'item-4',
            icon: 'brain-circuit',
            question: 'How do you qualify these leads?',
            answer: "Our proprietary machine learning system qualifies leads across 14+ data points. We continue to qualify after we’ve generated the lead to provide additional context to your sales team (at no cost).",
        },
        {
            id: 'item-5',
            icon: 'globe',
            question: 'How do you acquire the leads?',
            answer: 'We generate leads across Meta, Google Ads, Native, and Organic.',
        },
        {
            id: 'item-6',
            icon: 'pound-sterling',
            question: 'How is pricing structured?',
            answer: 'We charge a flat rate of £100 per lead.',
        },
        {
            id: 'item-7',
            icon: 'alert-triangle',
            question: 'Is there a minimum purchase requirement?',
            answer: 'We require a minimum order of £5,000 worth of leads. After that, you can adjust volume, modify targeting criteria, or pause campaigns at any time.',
        },
        {
            id: 'item-8',
            icon: 'check-circle',
            question: 'Do you guarantee valid leads?',
            answer: 'We verify all phone numbers using OTP and replace any invalid leads that have fake information.',
        },
        {
            id: 'item-9',
            icon: 'lock',
            question: 'Are you compliant with data privacy regulations?',
            answer: 'Our enterprise-grade lead distribution software ensures full compliance with GDPR, ICO guidelines, and industry-specific regulations including FCA requirements for financial services and healthcare compliance standards.',
        },
        {
            id: 'item-10',
            icon: 'arrow-right-circle',
            question: 'What are the next steps to get started?',
            answer: "Complete our simple application form to see if you qualify. Once submitted, we'll schedule a brief call to address any questions and then begin the intake process.",
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
