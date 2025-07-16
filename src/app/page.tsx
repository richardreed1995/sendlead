import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Features4 from "@/components/features-4";
import Methodology from "@/components/methodology";
import CallToAction from "@/components/call-to-action";
import Faqs3 from "@/components/faqs-3";
import Footer from "@/components/footer";
import Features from "@/components/features-12";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header>
        <HeroSection />
      </header>
      <main className="flex-1 flex flex-col gap-12">
        <LogoCloud />
        <Features4 />
        <Methodology />
        <Features />
        <Faqs3 />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
