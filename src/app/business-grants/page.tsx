import HeroSectionBusinessGrants from "@/components/hero-section-business-grants";
import AutomationFlowsBusinessGrants from "@/components/automation-flows-business-grants";
import BenefitsBusinessGrants from "@/components/benefits-business-grants";
import FAQSBusinessGrants from "@/components/faqs-business-grants";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonBusinessGrants from "@/components/cost-comparison-business-grants";
import ROISectionBusinessGrants from "@/components/roi-section-business-grants";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Grant Lead Generation | Qualified Leads for Grant Consultants | Sendlead",
  description: "Get qualified business grant leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading business grant consultants across the UK. £100 per lead, 50 lead minimum.",
  keywords: "business grant leads, grant consultant leads, business grant lead generation, qualified grant prospects, business grant marketing, grant lead generation agency, business grant sales leads, grant consultant marketing, business grant prospects, grant lead generation UK",
  openGraph: {
    title: "Business Grant Lead Generation | Qualified Leads for Grant Consultants | Sendlead",
    description: "Get qualified business grant leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading business grant consultants across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/business-grants",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-business-grants.jpg",
        width: 1200,
        height: 630,
        alt: "Business Grant Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Grant Lead Generation | Qualified Leads for Grant Consultants | Sendlead",
    description: "Get qualified business grant leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-business-grants.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/business-grants",
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

export default function BusinessGrantsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Grant Lead Generation",
    "description": "Get qualified business grant leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
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
      "description": "£100 per qualified business grant lead"
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
        <HeroSectionBusinessGrants />
        <AutomationFlowsBusinessGrants />
        <BenefitsBusinessGrants />
        <CompetitiveAdvantages />
        <ROISectionBusinessGrants />
        <CostComparisonBusinessGrants />
        <FAQSBusinessGrants />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
