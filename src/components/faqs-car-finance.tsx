"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What exactly do I get with your car finance leads?",
    answer: "Qualified, exclusive car finance prospects delivered to your CRM with complete contact details, qualification data, and automated nurture sequences. Everything needed to close more car finance deals consistently."
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
    question: "How do you qualify these car finance leads?",
    answer: "15-point qualification system including income verification, deposit availability, credit awareness, vehicle preferences, timeline, and finance requirements. Time-wasters get filtered out before they reach you."
  },
  {
    question: "What's your replacement policy?",
    answer: "We replace any lead with invalid contact details or obvious data issues. On average, we replace 4-7% of leads. Record any issues in your CRM and we'll verify and replace immediately."
  },
  {
    question: "Will this work for my type of car finance business?",
    answer: "Our system works for new car finance, used car specialists, commercial vehicle finance, motorcycle finance, and general motor finance brokers. We adapt the qualification criteria to match your lending focus."
  },
  {
    question: "What's the investment?",
    answer: "£100 per qualified lead. 50 lead minimum trial. No setup fees, no monthly retainers, no long-term contracts. Scale up or down based on your capacity and results."
  }
];

export default function FAQSCarFinance() {
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
