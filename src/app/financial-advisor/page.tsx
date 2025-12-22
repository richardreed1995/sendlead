import HeroSectionFinancialAdvisor from "@/components/hero-section-financial-advisor";
import AutomationFlowsFinancialAdvisor from "@/components/automation-flows-financial-advisor";
import BenefitsFinancialAdvisor from "@/components/benefits-financial-advisor";
import FAQsFinancialAdvisor from "@/components/faqs-financial-advisor";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ROISectionFinancialAdvisor from "@/components/roi-section-financial-advisor";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Advisor Lead Generation | Qualified Leads for Financial Advisors | Sendlead",
  description: "Get qualified financial advisor leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects to help grow your AUM. Trusted by leading financial advisors across the UK. £100 per lead, 50 lead minimum.",
  keywords: "financial advisor leads, financial advisor lead generation, qualified financial advisor prospects, AUM growth, financial advisor marketing, financial advisor lead generation agency, financial advisor sales leads, financial advisor prospects, financial advisor lead generation UK, assets under management",
  openGraph: {
    title: "Financial Advisor Lead Generation | Qualified Leads for Financial Advisors | Sendlead",
    description: "Get qualified financial advisor leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects to help grow your AUM. Trusted by leading financial advisors across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/financial-advisor",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-financial-advisor.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Advisor Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Advisor Lead Generation | Qualified Leads for Financial Advisors | Sendlead",
    description: "Get qualified financial advisor leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects to help grow your AUM.",
    images: ["https://sendlead.co.uk/og-financial-advisor.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/financial-advisor",
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

export default function FinancialAdvisorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Financial Advisor Lead Generation",
    "description": "Get qualified financial advisor leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects to help grow your AUM.",
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
      "description": "£100 per qualified financial advisor lead"
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
        <HeroSectionFinancialAdvisor />
        <AutomationFlowsFinancialAdvisor />
        <BenefitsFinancialAdvisor />
        <CompetitiveAdvantages />
        <ROISectionFinancialAdvisor />
        <FAQsFinancialAdvisor />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}

