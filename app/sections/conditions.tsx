"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

/* ── Custom SVG icons ── */

function DiabetesIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M16 4C16 4 8 14.5 8 20a8 8 0 0016 0C24 14.5 16 4 16 4z" fill="currentColor" opacity={0.15} />
      <path d="M16 4C16 4 8 14.5 8 20a8 8 0 0016 0C24 14.5 16 4 16 4z" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 20.5h2.5l1.5-3 2 6 1.5-3h2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HypertensionIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M16 28S4 20 4 13a6.5 6.5 0 0112-3.5A6.5 6.5 0 0128 13C28 20 16 28 16 28z" fill="currentColor" opacity={0.15} />
      <path d="M16 28S4 20 4 13a6.5 6.5 0 0112-3.5A6.5 6.5 0 0128 13C28 20 16 28 16 28z" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16h5l2-4 3 8 2-4h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ThyroidIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M16 14c-2-4-6-6-9-4s-3 7 0 10 7 3 9 1" fill="currentColor" opacity={0.15} />
      <path d="M16 14c2-4 6-6 9-4s3 7 0 10-7 3-9 1" fill="currentColor" opacity={0.15} />
      <path d="M16 14c-2-4-6-6-9-4s-3 7 0 10 7 3 9 1" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14c2-4 6-6 9-4s3 7 0 10-7 3-9 1" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14v10" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={16} cy={14} r={1.5} fill="currentColor" />
    </svg>
  )
}

/* ── Data ── */

const conditions = [
  {
    id: "diabetes",
    icon: DiabetesIcon,
    color: "#b8860b",
    bgTint: "rgba(184, 134, 11, 0.04)",
    borderTint: "rgba(184, 134, 11, 0.12)",
    accentBg: "rgba(184, 134, 11, 0.07)",
    title: "Diabetes",
    subtitle: "Type 2 & Pre-Diabetes",
    description:
      "Our nutrition-first programs are designed to help you lower blood sugar naturally. We work alongside your physician to craft meal plans and activity routines tailored to your glycaemic profile.",
    statNumber: "\u22121.2%",
    statLabel: "avg HbA1c improvement in 90 days",
    href: "#diabetes",
  },
  {
    id: "hypertension",
    icon: HypertensionIcon,
    color: "#c4704b",
    bgTint: "rgba(196, 112, 75, 0.04)",
    borderTint: "rgba(196, 112, 75, 0.12)",
    accentBg: "rgba(196, 112, 75, 0.07)",
    title: "Hypertension",
    subtitle: "Blood Pressure Management",
    description:
      "Sustained lifestyle changes \u2014 not just medication. Our coaches guide you through DASH-aligned meals, stress management, and progressive exercise to bring your numbers into a healthy range.",
    statNumber: "82%",
    statLabel: "of members report reduced BP within 60 days",
    href: "#hypertension",
  },
  {
    id: "thyroid",
    icon: ThyroidIcon,
    color: "#3d6b4f",
    bgTint: "rgba(61, 107, 79, 0.04)",
    borderTint: "rgba(61, 107, 79, 0.12)",
    accentBg: "rgba(61, 107, 79, 0.07)",
    title: "Thyroid",
    subtitle: "Hypo & Hyperthyroidism",
    description:
      "Energy crashes, weight fluctuations, brain fog \u2014 we understand. Our programs address root causes with targeted nutrition, sleep optimisation, and metabolic coaching your body actually responds to.",
    statNumber: "91%",
    statLabel: "report improved energy & reduced fatigue",
    href: "#thyroid",
  },
]

/* ── Animations ── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Conditions() {
  return (
    <section className="bg-[var(--color-surface-sunken)] py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20" variants={headingVariants}>
          <span className="label-sm mb-4 inline-block text-[var(--color-brand)]">
            Specialised care
          </span>
          <h2 className="display-lg mb-5 text-[var(--color-ink)]">
            Programs designed for
            <br className="hidden sm:block" /> your condition
          </h2>
          <p className="body-lg text-[var(--color-ink-secondary)]">
            We communicate directly with your physician to ensure every meal
            plan and training protocol complements your medical treatment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {conditions.map((condition) => {
            const Icon = condition.icon
            return (
              <motion.div
                key={condition.id}
                variants={cardVariants}
                className="group relative flex flex-col rounded-2xl border bg-[var(--color-surface-raised)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                style={{ borderColor: condition.borderTint }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: condition.accentBg }}
                >
                  <Icon className="h-6 w-6" style={{ color: condition.color }} />
                </div>

                <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {condition.title}
                </h3>
                <p className="label-sm mb-4" style={{ color: condition.color }}>
                  {condition.subtitle}
                </p>

                <p className="body-md mb-6 flex-1 text-[var(--color-ink-secondary)]">
                  {condition.description}
                </p>

                <div className="mb-6 rounded-xl px-5 py-4" style={{ backgroundColor: condition.accentBg }}>
                  <span className="number-display block text-3xl sm:text-4xl" style={{ color: condition.color }}>
                    {condition.statNumber}
                  </span>
                  <span className="mt-1.5 block text-[0.8rem] font-medium leading-snug text-[var(--color-ink-muted)]">
                    {condition.statLabel}
                  </span>
                </div>

                <a
                  href={condition.href}
                  className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold transition-colors"
                  style={{ color: condition.color }}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
