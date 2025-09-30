'use client';

import React, { useState, useEffect } from 'react';

type VerticalKey = 'mortgages' | 'carInsurance' | 'businessLoans' | 'lifeInsurance' | 'securedLoans' | 'businessGrants' | 'propertyInvestment' | 'custom';

interface VerticalData {
  name: string;
  conversionRate: number;
  avgDealValue: number;
  commissionRate: number;
  repeatBusinessRate: number;
  clientLifetimeYears: number;
  referralsPerClient: number;
  costPerLead: number;
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

const LeadROICalculator = () => {
  const [inputs, setInputs] = useState({
    numLeads: 50,
    conversionRate: 20,
    avgDealValue: 50000,
    commissionRate: 10,
    repeatBusinessRate: 30,
    clientLifetimeYears: 5,
    referralsPerClient: 0.5,
    costPerLead: 100
  });

  const [results, setResults] = useState<ROIResults>({
    totalInvestment: 0,
    leadsConverted: 0,
    immediateRevenue: 0,
    immediateProfit: 0,
    immediateROI: 0,
    lifetimeValuePerLead: 0,
    totalLifetimeRevenue: 0,
    totalLifetimeProfit: 0,
    lifetimeROI: 0
  });
  const [selectedVertical, setSelectedVertical] = useState<VerticalKey>('custom');

  const verticals: Record<VerticalKey, VerticalData> = {
    mortgages: {
      name: 'Mortgages',
      conversionRate: 15,
      avgDealValue: 250000,
      commissionRate: 0.35,
      repeatBusinessRate: 40,
      clientLifetimeYears: 7,
      referralsPerClient: 0.5,
      costPerLead: 100
    },
    carInsurance: {
      name: 'Car Finance',
      conversionRate: 22,
      avgDealValue: 25000,
      commissionRate: 2,
      repeatBusinessRate: 25,
      clientLifetimeYears: 4,
      referralsPerClient: 0.4,
      costPerLead: 100
    },
    businessLoans: {
      name: 'Business Loans',
      conversionRate: 12,
      avgDealValue: 75000,
      commissionRate: 3,
      repeatBusinessRate: 25,
      clientLifetimeYears: 4,
      referralsPerClient: 0.3,
      costPerLead: 100
    },
    lifeInsurance: {
      name: 'Life Insurance',
      conversionRate: 20,
      avgDealValue: 2400,
      commissionRate: 50,
      repeatBusinessRate: 15,
      clientLifetimeYears: 15,
      referralsPerClient: 0.4,
      costPerLead: 100
    },
    securedLoans: {
      name: 'Secured Loans',
      conversionRate: 14,
      avgDealValue: 35000,
      commissionRate: 2.5,
      repeatBusinessRate: 20,
      clientLifetimeYears: 3,
      referralsPerClient: 0.4,
      costPerLead: 100
    },
    businessGrants: {
      name: 'Business Grants',
      conversionRate: 8,
      avgDealValue: 15000,
      commissionRate: 12,
      repeatBusinessRate: 40,
      clientLifetimeYears: 5,
      referralsPerClient: 0.6,
      costPerLead: 100
    },
    propertyInvestment: {
      name: 'Property Investment',
      conversionRate: 10,
      avgDealValue: 180000,
      commissionRate: 1.5,
      repeatBusinessRate: 60,
      clientLifetimeYears: 10,
      referralsPerClient: 0.8,
      costPerLead: 100
    },
    custom: {
      name: 'Custom',
      conversionRate: 20,
      avgDealValue: 50000,
      commissionRate: 10,
      repeatBusinessRate: 30,
      clientLifetimeYears: 5,
      referralsPerClient: 0.5,
      costPerLead: 100
    }
  };

  useEffect(() => {
    if (selectedVertical !== 'custom') {
      const vertical = verticals[selectedVertical];
      setInputs(prev => ({
        ...prev,
        conversionRate: vertical.conversionRate,
        avgDealValue: vertical.avgDealValue,
        commissionRate: vertical.commissionRate,
        repeatBusinessRate: vertical.repeatBusinessRate,
        clientLifetimeYears: vertical.clientLifetimeYears,
        referralsPerClient: vertical.referralsPerClient,
        costPerLead: vertical.costPerLead
      }));
    }
  }, [selectedVertical]);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const totalInvestment = inputs.numLeads * inputs.costPerLead;
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

  const handleInputChange = (field: string, value: string) => {
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
    return `${percentage.toFixed(1)}%`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-card border border-border rounded-lg shadow-sm">

      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Inputs */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Your Business Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Industry
              </label>
              <select
                value={selectedVertical}
                onChange={(e) => setSelectedVertical(e.target.value as VerticalKey)}
                className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
              >
                {Object.entries(verticals).map(([key, vertical]) => (
                  <option key={key} value={key}>{vertical.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Cost per Lead (£)
              </label>
              <input
                type="number"
                value={inputs.costPerLead}
                onChange={(e) => handleInputChange('costPerLead', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
                min="1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Leads
                </label>
                <input
                  type="number"
                  value={inputs.numLeads}
                  onChange={(e) => handleInputChange('numLeads', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
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
                  className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Deal Value (£)
                </label>
                <input
                  type="number"
                  value={inputs.avgDealValue}
                  onChange={(e) => handleInputChange('avgDealValue', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Commission Rate / Margin (%)
                </label>
                <input
                  type="number"
                  value={inputs.commissionRate}
                  onChange={(e) => handleInputChange('commissionRate', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Repeat Business (%)
                </label>
                <input
                  type="number"
                  value={inputs.repeatBusinessRate}
                  onChange={(e) => handleInputChange('repeatBusinessRate', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Referrals Per Client
                </label>
                <input
                  type="number"
                  value={inputs.referralsPerClient}
                  onChange={(e) => handleInputChange('referralsPerClient', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md shadow-sm focus:ring-2 focus:ring-[#2998FD] focus:border-[#2998FD] bg-background text-foreground"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Your ROI Breakdown</h3>
          
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">Total Investment</span>
                <span className="text-lg font-semibold text-foreground">
                  {formatCurrency(results.totalInvestment)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Leads Converted</span>
                <span className="text-sm text-foreground">{results.leadsConverted}</span>
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
                    {formatCurrency(results.immediateRevenue)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Profit</span>
                  <span className="text-sm font-medium text-green-800">
                    {formatCurrency(results.immediateProfit)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-green-200 pt-2">
                  <span className="text-sm font-medium text-green-800">ROI</span>
                  <span className={`text-lg font-bold ${results.immediateROI > 0 ? 'text-green-800' : 'text-red-600'}`}>
                    {formatPercentage(results.immediateROI)}
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
                    {formatCurrency(results.totalLifetimeRevenue)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Total Profit</span>
                  <span className="text-sm font-medium text-blue-800">
                    {formatCurrency(results.totalLifetimeProfit)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-2">
                  <span className="text-sm font-medium text-blue-800">Lifetime ROI</span>
                  <span className={`text-lg font-bold ${results.lifetimeROI > 0 ? 'text-blue-800' : 'text-red-600'}`}>
                    {formatPercentage(results.lifetimeROI)}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default LeadROICalculator;
