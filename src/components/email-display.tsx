'use client'

import { CheckCircle2, Calendar, Clock, Mail, Phone, Building, User, FileText, ExternalLink, XCircle, ClipboardList } from 'lucide-react'
import { businessLoanEmail, wealthManagementEmail, financialAdvisorEmail, bridgingLoanEmail, invoiceFinanceEmail } from '@/lib/email-data'
import type { VerticalType } from '@/components/email-sidebar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface EmailDisplayProps {
  vertical: VerticalType
}

export function EmailDisplay({ vertical }: EmailDisplayProps) {
  const emailDataMap = {
    'business-loans': businessLoanEmail,
    'wealth-management': wealthManagementEmail,
    'financial-advisor': financialAdvisorEmail,
    'bridging-loans': bridgingLoanEmail,
    'invoice-finance': invoiceFinanceEmail,
  }
  
  const emailData = emailDataMap[vertical]
  const brandName = 'Sendlead'
  
  const verticalLabelMap = {
    'business-loans': 'Business Loan Quote',
    'wealth-management': 'Wealth Management Quote',
    'financial-advisor': 'Financial Advisor Quote',
    'bridging-loans': 'Bridging Loan Quote',
    'invoice-finance': 'Invoice Finance Quote',
  }
  const verticalLabel = verticalLabelMap[vertical]

  return (
    <div>
      <div className="bg-card rounded-lg border shadow-lg overflow-hidden">
        {/* Email Body */}
        <div className="px-6 py-6 bg-background">
          <div className="max-w-2xl mx-auto">
          {/* Logo and Header Section - Compact */}
          <div className="mb-4 text-center">
            {/* Sendlead Logo */}
            <div className="flex justify-center mb-3">
              <Image
                src="/Group 33 (1).svg"
                alt="Sendlead logo"
                height={32}
                width={150}
                className="h-auto w-auto max-w-[150px]"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-1">{emailData.headerTitle}</h2>
            <p className="text-muted-foreground text-sm">{emailData.headerDescription}</p>
          </div>

          {/* Loan/Investment Details Section - Compact */}
          <div className="bg-muted/50 rounded-lg p-4 mb-4 border border-border/50">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                {vertical === 'business-loans' || vertical === 'bridging-loans' || vertical === 'invoice-finance' 
                  ? 'Loan Amount Requested' 
                  : 'Investment Amount'}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{emailData.metrics.amount}</div>
              <div className="text-sm text-muted-foreground">Lead: {emailData.contactInfo.fullName}</div>
            </div>
          </div>

          {/* Action Buttons - Compact */}
          <div className="flex gap-3 mb-4">
            <Button 
              size="sm"
              className="flex-1 bg-[#1F7FD9] hover:bg-[#1a6fc7] text-white text-sm py-2 h-auto"
              onClick={() => window.location.href = `tel:${emailData.contactInfo.phoneNumber?.replace(/\s/g, '')}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Lead
            </Button>
            <Button 
              size="sm"
              className="flex-1 bg-[#1F7FD9]/10 hover:bg-[#1F7FD9]/20 text-[#1F7FD9] border border-[#1F7FD9]/30 text-sm py-2 h-auto font-semibold"
              onClick={() => {}}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View in CRM
            </Button>
          </div>

          {/* Lead Contact Information - Compact */}
          <div className="bg-card rounded-lg border border-border p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">Contact Information</h3>
            </div>
            <div className="space-y-0 text-sm">
              {Object.entries(emailData.contactInfo).filter(([key]) => key !== 'submissionId').map(([key, value], index, array) => {
                const filteredArray = array.filter(([k]) => k !== 'submissionId')
                return (
                  <div 
                    key={key} 
                    className={`flex justify-between items-start py-1.5 ${index < filteredArray.length - 1 ? 'border-b border-border/50' : ''}`}
                  >
                    <span className="text-muted-foreground font-medium capitalize text-xs">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-foreground text-right max-w-xs flex items-center gap-1 text-xs">
                      {key === 'emailAddress' && <Mail className="w-3 h-3" />}
                      {key === 'phoneNumber' && <Phone className="w-3 h-3" />}
                      {value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Company Information - Compact */}
          {emailData.companyInfo && (
            <div className="bg-card rounded-lg border border-border p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-base font-semibold text-foreground">Company Information</h3>
              </div>
              <div className="space-y-0 text-sm">
                {Object.entries(emailData.companyInfo).map(([key, value], index, array) => (
                  <div 
                    key={key} 
                    className={`flex justify-between items-start py-1.5 ${index < array.length - 1 ? 'border-b border-border/50' : ''}`}
                  >
                    <span className="text-muted-foreground font-medium capitalize text-xs">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-foreground text-right max-w-xs text-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lead Assessment Summary - Compact */}
          <div className="bg-muted/50 rounded-lg border border-border p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardList className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">Assessment Summary</h3>
            </div>
            <div className="space-y-0 text-sm">
              {emailData.assessment.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-start py-1.5 ${index < emailData.assessment.length - 1 ? 'border-b border-border/50' : ''}`}
                >
                  <span className="text-muted-foreground text-xs leading-tight">{item.label}</span>
                  <span className="text-foreground text-xs leading-tight text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer - Compact */}
          <div className="border-t border-border pt-3 mt-4 text-xs text-muted-foreground space-y-1">
            <p>{emailData.footer.notification}</p>
            <p>
              {emailData.footer.contactLabel}{' '}
              <a href={`mailto:${emailData.footer.contactEmail}`} className="text-foreground hover:underline font-medium">
                {emailData.footer.contactEmail}
              </a>
            </p>
            <p className="font-mono text-xs mt-2">{emailData.footer.submissionId}</p>
            <p className="mt-3 text-xs">{emailData.footer.copyright}</p>
            <p className="text-xs italic mt-1">{emailData.footer.note}</p>
          </div>
          </div>
        </div>
      </div>

      {/* Qualification Criteria Section */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-gray-200">
          {/* Column Headers */}
          <div className="bg-zinc-800 p-4 border-r border-gray-200">
            <h3 className="text-lg font-semibold text-white text-left">Criteria</h3>
          </div>
          <div className="bg-zinc-800 p-4 border-r border-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Qualified</h3>
            </div>
          </div>
          <div className="hidden md:block bg-zinc-800 p-4">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Unqualified</h3>
            </div>
          </div>
        </div>
        
        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {emailData.qualificationCriteria.qualified.map((qualifiedItem, index) => {
            const unqualifiedItem = emailData.qualificationCriteria.unqualified[index] || ''
            // Extract criteria name (part before the colon)
            const getCriteriaName = (text: string) => {
              const colonIndex = text.indexOf(':')
              return colonIndex > 0 ? text.substring(0, colonIndex) : text
            }
            const getCriteriaValue = (text: string) => {
              const colonIndex = text.indexOf(':')
              return colonIndex > 0 ? text.substring(colonIndex + 1).trim() : text
            }
            
            return (
              <div key={index} className="grid grid-cols-2 md:grid-cols-3 divide-x divide-gray-200">
                {/* Criteria Column */}
                <div className="p-4 bg-gray-50 flex items-center">
                  <h4 className="font-medium text-foreground text-sm">{getCriteriaName(qualifiedItem)}</h4>
                </div>
                
                {/* Qualified Column */}
                <div className="p-4 bg-green-50 flex items-center">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-foreground">{getCriteriaValue(qualifiedItem)}</span>
                  </div>
                </div>
                
                {/* Unqualified Column - Hidden on mobile */}
                <div className="hidden md:flex p-4 bg-red-50 items-center">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm text-foreground">{getCriteriaValue(unqualifiedItem)}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}



