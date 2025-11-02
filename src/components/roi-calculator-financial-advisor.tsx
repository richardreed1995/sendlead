"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LeadROICalculator = () => {
  const [inputs, setInputs] = useState({
    numLeads: 50,
    conversionRate: 20,
    avgClientAUM: 150000,
    annualFeeRate: 1.0,
    clientRetentionRate: 90,
    clientLifetimeYears: 15,
    referralsPerClient: 0.8
  });

  const [results, setResults] = useState<{
    totalInvestment: number;
    clientsAcquired: number;
    immediateAUM: number;
    immediateAnnualRevenue: number;
    immediateProfit: number;
    immediateROI: number;
    lifetimeAUM: number;
    totalLifetimeRevenue: number;
    totalLifetimeProfit: number;
    lifetimeROI: number;
  }>({
    totalInvestment: 0,
    clientsAcquired: 0,
    immediateAUM: 0,
    immediateAnnualRevenue: 0,
    immediateProfit: 0,
    immediateROI: 0,
    lifetimeAUM: 0,
    totalLifetimeRevenue: 0,
    totalLifetimeProfit: 0,
    lifetimeROI: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const costPerLead = 100;
    const totalInvestment = inputs.numLeads * costPerLead;
    const clientsAcquired = (inputs.numLeads * inputs.conversionRate) / 100;
    
    const immediateAUM = clientsAcquired * inputs.avgClientAUM;
    const immediateAnnualRevenue = (immediateAUM * inputs.annualFeeRate) / 100;
    const immediateProfit = immediateAnnualRevenue - totalInvestment;
    const immediateROI = totalInvestment > 0 ? (immediateProfit / totalInvestment) * 100 : 0;
    
    // Calculate lifetime value with referrals
    const referralClients = clientsAcquired * inputs.referralsPerClient;
    const totalClientsLifetime = clientsAcquired + referralClients;
    const lifetimeAUM = totalClientsLifetime * inputs.avgClientAUM;
    
    // Annual revenue per client over lifetime
    const annualRevenuePerClient = (inputs.avgClientAUM * inputs.annualFeeRate) / 100;
    const totalLifetimeRevenue = annualRevenuePerClient * totalClientsLifetime * inputs.clientLifetimeYears;
    const totalLifetimeProfit = totalLifetimeRevenue - totalInvestment;
    const lifetimeROI = totalInvestment > 0 ? (totalLifetimeProfit / totalInvestment) * 100 : 0;
    
    setResults({
      totalInvestment,
      clientsAcquired: Math.round(clientsAcquired),
      immediateAUM,
      immediateAnnualRevenue,
      immediateProfit,
      immediateROI,
      lifetimeAUM,
      totalLifetimeRevenue,
      totalLifetimeProfit,
      lifetimeROI
    });
  };

  const handleInputChange = (field: keyof typeof inputs, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${Math.round(percentage)}%`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-card border border-border rounded-lg shadow-sm">
      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Inputs */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Your Practice Details</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Leads
                </label>
                <input
                  type="number"
                  value={inputs.numLeads}
                  onChange={(e) => handleInputChange('numLeads', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Conversion Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.conversionRate}
                  onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Client AUM (£)
                </label>
                <input
                  type="number"
                  value={inputs.avgClientAUM}
                  onChange={(e) => handleInputChange('avgClientAUM', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Annual Fee Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.annualFeeRate}
                  onChange={(e) => handleInputChange('annualFeeRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Client Retention (%)
                </label>
                <input
                  type="number"
                  value={inputs.clientRetentionRate}
                  onChange={(e) => handleInputChange('clientRetentionRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Client Lifetime (Years)
                </label>
                <input
                  type="number"
                  value={inputs.clientLifetimeYears}
                  onChange={(e) => handleInputChange('clientLifetimeYears', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Referrals Per Client
              </label>
              <input
                type="number"
                value={inputs.referralsPerClient}
                onChange={(e) => handleInputChange('referralsPerClient', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                min="0"
                step="0.1"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Your AUM Growth & ROI Breakdown</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">Total Investment</span>
                <span className="text-lg font-semibold text-gray-900">
                  {formatCurrency(results.totalInvestment || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Clients Acquired</span>
                <span className="text-sm text-gray-700">{results.clientsAcquired || 0}</span>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <div className="mb-3">
                <span className="text-sm font-medium text-green-800">Immediate ROI (Year 1)</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">AUM Added</span>
                  <span className="text-sm font-medium text-green-800">
                    {formatCurrency(results.immediateAUM || 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Annual Revenue</span>
                  <span className="text-sm font-medium text-green-800">
                    {formatCurrency(results.immediateAnnualRevenue || 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Profit</span>
                  <span className="text-sm font-medium text-green-800">
                    {formatCurrency(results.immediateProfit || 0)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-green-200 pt-2">
                  <span className="text-sm font-medium text-green-800">ROI</span>
                  <span className={`text-lg font-bold ${(results.immediateROI || 0) > 0 ? 'text-green-800' : 'text-red-600'}`}>
                    {formatPercentage(results.immediateROI || 0)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <div className="mb-3">
                <span className="text-sm font-medium text-blue-800">Lifetime Value</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Total AUM (with referrals)</span>
                  <span className="text-sm font-medium text-blue-800">
                    {formatCurrency(results.lifetimeAUM || 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Total Lifetime Revenue</span>
                  <span className="text-sm font-medium text-blue-800">
                    {formatCurrency(results.totalLifetimeRevenue || 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Total Profit</span>
                  <span className="text-sm font-medium text-blue-800">
                    {formatCurrency(results.totalLifetimeProfit || 0)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-2">
                  <span className="text-sm font-medium text-blue-800">Lifetime ROI</span>
                  <span className={`text-lg font-bold ${(results.lifetimeROI || 0) > 0 ? 'text-blue-800' : 'text-red-600'}`}>
                    {formatPercentage(results.lifetimeROI || 0)}
                  </span>
                </div>
              </div>
            </div>

            <Link href="/get-started">
              <Button size="sm" className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadROICalculator;

