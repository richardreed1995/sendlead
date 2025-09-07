"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Car, Building2, Gift, Shield, Lock, TrendingUp, MoreHorizontal } from "lucide-react";

const leadTypes = [
  { id: "mortgages", label: "Mortgages", icon: <Home className="h-6 w-6 text-gray-700" /> },
  { id: "car-insurance", label: "Car Finance", icon: <Car className="h-6 w-6 text-gray-700" /> },
  { id: "business-loans", label: "Business Loans", icon: <Building2 className="h-6 w-6 text-gray-700" /> },
  { id: "life-insurance", label: "Life Insurance", icon: <Shield className="h-6 w-6 text-gray-700" /> },
  { id: "secured-loans", label: "Secured Loans", icon: <Lock className="h-6 w-6 text-gray-700" /> },
  { id: "business-grants", label: "Business Grants", icon: <Gift className="h-6 w-6 text-gray-700" /> },
  { id: "property-investment", label: "Property Investment", icon: <TrendingUp className="h-6 w-6 text-gray-700" /> },
  { id: "other", label: "Other", icon: <MoreHorizontal className="h-6 w-6 text-gray-700" /> },
];

const salesRepsOptions = [
  { id: "none", label: "None" },
  { id: "1-3", label: "1-3" },
  { id: "4-10", label: "4-10" },
  { id: "11+", label: "11+" },
];

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [leadType, setLeadType] = useState<string | null>(null);
  const [buyingLeads, setBuyingLeads] = useState<null | boolean>(null);
  const [salesReps, setSalesReps] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", website: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const totalSteps = 4;
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

  // New flow:
  // 0: What type of leads are you looking for? *
  // 1: Have you bought leads before? *
  // 2: How many sales reps do you have? *
  // 3: Contact details *

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
    
    // Send data to webhook
    try {
      await fetch("https://hook.eu2.make.com/xq1dvs5e98p1w88grh58skodmco254tx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType,
          buyingLeads,
          salesReps,
          contact,
          agree,
          completedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      // Fail silently
    }
    router.push("/success");
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
            <h3 className="text-xl font-bold mb-6 text-center">What type of leads are you looking for? <span className="text-red-500">*</span></h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
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
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Contact details</h3>
            <div className="space-y-4 mb-6">
              <Input placeholder="Full Name *" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
              <Input placeholder="Email Address *" type="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
              <Input placeholder="Phone Number *" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
              <Input placeholder="Website *" value={contact.website} onChange={e => setContact({ ...contact, website: e.target.value })} />
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
                    <span className="text-sm font-medium">
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
              <h3 className="text-xl font-bold mb-6 text-center">What type of leads are you looking for? <span className="text-red-500">*</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
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
            <div>
              <h3 className="text-xl font-bold mb-6 text-center">Contact details</h3>
              <div className="space-y-4 mb-6">
                <Input placeholder="Full Name *" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
                <Input placeholder="Email Address *" type="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
                <Input placeholder="Phone Number *" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
                <Input placeholder="Website *" value={contact.website} onChange={e => setContact({ ...contact, website: e.target.value })} />
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
                    <span className="text-sm font-medium">
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