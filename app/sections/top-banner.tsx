"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { getBatchInfo } from "../site-config"

export function TopBanner() {
  const [dismissed, setDismissed] = useState(false)
  const batch = getBatchInfo()

  if (dismissed) return null

  return (
    <div className="relative z-[60] bg-[var(--color-brand)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-10 py-2.5 text-center text-sm font-medium">
        <span>
          Nutrition Program \u2014 {batch.label} \u00B7{" "}
          <a href="#contact" className="underline underline-offset-2 hover:no-underline">
            Enrol now &rarr;
          </a>
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/70 transition-colors hover:text-white"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
