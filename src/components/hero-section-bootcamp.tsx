"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function HeroSectionBootcamp() {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      alert('Please enter your email address.');
      return;
    }
    
    // Trigger Make.com webhook
    try {
      await fetch('https://hook.eu2.make.com/bxpia5ck9yc6jqo695nv4n4a1pk0i7dp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          timestamp: new Date().toISOString(),
          source: 'bootcamp_signup',
          page: 'bootcamp'
        })
      });
      console.log('Make.com webhook triggered successfully');
    } catch (error) {
      console.error('Failed to trigger Make.com webhook:', error);
    }
    
    // Redirect to course page
    window.location.href = '/bootcamp/course';
  };


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background py-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
              <span>🎟️ Free 7-Day Bootcamp for Finance Brokers 🎟️</span>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              How To Fill Your Calendar with<br className="hidden sm:block" /> Qualified Meetings
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            Learn the system top brokers use to turn marketing spend into consistent, high-quality customers that scale finance businesses.
          </p>
          
          {/* Email Form */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2998FD] focus:border-transparent outline-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Instant Access Now
              </Button>
              <p className="text-sm text-gray-600">
                Start immediately and complete at your own pace.
              </p>
            </form>
          </div>
          
          {/* Course Image - Mobile and Desktop */}
          <div className="relative mx-auto max-w-4xl mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <Image
                className="w-full h-auto rounded-xl object-cover object-left-top"
                src="/course.jpg"
                alt="7-Day Lead Generation Bootcamp Course Preview"
                width={1200}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
