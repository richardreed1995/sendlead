import HeroSectionLifeInsurance from "@/components/hero-section-life-insurance";
import AutomationFlowsLifeInsurance from "@/components/automation-flows-life-insurance";
import BenefitsLifeInsurance from "@/components/benefits-life-insurance";
import FAQSLifeInsurance from "@/components/faqs-life-insurance";
import CTALifeInsurance from "@/components/cta-life-insurance";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonLifeInsurance from "@/components/cost-comparison-life-insurance";
import FinalCTALifeInsurance from "@/components/final-cta-life-insurance";
import ROISectionLifeInsurance from "@/components/roi-section-life-insurance";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Insurance Lead Generation | Qualified Leads for Insurance Brokers | Sendlead",
  description: "Get qualified life insurance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading life insurance brokers across the UK. £100 per lead, 50 lead minimum.",
  keywords: "life insurance leads, insurance broker leads, life insurance lead generation, qualified insurance prospects, life insurance marketing, insurance lead generation agency, life insurance sales leads, insurance broker marketing, life insurance prospects, insurance lead generation UK",
  openGraph: {
    title: "Life Insurance Lead Generation | Qualified Leads for Insurance Brokers | Sendlead",
    description: "Get qualified life insurance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading life insurance brokers across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/life-insurance",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-life-insurance.jpg",
        width: 1200,
        height: 630,
        alt: "Life Insurance Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Insurance Lead Generation | Qualified Leads for Insurance Brokers | Sendlead",
    description: "Get qualified life insurance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-life-insurance.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/life-insurance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LifeInsurancePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Life Insurance Lead Generation",
    "description": "Get qualified life insurance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
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
      "description": "£100 per qualified life insurance lead"
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
        <HeroSectionLifeInsurance />
        <AutomationFlowsLifeInsurance />
        <BenefitsLifeInsurance />
        <CompetitiveAdvantages />
        <ROISectionLifeInsurance />
        <CostComparisonLifeInsurance />
        <FAQSLifeInsurance />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
