'use client'

import { CheckCircle2, Calendar, Clock, Mail, Phone, Building, User, FileText, ExternalLink } from 'lucide-react'
import { commercialFinanceEmail } from '@/lib/email-data'
import { wealthManagementEmail } from '@/lib/email-data'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface EmailDisplayProps {
  vertical: 'commercial-finance' | 'wealth-management'
}

export function EmailDisplay({ vertical }: EmailDisplayProps) {
  const emailData = vertical === 'commercial-finance' ? commercialFinanceEmail : wealthManagementEmail
  const brandName = 'Sendlead'
  const verticalLabel = vertical === 'commercial-finance' ? 'Business Finance Quote' : 'Wealth Management Quote'

  return (
    <div className="bg-card rounded-lg border shadow-lg overflow-hidden">
      {/* Black Header with White Text */}
      <div className="bg-black text-white px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{brandName}</h3>
          <div className="text-white font-medium">{verticalLabel}</div>
        </div>
        <div className="space-y-2 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span><span className="font-medium">From:</span> {emailData.from}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span><span className="font-medium">To:</span> {emailData.to}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span><span className="font-medium">Subject:</span> {emailData.subject}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span><span className="font-medium">Date:</span> {emailData.date}</span>
          </div>
        </div>
      </div>

      {/* Email Body */}
      <div className="px-6 py-6 bg-background">
        <div className="max-w-none">
          {/* Logo and Header Section */}
          <div className="mb-8 text-center">
            {/* Sendlead Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/Group 33 (1).svg"
                alt="Sendlead logo"
                height={40}
                width={184}
                className="h-auto w-auto max-w-[184px]"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">{emailData.headerTitle}</h2>
            <p className="text-muted-foreground text-lg">{emailData.headerDescription}</p>
          </div>

          {/* Loan/Investment Details Section - Light Grey Box */}
          <div className="bg-muted/50 rounded-xl p-6 mb-8 border border-border/50">
            <div className="text-center mb-4">
              <div className="text-sm text-muted-foreground mb-2">
                {vertical === 'commercial-finance' ? 'Loan Amount Requested' : 'Investment Amount'}
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">{emailData.metrics.amount}</div>
              <div className="text-muted-foreground">Lead: {emailData.contactInfo.fullName}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Term Flexibility</div>
                <div className="text-lg font-semibold text-foreground">{emailData.metrics.term}</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Contact Priority</div>
                <div className="text-lg font-semibold text-foreground font-bold">{emailData.metrics.priority}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button 
              size="lg"
              className="flex-1 bg-[#1F7FD9] hover:bg-[#1a6fc7] text-white text-base py-6 h-auto"
              onClick={() => window.location.href = `tel:${emailData.contactInfo.phoneNumber?.replace(/\s/g, '')}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Lead
            </Button>
            <Button 
              size="lg"
              className="flex-1 bg-[#1F7FD9]/10 hover:bg-[#1F7FD9]/20 text-[#1F7FD9] border border-[#1F7FD9]/30 text-base py-6 h-auto font-semibold"
              onClick={() => {}}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View in CRM
            </Button>
          </div>

          {/* Lead Contact Information */}
          <div className="bg-card rounded-lg border border-border p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Lead Contact Information</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(emailData.contactInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-foreground text-right max-w-xs flex items-center gap-2">
                    {key === 'emailAddress' && <Mail className="w-4 h-4" />}
                    {key === 'phoneNumber' && <Phone className="w-4 h-4" />}
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Assessment Summary */}
          <div className="bg-muted/50 rounded-lg border border-border p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Lead Assessment Summary</h3>
            <div className={`grid gap-4 ${vertical === 'wealth-management' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
              {emailData.assessment.map((item, index) => (
                <div key={index} className="flex items-start justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground font-medium">{item.label}</span>
                  <span className="text-foreground font-semibold text-right max-w-md ml-4">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Information */}
          {emailData.companyInfo && (
            <div className="bg-card rounded-lg border border-border p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Company Information</h3>
              </div>
              <div className="space-y-3">
                {Object.entries(emailData.companyInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-foreground text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Director Information */}
          {emailData.directorInfo && (
            <div className="bg-card rounded-lg border border-border p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Director Information</h3>
              </div>
              <div className="space-y-3">
                {Object.entries(emailData.directorInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-foreground text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-border pt-6 mt-6 text-sm text-muted-foreground space-y-2">
            <p>{emailData.footer.notification}</p>
            <p>
              {emailData.footer.contactLabel}{' '}
              <a href={`mailto:${emailData.footer.contactEmail}`} className="text-foreground hover:underline font-medium">
                {emailData.footer.contactEmail}
              </a>
            </p>
            <p className="font-mono text-xs mt-4">{emailData.footer.submissionId}</p>
            <p className="mt-6 text-xs">{emailData.footer.copyright}</p>
            <p className="text-xs italic mt-2">{emailData.footer.note}</p>
          </div>
        </div>
      </div>
    </div>
  )
}



