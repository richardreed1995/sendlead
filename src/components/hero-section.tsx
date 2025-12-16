import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { TextEffect } from './ui/text-effect'
import { AnimatedGroup } from './ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection({ hasAnnouncementBar = false }: { hasAnnouncementBar?: boolean }) {
    return (
        <>
            <HeroHeader hasAnnouncementBar={hasAnnouncementBar} />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        
                        {/* Mobile Layout */}
                        <div className="block md:hidden bg-white">
                            <div className="mx-auto max-w-7xl px-4 pt-0 pb-8">
                                <div className="text-center">
                                    {/* Trust indicator */}
                                    <div className="mb-4 -mt-2">
                                        <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full text-sm text-gray-700">
                                            <span className="text-yellow-500">★★★★★</span>
                                            <span>Trusted by Leading Brokers</span>
                                        </div>
                                    </div>

                                    {/* Main headline */}
                                    <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                        Get Qualified Leads Delivered To Your CRM
                                    </h1>

                                    {/* Description */}
                                    <p className="text-base text-gray-600 mb-2 max-w-3xl mx-auto leading-relaxed">
                                        Qualified leads for finance, healthcare, and insurance businesses. Pay-per-lead, real-time delivery, no setup fees.
                                    </p>

                                    {/* Dashboard Image */}
                                    <div className="relative mx-auto max-w-4xl mb-8">
                                        <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
                                            <Image
                                                className="w-full h-auto rounded-xl object-cover object-left-top"
                                                src="/Dashboard1.jpg"
                                                alt="Sendlead dashboard screenshot"
                                                width={1200}
                                                height={750}
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* CTA Button - Below Image on Mobile */}
                                    <div>
                                        <Link href="/get-started">
                                            <Button 
                                                size="lg" 
                                                className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:block">
                            <div className="mx-auto max-w-7xl px-6">
                                <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                    <AnimatedGroup variants={transitionVariants}>
                                        <Link
                                            href="#link"
                                            className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                            <Link href="/blog/parlance-ai-agent" className="text-foreground text-xs sm:text-sm hover:text-primary transition-colors">
                                                New: Launching Parlance - AI Setting Agent
                                            </Link>
                                            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </AnimatedGroup>

                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="h1"
                                        className="mt-10 text-balance text-4xl sm:text-5xl md:text-6xl lg:mt-16 lg:text-7xl xl:text-[5.25rem] font-medium">
                                        Get Qualified Leads Delivered To Your CRM
                                    </TextEffect>
                                    <TextEffect
                                        per="line"
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.5}
                                        as="p"
                                        className="mx-auto mt-8 max-w-3xl text-balance text-base sm:text-lg">
                                        We generate qualified leads for finance, healthcare, and insurance businesses.
                                    </TextEffect>
                                    <TextEffect
                                        per="line"
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.7}
                                        as="p"
                                        className="mx-auto mt-2 max-w-3xl text-balance text-sm sm:text-base text-muted-foreground">
                                        Pay-per-lead, real-time delivery, CRM ready, no setup fees.
                                    </TextEffect>

                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                        <div
                                            key={1}
                                            className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="rounded-xl px-5 text-base bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                                                <Link href="/get-started">
                                                    <span className="text-nowrap">Get Started</span>
                                                </Link>
                                            </Button>
                                        </div>
                                    </AnimatedGroup>
                                </div>
                            </div>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}>
                                <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                    />
                                    <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                        <Image
                                            className="bg-background aspect-16/10 relative rounded-2xl w-full h-auto object-cover object-left-top"
                                            src="/Dashboard1.jpg"
                                            alt="Sendlead dashboard screenshot"
                                            width={2700}
                                            height={1440}
                                            priority
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
