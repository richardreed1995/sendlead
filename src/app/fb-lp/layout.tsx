import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Facebook Lead Generation",
  description: "Sendlead is a data-driven B2B lead generation agency delivering qualified leads for technology companies. Discover our proven 7-step methodology for systematic growth and ROI.",
};

export default function FBLPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
