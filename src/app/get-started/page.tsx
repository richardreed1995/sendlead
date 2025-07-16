"use client";

import QuizFunnel from "@/components/quiz-funnel";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black text-white py-4 px-4">
        <Link href="/" className="max-w-2xl mx-auto flex items-center relative">
          <ArrowLeft className="h-5 w-5 absolute left-0" />
          <h1 className="text-2xl font-black flex-grow text-center">Sendlead</h1>
        </Link>
      </header>
      <div className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-900 mb-4">Get Started</h1>
            <p className="text-gray-600">
            Answer a few quick questions and let's find out if we're the right partner to scale your lead generation.
            </p>
          </div>
          <QuizFunnel />
        </div>
      </div>
    </div>
  );
} 