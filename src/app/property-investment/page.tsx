import HeroSectionPropertyInvestment from "@/components/hero-section-property-investment";
import AutomationFlowsPropertyInvestment from "@/components/automation-flows-property-investment";
import BenefitsPropertyInvestment from "@/components/benefits-property-investment";
import FAQSPropertyInvestment from "@/components/faqs-property-investment";
import CTAPropertyInvestment from "@/components/cta-property-investment";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import FinalCTAPropertyInvestment from "@/components/final-cta-property-investment";
import ROISectionPropertyInvestment from "@/components/roi-section-property-investment";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Investment Lead Generation | Qualified Leads for Property Brokers | Sendlead",
  description: "Get qualified property investment leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading property investment brokers across the UK. £100 per lead, 50 lead minimum.",
  keywords: "property investment leads, property broker leads, property investment lead generation, qualified property prospects, property investment marketing, property lead generation agency, property investment sales leads, property broker marketing, property investment prospects, property lead generation UK",
  openGraph: {
    title: "Property Investment Lead Generation | Qualified Leads for Property Brokers | Sendlead",
    description: "Get qualified property investment leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading property investment brokers across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/property-investment",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-property-investment.jpg",
        width: 1200,
        height: 630,
        alt: "Property Investment Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Investment Lead Generation | Qualified Leads for Property Brokers | Sendlead",
    description: "Get qualified property investment leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-property-investment.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/property-investment",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PropertyInvestmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Property Investment Lead Generation",
    "description": "Get qualified property investment leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    "provider": {
      "@type": "Organization",
      "name": "Sendlead",
      "url": "https://sendlead.co.uk",
      "logo": "https://sendlead.co.uk/sendlead-logo.svg"
    },
    "serviceType": "Lead Generation",
    "areaServed": "United Kingdom",
    "offers": {
      "@type": "Offer",
      "price": "100",
      "priceCurrency": "GBP",
      "description": "£100 per qualified property investment lead"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionPropertyInvestment />
        <AutomationFlowsPropertyInvestment />
        <BenefitsPropertyInvestment />
        <CompetitiveAdvantages />
        <ROISectionPropertyInvestment />
        <FAQSPropertyInvestment />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
