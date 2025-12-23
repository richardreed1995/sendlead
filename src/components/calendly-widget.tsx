"use client"

import { useEffect } from "react"
import { trackEvent } from "@/components/meta-pixel-events"

declare global {
  interface Window {
    Calendly: any
  }
}

export function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/richard-4ta/automation",
          parentElement: document.getElementById("calendly-inline-widget"),
          prefill: {},
          utm: {},
        })
      }
    }

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        trackEvent("Schedule")
      }
    }

    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      document.body.removeChild(script)
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [])

  return <div id="calendly-inline-widget" style={{ minWidth: "320px", height: "700px" }} />
} 