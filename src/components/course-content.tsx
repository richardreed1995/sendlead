"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Download, CheckCircle, Clock, FileText, Video, BookOpen, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function CourseContent() {
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set());
  const [currentModule, setCurrentModule] = useState<number | null>(null);
  const [completedChecklist, setCompletedChecklist] = useState<Set<number>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modules = [
    {
      id: 1,
      title: "Nail Your ICP & Dream Scenario",
      description: "Define the exact customers most likely to convert and map your perfect lead journey from first contact to completion.",
      duration: "45 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "Data analyst GPT", type: "Link", url: "https://chatgpt.com/g/g-68ca8174e44c8191a23c5b77fd045b69-broker-customer-data-analyst-avatar-creator" }
      ],
      content: "In this module, you'll learn how to identify your Ideal Customer Profile (ICP) and create a detailed dream scenario that guides your lead generation efforts. We'll cover the psychology behind customer decision-making and how to position your services for maximum appeal."
    },
    {
      id: 2,
      title: "The ROI Formula",
      description: "Calculate the true cost of leads vs. lifetime value, and discover why most brokers lose money on cheap leads that seem like bargains.",
      duration: "38 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "ROI calculator", type: "Link", url: "https://www.sendlead.co/roi" }
      ],
      content: "Understanding ROI is crucial for sustainable lead generation. This module breaks down the real costs of different lead sources and shows you how to calculate true profitability, not just upfront costs."
    },
    {
      id: 3,
      title: "Client Attraction Methods",
      description: "Rank lead generation methods that actually work at scale and why most brokers choose the wrong approach for their business stage.",
      duration: "52 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "Client Attraction GPT", type: "Link", url: "https://chatgpt.com/g/g-68ca8678ae588191b3e91b4256eeeea2-broker-lead-roi-calculator" }
      ],
      content: "Not all lead generation methods are created equal. Learn which approaches work best for different business stages and how to avoid the common mistakes that waste time and money."
    },
    {
      id: 4,
      title: "Master Lead Qualification",
      description: "Build your personal lead scoring system that filters out time-wasters and identifies serious buyers with verified budgets.",
      duration: "41 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "Broker Quiz Builder GPT", type: "Link", url: "https://chatgpt.com/g/g-68ca88a3913481918e8fc22fa694b041-broker-quiz-builder" }
      ],
      content: "Stop wasting time on unqualified leads. This module teaches you a systematic approach to qualifying prospects before they even reach your calendar, saving hours every week."
    },
    {
      id: 5,
      title: "Landing Pages That Convert",
      description: "Create interactive lead magnets that qualify prospects whilst building trust, plus the psychology behind forms that actually convert.",
      duration: "48 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "Landing Page Format", type: "Link", url: "https://pbs.twimg.com/media/Ge9XdF6XIAAutBF?format=png&name=medium" }
      ],
      content: "Learn the psychology behind high-converting landing pages and interactive quizzes that not only capture leads but pre-qualify them for your services."
    },
    {
      id: 6,
      title: "Build Your Follow-Up Factory",
      description: "Develop systematic nurture sequences that convert leads between multiple touches, plus CRM automation that works whilst you sleep.",
      duration: "55 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "Newsletter Format", type: "Link", url: "https://pbs.twimg.com/media/GLN8FW5WUAAkZ14?format=png&name=4096x4096" }
      ],
      content: "Most leads are lost in follow-up. This module shows you how to build automated systems that nurture prospects through the entire sales funnel without constant manual effort."
    },
    {
      id: 7,
      title: "Scale-Ready Systems",
      description: "Prepare your business infrastructure to handle high-volume lead flow without burning out, plus when to partner with proven lead providers.",
      duration: "43 minutes",
      videoId: "dQw4w9WgXcQ",
      downloads: [
        { name: "Business Coach GPT", type: "Link", url: "https://chatgpt.com/g/g-68ca912036e88191857edf49e052bca1-business-constraint-coach-for-brokers" }
      ],
      content: "Ready to scale? This final module prepares you for high-volume lead generation and shows you when and how to partner with proven lead providers for maximum growth."
    }
  ];

  const handleModuleComplete = (moduleId: number) => {
    setCompletedModules(prev => new Set([...prev, moduleId]));
    setCurrentModule(null);
  };

  const progress = (completedModules.size / modules.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/Group 28 (1).png"
                  alt="Sendlead Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Progress */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {Math.round(progress)}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#2998FD] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">Progress</span>
                  <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#2998FD] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900 mb-2">Course Modules</div>
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => {
                      setCurrentModule(module.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      currentModule === module.id
                        ? 'border-[#2998FD] bg-blue-50'
                        : completedModules.has(module.id)
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          completedModules.has(module.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {completedModules.has(module.id) ? '✓' : index + 1}
                        </div>
                        <span className="font-medium text-sm">{module.title}</span>
                      </div>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 ml-9 mt-1">{module.duration}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Course Modules</h2>
              <div className="space-y-3">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setCurrentModule(module.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      currentModule === module.id
                        ? 'border-[#2998FD] bg-blue-50'
                        : completedModules.has(module.id)
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          completedModules.has(module.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {completedModules.has(module.id) ? '✓' : index + 1}
                        </div>
                        <span className="font-medium text-sm">{module.title}</span>
                      </div>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 ml-9">{module.duration}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Mobile Intro - Show when no module selected */}
            {!currentModule && (
              <div className="lg:hidden mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="text-center mb-6">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Welcome to Your 7-Day Bootcamp
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Use the menu button above to select a module and begin your journey.
                    </p>
                  </div>
                  
                  <Button
                    onClick={() => setCurrentModule(1)}
                    className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white"
                  >
                    Start with Module 1
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {currentModule ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Video Section */}
                <div className="aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${modules[currentModule - 1].videoId}`}
                    title={modules[currentModule - 1].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Module Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {modules[currentModule - 1].title}
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{modules[currentModule - 1].duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {modules[currentModule - 1].description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Content</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {modules[currentModule - 1].content}
                    </p>
                  </div>

                  {/* Downloads */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Downloads & Resources</h3>
                    <div className="space-y-3">
                      {modules[currentModule - 1].downloads.map((download, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium text-gray-900">{download.name}</p>
                              <p className="text-sm text-gray-500">{download.type}{download.size ? ` • ${download.size}` : ''}</p>
                            </div>
                          </div>
                          {download.url ? (
                            <Link 
                              href={download.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                                <Download className="w-4 h-4 mr-2" />
                                Open Link
                              </Button>
                            </Link>
                          ) : (
                            <Button size="sm" className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Module Button */}
                  {!completedModules.has(currentModule) && (
                    <Button
                      onClick={() => handleModuleComplete(currentModule)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mark as Complete
                    </Button>
                  )}

                  {completedModules.has(currentModule) && (
                    <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">Module Completed!</span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to Your 7-Day Bootcamp
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Select a module from the sidebar to begin your journey to consistent, qualified leads.
                  </p>
                </div>
                
                {/* Checklist */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Started Checklist</h3>
                  <div className="space-y-3">
                    {[
                      {
                        id: 1,
                        text: "Bookmark this page for easy access",
                        completed: completedChecklist.has(1)
                      },
                      {
                        id: 2,
                        text: "Watch videos in order (Day 1 through Day 7)",
                        completed: completedChecklist.has(2)
                      },
                      {
                        id: 3,
                        text: "Commit to implementing changes each day",
                        completed: completedChecklist.has(3)
                      },
                      {
                        id: 4,
                        text: "Share with a friend",
                        completed: completedChecklist.has(4)
                      },
                      {
                        id: 5,
                        text: "Complete bonus actions for extra content",
                        completed: completedChecklist.has(5)
                      }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <button
                          onClick={() => {
                            if (item.completed) {
                              setCompletedChecklist(prev => {
                                const newSet = new Set(prev);
                                newSet.delete(item.id);
                                return newSet;
                              });
                            } else {
                              setCompletedChecklist(prev => new Set([...prev, item.id]));
                            }
                          }}
                          className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                            item.completed 
                              ? 'border-green-500 bg-green-500' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {item.completed && <CheckCircle className="w-3 h-3 text-white" />}
                        </button>
                        <span className="text-gray-700">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bonus Actions Link */}
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Bonus Content</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Complete social actions to unlock exclusive bonus training materials.
                  </p>
                  <Link 
                    href="/bootcamp/thank-you#social-actions" 
                    target="_blank"
                    className="inline-flex items-center text-[#2998FD] hover:text-[#1f7fd9] font-medium"
                  >
                    View Bonus Actions
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setCurrentModule(1)}
                    className="bg-[#2998FD] hover:bg-[#1f7fd9] text-white"
                  >
                    Start with Module 1
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
