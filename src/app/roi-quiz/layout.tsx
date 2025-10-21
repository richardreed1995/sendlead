import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | ROI Calculator Quiz",
  description: "Calculate your return on investment with Sendlead's qualified leads. Discover how much profit you can generate from our exclusive, phone-verified leads.",
};

export default function ROIQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
