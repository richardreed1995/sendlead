import BootcampThankYou from "@/components/bootcamp-thank-you";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to the Bootcamp | Sendlead",
  description: "You've successfully joined our 7-Day Lead Generation Bootcamp. Follow the steps to get started immediately.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function BootcampThankYouPage() {
  return <BootcampThankYou />;
}
