import HeroSectionCarFinance from "@/components/hero-section-car-finance";
import AutomationFlowsCarFinance from "@/components/automation-flows-car-finance";
import BenefitsCarFinance from "@/components/benefits-car-finance";
import FAQSCarFinance from "@/components/faqs-car-finance";
import CTACarFinance from "@/components/cta-car-finance";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import ROISectionCarFinance from "@/components/roi-section-car-finance";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Finance Lead Generation | Qualified Leads for Car Finance Brokers | Sendlead",
  description: "Get qualified car finance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading car finance brokers across the UK. £100 per lead, 50 lead minimum.",
  keywords: "car finance leads, car finance broker leads, car finance lead generation, qualified car finance prospects, car finance marketing, car finance lead generation agency, car finance sales leads, car finance broker marketing, car finance prospects, car finance lead generation UK",
  openGraph: {
    title: "Car Finance Lead Generation | Qualified Leads for Car Finance Brokers | Sendlead",
    description: "Get qualified car finance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading car finance brokers across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/car-finance",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-car-finance.jpg",
        width: 1200,
        height: 630,
        alt: "Car Finance Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Finance Lead Generation | Qualified Leads for Car Finance Brokers | Sendlead",
    description: "Get qualified car finance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-car-finance.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/car-finance",
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

export default function CarFinancePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Finance Lead Generation",
    "description": "Get qualified car finance leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
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
      "description": "£100 per qualified car finance lead"
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
        <HeroSectionCarFinance />
        <AutomationFlowsCarFinance />
        <BenefitsCarFinance />
        <CompetitiveAdvantages />
        <ROISectionCarFinance />
        <FAQSCarFinance />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
