"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";

export default function HeroSectionBootcamp() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/notify-bootcamp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Track conversion if needed
        router.push("/bootcamp/course");
      } else {
        // Even if notification fails, we want them to see the course
        router.push("/bootcamp/course");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      router.push("/bootcamp/course");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background py-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-blue-50 border border-blue-200 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-blue-700 font-medium">
              <span>🎓 7-Day Lead Generation Bootcamp</span>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 lg:mb-5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              How To Fill Your Calendar with<br className="hidden sm:block" /> Qualified Meetings
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-3 sm:mb-4 lg:mb-5 sm:text-lg lg:text-xl">
            Learn the system top brokers use to turn marketing spend into consistent, high-quality customers that scale finance businesses.
          </p>
          
          {/* Lead Capture Form */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#2998FD] transition-colors" />
                </div>
                <Input 
                  type="email" 
                  placeholder="Enter your work email address" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-12 text-lg rounded-xl border-2 border-gray-100 bg-white shadow-sm focus:border-[#2998FD] focus:ring-0 transition-all placeholder:text-gray-400"
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                disabled={isLoading}
                className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Access The Bootcamp
              </Button>
              <p className="text-sm text-gray-600">
                Instant access • Start immediately • Complete at your own pace
              </p>
            </form>
          </div>
          
          {/* Course Image - Mobile and Desktop */}
          <div className="relative mx-auto max-w-4xl mb-8">
            <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <Image
                className="w-full h-auto rounded-xl object-cover object-left-top"
                src="/course.jpg"
                alt="7-Day Lead Generation Bootcamp Course Preview"
                width={1200}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
