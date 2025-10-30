import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example Broker Emails | Sendlead',
  description: 'Explore example emails sent to brokers with complete lead details captured through our qualification process. View Commercial Finance and Wealth Management examples.',
  keywords: 'broker emails, lead notification, commercial finance, wealth management, example emails',
  openGraph: {
    title: 'Example Broker Emails | Sendlead',
    description: 'Explore example emails sent to brokers with complete lead details captured through our qualification process.',
    type: 'website',
    url: 'https://sendlead.co.uk/example-broker-emails',
    siteName: 'Sendlead',
  },
  alternates: {
    canonical: 'https://sendlead.co.uk/example-broker-emails',
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


