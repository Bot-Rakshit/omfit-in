"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative min-h-[100dvh] bg-[var(--color-surface)]">
      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl items-center px-5 pt-24 pb-16 sm:px-8 lg:grid lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-10 lg:pt-28">
        {/* Text + form column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="label-sm mb-7 text-[var(--color-brand)]"
          >
            Since 2018 — 500+ transformations
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="display-xl mb-6 text-[var(--color-ink)]"
          >
            Get healthy
            <br className="hidden sm:block" />
            {" & fit. "}
            <em className="text-[var(--color-accent)]">Naturally.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="body-lg mb-10 max-w-lg text-[var(--color-ink-secondary)]"
          >
            Personalised nutrition plans and 1&#8209;on&#8209;1 fitness coaching
            for diabetes, hypertension, thyroid &amp; more.{" "}
            <span className="font-medium text-[var(--color-ink)]">
              No pills. No powders. Just real food and real training.
            </span>
          </motion.p>

          {/* Lead capture */}
          <motion.div variants={fadeUp}>
            {submitted ? (
              <div className="rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-success-muted)] px-6 py-5">
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
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
                >
                  Start My Transformation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="mt-3 text-xs text-[var(--color-ink-faint)]">
                  New batch starts every Monday. 7-day refund guarantee.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] lg:max-w-none">
            <Image
              src="/images/hero-food.png"
              alt="A wholesome Indian thali — real food, not supplements"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
          </div>

          {/* Floating stat */}
          <div className="absolute -bottom-4 left-6 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] px-5 py-3 shadow-sm sm:left-8">
            <span className="number-display text-xl text-[var(--color-brand)]">4.9</span>
            <span className="ml-1 text-xs font-medium text-[var(--color-ink-muted)]">
              Google Rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
