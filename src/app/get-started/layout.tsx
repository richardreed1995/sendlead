import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Get Started",
  description: "Start your lead generation journey with Sendlead. Take our quick assessment to discover how we can help you generate qualified leads that convert into revenue.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

