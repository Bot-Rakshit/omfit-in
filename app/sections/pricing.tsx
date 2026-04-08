"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Crown, Dumbbell, Zap } from "lucide-react"

const plans = [
  {
    id: "training",
    name: "1-on-1 Personal Training",
    icon: Dumbbell,
    price: "Custom",
    period: "1 month",
    perDay: null,
    emi: null,
    badge: null,
    description: "Tailored workouts with a dedicated coach who adapts every session to your progress.",
    features: [
      "Personalised exercise programming",
      "Form correction via video reviews",
      "Weekly progressive overload planning",
      "Mobility & recovery protocols",
      "Direct trainer WhatsApp access",
      "Monthly body composition analysis",
    ],
    cta: "Book a Consultation",
    ctaHref: "#contact",
    highlighted: false,
  },
  {
    id: "nutrition",
    name: "Nutrition Program",
    icon: Crown,
    price: "\u20B918,000",
    period: "3 months",
    perDay: "~\u20B9200/day",
    emi: "EMI available",
    badge: "Most Popular",
    description: "A complete nutrition overhaul — doctor-reviewed, dietitian-led, built for lasting results.",
    features: [
      "Comprehensive health assessment",
      "Custom Indian-friendly meal plans",
      "Weekly 1-on-1 dietitian calls",
      "Grocery lists & recipe guides",
      "Blood work analysis & tracking",
      "Condition-specific protocols",
      "24/7 WhatsApp support",
    ],
    cta: "Start My Transformation",
    ctaHref: "#contact",
    highlighted: true,
  },
  {
    id: "bundle",
    name: "Nutrition + Training Bundle",
    icon: Zap,
    price: "Custom",
    period: "3 months",
    perDay: null,
    emi: null,
    badge: "Best Value",
    description: "The full Omfit experience — nutrition and training working in sync for maximum results.",
    features: [
      "Everything in both programs",
      "Synchronised nutrition & training",
      "Priority scheduling for sessions",
      "Monthly progress photoshoots",
      "Extended WhatsApp support hours",
      "Exclusive member community access",
    ],
    cta: "Get Bundle Pricing",
    ctaHref: "#contact",
    highlighted: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--color-surface-sunken)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="label-sm mb-4 inline-block text-[var(--color-accent)]">Pricing</span>
          <h2 className="display-lg text-[var(--color-ink)]">Invest in your health</h2>
          <p className="body-lg mx-auto mt-4 max-w-xl text-[var(--color-ink-secondary)]">
            Transparent pricing, no hidden fees. Every program includes
            everything you need to transform your health.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mx-auto grid max-w-sm gap-6 md:max-w-none md:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => {
            const Icon = plan.icon

            if (plan.highlighted) {
              return (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-surface-dark)] shadow-xl md:-my-4 md:z-10"
                >
                  {/* Top accent */}
                  <div className="h-1 w-full bg-[var(--color-brand)]" />

                  {plan.badge && (
                    <div className="flex justify-center pt-6">
                      <span className="label-sm inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-3 py-1.5 text-white">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col px-7 pt-6 pb-8 sm:px-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-glow)]">
                        <Icon className="h-5 w-5 text-[var(--color-brand-light)]" strokeWidth={2} />
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-[var(--color-on-dark)]">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="body-md mt-3 text-[var(--color-on-dark-secondary)]">{plan.description}</p>

                    <div className="mt-6">
                      <div className="flex items-baseline gap-1">
                        <span className="number-display text-[2.5rem] text-white">{plan.price}</span>
                        <span className="text-[0.9375rem] font-medium text-[var(--color-on-dark-muted)]">/ {plan.period}</span>
                      </div>
                      {(plan.perDay || plan.emi) && (
                        <div className="mt-1.5 flex items-center gap-2">
                          {plan.perDay && (
                            <span className="text-[0.8125rem] font-medium text-[var(--color-brand-light)]">{plan.perDay}</span>
                          )}
                          {plan.perDay && plan.emi && <span className="text-[var(--color-on-dark-muted)]">·</span>}
                          {plan.emi && (
                            <span className="text-[0.8125rem] text-[var(--color-on-dark-muted)]">{plan.emi}</span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="my-6 h-px bg-[var(--color-on-dark-muted)]" />

                    <ul className="flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-glow)]">
                            <Check className="h-3 w-3 text-[var(--color-brand-light)]" strokeWidth={3} />
                          </div>
                          <span className="text-[0.875rem] leading-snug text-[var(--color-on-dark-secondary)]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={plan.ctaHref}
                      className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-md"
              >
                {plan.badge && (
                  <div className="flex justify-start px-7 pt-6 sm:px-8">
                    <span className="label-sm inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-muted)] px-3 py-1.5 text-[var(--color-accent)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`flex flex-1 flex-col px-7 pb-7 sm:px-8 sm:pb-8 ${plan.badge ? "pt-4" : "pt-7 sm:pt-8"}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-surface-sunken)]">
                      <Icon className="h-5 w-5 text-[var(--color-ink-secondary)]" strokeWidth={2} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-[var(--color-ink)]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="body-md mt-3 text-[var(--color-ink-secondary)]">{plan.description}</p>

                  <div className="mt-6">
                    <span className="number-display text-[2.25rem] text-[var(--color-ink)]">{plan.price}</span>
                    <span className="ml-1 text-[0.9375rem] font-medium text-[var(--color-ink-muted)]">/ {plan.period}</span>
                  </div>

                  <div className="my-6 h-px bg-[var(--color-border)]" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-sunken)]">
                          <Check className="h-3 w-3 text-[var(--color-brand)]" strokeWidth={3} />
                        </div>
                        <span className="text-[0.875rem] leading-snug text-[var(--color-ink-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaHref}
                    className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3.5 text-[0.9375rem] font-semibold text-[var(--color-ink)] transition-all hover:border-[var(--color-ink)] active:scale-[0.98]"
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 text-center text-[0.875rem] font-medium text-[var(--color-ink-muted)]"
        >
          7-day satisfaction guarantee &middot; No questions asked refund policy
        </motion.p>
      </div>
    </section>
  )
}
