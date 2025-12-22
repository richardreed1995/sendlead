import HeroSectionBusinessLoans from "@/components/hero-section-business-loans";
import AutomationFlowsBusinessLoans from "@/components/automation-flows-business-loans";
import BenefitsBusinessLoans from "@/components/benefits-business-loans";
import FAQSBusinessLoans from "@/components/faqs-business-loans";
import CTABusinessLoans from "@/components/cta-business-loans";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import FinalCTABusinessLoans from "@/components/final-cta-business-loans";
import ROISectionBusinessLoans from "@/components/roi-section-business-loans";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loan Lead Generation | Qualified Leads for Loan Brokers | Sendlead",
  description: "Get qualified business loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading business loan brokers across the UK. £100 per lead, 50 lead minimum.",
  keywords: "business loan leads, loan broker leads, business loan lead generation, qualified loan prospects, business loan marketing, loan lead generation agency, business loan sales leads, loan broker marketing, business loan prospects, loan lead generation UK",
  openGraph: {
    title: "Business Loan Lead Generation | Qualified Leads for Loan Brokers | Sendlead",
    description: "Get qualified business loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading business loan brokers across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/business-loans",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-business-loans.jpg",
        width: 1200,
        height: 630,
        alt: "Business Loan Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Loan Lead Generation | Qualified Leads for Loan Brokers | Sendlead",
    description: "Get qualified business loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-business-loans.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/business-loans",
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

export default function BusinessLoansPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Loan Lead Generation",
    "description": "Get qualified business loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
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
      "description": "£100 per qualified business loan lead"
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
        <HeroSectionBusinessLoans />
        <AutomationFlowsBusinessLoans />
        <BenefitsBusinessLoans />
        <CompetitiveAdvantages />
        <ROISectionBusinessLoans />
        <FAQSBusinessLoans />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
