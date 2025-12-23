"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Building2, Lock, Briefcase, MoreHorizontal, LineChart, User, Mail } from "lucide-react";
import { trackEvent } from "@/components/meta-pixel-events";
import Link from "next/link";

type VerticalKey = 'mortgages' | 'businessLoans' | 'securedLoans' | 'financialAdvisor' | 'wealthManagement' | 'other';

interface VerticalData {
  id: string;
  name: string;
  conversionRate: number;
  avgDealValue: number;
  commissionRate: number;
  repeatBusinessRate: number;
  clientLifetimeYears: number;
  referralsPerClient: number;
  costPerLead: number;
  icon: React.ReactNode;
}

interface ROIResults {
  totalInvestment: number;
  leadsConverted: number;
  immediateRevenue: number;
  immediateProfit: number;
  immediateROI: number;
  lifetimeValuePerLead: number;
  totalLifetimeRevenue: number;
  totalLifetimeProfit: number;
  lifetimeROI: number;
}

const leadTypes: VerticalData[] = [
  { 
    id: "mortgages", 
    name: "Mortgages", 
    icon: <Home className="h-6 w-6 text-gray-700" />,
    conversionRate: 15,
    avgDealValue: 250000,
    commissionRate: 0.35,
    repeatBusinessRate: 40,
    clientLifetimeYears: 7,
    referralsPerClient: 0.5,
    costPerLead: 75
  },
  { 
    id: "business-loans", 
    name: "Business Loans", 
    icon: <Building2 className="h-6 w-6 text-gray-700" />,
    conversionRate: 12,
    avgDealValue: 75000,
    commissionRate: 3,
    repeatBusinessRate: 25,
    clientLifetimeYears: 4,
    referralsPerClient: 0.3,
    costPerLead: 90
  },
  { 
    id: "secured-loans", 
    name: "Secured Loans", 
    icon: <Lock className="h-6 w-6 text-gray-700" />,
    conversionRate: 14,
    avgDealValue: 35000,
    commissionRate: 2.5,
    repeatBusinessRate: 20,
    clientLifetimeYears: 3,
    referralsPerClient: 0.4,
    costPerLead: 65
  },
  { 
    id: "financial-advisor", 
    name: "Financial Advisor", 
    icon: <Briefcase className="h-6 w-6 text-gray-700" />,
    conversionRate: 20,
    avgDealValue: 150000,
    commissionRate: 1.0,
    repeatBusinessRate: 90,
    clientLifetimeYears: 15,
    referralsPerClient: 0.8,
    costPerLead: 100
  },
  { 
    id: "wealth-management", 
    name: "Wealth Management", 
    icon: <LineChart className="h-6 w-6 text-gray-700" />,
    conversionRate: 18,
    avgDealValue: 500000,
    commissionRate: 1.0,
    repeatBusinessRate: 85,
    clientLifetimeYears: 12,
    referralsPerClient: 0.6,
    costPerLead: 120
  },
  { 
    id: "other", 
    name: "Other", 
    icon: <MoreHorizontal className="h-6 w-6 text-gray-700" />,
    conversionRate: 20,
    avgDealValue: 50000,
    commissionRate: 10,
    repeatBusinessRate: 30,
    clientLifetimeYears: 5,
    referralsPerClient: 0.5,
    costPerLead: 100
  }
];

export default function ROIQQuizFunnel() {
  const [step, setStep] = useState(0);
  const [selectedVertical, setSelectedVertical] = useState<VerticalData | null>(null);
  const [customMetrics, setCustomMetrics] = useState({
    conversionRate: 0,
    avgDealValue: 0,
    commissionRate: 0,
    repeatBusinessRate: 0,
    referralsPerClient: 0
  });
  const [numLeads, setNumLeads] = useState(50);
  const [contact, setContact] = useState({ name: "", email: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<ROIResults | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 8; // Industry, Leads Per Month, Conversion Rate, Deal Value, Commission Rate, Repeat Business, Contact Details, Results
  const progress = ((step + 1) / totalSteps) * 100;

  // Load Calendly script
  useEffect(() => {
    if (step === 7) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Listen for Calendly events
      const handleCalendlyEvent = (e: MessageEvent) => {
        if (e.data.event === 'calendly.event_scheduled') {
          trackEvent("Schedule");
        }
      };

      window.addEventListener('message', handleCalendlyEvent);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        window.removeEventListener('message', handleCalendlyEvent);
      };
    }
  }, [step]);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Auto-advance functions
  const handleVerticalSelect = (vertical: VerticalData) => {
    setSelectedVertical(vertical);
    setCustomMetrics({
      conversionRate: vertical.conversionRate,
      avgDealValue: vertical.avgDealValue,
      commissionRate: vertical.commissionRate,
      repeatBusinessRate: vertical.repeatBusinessRate,
      referralsPerClient: vertical.referralsPerClient
    });
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(step + 1);
      setIsTransitioning(false);
    }, 300);
  };

  const calculateROI = () => {
    if (!selectedVertical) return null;

    const costPerLead = selectedVertical.costPerLead;
    const conversionRate = customMetrics.conversionRate || selectedVertical.conversionRate;
    const avgDealValue = customMetrics.avgDealValue || selectedVertical.avgDealValue;
    const commissionRate = customMetrics.commissionRate || selectedVertical.commissionRate;
    const repeatBusinessRate = customMetrics.repeatBusinessRate || selectedVertical.repeatBusinessRate;
    const referralsPerClient = customMetrics.referralsPerClient || selectedVertical.referralsPerClient;

    const totalInvestment = numLeads * costPerLead;
    const leadsConverted = (numLeads * conversionRate) / 100;
    
    const initialCommission = (avgDealValue * commissionRate) / 100;
    const immediateRevenue = leadsConverted * initialCommission;
    const immediateProfit = immediateRevenue - totalInvestment;
    const immediateROI = totalInvestment > 0 ? (immediateProfit / totalInvestment) * 100 : 0;
    
    const repeatBusinessValue = initialCommission * (repeatBusinessRate / 100);
    const referralValue = initialCommission * referralsPerClient;
    const lifetimeValuePerLead = initialCommission + repeatBusinessValue + referralValue;
    
    const totalLifetimeRevenue = leadsConverted * lifetimeValuePerLead;
    const totalLifetimeProfit = totalLifetimeRevenue - totalInvestment;
    const lifetimeROI = totalInvestment > 0 ? (totalLifetimeProfit / totalInvestment) * 100 : 0;
    
    return {
      totalInvestment,
      leadsConverted: Math.ceil(leadsConverted),
      immediateRevenue,
      immediateProfit,
      immediateROI,
      lifetimeValuePerLead,
      totalLifetimeRevenue,
      totalLifetimeProfit,
      lifetimeROI
    };
  };

  const handleContactSubmit = async () => {
    setError("");
    if (!contact.name || !contact.email) {
      return setError("Please fill in all required fields");
    }
    if (!validateEmail(contact.email)) {
      return setError("Please enter a valid email address");
    }
    if (!agree) return setError("You must agree to the privacy policy and terms & conditions");

    setIsSubmitting(true);
    
    // Calculate ROI before submission
    const roiResults = calculateROI();
    setResults(roiResults);

    const completedAt = new Date().toISOString();

    // Send internal notification email
    try {
      const response = await fetch('/api/notify-roi-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: selectedVertical?.id,
          numLeads,
          customMetrics,
          roiResults,
          contact,
          completedAt,
        }),
      });

      if (!response.ok) {
        console.error('Notification email failed:', response.status, response.statusText);
      } else {
        console.log('ROI quiz notification email sent successfully');
      }
    } catch (error) {
      console.error('Failed to send notification email:', error);
    }

    setIsSubmitting(false);
    
    // Move to results step
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(7);
      setIsTransitioning(false);
    }, 300);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`;
  };

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
                  className={`rounded-xl border-2 flex flex-col items-center py-6 px-2 font-semibold text-sm transition-all ${selectedVertical?.id === type.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleVerticalSelect(type)}
                >
                  <span className="mb-2">{type.icon}</span>
                  <span className="text-center leading-tight">{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-4 text-center">How many leads can you handle per month?</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Tell us your capacity and we'll calculate your monthly investment and potential ROI.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="numLeads" className="text-sm font-medium text-gray-700 mb-2 block">
                  Leads Per Month
                </Label>
                <Input 
                  id="numLeads"
                  type="number"
                  value={numLeads || ''}
                  onChange={e => setNumLeads(parseInt(e.target.value) || 0)} 
                  className="text-lg"
                  placeholder="e.g. 50"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleNext} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              disabled={numLeads < 1}
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-4 text-center">What's your conversion rate?</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              This is the percentage of leads that become paying customers. Industry average for {selectedVertical.name.toLowerCase()} is {selectedVertical.conversionRate}%.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="conversionRate" className="text-sm font-medium text-gray-700 mb-2 block">
                  Conversion Rate (%)
                </Label>
                <Input 
                  id="conversionRate"
                  type="number"
                  value={customMetrics.conversionRate || ''}
                  onChange={e => setCustomMetrics({ ...customMetrics, conversionRate: parseFloat(e.target.value) || 0 })} 
                  className="text-lg"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleNext} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 3 && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-4 text-center">What's your average deal value?</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              This is the typical monetary value of each transaction. For {selectedVertical.name.toLowerCase()}, the average is {formatCurrency(selectedVertical.avgDealValue)}.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="avgDealValue" className="text-sm font-medium text-gray-700 mb-2 block">
                  Average Deal Value (£)
                </Label>
                <Input 
                  id="avgDealValue"
                  type="number"
                  value={customMetrics.avgDealValue || ''}
                  onChange={e => setCustomMetrics({ ...customMetrics, avgDealValue: parseFloat(e.target.value) || 0 })} 
                  className="text-lg"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleNext} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 4 && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-4 text-center">What's your commission rate?</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              This is your profit margin or commission on each deal. Industry average for {selectedVertical.name.toLowerCase()} is {selectedVertical.commissionRate}%.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="commissionRate" className="text-sm font-medium text-gray-700 mb-2 block">
                  Commission Rate (%)
                </Label>
                <Input 
                  id="commissionRate"
                  type="number"
                  step="0.1"
                  value={customMetrics.commissionRate || ''}
                  onChange={e => setCustomMetrics({ ...customMetrics, commissionRate: parseFloat(e.target.value) || 0 })} 
                  className="text-lg"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleNext} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 5 && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-xl font-bold mb-4 text-center">What's your repeat business rate?</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              What percentage of customers come back for additional services? Industry average is {selectedVertical.repeatBusinessRate}%.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="repeatBusinessRate" className="text-sm font-medium text-gray-700 mb-2 block">
                  Repeat Business Rate (%)
                </Label>
                <Input 
                  id="repeatBusinessRate"
                  type="number"
                  value={customMetrics.repeatBusinessRate || ''}
                  onChange={e => setCustomMetrics({ ...customMetrics, repeatBusinessRate: parseFloat(e.target.value) || 0 })} 
                  className="text-lg"
                />
              </div>
              
              <div>
                <Label htmlFor="referralsPerClient" className="text-sm font-medium text-gray-700 mb-2 block">
                  Referrals Per Client
                </Label>
                <Input 
                  id="referralsPerClient"
                  type="number"
                  step="0.1"
                  value={customMetrics.referralsPerClient || ''}
                  onChange={e => setCustomMetrics({ ...customMetrics, referralsPerClient: parseFloat(e.target.value) || 0 })} 
                  className="text-lg"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleNext} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 6 && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
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
              onClick={handleContactSubmit} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Calculating...' : 'See My ROI Results'}
            </Button>
          </div>
        )}

        {step === 7 && results && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Your Monthly ROI Calculation</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Monthly Investment</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {formatCurrency(results.totalInvestment)}/month
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Leads Per Month</span>
                  <span className="text-sm text-gray-900">{numLeads}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Cost Per Lead</span>
                  <span className="text-sm text-gray-900">{formatCurrency(selectedVertical.costPerLead)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">*Lead cost based on industry benchmark pricing</p>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Expected Conversions</span>
                  <span className="text-sm text-gray-900">{results.leadsConverted} clients/month</span>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border-2 border-green-200">
                <div className="mb-3">
                  <span className="text-base font-bold text-green-800">Monthly ROI (90 Day Pipeline)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Monthly Revenue</span>
                    <span className="text-sm font-medium text-green-800">
                      {formatCurrency(results.immediateRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Monthly Profit</span>
                    <span className="text-sm font-medium text-green-800">
                      {formatCurrency(results.immediateProfit)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-green-200 pt-2 mt-2">
                    <span className="text-base font-bold text-green-800">ROI</span>
                    <span className={`text-2xl font-bold ${results.immediateROI > 0 ? 'text-green-800' : 'text-red-600'}`}>
                      {formatPercentage(results.immediateROI)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
                <div className="mb-3">
                  <span className="text-base font-bold text-blue-800">Lifetime Value (Per Month of Leads)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Total Revenue</span>
                    <span className="text-sm font-medium text-blue-800">
                      {formatCurrency(results.totalLifetimeRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">Total Profit</span>
                    <span className="text-sm font-medium text-blue-800">
                      {formatCurrency(results.totalLifetimeProfit)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-blue-200 pt-2 mt-2">
                    <span className="text-base font-bold text-blue-800">Lifetime ROI</span>
                    <span className={`text-2xl font-bold ${results.lifetimeROI > 0 ? 'text-blue-800' : 'text-red-600'}`}>
                      {formatPercentage(results.lifetimeROI)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border-2 border-gray-200 p-4 mb-6">
              <h4 className="text-lg font-bold mb-2 text-center">📞 Book a Call to Get Started</h4>
              <p className="text-sm text-gray-600 text-center mb-2">
                Most of our partners start with a <strong>one-time lead order</strong> to test quality before committing to a monthly subscription.
              </p>
              <p className="text-sm text-gray-600 text-center mb-4">
                Book a call below to discuss your needs and get your first leads.
              </p>
              
              <div className="calendly-inline-widget w-full" 
                   data-url="https://calendly.com/richard-sendlead/sendlead-intro?hide_gdpr_banner=1" 
                   style={{
                     minWidth: '320px', 
                     height: '700px',
                     width: '100%'
                   }}>
              </div>
            </div>
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
                    className={`rounded-xl border-2 flex flex-col items-center py-6 px-2 font-semibold text-sm sm:text-base transition-all ${selectedVertical?.id === type.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    onClick={() => handleVerticalSelect(type)}
                  >
                    <span className="mb-2">{type.icon}</span>
                    <span className="text-center leading-tight">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center">How many leads can you handle per month?</h3>
              <p className="text-base text-gray-600 mb-6 text-center max-w-xl mx-auto">
                Tell us your capacity and we'll calculate your monthly investment and potential ROI.
              </p>
              
              <div className="space-y-4 mb-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="numLeads-desktop" className="text-sm font-medium text-gray-700 mb-2 block">
                    Leads Per Month
                  </Label>
                  <Input 
                    id="numLeads-desktop"
                    type="number"
                    value={numLeads || ''}
                    onChange={e => setNumLeads(parseInt(e.target.value) || 0)} 
                    className="text-lg"
                    placeholder="e.g. 50"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold"
                  disabled={numLeads < 1}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center">What's your conversion rate?</h3>
              <p className="text-base text-gray-600 mb-6 text-center max-w-xl mx-auto">
                This is the percentage of leads that become paying customers. Industry average for {selectedVertical.name.toLowerCase()} is {selectedVertical.conversionRate}%.
              </p>
              
              <div className="space-y-4 mb-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="conversionRate-desktop" className="text-sm font-medium text-gray-700 mb-2 block">
                    Conversion Rate (%)
                  </Label>
                  <Input 
                    id="conversionRate-desktop"
                    type="number"
                    value={customMetrics.conversionRate || ''}
                    onChange={e => setCustomMetrics({ ...customMetrics, conversionRate: parseFloat(e.target.value) || 0 })} 
                    className="text-lg"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center">What's your average deal value?</h3>
              <p className="text-base text-gray-600 mb-6 text-center max-w-xl mx-auto">
                This is the typical monetary value of each transaction. For {selectedVertical.name.toLowerCase()}, the average is {formatCurrency(selectedVertical.avgDealValue)}.
              </p>
              
              <div className="space-y-4 mb-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="avgDealValue-desktop" className="text-sm font-medium text-gray-700 mb-2 block">
                    Average Deal Value (£)
                  </Label>
                  <Input 
                    id="avgDealValue-desktop"
                    type="number"
                    value={customMetrics.avgDealValue || ''}
                    onChange={e => setCustomMetrics({ ...customMetrics, avgDealValue: parseFloat(e.target.value) || 0 })} 
                    className="text-lg"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 4 && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center">What's your commission rate?</h3>
              <p className="text-base text-gray-600 mb-6 text-center max-w-xl mx-auto">
                This is your profit margin or commission on each deal. Industry average for {selectedVertical.name.toLowerCase()} is {selectedVertical.commissionRate}%.
              </p>
              
              <div className="space-y-4 mb-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="commissionRate-desktop" className="text-sm font-medium text-gray-700 mb-2 block">
                    Commission Rate (%)
                  </Label>
                  <Input 
                    id="commissionRate-desktop"
                    type="number"
                    step="0.1"
                    value={customMetrics.commissionRate || ''}
                    onChange={e => setCustomMetrics({ ...customMetrics, commissionRate: parseFloat(e.target.value) || 0 })} 
                    className="text-lg"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 5 && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center">What's your repeat business rate?</h3>
              <p className="text-base text-gray-600 mb-6 text-center max-w-xl mx-auto">
                What percentage of customers come back for additional services? Industry average is {selectedVertical.repeatBusinessRate}%.
              </p>
              
              <div className="space-y-4 mb-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="repeatBusinessRate-desktop" className="text-sm font-medium text-gray-700 mb-2 block">
                    Repeat Business Rate (%)
                  </Label>
                  <Input 
                    id="repeatBusinessRate-desktop"
                    type="number"
                    value={customMetrics.repeatBusinessRate || ''}
                    onChange={e => setCustomMetrics({ ...customMetrics, repeatBusinessRate: parseFloat(e.target.value) || 0 })} 
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="referralsPerClient-desktop" className="text-sm font-medium text-gray-700 mb-2 block">
                    Referrals Per Client
                  </Label>
                  <Input 
                    id="referralsPerClient-desktop"
                    type="number"
                    step="0.1"
                    value={customMetrics.referralsPerClient || ''}
                    onChange={e => setCustomMetrics({ ...customMetrics, referralsPerClient: parseFloat(e.target.value) || 0 })} 
                    className="text-lg"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 6 && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
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
                onClick={handleContactSubmit} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Calculating...' : 'See My ROI Results'}
              </Button>
            </div>
          )}

          {step === 7 && results && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-3xl font-bold mb-8 text-center">Your Monthly ROI Calculation</h3>
              
              <div className="space-y-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-gray-100 p-5 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium text-gray-600">Monthly Investment</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(results.totalInvestment)}/month
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Leads Per Month</span>
                    <span className="text-sm text-gray-900">{numLeads}</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Cost Per Lead</span>
                    <span className="text-sm text-gray-900">{formatCurrency(selectedVertical.costPerLead)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 italic">*Lead cost based on industry benchmark pricing</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Expected Conversions</span>
                    <span className="text-sm text-gray-900">{results.leadsConverted} clients/month</span>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-green-800">Monthly ROI (90 Day Pipeline)</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-base text-green-700">Monthly Revenue</span>
                      <span className="text-base font-medium text-green-800">
                        {formatCurrency(results.immediateRevenue)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-green-700">Monthly Profit</span>
                      <span className="text-base font-medium text-green-800">
                        {formatCurrency(results.immediateProfit)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-green-200 pt-3 mt-3">
                      <span className="text-lg font-bold text-green-800">ROI</span>
                      <span className={`text-3xl font-bold ${results.immediateROI > 0 ? 'text-green-800' : 'text-red-600'}`}>
                        {formatPercentage(results.immediateROI)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-blue-800">Lifetime Value (Per Month of Leads)</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-base text-blue-700">Total Revenue</span>
                      <span className="text-base font-medium text-blue-800">
                        {formatCurrency(results.totalLifetimeRevenue)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-blue-700">Total Profit</span>
                      <span className="text-base font-medium text-blue-800">
                        {formatCurrency(results.totalLifetimeProfit)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 pt-3 mt-3">
                      <span className="text-lg font-bold text-blue-800">Lifetime ROI</span>
                      <span className={`text-3xl font-bold ${results.lifetimeROI > 0 ? 'text-blue-800' : 'text-red-600'}`}>
                        {formatPercentage(results.lifetimeROI)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                <h4 className="text-xl font-bold mb-3 text-center">📞 Book a Call to Get Started</h4>
                <p className="text-base text-gray-600 text-center mb-2">
                  Most of our partners start with a <strong>one-time lead order</strong> to test quality before committing to a monthly subscription.
                </p>
                <p className="text-base text-gray-600 text-center mb-6">
                  Book a call below to discuss your needs and get your first leads.
                </p>
                
                <div className="calendly-inline-widget w-full" 
                     data-url="https://calendly.com/richard-sendlead/sendlead-intro?hide_gdpr_banner=1" 
                     style={{
                       minWidth: '320px', 
                       height: '700px',
                       width: '100%'
                     }}>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
