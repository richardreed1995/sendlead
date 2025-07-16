"use client";

import { BarChart3, Target, ShieldCheck } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../card';

const methodologyCards = [
  {
    icon: <BarChart3 className="size-7 text-zinc-300" />, // Conversion Optimisation
    title: 'Conversion Optimisation',
    description:
      "We don't stop at lead generation—we implement complete sales systems including email follow-up flows, SMS sequences, and nurturing processes to maximise your close rates. This ensures leads convert faster and at higher rates than traditional lead-only approaches.",
  },
  {
    icon: <Target className="size-7 text-zinc-300" />, // Revenue Attribution
    title: 'Revenue Attribution',
    description:
      'Our system tracks the complete customer journey from lead to revenue, allowing us to identify which lead characteristics correlate with highest lifetime value. We then optimise targeting to prioritise prospects with the greatest revenue potential, not just volume.',
  },
  {
    icon: <ShieldCheck className="size-7 text-zinc-300" />, // Brand Consistency
    title: 'Brand Consistency',
    description:
      'We create fully branded funnels that match your business identity, ensuring prospects experience seamless brand consistency from their first click through to closing. This maintains trust and professionalism throughout the entire customer journey, unlike generic lead forms that disconnect prospects from your brand.',
  },
  {
    icon: <BarChart3 className="size-7 text-zinc-300" />, // Real-time Verification
    title: 'Real-time Verification',
    description:
      'We verify email and phone numbers in real-time using OTP (One-Time Password) verification, whilst monitoring lead quality through comprehensive tracking metrics. Our 14+ point qualification system ensures consistent lead standards, and we provide transparent performance statistics to prove ROI.',
  },
];

const steps = [
  {
    title: 'Financial + ROI Modelling',
    description:
      'We analyse your business and provide an ROI model for working with us based on industry benchmarks.',
  },
  {
    title: 'Build Branded Assets',
    description:
      'We build a branded funnel for you that maintains consistency with your brand identity.',
  },
  {
    title: 'Qualification',
    description:
      'We adjust our AI-powered qualification funnels to meet your specific needs and requirements.',
  },
  {
    title: 'Follow-up',
    description:
      'We implement our 24-step multi-touch lead nurturing sequence to increase close rates.',
  },
  {
    title: 'Multi-Channel Integration',
    description:
      'We integrate your funnels into our multi-channel campaigns for maximum reach and effectiveness.',
  },
  {
    title: 'Quality Assurance at Scale',
    description:
      'We monitor prospect quality continuously with automatic replacement protocols for invalid or low-quality leads.',
  },
  {
    title: 'Performance Analytics + Reporting',
    description:
      'We track conversion rates, ROI, and prospect quality with detailed attribution reporting and optimisation recommendations.',
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-12 md:py-20 bg-zinc-900 text-white scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        <div className="mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl mb-4">Our Methodology</h2>
          <p className="text-zinc-300 text-lg">We focus on metrics beyond leads, such as CLTV, ROI, and revenue. We experiment, yes — but we do it like scientists. Precise, focused, and curious.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {methodologyCards.map((card) => (
            <Card key={card.title} className="bg-zinc-950 border-zinc-800 text-white shadow-md flex flex-col h-full">
              <CardHeader className="flex flex-col items-start gap-1 border-none px-4 pt-5 pb-0">
                <div className="flex items-center gap-2 w-full">
                  {card.icon}
                  <CardTitle className="text-left text-base font-semibold">{card.title}</CardTitle>
                </div>
                <hr className="border-t border-zinc-700 my-3 w-full" />
              </CardHeader>
              <CardContent className="flex-1 flex items-start justify-start px-4 pb-5 pt-0">
                <CardDescription className="text-left text-zinc-300 text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 