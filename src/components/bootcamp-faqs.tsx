"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "How do I access the bootcamp?",
    answer: "You get complete access to all 7 video modules, downloadable templates, custom GPTs, and resources. Once you're given access, you'll have everything you need to start implementing the system."
  },
  {
    question: "How long does the bootcamp take to complete?",
    answer: "The bootcamp is designed to be completed over 7 days, but you can work at your own pace. Most brokers spend 30-60 minutes per day. You can revisit any day's content whenever you need."
  },
  {
    question: "What exactly will I learn in the 7 days?",
    answer: "You'll learn how to identify your ideal customers, build qualification systems, create converting landing pages, develop follow-up sequences, and scale your lead generation. Each day builds on the previous one, giving you a complete system by the end."
  },
  {
    question: "Do I need any special tools or software?",
    answer: "No special tools required. We'll show you how to use simple, affordable tools that most brokers already have access to. The focus is on strategy and systems, not expensive technology."
  },
  {
    question: "Will this work for my type of finance business?",
    answer: "Yes, the strategies work for all types of finance brokers - mortgages, business loans, property investment, secured loans, and more. We'll show you how to adapt the system to your specific niche and target market."
  },
  {
    question: "What if I'm already getting leads but they're not converting?",
    answer: "This bootcamp will help you identify why your current leads aren't converting and show you how to fix your qualification process. Many brokers discover they're attracting the wrong prospects or have gaps in their follow-up system."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most brokers start seeing improved lead quality within the first week of implementing the strategies. The exact timeline depends on how quickly you can implement the systems, but we provide step-by-step guidance to accelerate your results."
  }
];

export default function BootcampFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white">
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
        
        <div className="text-center">
          <Link href="#hero">
            <Button size="lg" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              Access Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
