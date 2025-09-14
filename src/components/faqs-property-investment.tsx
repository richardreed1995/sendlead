"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What exactly do I get with your property investment leads?",
    answer: "Qualified, exclusive property investment prospects delivered to your CRM with complete contact details, qualification data, and automated nurture sequences. Everything needed to close more property investment deals consistently."
  },
  {
    question: "How long does setup take?",
    answer: "48-72 hours maximum. We don't mess about with lengthy onboarding processes. You'll be receiving qualified leads within three business days of signing up."
  },
  {
    question: "Are your leads actually exclusive?",
    answer: "Yes. Unlike lead companies that sell the same lead to multiple brokers, every prospect comes to you and only you. We legally guarantee exclusivity in our contract."
  },
  {
    question: "How do you qualify these property investment leads?",
    answer: "15-point qualification system including investment criteria, budget verification, timeline, and application readiness. Time-wasters get filtered out before they reach you."
  },
  {
    question: "What's your replacement policy?",
    answer: "We replace any lead with invalid contact details or obvious data issues. On average, we replace 4-7% of leads. Record any issues in your CRM and we'll verify and replace immediately."
  },
  {
    question: "Will this work for my type of property investment business?",
    answer: "Our system works for buy-to-let investments, commercial property investments, off-plan investments, and general property investment brokers. We adapt the qualification criteria to match your investment focus."
  },
  {
    question: "What's the investment?",
    answer: "Fixed cost per lead. Most partners start with a test order of 25-50 leads to test the quality and scale up their volume from there. No setup fees, no monthly retainers, no long-term contracts."
  }
];

export default function FAQSPropertyInvestment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Straightforward answers to common questions</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/get-started">
            <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
