"use client";

import { Button } from "@/components/ui/button";
import { Play, BookOpen, Download, CheckCircle, ChevronDown, Youtube, Instagram, Twitter, Facebook, Star, MessageCircle, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BootcampThankYou() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [completedActions, setCompletedActions] = useState<Set<number>>(new Set());

  const steps = [
    {
      step: "Step 1",
      title: "Watch This Video",
      description: "Start with our comprehensive overview video that explains the entire 7-day system and what you'll achieve.",
      icon: Play,
      action: "Watch Video",
      link: "#"
    },
    {
      step: "Step 2", 
      title: "Open Course Here",
      description: "Access your complete 7-day bootcamp materials and work through each day's content at your own pace.",
      icon: BookOpen,
      action: "Open Course",
      link: "#"
    },
    {
      step: "Step 3",
      title: "Download Templates Here", 
      description: "Get all the templates, worksheets, and tools you need to implement each day's strategies immediately.",
      icon: Download,
      action: "Download Templates",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "How do I access the bootcamp materials?",
      answer: "Once you've completed the form, you'll receive an email with links to all materials. You can also access them directly through the course portal using the links above."
    },
    {
      question: "How long do I have access to the materials?",
      answer: "You have lifetime access to all bootcamp materials, including any future updates and improvements we make to the content."
    },
    {
      question: "What if I can't complete it in 7 days?",
      answer: "No problem! The bootcamp is designed to be flexible. You can work through the materials at your own pace and revisit any day's content whenever you need."
    },
    {
      question: "Do I need any special software or tools?",
      answer: "No special software required. We'll show you how to use simple, affordable tools that most brokers already have access to. The focus is on strategy, not expensive technology."
    },
    {
      question: "What if I have questions during the bootcamp?",
      answer: "You can reach out to us anytime with questions. We're here to help you get the most out of the bootcamp and ensure you see real results."
    },
    {
      question: "Can I share this with my team?",
      answer: "The bootcamp is designed for individual use. If you'd like to share it with your team, please contact us to discuss team licensing options."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-between items-center py-2 sm:py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/Group 28 (1).png"
                  alt="Sendlead Logo"
                  width={80}
                  height={27}
                  className="h-5 w-auto sm:h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Success Header with Video */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
                  Welcome to the Bootcamp!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  You've successfully joined our 7-Day Lead Generation Bootcamp. Watch the welcome video below to get started.
                </p>
                
                {/* Welcome Video Embed */}
                <div className="relative w-full max-w-4xl mx-auto mb-8">
                  <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Welcome to the 7-Day Lead Generation Bootcamp"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Access Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
            <h2 className="text-balance text-3xl font-medium lg:text-4xl">Step 1: Access Your Course</h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#2998FD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Access Your Course</h3>
                  <p className="text-gray-600 mb-6">
                    Your complete 7-day bootcamp is ready. Click below to access all modules, videos, and downloads.
                  </p>
                </div>
                
                <Link 
                  href="/bootcamp/course" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <BookOpen className="w-6 h-6 mr-3" />
                    Open Course
                  </Button>
                </Link>
                
                <p className="text-sm text-gray-500 mt-4">
                  The course will open in a new tab with instant access to all materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Actions Section */}
        <section id="social-actions" className="py-12 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-8">
              <h2 className="text-balance text-3xl font-medium lg:text-4xl">Step 2: Unlock Bonus Content</h2>
              <p className="text-muted-foreground text-base">
                Complete actions to access exclusive bonus materials
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Bonus Actions</h3>
                  <div className="text-sm text-gray-500">
                    {completedActions.size}/8
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-[#2998FD] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedActions.size / 8) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    title: "Follow us on Instagram",
                    icon: Instagram,
                    action: "Follow",
                    link: "https://instagram.com/sendlead",
                    completed: completedActions.has(1)
                  },
                  {
                    id: 2,
                    title: "Subscribe to YouTube",
                    icon: Youtube,
                    action: "Subscribe",
                    link: "https://youtube.com/@sendlead",
                    completed: completedActions.has(2)
                  },
                  {
                    id: 3,
                    title: "Follow us on Twitter",
                    icon: Twitter,
                    action: "Follow",
                    link: "https://twitter.com/sendlead",
                    completed: completedActions.has(3)
                  },
                  {
                    id: 4,
                    title: "Like our Facebook page",
                    icon: Facebook,
                    action: "Like",
                    link: "https://facebook.com/sendlead",
                    completed: completedActions.has(4)
                  },
                  {
                    id: 5,
                    title: "Leave a Trustpilot review",
                    icon: Star,
                    action: "Review",
                    link: "https://trustpilot.com/review/sendlead.com",
                    completed: completedActions.has(5)
                  },
                  {
                    id: 6,
                    title: "Leave a Google review",
                    icon: MessageCircle,
                    action: "Review",
                    link: "https://g.page/r/sendlead/review",
                    completed: completedActions.has(6)
                  },
                  {
                    id: 7,
                    title: "Share on LinkedIn",
                    icon: Share2,
                    action: "Share",
                    link: "https://linkedin.com/company/sendlead",
                    completed: completedActions.has(7)
                  },
                  {
                    id: 8,
                    title: "Refer a friend",
                    icon: Heart,
                    action: "Refer",
                    link: "/bootcamp",
                    completed: completedActions.has(8)
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.id} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      item.completed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.completed ? 'bg-green-500' : 'bg-gray-200'
                        }`}>
                          {item.completed ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <IconComponent className="w-4 h-4 text-gray-600" />
                          )}
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.completed ? (
                          <span className="text-green-600 font-medium text-xs">Done</span>
                        ) : (
                          <Button
                            size="sm"
                            className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white text-xs px-3 py-1"
                            onClick={() => {
                              window.open(item.link, '_blank', 'noopener,noreferrer');
                              setCompletedActions(prev => new Set([...prev, item.id]));
                            }}
                          >
                            {item.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {completedActions.size === 8 && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      🎉 Congratulations! You've unlocked our exclusive bonus training: "Advanced Lead Qualification Secrets"
                    </span>
                  </div>
                  <p className="text-green-700 text-sm mt-2 text-center">
                    Check your email for access to this premium content.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
              <h2 className="text-balance text-4xl font-medium lg:text-5xl">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-base md:text-lg">Everything you need to know about your bootcamp access</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-4">
                This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT /endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Earnings Disclaimer:</h4>
                <p className="mb-2">
                  We don't believe in get-rich-quick programs or short cuts. We believe in hard work, adding value and serving others. And that's what our programs and information we share are designed to help you do. As stated by law, we can not and do not make any guarantees about your own ability to get results or earn any money with our ideas, information, programs or strategies. We don't know you and, besides, your results in life are up to you. Agreed? We're here to help by giving you our greatest strategies to move you forward, faster. However, nothing on this page or any of our websites or emails is a promise or guarantee of future earnings. Any financial numbers referenced here, or on any of our sites or emails, are simply estimates or projections or past results, and should not be considered exact, actual or as a promise of potential earnings – all numbers are illustrative only.
                </p>
                <p className="mb-2">
                  Results may vary and testimonials are not claimed to represent typical results. All testimonials are real. These results are meant as a showcase of what the best, most motivated and driven clients have done and should not be taken as average or typical results.
                </p>
                <p>
                  You should perform your own due diligence and use your own best judgment prior to making any investment decision pertaining to your business. By virtue of visiting this site or interacting with any portion of this site, you agree that you're fully responsible for the investments you make and any outcomes that may result.
                </p>
              </div>
              
              <p className="font-semibold">
                COPYRIGHT 2025 |  <Link href="/privacy-policy" className="underline hover:text-gray-800">PRIVACY POLICY</Link> | <Link href="/terms-conditions" className="underline hover:text-gray-800">TERMS & CONDITIONS</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
