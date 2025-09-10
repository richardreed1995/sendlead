import HeroSectionSecuredLoans from "@/components/hero-section-secured-loans";
import AutomationFlowsSecuredLoans from "@/components/automation-flows-secured-loans";
import BenefitsSecuredLoans from "@/components/benefits-secured-loans";
import FAQSSecuredLoans from "@/components/faqs-secured-loans";
import CTASecuredLoans from "@/components/cta-secured-loans";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import CostComparisonSecuredLoans from "@/components/cost-comparison-secured-loans";
import FinalCTASecuredLoans from "@/components/final-cta-secured-loans";
import ROISectionSecuredLoans from "@/components/roi-section-secured-loans";
import CallToAction from "@/components/call-to-action";
import CompetitiveAdvantages from "@/components/competitive-advantages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secured Loan Lead Generation | Qualified Leads for Loan Brokers | Sendlead",
  description: "Get qualified secured loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading secured loan brokers across the UK. £100 per lead, 50 lead minimum.",
  keywords: "secured loan leads, secured loan broker leads, secured loan lead generation, qualified secured loan prospects, secured loan marketing, secured loan lead generation agency, secured loan sales leads, secured loan broker marketing, secured loan prospects, secured loan lead generation UK",
  openGraph: {
    title: "Secured Loan Lead Generation | Qualified Leads for Loan Brokers | Sendlead",
    description: "Get qualified secured loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert. Trusted by leading secured loan brokers across the UK.",
    type: "website",
    url: "https://sendlead.co.uk/secured-loans",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-secured-loans.jpg",
        width: 1200,
        height: 630,
        alt: "Secured Loan Lead Generation - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secured Loan Lead Generation | Qualified Leads for Loan Brokers | Sendlead",
    description: "Get qualified secured loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
    images: ["https://sendlead.co.uk/og-secured-loans.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/secured-loans",
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

export default function SecuredLoansPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Secured Loan Lead Generation",
    "description": "Get qualified secured loan leads delivered to your CRM. Sendlead generates exclusive, phone-verified prospects that convert.",
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
      "description": "£100 per qualified secured loan lead"
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
        <HeroSectionSecuredLoans />
        <AutomationFlowsSecuredLoans />
        <BenefitsSecuredLoans />
        <CompetitiveAdvantages />
        <ROISectionSecuredLoans />
        <CostComparisonSecuredLoans />
        <FAQSSecuredLoans />
        <CallToAction />
      </main>
      <FooterSection />
    </div>
  );
}
