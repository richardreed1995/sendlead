import HeroSectionWealthManagement from "@/components/hero-section-wealth-management";
import AutomationFlowsWealthManagement from "@/components/automation-flows-wealth-management";
import BenefitsWealthManagement from "@/components/benefits-wealth-management";
import FAQsWealthManagement from "@/components/faqs-wealth-management";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonWealthManagement from "@/components/cost-comparison-wealth-management";
import ROISectionWealthManagement from "@/components/roi-section-wealth-management";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Wealth Management Lead Generation",
  description: "Acquire qualified, exclusive wealth management leads across the UK. Sendlead delivers affluent investors straight into your CRM with full qualification data.",
  keywords: "wealth management leads, wealth management lead generation, qualified investors, affluent client acquisition, wealth management marketing, wealth manager leads, wealth management prospects UK, financial planning leads, HNW lead generation",
  openGraph: {
    title: "Sendlead | Wealth Management Lead Generation",
    description: "Acquire qualified, exclusive wealth management leads across the UK. Sendlead delivers affluent investors straight into your CRM with full qualification data.",
    type: "website",
    url: "https://sendlead.co.uk/wealth-management",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-wealth-management.jpg",
        width: 1200,
        height: 630,
        alt: "Wealth Management Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sendlead | Wealth Management Lead Generation",
    description: "Acquire qualified, exclusive wealth management leads across the UK. Sendlead delivers affluent investors straight into your CRM with full qualification data.",
    images: ["https://sendlead.co.uk/og-wealth-management.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/wealth-management",
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

export default function WealthManagementPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wealth Management Lead Generation",
    description: "Acquire qualified, exclusive wealth management leads across the UK. Sendlead delivers affluent investors straight into your CRM with full qualification data.",
    provider: {
      "@type": "Organization",
      name: "Sendlead",
      url: "https://sendlead.co.uk",
      logo: "https://sendlead.co.uk/sendlead-logo.svg",
    },
    serviceType: "Lead Generation",
    areaServed: "United Kingdom",
    offers: {
      "@type": "Offer",
      price: "120",
      priceCurrency: "GBP",
      description: "£120 per qualified wealth management lead",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionWealthManagement />
        <AutomationFlowsWealthManagement />
        <BenefitsWealthManagement />
        <CompetitiveAdvantages />
        <ROISectionWealthManagement />
        <CostComparisonWealthManagement />
        <FAQsWealthManagement />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}

