import HeroSectionBootcamp from "@/components/hero-section-bootcamp";
import BootcampReasons from "@/components/bootcamp-reasons";
import BootcampCurriculum from "@/components/bootcamp-curriculum";
import BootcampBenefits from "@/components/bootcamp-benefits";
import BootcampValueStack from "@/components/bootcamp-value-stack";
import BootcampAccess from "@/components/bootcamp-access";
import BootcampAbout from "@/components/bootcamp-about";
import BootcampFAQs from "@/components/bootcamp-faqs";
import BootcampDisclaimer from "@/components/bootcamp-disclaimer";
import BootcampHeader from "@/components/bootcamp-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free 7-Day On-Demand Bootcamp for Finance Brokers | Sendlead",
  description: "Fill your calendar with qualified leads every week. Learn the system top brokers use to turn marketing spend into consistent, high-quality leads that scale finance businesses to new profit levels.",
  keywords: "finance broker bootcamp, lead generation training, mortgage broker training, business loan broker course, finance marketing bootcamp, lead generation system, broker training course, finance lead generation training",
  openGraph: {
    title: "Free 7-Day On-Demand Bootcamp for Finance Brokers | Sendlead",
    description: "Fill your calendar with qualified leads every week. Learn the system top brokers use to turn marketing spend into consistent, high-quality leads that scale finance businesses to new profit levels.",
    type: "website",
    url: "https://sendlead.co.uk/bootcamp",
    siteName: "Sendlead",
    images: [
      {
        url: "https://sendlead.co.uk/og-bootcamp.jpg",
        width: 1200,
        height: 630,
        alt: "Free 7-Day On-Demand Bootcamp for Finance Brokers - Sendlead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 7-Day On-Demand Bootcamp for Finance Brokers | Sendlead",
    description: "Fill your calendar with qualified leads every week. Learn the system top brokers use to turn marketing spend into consistent, high-quality leads.",
    images: ["https://sendlead.co.uk/og-bootcamp.jpg"],
  },
  alternates: {
    canonical: "https://sendlead.co.uk/bootcamp",
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

export default function BootcampPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Free 7-Day On-Demand Bootcamp for Finance Brokers",
    "description": "Fill your calendar with qualified leads every week. Learn the system top brokers use to turn marketing spend into consistent, high-quality leads that scale finance businesses to new profit levels.",
    "provider": {
      "@type": "Organization",
      "name": "Sendlead",
      "url": "https://sendlead.co.uk",
      "logo": "https://sendlead.co.uk/sendlead-logo.svg"
    },
    "courseMode": "online",
    "educationalLevel": "intermediate",
    "audience": {
      "@type": "Audience",
      "audienceType": "Finance Brokers"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP",
      "description": "Free 7-day bootcamp"
    },
    "duration": "P7D",
    "inLanguage": "en-GB"
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BootcampHeader />
      <main className="flex-1 flex flex-col">
        <HeroSectionBootcamp />
        <BootcampReasons />
        <BootcampCurriculum />
        <BootcampBenefits />
        <BootcampValueStack />
        <BootcampAccess />
        <BootcampAbout />
        <BootcampFAQs />
        <BootcampDisclaimer />
      </main>
    </div>
  );
}
