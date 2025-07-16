"use client"

import { useEffect } from "react"
import { CalendlyWidget } from "@/components/calendly-widget"
import { trackEvent } from "@/components/meta-pixel-events"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  useEffect(() => {
    // Track successful qualification
    trackEvent("ViewContent")
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4">
        <Link href="/" className="max-w-2xl mx-auto flex items-center relative">
          <ArrowLeft className="h-5 w-5 absolute left-0" />
          <h1 className="text-2xl font-black flex-grow text-center">Sendlead</h1>
        </Link>
      </header>

      <div className="text-center py-8 px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-4">Application Submitted Successfully!</h1>
        <p className="text-gray-600 mb-2 max-w-2xl mx-auto">
          Thank you for your interest in Sendlead. Let's schedule a strategy call to discuss your specific needs.
        </p>
        <br></br>
        <p className="text-gray-500 text-sm mb-8">Please wait 5 seconds for the calendar to load below.</p>
      </div>

      <div className="px-4 flex-1">
        <CalendlyWidget />
      </div>
    </div>
  )
} 