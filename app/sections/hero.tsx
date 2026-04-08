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
      <div className="mx-auto flex min-h-[92dvh] max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8 lg:px-10 lg:pt-32">
        <div className="max-w-2xl">
          <p className="label-sm mb-6 text-[var(--color-brand)]">
            Since 2018 — 500+ transformations
          </p>

          <h1 className="display-xl mb-6 text-[var(--color-ink)]">
            Get healthy
            <br className="hidden sm:block" />
            {" & fit. "}
            <em className="text-[var(--color-accent)]">Naturally.</em>
          </h1>

          <p className="body-lg mb-10 max-w-lg text-[var(--color-ink-secondary)]">
            Personalised nutrition plans and 1&#8209;on&#8209;1 fitness coaching
            for diabetes, hypertension, thyroid &amp; more.{" "}
            <span className="font-medium text-[var(--color-ink)]">
              No pills. No powders. Just real food and real training.
            </span>
          </p>

          {/* Lead capture */}
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
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
              >
                Start My Transformation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-xs text-[var(--color-ink-faint)]">
                New batch starts every Monday. 7-day refund guarantee.
              </p>
            </form>
          )}
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-10 border-t border-[var(--color-border-strong)] pt-8">
          {[
            { value: "500+", label: "Members" },
            { value: "4.9", label: "Google Rating" },
            { value: "100%", label: "Doctor-reviewed" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="number-display text-2xl text-[var(--color-ink)]">{stat.value}</span>
              <span className="ml-1.5 text-sm font-medium text-[var(--color-ink-muted)]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
