"use client"

import { useState } from "react"
import { ArrowRight, MessageCircle, ShieldCheck, Phone, Check } from "lucide-react"
import { SITE_CONFIG, getBatchInfo } from "../site-config"
import { Reveal } from "../components/reveal"

export function FinalCTA() {
  const batch = getBatchInfo()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleCallback = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "cta", name, phone }),
      })
    } catch {
      // still show success
    }
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="relative isolate mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-surface-dark p-8 sm:p-12">
          <div className="dark-grid pointer-events-none absolute inset-0 -z-10" />

          <div className="text-center">
            <span className="eyebrow eyebrow-center mb-5 inline-flex text-accent">
              <span className="live-dot" />
              {batch.label}
            </span>

            <h2 className="display-lg mb-4 text-on-dark">Start Your Health Transformation</h2>

            <p className="body-md mx-auto mb-7 max-w-md text-on-dark-secondary">
              Join {SITE_CONFIG.STAT_TRANSFORMED} members who chose real food over quick
              fixes. 3-month personalised nutrition coaching program.
            </p>

            <div className="mb-8 flex items-baseline justify-center gap-2">
              <span className="number-display text-4xl text-on-dark">&#8377;18,000</span>
              <span className="text-sm text-on-dark-muted">for 3 months</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={SITE_CONFIG.RAZORPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-lg"
            >
              Enrol Now &mdash; Pay Securely
              <ArrowRight className="btn-arrow h-4 w-4" />
            </a>
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark btn-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Talk on WhatsApp
            </a>
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-on-dark-muted">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            Secure Razorpay checkout &middot; EMI available &middot; 7-day refund guarantee
          </p>

          {/* Callback form */}
          <div className="mt-9 flex items-center gap-3">
            <div className="h-px flex-1 bg-on-dark-faint" />
            <span className="label-sm text-on-dark-muted">or get a free callback</span>
            <div className="h-px flex-1 bg-on-dark-faint" />
          </div>

          {sent ? (
            <div className="fade-in mt-5 flex items-center justify-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-on-dark-faint">
                <Check className="h-4 w-4 text-brand-light" strokeWidth={3} />
              </span>
              <p className="text-sm font-medium text-on-dark">
                We&rsquo;ll call you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleCallback} className="mt-5 flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="cta-name">Your name</label>
              <input
                id="cta-name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input form-input-dark sm:flex-1"
              />
              <label className="sr-only" htmlFor="cta-phone">Phone number</label>
              <input
                id="cta-phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input form-input-dark sm:flex-1"
              />
              <button type="submit" disabled={sending} className="btn btn-on-dark shrink-0">
                <Phone className="h-3.5 w-3.5" />
                {sending ? "Sending…" : "Call me"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
