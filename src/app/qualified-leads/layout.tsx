import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qualified Leads Examples | Sendlead',
  description: 'Overview of the qualified leads we generate for different verticals. Each lead has verified emails and phone numbers, and we can adjust funnels to suit your qualification process.',
  keywords: 'qualified leads, lead examples, commercial finance, wealth management, verified leads',
  openGraph: {
    title: 'Qualified Leads Examples | Sendlead',
    description: 'Overview of the qualified leads we generate for different verticals. Each lead has verified emails and phone numbers.',
    type: 'website',
    url: 'https://sendlead.co.uk/qualified-leads',
    siteName: 'Sendlead',
  },
  alternates: {
    canonical: 'https://sendlead.co.uk/qualified-leads',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ExampleBrokerEmailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


