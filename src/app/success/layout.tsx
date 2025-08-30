import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Application Submitted",
  description: "Your application has been submitted successfully. Thank you for choosing Sendlead for your lead generation needs. We'll be in touch within 24 hours.",
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

