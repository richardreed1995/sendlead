import CourseContent from "@/components/course-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7-Day Lead Generation Bootcamp Course | Sendlead",
  description: "Access your complete 7-day bootcamp course with video lessons, downloads, and step-by-step modules to master lead generation.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function CoursePage() {
  return <CourseContent />;
}
