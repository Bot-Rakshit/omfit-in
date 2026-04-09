"use client"

import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react"
import { SITE_CONFIG, getBatchInfo } from "../site-config"

export function FinalCTA() {
  const batch = getBatchInfo()

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-[var(--color-surface-dark)] px-6 py-12 sm:rounded-[2rem] sm:px-12 sm:py-16">
        <h2 className="display-md mb-3 text-center text-[var(--color-on-dark)]">
          Start Your Health Transformation
        </h2>

        <p className="body-md mx-auto mb-4 max-w-sm text-center text-[var(--color-on-dark-secondary)]">
          Join {SITE_CONFIG.STAT_TRANSFORMED} members who chose real food over quick fixes.
          3-month personalised nutrition coaching program.
        </p>

        {/* Price */}
        <div className="mb-8 text-center">
          <span className="number-display text-3xl text-white sm:text-4xl">&#8377;18,000</span>
          <span className="ml-2 text-sm text-[var(--color-on-dark-muted)]">for 3 months</span>
        </div>

        {/* Primary CTA — Razorpay */}
        <a
          href={SITE_CONFIG.RAZORPAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-4 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--color-accent-light)] active:scale-[0.98]"
        >
          Enrol Now &mdash; Pay Securely
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[var(--color-on-dark-muted)]">
          <ShieldCheck className="h-3.5 w-3.5" />
          Secure payment via Razorpay &middot; EMI available &middot; 7-day refund guarantee
        </div>

        {/* WhatsApp */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--color-on-dark-muted)]" />
          <span className="text-xs text-[var(--color-on-dark-muted)]">or talk to us first</span>
          <div className="h-px flex-1 bg-[var(--color-on-dark-muted)]" />
        </div>

        <a
          href={SITE_CONFIG.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-on-dark-muted)] px-6 py-3 text-[0.875rem] font-medium text-[var(--color-on-dark-secondary)] transition-all hover:border-[var(--color-on-dark-secondary)] hover:text-[var(--color-on-dark)]"
        >
          <MessageCircle className="h-4 w-4" />
          Talk to us on WhatsApp
        </a>

        <p className="mt-5 text-center text-xs text-[var(--color-on-dark-muted)]">
          {batch.label}
        </p>
      </div>
    </section>
  )
}
