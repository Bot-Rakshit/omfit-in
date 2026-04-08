"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative bg-[var(--color-surface)]">
      {/* Subtle warm accent — thin vertical line */}
      <div
        className="pointer-events-none absolute top-0 right-[12%] hidden h-full w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-border-strong) 30%, var(--color-border-strong) 70%, transparent)" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[92dvh] max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8 lg:px-10 lg:pt-32">
        {/* Eyebrow */}
        <p className="label-sm mb-8 text-[var(--color-brand)]">
          Since 2018 — 500+ health transformations
        </p>

        {/* Headline — large, editorial, taking space */}
        <h1 className="mb-8 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5.5rem)] font-700 leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)]" style={{ fontVariationSettings: '"opsz" 144' }}>
          Get healthy &amp; fit.
          <br />
          <em className="text-[var(--color-accent)]" style={{ fontStyle: "italic" }}>Naturally.</em>
        </h1>

        {/* Sub — wider measure for editorial feel */}
        <p className="mb-12 max-w-xl text-[1.125rem] leading-[1.7] text-[var(--color-ink-secondary)]">
          Personalised nutrition and 1&#8209;on&#8209;1 coaching for diabetes,
          hypertension, thyroid &amp; weight management.
          No pills, no powders — just science-backed plans built around
          real Indian food and real training.
        </p>

        {/* Lead capture — horizontal on desktop */}
        {submitted ? (
          <div className="max-w-md rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-success-muted)] px-6 py-5">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-brand-dark)]">
              We&rsquo;ll reach out soon.
            </p>
            <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">
              Our team will contact you within 24 hours to get started.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input sm:flex-1"
              />
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input sm:flex-1"
              />
              <button
                type="submit"
                className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
            <p className="mt-3 text-xs text-[var(--color-ink-faint)]">
              New batch every Monday &middot; 7-day refund guarantee &middot; EMI available
            </p>
          </form>
        )}

        {/* Stats — anchored to bottom of hero */}
        <div className="mt-auto flex flex-wrap gap-6 border-t border-[var(--color-border-strong)] pt-7 sm:gap-10">
          {[
            { value: "500+", label: "Members" },
            { value: "4.9", label: "Google Rating" },
            { value: "100%", label: "Doctor-reviewed" },
            { value: "2018", label: "Founded" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="number-display text-xl text-[var(--color-ink)] sm:text-2xl">{stat.value}</span>
              <span className="ml-1.5 text-xs font-medium text-[var(--color-ink-muted)] sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
