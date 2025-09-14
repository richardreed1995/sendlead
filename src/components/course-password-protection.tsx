"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

interface CoursePasswordProtectionProps {
  onPasswordCorrect: () => void;
}

export default function CoursePasswordProtection({ onPasswordCorrect }: CoursePasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = "bootcamp2025"; // You can change this password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a brief loading state
    setTimeout(() => {
      if (password === correctPassword) {
        onPasswordCorrect();
      } else {
        setError("Incorrect password. Please try again.");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-[#2998FD] rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Course Access Required
          </h1>
          <p className="text-gray-600">
            Enter your password to access the 7-Day Lead Generation Bootcamp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white py-3"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Access Course"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have a password?{" "}
            <Link href="/bootcamp" className="text-[#2998FD] hover:underline">
              Join the bootcamp first
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
