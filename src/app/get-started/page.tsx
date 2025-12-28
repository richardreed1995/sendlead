"use client";

import QuizFunnel from "@/components/quiz-funnel";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 sm:py-8">
        <div className="mx-auto px-4">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Link href="/" className="scale-75 sm:scale-100">
              <Logo />
            </Link>
          </div>
          <QuizFunnel />
        </div>
      </div>
    </div>
  );
} 