"use client"

import {
  Check,
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

const features = [
  { icon: ClipboardList, text: "Comprehensive health assessment & blood report analysis" },
  { icon: Utensils, text: "Personalised Indian-friendly meal plan by certified nutritionist" },
  { icon: Video, text: "Weekly 1-on-1 video check-ins & plan adjustments" },
  { icon: ShieldCheck, text: "Condition-specific protocols (diabetes, thyroid, BP, PCOS, etc.)" },
  { icon: FileText, text: "Grocery lists & meal prep guidance" },
  { icon: MessageCircle, text: "Direct communication with your coach on WhatsApp \u2014 all 7 days" },
  { icon: Stethoscope, text: "Coordination with your doctor/physician" },
  { icon: Users, text: "Access to OmFit Inner Circle community" },
]

export function Programs() {
  const batch = getBatchInfo()

  return (
    <section id="programs" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ── FLAGSHIP NUTRITION PROGRAM ── */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="label-sm mb-4 inline-block text-[var(--color-accent)]">Our Flagship Program</span>
          <h2 className="display-lg text-[var(--color-ink)]">Nutrition Coaching &mdash; 3 Month Transformation</h2>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl bg-[var(--color-surface-dark)] p-8 ring-1 ring-[var(--color-border-strong)] sm:p-10 lg:p-12">
          {/* Badge + Price */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="label-sm rounded-full bg-[var(--color-accent-muted)] px-3 py-1.5 text-[var(--color-accent-light)]">
              Most Popular
            </span>
            <span className="label-sm rounded-full bg-[var(--color-brand-glow)] px-3 py-1.5 text-[var(--color-brand-light)]">
              Flagship Program
            </span>
          </div>

          <div className="mb-2">
            <span className="number-display text-3xl text-[var(--color-on-dark)] sm:text-5xl">
              &#8377;12,000
            </span>
            <span className="ml-2 text-sm text-[var(--color-on-dark-muted)]">
              for 3 months
            </span>
          </div>

          {/* Batch date */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-dark-raised)] px-4 py-2 text-sm font-medium text-[var(--color-on-dark-secondary)]">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
            {batch.label} {!batch.isPast && "\u00B7 Enrolments open now"}
          </div>

          {/* Features */}
          <ul className="mb-10 grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-muted)]">
                    <Check className="h-3 w-3 text-[var(--color-success)]" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-snug text-[var(--color-on-dark-secondary)]">{f.text}</span>
                </li>
              )
            })}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-light)] active:scale-[0.98]"
            >
              Enrol Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </a>
            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-on-dark-muted)] px-6 py-3.5 text-sm font-medium text-[var(--color-on-dark-secondary)] transition-all hover:border-[var(--color-on-dark-secondary)] hover:text-[var(--color-on-dark)]"
            >
              <MessageCircle className="h-4 w-4" />
              Have questions? Chat with us
            </a>
          </div>
        </div>

        {/* ── PERSONAL TRAINING — de-emphasized ── */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-[var(--color-surface-sunken)] px-6 py-6 sm:px-8 sm:py-7">
          <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
            1-on-1 Personal Training
          </h3>
          <p className="body-md mb-5 text-[var(--color-ink-secondary)]">
            Dedicated online personal trainer. Custom workouts, real-time video
            form corrections, progressive programming. Limited slots available.
          </p>
          <a
            href={SITE_CONFIG.WHATSAPP_TRAINING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-ink-secondary)] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat With Us
          </a>
        </div>
      </div>
    </section>
  )
}
