"use client"

import { useState, type CSSProperties } from "react"
import Image from "next/image"
import { ArrowRight, MessageCircle, Phone, ArrowUpRight, Check, TrendingDown } from "lucide-react"
import { SITE_CONFIG } from "../site-config"

const stats = [
  { value: SITE_CONFIG.STAT_TRANSFORMED, label: "Lifestyles transformed" },
  { value: `${SITE_CONFIG.GOOGLE_RATING}★`, label: "Google rating" },
  { value: "15+", label: "Conditions covered" },
]

const proofAvatars = [
  "/images/members/archana.png",
  "/images/members/lata.png",
  "/images/members/rajesh.png",
  "/images/members/sneha.png",
]

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties

export function Hero() {
  const [callbackPhone, setCallbackPhone] = useState("")
  const [callbackName, setCallbackName] = useState("")
  const [callbackSent, setCallbackSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleCallback = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "hero", name: callbackName, phone: callbackPhone }),
      })
    } catch {
      // still show success
    }
    setSending(false)
    setCallbackSent(true)
  }

  return (
    <section className="hero-wash relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl items-center px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:px-10 lg:pt-12 lg:pb-20">
        {/* Text — headline & CTAs */}
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="rise-in" style={delay(0)}>
            <span className="eyebrow text-brand">
              Since {SITE_CONFIG.FOUNDED} &middot; {SITE_CONFIG.STAT_TRANSFORMED} lifestyles transformed
            </span>
            <div className="mt-3">
              <a
                href={SITE_CONFIG.PARENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-medium text-accent"
              >
                New: OmFit for Parents
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <h1 className="display-xl rise-in mt-5 mb-5 max-w-xl text-ink" style={delay(80)}>
            Get Healthy &amp; Fit.
            <br />
            <em className="text-accent">Naturally.</em>
          </h1>

          <p className="body-lg rise-in mb-7 max-w-lg text-ink-secondary" style={delay(160)}>
            Personalised nutrition coaching for diabetes, hypertension, thyroid,
            PCOS &amp; weight management. No pills, no powders &mdash; just
            science-backed plans built around real Indian food.
          </p>

          {/* CTAs */}
          <div className="rise-in" style={delay(240)}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SITE_CONFIG.RAZORPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Start Your Transformation
                <ArrowRight className="btn-arrow h-4 w-4" />
              </a>

              <a
                href={SITE_CONFIG.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Talk on WhatsApp
              </a>
            </div>

            <p className="mt-4 text-sm text-ink-muted">
              &#8377;18,000 for 3 months &middot; EMI available &middot; 7-day refund guarantee
            </p>
          </div>
        </div>

        {/* Supporting — callback form & stats */}
        <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-2">
          {/* Callback form */}
          <div className="card rise-in mt-8 max-w-lg p-5 lg:mt-6" style={delay(320)}>
            {callbackSent ? (
              <div className="fade-in flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-muted">
                  <Check className="h-4 w-4 text-brand" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium text-ink">
                  We&rsquo;ll call you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <p className="label-sm mb-3 text-ink-muted">Prefer a call back?</p>
                <form onSubmit={handleCallback} className="flex flex-col gap-2 sm:flex-row">
                  <label className="sr-only" htmlFor="hero-name">Your name</label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    className="form-input sm:flex-1"
                  />
                  <label className="sr-only" htmlFor="hero-phone">Phone number</label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Phone number"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    className="form-input sm:flex-1"
                  />
                  <button type="submit" disabled={sending} className="btn btn-ink btn-sm shrink-0">
                    <Phone className="h-3.5 w-3.5" />
                    {sending ? "Sending…" : "Call me"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Stats strip */}
          <div
            className="rise-in mt-9 grid grid-cols-3 border-t border-border pt-6"
            style={delay(400)}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="number-display block text-2xl text-ink">{stat.value}</span>
                <span className="mt-1.5 block text-xs text-ink-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className="fade-in relative isolate mt-12 mb-14 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:mb-0 lg:self-center"
          style={delay(200)}
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent-muted blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-float)] lg:aspect-[4/5]">
            <Image
              src="/images/hero-flatlay.png"
              alt="Health coaching essentials — meal plan, progress tracking, stethoscope"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 45vw"
              priority
            />
          </div>

          {/* Proof card — members */}
          <div className="fade-in absolute -bottom-5 -left-2 sm:left-4" style={delay(500)}>
            <div
              className="card float-y flex items-center gap-3 p-3 pr-4 shadow-[var(--shadow-card)]"
              style={delay(0)}
            >
              <div className="flex -space-x-2.5">
                {proofAvatars.map((src) => (
                  <span
                    key={src}
                    className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-surface-raised"
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="32px" />
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">
                  {SITE_CONFIG.STAT_TRANSFORMED} members
                </p>
                <p className="text-xs text-ink-muted">Transformed since {SITE_CONFIG.FOUNDED}</p>
              </div>
            </div>
          </div>

          {/* Proof card — metric */}
          <div
            className="fade-in absolute -top-4 -right-2 hidden sm:block lg:-right-6"
            style={delay(650)}
          >
            <div className="card float-y p-3.5 shadow-[var(--shadow-card)]" style={delay(1500)}>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-muted">
                  <TrendingDown className="h-4 w-4 text-brand" strokeWidth={2.2} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">
                    HbA1c 8.2 <span className="text-ink-faint">&rarr;</span> 6.4
                  </p>
                  <p className="text-xs text-ink-muted">Rajesh, 52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
