import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendlead | Call Booked",
  description: "Thanks for booking a call. A confirmation email has been sent. Review our presentation to learn more about Sendlead, our process, and how we can work together.",
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

