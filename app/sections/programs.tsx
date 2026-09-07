"use client"

import {
  ArrowRight,
  MessageCircle,
  ClipboardList,
  Video,
  ShieldCheck,
  Utensils,
  FileText,
  Users,
  Stethoscope,
} from "lucide-react"
import { SITE_CONFIG, getBatchInfo } from "../site-config"
import { Reveal } from "../components/reveal"

const features = [
  { icon: ClipboardList, text: "Comprehensive health assessment & blood report analysis" },
  { icon: Utensils, text: "Personalised Indian-friendly meal plan by certified nutritionist" },
  { icon: Video, text: "Weekly 1-on-1 video check-ins & plan adjustments" },
  { icon: ShieldCheck, text: "Condition-specific protocols (diabetes, thyroid, BP, PCOS, etc.)" },
  { icon: FileText, text: "Grocery lists & meal prep guidance" },
  { icon: MessageCircle, text: "Direct communication with your coach on WhatsApp — all 7 days" },
  { icon: Stethoscope, text: "Coordination with your doctor/physician" },
  { icon: Users, text: "Access to OmFit Inner Circle community" },
]

export function Programs() {
  const batch = getBatchInfo()

  return (
    <section id="programs" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="eyebrow eyebrow-center mb-4 text-accent">Our Flagship Program</span>
          <h2 className="display-lg text-ink">Nutrition Coaching &mdash; 3 Month Transformation</h2>
        </Reveal>

        {/* ── FLAGSHIP NUTRITION PROGRAM ── */}
        <Reveal
          delay={80}
          className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-surface-dark p-8 sm:p-10 lg:p-12"
        >
          <div className="dark-grid pointer-events-none absolute inset-0 -z-10" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(90,143,109,0.25),transparent)]" />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left — price & CTAs */}
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2.5">
                <span className="label-sm rounded-full bg-accent-muted px-3 py-1.5 text-accent-light">
                  Most Popular
                </span>
                <span className="label-sm rounded-full bg-brand-glow px-3 py-1.5 text-brand-light">
                  Flagship Program
                </span>
              </div>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="number-display text-5xl text-on-dark">&#8377;18,000</span>
                <span className="text-sm text-on-dark-muted">/ 3 months</span>
              </div>
              <p className="mb-7 text-sm text-on-dark-secondary">
                &#8776; &#8377;200 a day &middot; EMI available
              </p>

              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-surface-dark-raised px-4 py-2 text-sm font-medium text-on-dark-secondary">
                <span className="live-dot text-accent" />
                {batch.label}
                {!batch.isPast && " · Enrolments open now"}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={SITE_CONFIG.RAZORPAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg w-full"
                >
                  Enrol Now
                  <ArrowRight className="btn-arrow h-4 w-4" strokeWidth={2.5} />
                </a>
                <a
                  href={SITE_CONFIG.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-on-dark w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Have questions? Chat with us
                </a>
              </div>

              <p className="mt-4 flex items-start gap-2 text-xs text-on-dark-muted">
                <ShieldCheck className="mt-px h-3.5 w-3.5 shrink-0" />
                Secure Razorpay checkout &middot; 7-day refund guarantee
              </p>
            </div>

            {/* Right — what's included */}
            <div>
              <p className="label-sm mb-6 text-on-dark-muted">Everything included</p>
              <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {features.map((f) => {
                  const Icon = f.icon
                  return (
                    <li key={f.text} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-on-dark-faint">
                        <Icon className="h-4 w-4 text-on-dark-secondary" strokeWidth={1.8} />
                      </span>
                      <span className="text-sm leading-snug text-on-dark-secondary">{f.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ── PERSONAL TRAINING — de-emphasized ── */}
        <Reveal delay={140} className="mx-auto mt-10 max-w-5xl">
          <p className="label-sm mb-4 text-ink-muted">Also available</p>
          <div className="card p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="max-w-xl">
              <h3 className="mb-2 font-display text-lg font-semibold text-ink">
                1-on-1 Personal Training
              </h3>
              <p className="body-md text-ink-secondary">
                Dedicated online personal trainer. Custom workouts, real-time video
                form corrections, progressive programming. Limited slots available.
              </p>
            </div>
            <a
              href={SITE_CONFIG.WHATSAPP_TRAINING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink mt-5 shrink-0 sm:mt-0"
            >
              <MessageCircle className="h-4 w-4" />
              Chat With Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
