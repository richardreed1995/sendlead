'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard, ChevronDown, BarChart3, Target, ShieldCheck, Mail, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from './magicui/border-beam'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4' | 'item-5' | 'item-6' | 'item-7'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')
    const [openItem, setOpenItem] = useState<string>('item-1')

    const images = {
        'item-1': {
            image: '/Group 13.png',
            alt: 'Financial + ROI Modelling',
        },
        'item-2': {
            image: '/Group 12.png',
            alt: 'Build Branded Assets',
        },
        'item-3': {
            image: '/Group 14.png',
            alt: 'Qualification',
        },
        'item-4': {
            image: '/Group 15.png',
            alt: 'Follow-up',
        },
        'item-5': {
            image: '/Group 16.png',
            alt: 'Multi-Channel Integration',
        },
        'item-6': {
            image: '/Group 20.png',
            alt: 'Quality Assurance at Scale',
        },
        'item-7': {
            image: '/Group 19.png',
            alt: 'Performance Analytics + Reporting',
        },
    }

    return (
        <section id="process" className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-medium lg:text-6xl">Our 7-Step Process</h2>
                    <p>A proven, data-driven methodology for delivering the highest quality prospects—every time.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        className="w-full"
                    >
                        <AccordionItem value="item-1">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-1'}
                                onClick={() => { setOpenItem('item-1'); setActiveItem('item-1') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-1'); setActiveItem('item-1') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-1' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">1)</span>
                                    <Database className="size-6 text-primary" />
                                    Financial + ROI Modelling
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-1' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-1' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We analyse your business and provide an ROI model for working with us based on industry benchmarks.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-2'}
                                onClick={() => { setOpenItem('item-2'); setActiveItem('item-2') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-2'); setActiveItem('item-2') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-2' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">2)</span>
                                    <ShieldCheck className="size-6 text-primary" />
                                    Build Branded Assets
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-2' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-2' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We build a branded funnel for you that maintains consistency with your brand identity.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-3'}
                                onClick={() => { setOpenItem('item-3'); setActiveItem('item-3') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-3'); setActiveItem('item-3') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-3' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">3)</span>
                                    <IdCard className="size-6 text-primary" />
                                    Qualification
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-3' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-3' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We adjust our AI-powered qualification funnels to meet your specific needs and requirements.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-4'}
                                onClick={() => { setOpenItem('item-4'); setActiveItem('item-4') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-4'); setActiveItem('item-4') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-4' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">4)</span>
                                    <Mail className="size-6 text-primary" />
                                    Follow-up
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-4' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-4' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We implement our 24-step multi-touch lead nurturing sequence to increase close rates.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-5'}
                                onClick={() => { setOpenItem('item-5'); setActiveItem('item-5') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-5'); setActiveItem('item-5') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-5' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">5)</span>
                                    <Users className="size-6 text-primary" />
                                    Multi-Channel Integration
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-5' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-5' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We integrate your funnels into our multi-channel campaigns for maximum reach and effectiveness.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-6'}
                                onClick={() => { setOpenItem('item-6'); setActiveItem('item-6') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-6'); setActiveItem('item-6') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-6' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">6)</span>
                                    <Target className="size-6 text-primary" />
                                    Quality Assurance at Scale
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-6' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-6' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We monitor prospect quality continuously with automatic replacement protocols for invalid or low-quality leads.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-7'}
                                onClick={() => { setOpenItem('item-7'); setActiveItem('item-7') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-7'); setActiveItem('item-7') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-primary/40 ${openItem === 'item-7' ? 'border-primary shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-primary font-bold text-xl mr-2">7)</span>
                                    <TrendingUp className="size-6 text-primary" />
                                    Performance Analytics + Reporting
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-7' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-7' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We track conversion rates, ROI, and prospect quality with detailed attribution reporting and optimisation recommendations.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2 hidden md:flex">
                        <div className="aspect-76/59 bg-background relative w-full rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-white dark:bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                        loading="lazy"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
