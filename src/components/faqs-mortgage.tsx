"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly do I get with your mortgage leads?",
    answer: "Qualified, exclusive mortgage prospects delivered to your CRM with complete contact details, qualification data, and automated nurture sequences. Everything needed to close more mortgages consistently."
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
    question: "How do you qualify these mortgage leads?",
    answer: "15-point qualification system including income verification, deposit availability, credit awareness, property preferences, timeline, and lending criteria. Time-wasters get filtered out before they reach you."
  },
  {
    question: "What's your replacement policy?",
    answer: "We replace any lead with invalid contact details or obvious data issues. On average, we replace 4-7% of leads. Record any issues in your CRM and we'll verify and replace immediately."
  },
  {
    question: "Will this work for my type of mortgage business?",
    answer: "Our system works for first-time buyer specialists, remortgage experts, commercial brokers, buy-to-let specialists, and general mortgage advisers. We adapt the qualification criteria to match your lending focus."
  },
  {
    question: "What's the investment?",
    answer: "Fixed cost per lead. Most partners start with a test order of 25-50 leads to test the quality and scale up their volume from there. No setup fees, no monthly retainers, no long-term contracts."
  }
];

export default function FAQsMortgage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-base md:text-lg">Straightforward answers to common questions</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
