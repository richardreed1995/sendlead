"use client"

import { useEffect } from "react"
import { Logo } from "@/components/logo"
import { trackEvent } from "@/components/meta-pixel-events"
import Link from "next/link"

export default function SuccessPage() {
  useEffect(() => {
    // Track successful qualification
    trackEvent("ViewContent")
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="py-8 px-4">
        <div className="max-w-2xl mx-auto flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>

      <div className="text-center py-8 px-4 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-4">Application Submitted Successfully!</h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Thank you for your interest in Sendlead. We've received your application and will be in touch within 24 hours to discuss your specific needs and next steps.
          </p>
          <p className="text-gray-500 text-sm">
            You'll receive a confirmation email shortly. If you have any immediate questions, please don't hesitate to reach out.
          </p>
        </div>
      </div>
    </div>
  )
} 