"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function HeroSectionBootcamp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companyWebsite: "",
    currentRevenue: "",
    biggestChallenge: ""
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setStep(2);
    }
  };

  const handleFullFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send Slack notification
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: `🎉 New Bootcamp Signup!\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.companyWebsite}\nRevenue: ${formData.currentRevenue}\nChallenge: ${formData.biggestChallenge}\n\nTime: ${new Date().toLocaleString('en-GB', { 
              timeZone: 'Europe/London',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}`
          })
        });
      }
    } catch (error) {
      console.error('Failed to send Slack notification:', error);
    }
    
    // Redirect to thank you page
    window.location.href = '/bootcamp/thank-you';
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
              <span>🎟️ Free 7-Day On-Demand Bootcamp for Finance Brokers 🎟️</span>
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
          
          {/* Two-Step Form */}
          <div className="max-w-md mx-auto mb-8">
            {step === 1 ? (
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
            ) : (
              <form onSubmit={handleFullFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2998FD] focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company website"
                    value={formData.companyWebsite}
                    onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2998FD] focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <select
                    value={formData.currentRevenue}
                    onChange={(e) => handleInputChange("currentRevenue", e.target.value)}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2998FD] focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Current revenue</option>
                    <option value="under-50k">Under £50k</option>
                    <option value="50k-100k">£50k - £100k</option>
                    <option value="100k-250k">£100k - £250k</option>
                    <option value="250k-500k">£250k - £500k</option>
                    <option value="500k-1m">£500k - £1m</option>
                    <option value="over-1m">Over £1m</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="What's your biggest challenge at the moment?"
                    value={formData.biggestChallenge}
                    onChange={(e) => handleInputChange("biggestChallenge", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2998FD] focus:border-transparent outline-none resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Started
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Back to email step
                </button>
              </form>
            )}
          </div>
          
          {/* Dashboard Image - Mobile and Desktop */}
          <div className="relative mx-auto max-w-4xl mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <Image
                className="w-full h-auto rounded-xl object-cover object-left-top"
                src="/Dashboard1.jpg"
                alt="Sendlead dashboard screenshot showing lead generation system"
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
