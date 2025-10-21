"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Car, Building2, Gift, Shield, Lock, TrendingUp, MoreHorizontal, Landmark, HousePlus } from "lucide-react";

type VerticalKey = 'mortgages' | 'carInsurance' | 'businessLoans' | 'lifeInsurance' | 'securedLoans' | 'businessGrants' | 'propertyInvestment' | 'bridgingLoan' | 'homeSelling' | 'custom';

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
    icon: <Home className="h-8 w-8 text-blue-600" />,
    conversionRate: 15,
    avgDealValue: 250000,
    commissionRate: 0.35,
    repeatBusinessRate: 40,
    clientLifetimeYears: 7,
    referralsPerClient: 0.5,
    costPerLead: 75
  },
  { 
    id: "carInsurance", 
    name: "Car Finance", 
    icon: <Car className="h-8 w-8 text-purple-600" />,
    conversionRate: 22,
    avgDealValue: 25000,
    commissionRate: 2,
    repeatBusinessRate: 25,
    clientLifetimeYears: 4,
    referralsPerClient: 0.4,
    costPerLead: 45
  },
  { 
    id: "businessLoans", 
    name: "Business Loans", 
    icon: <Building2 className="h-8 w-8 text-green-600" />,
    conversionRate: 12,
    avgDealValue: 75000,
    commissionRate: 3,
    repeatBusinessRate: 25,
    clientLifetimeYears: 4,
    referralsPerClient: 0.3,
    costPerLead: 90
  },
  { 
    id: "lifeInsurance", 
    name: "Life Insurance", 
    icon: <Shield className="h-8 w-8 text-red-600" />,
    conversionRate: 20,
    avgDealValue: 2400,
    commissionRate: 50,
    repeatBusinessRate: 15,
    clientLifetimeYears: 15,
    referralsPerClient: 0.4,
    costPerLead: 45
  },
  { 
    id: "securedLoans", 
    name: "Secured Loans", 
    icon: <Lock className="h-8 w-8 text-yellow-600" />,
    conversionRate: 14,
    avgDealValue: 35000,
    commissionRate: 2.5,
    repeatBusinessRate: 20,
    clientLifetimeYears: 3,
    referralsPerClient: 0.4,
    costPerLead: 65
  },
  { 
    id: "businessGrants", 
    name: "Business Grants", 
    icon: <Gift className="h-8 w-8 text-pink-600" />,
    conversionRate: 8,
    avgDealValue: 15000,
    commissionRate: 12,
    repeatBusinessRate: 40,
    clientLifetimeYears: 5,
    referralsPerClient: 0.6,
    costPerLead: 70
  },
  { 
    id: "propertyInvestment", 
    name: "Property Investment", 
    icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
    conversionRate: 10,
    avgDealValue: 180000,
    commissionRate: 1.5,
    repeatBusinessRate: 60,
    clientLifetimeYears: 10,
    referralsPerClient: 0.8,
    costPerLead: 120
  },
  { 
    id: "bridgingLoan", 
    name: "Bridging Loan", 
    icon: <Landmark className="h-8 w-8 text-orange-600" />,
    conversionRate: 12,
    avgDealValue: 200000,
    commissionRate: 1,
    repeatBusinessRate: 30,
    clientLifetimeYears: 2,
    referralsPerClient: 0.3,
    costPerLead: 90
  },
  { 
    id: "homeSelling", 
    name: "Home Selling", 
    icon: <HousePlus className="h-8 w-8 text-teal-600" />,
    conversionRate: 18,
    avgDealValue: 300000,
    commissionRate: 1.5,
    repeatBusinessRate: 25,
    clientLifetimeYears: 5,
    referralsPerClient: 0.6,
    costPerLead: 65
  },
  { 
    id: "other", 
    name: "Other", 
    icon: <MoreHorizontal className="h-8 w-8 text-gray-600" />,
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
  const [results, setResults] = useState<ROIResults | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const numLeads = 50; // Fixed at 50 leads
  const totalSteps = 6; // Industry, Conversion Rate, Deal Value, Commission Rate, Repeat Business, Results
  const progress = ((step + 1) / totalSteps) * 100;

  // Load Calendly script
  useEffect(() => {
    if (step === 5) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [step]);

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
      if (step === 4) {
        calculateROI();
      }
      setIsTransitioning(false);
    }, 300);
  };

  const calculateROI = () => {
    if (!selectedVertical) return;

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
    
    setResults({
      totalInvestment,
      leadsConverted: Math.ceil(leadsConverted),
      immediateRevenue,
      immediateProfit,
      immediateROI,
      lifetimeValuePerLead,
      totalLifetimeRevenue,
      totalLifetimeProfit,
      lifetimeROI
    });
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
            <h3 className="text-xl font-bold mb-6 text-center">What type of leads are you looking for?</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {leadTypes.map(type => (
                <button
                  key={type.id}
                  className={`rounded-xl border-2 flex flex-col items-center py-8 px-2 font-semibold text-sm transition-all hover:shadow-lg ${selectedVertical?.id === type.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => handleVerticalSelect(type)}
                >
                  <span className="mb-3">{type.icon}</span>
                  <span className="text-center leading-tight">{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && selectedVertical && (
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
                <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.conversionRate}%</p>
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

        {step === 2 && selectedVertical && (
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
                <p className="text-xs text-gray-500 mt-1">Industry standard: {formatCurrency(selectedVertical.avgDealValue)}</p>
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
                <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.commissionRate}%</p>
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
                <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.repeatBusinessRate}%</p>
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
                <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.referralsPerClient}</p>
              </div>
            </div>
            
            <Button 
              onClick={handleNext} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              Calculate My ROI
            </Button>
          </div>
        )}

        {step === 5 && results && selectedVertical && (
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Your ROI Calculation</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Total Investment</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {formatCurrency(results.totalInvestment)}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Number of Leads</span>
                  <span className="text-sm text-gray-900">{numLeads}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Leads Converted</span>
                  <span className="text-sm text-gray-900">{results.leadsConverted}</span>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border-2 border-green-200">
                <div className="mb-3">
                  <span className="text-base font-bold text-green-800">Immediate ROI (90 Days)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Revenue</span>
                    <span className="text-sm font-medium text-green-800">
                      {formatCurrency(results.immediateRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">Profit</span>
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
                  <span className="text-base font-bold text-blue-800">Lifetime Value</span>
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
              <h4 className="text-lg font-bold mb-2 text-center">Ready to get started?</h4>
              <p className="text-sm text-gray-600 text-center mb-4">Book a call to discuss your lead generation needs</p>
              
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
              <h3 className="text-2xl font-bold mb-6 text-center">What type of leads are you looking for?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {leadTypes.map(type => (
                  <button
                    key={type.id}
                    className={`rounded-xl border-2 flex flex-col items-center py-8 px-4 font-semibold text-base transition-all hover:shadow-lg ${selectedVertical?.id === type.id ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    onClick={() => handleVerticalSelect(type)}
                  >
                    <span className="mb-3">{type.icon}</span>
                    <span className="text-center leading-tight">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && selectedVertical && (
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
                  <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.conversionRate}%</p>
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

          {step === 2 && selectedVertical && (
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
                  <p className="text-xs text-gray-500 mt-1">Industry standard: {formatCurrency(selectedVertical.avgDealValue)}</p>
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
                  <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.commissionRate}%</p>
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
                  <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.repeatBusinessRate}%</p>
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
                  <p className="text-xs text-gray-500 mt-1">Industry standard: {selectedVertical.referralsPerClient}</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-semibold"
                >
                  Calculate My ROI
                </Button>
              </div>
            </div>
          )}

          {step === 5 && results && selectedVertical && (
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-3xl font-bold mb-8 text-center">Your ROI Calculation</h3>
              
              <div className="space-y-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-gray-100 p-5 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium text-gray-600">Total Investment</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatCurrency(results.totalInvestment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Number of Leads</span>
                    <span className="text-sm text-gray-900">{numLeads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Leads Converted</span>
                    <span className="text-sm text-gray-900">{results.leadsConverted}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-green-800">Immediate ROI (90 Days)</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-base text-green-700">Revenue</span>
                      <span className="text-base font-medium text-green-800">
                        {formatCurrency(results.immediateRevenue)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-green-700">Profit</span>
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
                    <span className="text-lg font-bold text-blue-800">Lifetime Value</span>
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
                <h4 className="text-xl font-bold mb-3 text-center">Ready to get started?</h4>
                <p className="text-base text-gray-600 text-center mb-6">Book a call to discuss your lead generation needs</p>
                
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