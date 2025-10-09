import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

