import HeroSectionMortgage from "@/components/hero-section-mortgage";
import AutomationFlowsMortgage from "@/components/automation-flows-mortgage";
import BenefitsMortgage from "@/components/benefits-mortgage";
import FAQsMortgage from "@/components/faqs-mortgage";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonMortgage from "@/components/cost-comparison-mortgage";
import ROISectionMortgage from "@/components/roi-section-mortgage";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Lead Generation | Qualified Leads for Mortgage Brokers | Sendlead",
  description: "Get qualified mortgage leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading mortgage brokers across the UK. £100 per lead, 50 lead minimum.",
  keywords: "mortgage leads, mortgage broker leads, mortgage lead generation, qualified mortgage prospects, mortgage marketing, mortgage lead generation agency, mortgage sales leads, mortgage broker marketing, mortgage prospects, mortgage lead generation UK",
  openGraph: {
    title: "Mortgage Lead Generation | Qualified Leads for Mortgage Brokers | Sendlead",
    description: "Get qualified mortgage leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading mortgage brokers across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/mortgage",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-mortgage.jpg",
        width: 1200,
        height: 630,
        alt: "Mortgage Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Lead Generation | Qualified Leads for Mortgage Brokers | Sendlead",
    description: "Get qualified mortgage leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-mortgage.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/mortgage",
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

export default function MortgagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mortgage Lead Generation",
    "description": "Get qualified mortgage leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
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
      "description": "£100 per qualified mortgage lead"
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
        <HeroSectionMortgage />
        <AutomationFlowsMortgage />
        <BenefitsMortgage />
        <CompetitiveAdvantages />
        <ROISectionMortgage />
        <CostComparisonMortgage />
        <FAQsMortgage />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
