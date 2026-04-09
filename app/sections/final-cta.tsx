"use client"

import { useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { SITE_CONFIG, getBatchInfo } from "../site-config"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const batch = getBatchInfo()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-[var(--color-surface-dark)] px-6 py-12 sm:rounded-[2rem] sm:px-12 sm:py-16">
        <h2 className="display-md mb-3 text-center text-[var(--color-on-dark)]">
          Start Your Health Transformation
        </h2>

        <p className="body-md mx-auto mb-8 max-w-sm text-center text-[var(--color-on-dark-secondary)]">
          Leave your details and our team will reach out within 24 hours.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand-glow)] px-6 py-8 text-center">
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-on-dark)]">
              Thank you, {formData.name.split(" ")[0] || "friend"}!
            </p>
            <p className="mt-2 text-sm text-[var(--color-on-dark-secondary)]">
              We&rsquo;ll call you within 24 hours to get started.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={update("name")}
              className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] placeholder:!text-[var(--color-on-dark-muted)] focus:!border-[var(--color-brand-light)]"
            />

            <input
              type="tel"
              required
              placeholder="Phone number"
              value={formData.phone}
              onChange={update("phone")}
              className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] placeholder:!text-[var(--color-on-dark-muted)] focus:!border-[var(--color-brand-light)]"
            />

            <input
              type="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={update("email")}
              className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] placeholder:!text-[var(--color-on-dark-muted)] focus:!border-[var(--color-brand-light)]"
            />

            <select
              value={formData.condition}
              onChange={update("condition")}
              className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] focus:!border-[var(--color-brand-light)]"
              style={!formData.condition ? { color: "var(--color-on-dark-muted)" } : undefined}
            >
              <option value="" disabled>What are you looking for?</option>
              <option value="nutrition">Nutrition Coaching (3-month program)</option>
              <option value="diabetes">Diabetes Management</option>
              <option value="hypertension">Hypertension / BP</option>
              <option value="thyroid">Thyroid Management</option>
              <option value="pcos">PCOS / PCOD</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="fitness">General Fitness</option>
              <option value="other">Other</option>
            </select>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--color-accent-light)] active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        )}

        {/* WhatsApp */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--color-on-dark-muted)]" />
          <span className="text-xs text-[var(--color-on-dark-muted)]">or</span>
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
          {batch.label} &middot; 7-day refund guarantee
        </p>
      </div>
    </section>
  )
}
