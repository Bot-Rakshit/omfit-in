"use client"

import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { SITE_CONFIG, getBatchInfo } from "../site-config"

export function Hero() {
  const batch = getBatchInfo()

  return (
    <section className="relative bg-[var(--color-surface)]">
      <div className="mx-auto grid min-h-[92dvh] max-w-7xl items-center px-5 pt-24 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10 lg:pt-28">
        {/* Text */}
        <div>
          <p className="label-sm mb-8 text-[var(--color-brand)]">
            Since {SITE_CONFIG.FOUNDED} &mdash; {SITE_CONFIG.STAT_TRANSFORMED} lifestyles transformed
          </p>

          <h1
            className="mb-7 max-w-xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)]"
            style={{ fontWeight: 700, fontVariationSettings: '"opsz" 144' }}
          >
            Get Healthy &amp; Fit.
            <br />
            <em className="text-[var(--color-accent)]" style={{ fontStyle: "italic" }}>
              Naturally.
            </em>
          </h1>

          <p className="mb-8 max-w-lg text-[1.125rem] leading-[1.7] text-[var(--color-ink-secondary)]">
            Personalised nutrition coaching for diabetes, hypertension, thyroid,
            PCOS &amp; weight management. No pills, no powders &mdash; just
            science-backed plans built around real Indian food.
          </p>

          {/* Dynamic batch banner */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-muted)] px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
            {batch.label} {!batch.isPast && "\u00B7 Enrolments open now"}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
            >
              Start Your Transformation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={SITE_CONFIG.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3.5 text-[0.9375rem] font-medium text-[var(--color-ink-secondary)] transition-all hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to us on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-6 border-t border-[var(--color-border-strong)] pt-7 sm:gap-10">
            {[
              { value: SITE_CONFIG.STAT_TRANSFORMED, label: "Lifestyles Transformed" },
              { value: "Since " + SITE_CONFIG.FOUNDED, label: "" },
              { value: SITE_CONFIG.GOOGLE_RATING, label: "Google Rating" },
              { value: "100%", label: "Doctor-Reviewed" },
            ].map((stat) => (
              <div key={stat.value + stat.label}>
                <span className="number-display text-xl text-[var(--color-ink)] sm:text-2xl">
                  {stat.value}
                </span>
                {stat.label && (
                  <span className="ml-1.5 text-xs font-medium text-[var(--color-ink-muted)] sm:text-sm">
                    {stat.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-flatlay.png"
              alt="Health coaching essentials \u2014 meal plan, progress tracking, stethoscope"
              fill
              className="object-cover"
              sizes="40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
