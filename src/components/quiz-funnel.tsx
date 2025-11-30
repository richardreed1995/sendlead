"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Building2, Lock, Briefcase, MoreHorizontal, User, Mail, Phone, Globe, LineChart } from "lucide-react";

const leadTypes = [
  { id: "mortgages", label: "Mortgages", icon: <Home className="h-6 w-6 text-gray-700" /> },
  { id: "business-loans", label: "Business Loans", icon: <Building2 className="h-6 w-6 text-gray-700" /> },
  { id: "secured-loans", label: "Secured Loans", icon: <Lock className="h-6 w-6 text-gray-700" /> },
  { id: "financial-advisor", label: "Financial Advisor", icon: <Briefcase className="h-6 w-6 text-gray-700" /> },
  { id: "wealth-management", label: "Wealth Management", icon: <LineChart className="h-6 w-6 text-gray-700" /> },
  { id: "other", label: "Other", icon: <MoreHorizontal className="h-6 w-6 text-gray-700" /> },
];

const salesRepsOptions = [
  { id: "none", label: "None" },
  { id: "1-3", label: "1-3" },
  { id: "4-10", label: "4-10" },
  { id: "11+", label: "11+" },
];

const leadCapacityOptions = [
  { id: "0-49", label: "0 - 49" },
  { id: "50-99", label: "50 - 99" },
  { id: "100-149", label: "100 - 149" },
  { id: "150+", label: "150+" },
];

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [leadType, setLeadType] = useState<string | null>(null);
  const [buyingLeads, setBuyingLeads] = useState<null | boolean>(null);
  const [salesReps, setSalesReps] = useState<string | null>(null);
  const [leadCapacity, setLeadCapacity] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", website: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validatePhone(phone: string) {
    // Accepts UK/international, 10-15 digits, allows spaces/dashes/parentheses
    return /^[+]?[(]?[0-9]{1,4}[)]?[-\s0-9]{7,15}$/.test(phone);
  }

  // Auto-advance functions
  const handleLeadTypeSelect = (type: string) => {
    setLeadType(type);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBuyingLeadsSelect = (value: boolean) => {
    setBuyingLeads(value);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(2);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSalesRepsSelect = (value: string) => {
    setSalesReps(value);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(3);
      setIsTransitioning(false);
    }, 300);
  };

  const handleLeadCapacitySelect = (value: string) => {
    setLeadCapacity(value);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(4);
      setIsTransitioning(false);
    }, 300);
  };

  // New flow:
  // 0: What type of leads are you looking for? *
  // 1: Have you bought leads before? *
  // 2: How many sales reps do you have? *
  // 3: How many leads can you handle a month? *
  // 4: Contact details *

  async function handleSubmit() {
    setError("");
    if (!contact.name || !contact.email || !contact.phone || !contact.website) {
      return setError("Please fill in all required fields");
    }
    if (!validateEmail(contact.email)) {
      return setError("Please enter a valid email address");
    }
    if (!validatePhone(contact.phone)) {
      return setError("Please enter a valid phone number");
    }
    if (!agree) return setError("You must agree to the privacy policy and terms & conditions");
    
    const completedAt = new Date().toISOString();
    
    // Send data to Make.com webhook
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK || process.env.MAKE_WEBHOOK;
      
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadType,
            buyingLeads,
            salesReps,
            leadCapacity,
            contact,
            agree,
            completedAt,
          }),
        });
        
        if (!response.ok) {
          console.error('Make.com webhook failed:', response.status, response.statusText);
        } else {
          console.log('Lead data sent to Make.com successfully');
        }
      } else {
        console.error('Make.com webhook URL is not configured');
      }
    } catch (error) {
      console.error('Failed to send data to Make.com:', error);
    }

    // Send internal notification email
    try {
      const response = await fetch('/api/notify-get-started', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType,
          buyingLeads,
          salesReps,
          leadCapacity,
          contact,
          completedAt,
        }),
      });

      if (!response.ok) {
        console.error('Notification email failed:', response.status, response.statusText);
      } else {
        console.log('Notification email sent successfully');
      }
    } catch (error) {
      console.error('Failed to send notification email:', error);
    }
    
    // Check if qualified: 50+ leads AND 4+ sales reps
    const isQualifiedLeadCapacity = leadCapacity === "50-99" || leadCapacity === "100-149" || leadCapacity === "150+";
    const isQualifiedSalesReps = salesReps === "4-10" || salesReps === "11+";
    const isQualified = isQualifiedLeadCapacity && isQualifiedSalesReps;
    
    if (isQualified) {
      router.push("/success-get-started");
    } else {
      router.push("/success-get-started-unqualified");
    }
  }

  return (
    <div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {step + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      
      {/* Mobile: No card background, Desktop: Keep card */}
      <div className="block md:hidden">
        {step === 0 && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <div className="flex flex-col items-center justify-center mb-6 w-full">
              <h3 className="text-xl font-bold text-center w-full">What type of leads are you looking for? <span className="text-red-500">*</span></h3>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {leadTypes.map(type => (
                <button
                  key={type.id}
                  className={`rounded-xl border-2 flex flex-col items-center py-6 px-2 font-semibold text-sm transition-all ${leadType === type.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleLeadTypeSelect(type.id)}
                >
                  <span className="mb-2">{type.icon}</span>
                  <span className="text-center leading-tight">{type.label}</span>
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        )}
        {step === 1 && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-6 text-center">Have you bought leads before? <span className="text-red-500">*</span></h3>
            <div className="flex gap-4 mb-4 w-full max-w-xs mx-auto">
              <button
                className={`rounded-xl px-6 py-6 text-xl font-bold flex flex-col items-center border-2 flex-1 transition-all ${buyingLeads === true ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                onClick={() => handleBuyingLeadsSelect(true)}
              >
                Yes
              </button>
              <button
                className={`rounded-xl px-6 py-6 text-xl font-bold flex flex-col items-center border-2 flex-1 transition-all ${buyingLeads === false ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                onClick={() => handleBuyingLeadsSelect(false)}
              >
                No
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        )}
        {step === 2 && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-6 text-center">How many sales reps do you have? <span className="text-red-500">*</span></h3>
            <div className="grid grid-cols-2 gap-3 mb-4 w-full max-w-md mx-auto">
              {salesRepsOptions.map(option => (
                <button
                  key={option.id}
                  className={`rounded-xl px-4 py-6 text-lg font-semibold border-2 transition-all ${salesReps === option.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleSalesRepsSelect(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        )}
        {step === 3 && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-6 text-center">How many leads can you handle a month? <span className="text-red-500">*</span></h3>
            <div className="mb-4 w-full max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-3 mb-3">
                {leadCapacityOptions.slice(0, 3).map(option => (
                  <button
                    key={option.id}
                    className={`rounded-xl px-4 py-6 text-lg font-semibold border-2 transition-all ${leadCapacity === option.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    onClick={() => handleLeadCapacitySelect(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  className={`rounded-xl px-4 py-6 text-lg font-semibold border-2 transition-all w-full max-w-[200px] ${leadCapacity === leadCapacityOptions[3].id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleLeadCapacitySelect(leadCapacityOptions[3].id)}
                >
                  {leadCapacityOptions[3].label}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        )}
        {step === 4 && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Contact details</h3>
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    id="fullName"
                    placeholder="Your full name" 
                    value={contact.name} 
                    onChange={e => setContact({ ...contact, name: e.target.value })} 
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    id="email"
                    placeholder="Your work email" 
                    type="email" 
                    value={contact.email} 
                    onChange={e => setContact({ ...contact, email: e.target.value })} 
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    id="phone"
                    placeholder="Your phone number" 
                    value={contact.phone} 
                    onChange={e => setContact({ ...contact, phone: e.target.value })} 
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="website" className="text-sm font-medium text-gray-700 mb-2 block">Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    id="website"
                    placeholder="Your website" 
                    value={contact.website} 
                    onChange={e => setContact({ ...contact, website: e.target.value })} 
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <button
                onClick={() => setAgree(!agree)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${agree ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mr-3 transition-all ${agree ? "border-blue-600 bg-blue-600" : "border-gray-300"}`}>
                    {agree && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                  </div>
                    <span className="text-[10px] font-medium">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        privacy policy
                      </Link>
                      {" "}and{" "}
                      <Link href="/terms-conditions" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        terms & conditions
                      </Link>
                    </span>
                </div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button 
              onClick={handleSubmit} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
      
      {/* Desktop: Keep card background */}
      <div className="hidden md:block">
        <Card className="border border-gray-200 shadow-sm p-6">
          {step === 0 && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <div className="flex flex-col items-center justify-center mb-6 w-full">
                <h3 className="text-xl font-bold text-center w-full">What type of leads are you looking for? <span className="text-red-500">*</span></h3>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {leadTypes.map(type => (
                  <button
                    key={type.id}
                    className={`rounded-xl border-2 flex flex-col items-center py-6 px-2 font-semibold text-sm sm:text-base transition-all ${leadType === type.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    onClick={() => handleLeadTypeSelect(type.id)}
                  >
                    <span className="mb-2">{type.icon}</span>
                    <span className="text-center leading-tight">{type.label}</span>
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          )}
          {step === 1 && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold mb-6 text-center">Have you bought leads before? <span className="text-red-500">*</span></h3>
              <div className="flex gap-4 sm:gap-8 mb-4 w-full max-w-xs mx-auto">
                <button
                  className={`rounded-xl px-6 sm:px-8 py-6 sm:py-8 text-xl sm:text-2xl font-bold flex flex-col items-center border-2 flex-1 transition-all ${buyingLeads === true ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleBuyingLeadsSelect(true)}
                >
                  Yes
                </button>
                <button
                  className={`rounded-xl px-6 sm:px-8 py-6 sm:py-8 text-xl sm:text-2xl font-bold flex flex-col items-center border-2 flex-1 transition-all ${buyingLeads === false ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleBuyingLeadsSelect(false)}
                >
                  No
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          )}
          {step === 2 && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold mb-6 text-center">How many sales reps do you have? <span className="text-red-500">*</span></h3>
              <div className="grid grid-cols-2 gap-3 mb-4 w-full max-w-md mx-auto">
                {salesRepsOptions.map(option => (
                  <button
                    key={option.id}
                    className={`rounded-xl px-4 py-6 text-lg font-semibold border-2 transition-all ${salesReps === option.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    onClick={() => handleSalesRepsSelect(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          )}
          {step === 3 && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold mb-6 text-center">How many leads can you handle a month? <span className="text-red-500">*</span></h3>
              <div className="mb-4 w-full max-w-md mx-auto">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {leadCapacityOptions.slice(0, 3).map(option => (
                    <button
                      key={option.id}
                      className={`rounded-xl px-4 py-6 text-lg font-semibold border-2 transition-all ${leadCapacity === option.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                      onClick={() => handleLeadCapacitySelect(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center">
                  <button
                    className={`rounded-xl px-4 py-6 text-lg font-semibold border-2 transition-all w-full max-w-[200px] ${leadCapacity === leadCapacityOptions[3].id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    onClick={() => handleLeadCapacitySelect(leadCapacityOptions[3].id)}
                  >
                    {leadCapacityOptions[3].label}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          )}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-center">Contact details</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="fullName-desktop" className="text-sm font-medium text-gray-700 mb-2 block">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      id="fullName-desktop"
                      placeholder="Your full name" 
                      value={contact.name} 
                      onChange={e => setContact({ ...contact, name: e.target.value })} 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email-desktop" className="text-sm font-medium text-gray-700 mb-2 block">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      id="email-desktop"
                      placeholder="Your work email" 
                      type="email" 
                      value={contact.email} 
                      onChange={e => setContact({ ...contact, email: e.target.value })} 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone-desktop" className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      id="phone-desktop"
                      placeholder="Your phone number" 
                      value={contact.phone} 
                      onChange={e => setContact({ ...contact, phone: e.target.value })} 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="website-desktop" className="text-sm font-medium text-gray-700 mb-2 block">Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      id="website-desktop"
                      placeholder="Your website" 
                      value={contact.website} 
                      onChange={e => setContact({ ...contact, website: e.target.value })} 
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <button
                  onClick={() => setAgree(!agree)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${agree ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mr-3 transition-all ${agree ? "border-blue-600 bg-blue-600" : "border-gray-300"}`}>
                      {agree && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                    </div>
                    <span className="text-[10px] font-medium">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        privacy policy
                      </Link>
                      {" "}and{" "}
                      <Link href="/terms-conditions" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        terms & conditions
                      </Link>
                    </span>
                  </div>
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <Button 
                onClick={handleSubmit} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Get Started
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
} 