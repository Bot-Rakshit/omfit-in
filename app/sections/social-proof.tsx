"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "500+", label: "Members" },
  { number: "2018", label: "Founded" },
  { number: "4.9", label: "Google Rating" },
  { number: "100%", label: "Doctor-reviewed" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function SocialProof() {
  return (
    <section className="border-y border-[var(--color-border-strong)] bg-[var(--color-surface-raised)]">
      <motion.div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-5 sm:gap-x-16 md:gap-x-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="flex items-baseline gap-2"
          >
            <span className="number-display text-base text-[var(--color-ink)]">
              {stat.number}
            </span>
            <span className="text-xs font-medium text-[var(--color-ink-muted)]">
              {stat.label}
            </span>
            {i < stats.length - 1 && (
              <span className="ml-4 hidden h-3 w-px bg-[var(--color-border-strong)] sm:block" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
