"use client"

import { useEffect } from "react"

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

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div id="calendly-inline-widget" style={{ minWidth: "320px", height: "700px" }} />
} 