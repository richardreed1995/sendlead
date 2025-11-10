"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What do your wealth management leads include?",
    answer: "Every enquiry includes full contact details, investable asset range, advisory needs, time horizon, and risk appetite. You receive prospects who are actively searching for ongoing wealth planning support.",
  },
  {
    question: "How quickly can we launch?",
    answer: "We typically go live inside 72 hours. That covers brand alignment, funnel build, compliance checks, and the first campaigns switched on.",
  },
  {
    question: "Are the leads compliant and exclusive?",
    answer: "Yes. We generate consented first-party leads that are never shared with other wealth firms. Data capture and storage meet UK regulatory requirements.",
  },
  {
    question: "How do you ensure they are high-value investors?",
    answer: "We use layered financial data, net worth signals, and qualification questions to verify asset levels before a lead is sent to you.",
  },
  {
    question: "Can you tailor campaigns to our investment philosophy?",
    answer: "Absolutely. We adapt messaging, qualification criteria, and nurture content to reflect your investment approach and advisory structure.",
  },
  {
    question: "What happens if details are wrong?",
    answer: "If any prospect has incorrect contact information, raise it within seven days and we will replace them at no cost.",
  },
  {
    question: "Do you integrate with our CRM?",
    answer: "We integrate with all major CRMs so leads, notes, and follow-up automations flow straight into your existing toolkit.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. Start with a pilot order and scale once you see the quality. We work on a transparent cost-per-lead basis without retainers.",
  },
];

export default function FAQsWealthManagement() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-base md:text-lg">Clear answers about our wealth management lead programme</p>
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
                  className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
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

