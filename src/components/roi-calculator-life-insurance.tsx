"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LeadROICalculator = () => {
  const [inputs, setInputs] = useState({
    numLeads: 50,
    conversionRate: 20,
    avgDealValue: 2400,
    commissionRate: 50,
    repeatBusinessRate: 15,
    clientLifetimeYears: 15,
    referralsPerClient: 0.4
  });

  const [results, setResults] = useState({});

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const costPerLead = 100;
    const totalInvestment = inputs.numLeads * costPerLead;
    const leadsConverted = (inputs.numLeads * inputs.conversionRate) / 100;
    
    const initialCommission = (inputs.avgDealValue * inputs.commissionRate) / 100;
    const immediateRevenue = leadsConverted * initialCommission;
    const immediateProfit = immediateRevenue - totalInvestment;
    const immediateROI = totalInvestment > 0 ? (immediateProfit / totalInvestment) * 100 : 0;
    
    const repeatBusinessValue = initialCommission * (inputs.repeatBusinessRate / 100);
    const referralValue = initialCommission * inputs.referralsPerClient;
    const lifetimeValuePerLead = initialCommission + repeatBusinessValue + referralValue;
    
    const totalLifetimeRevenue = leadsConverted * lifetimeValuePerLead;
    const totalLifetimeProfit = totalLifetimeRevenue - totalInvestment;
    const lifetimeROI = totalInvestment > 0 ? (totalLifetimeProfit / totalInvestment) * 100 : 0;
    
    setResults({
      totalInvestment,
      leadsConverted: Math.round(leadsConverted),
      immediateRevenue,
      immediateProfit,
      immediateROI,
      lifetimeValuePerLead,
      totalLifetimeRevenue,
      totalLifetimeProfit,
      lifetimeROI
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (percentage) => {
    return `${Math.round(percentage)}%`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Business Details</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Deal Value (£)
                </label>
                <input
                  type="number"
                  value={inputs.avgDealValue}
                  onChange={(e) => handleInputChange('avgDealValue', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commission Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.commissionRate}
                  onChange={(e) => handleInputChange('commissionRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repeat Business (%)
                </label>
                <input
                  type="number"
                  value={inputs.repeatBusinessRate}
                  onChange={(e) => handleInputChange('repeatBusinessRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD]"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
        </div>

        {/* Results */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your ROI Breakdown</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Total Investment</span>
                <span className="text-lg font-semibold text-gray-900">
                  {formatCurrency(results.totalInvestment || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Customers</span>
                <span className="text-sm text-gray-700">{results.leadsConverted || 0}</span>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <div className="mb-3">
                <span className="text-sm font-medium text-green-800">Immediate ROI (90 Days)</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Revenue</span>
                  <span className="text-sm font-medium text-green-800">
                    {formatCurrency(results.immediateRevenue || 0)}
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
                  <span className="text-sm text-blue-700">Total Revenue</span>
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
