"use client";

import QuizFunnel from "@/components/quiz-funnel";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <QuizFunnel />
        </div>
      </div>
    </div>
  );
} 