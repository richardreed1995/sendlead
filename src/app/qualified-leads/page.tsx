'use client'

import { useState } from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { EmailSidebar } from '@/components/email-sidebar'
import type { VerticalType } from '@/components/email-sidebar'
import { EmailDisplay } from '@/components/email-display'

export default function ExampleBrokerEmailsPage() {
  const [selectedVertical, setSelectedVertical] = useState<VerticalType>('business-loans')

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <div className="bg-gradient-to-b from-primary/5 to-background pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Qualified Leads Examples</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Here's an overview of the qualified leads we generate for our different verticals. Each lead has verified emails and phone numbers, and we can adjust our funnels to suit your qualification process.
            </p>
          </div>
        </div>
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <EmailSidebar 
                selectedVertical={selectedVertical}
                onVerticalChange={setSelectedVertical}
              />
            </div>
            <div className="lg:col-span-3 max-w-4xl">
              <EmailDisplay vertical={selectedVertical} />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  )
}

