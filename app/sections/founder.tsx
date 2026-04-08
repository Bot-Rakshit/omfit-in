"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const easeOut = [0.25, 0.46, 0.45, 0.94] as const

const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

const stats = [
  { number: "2018", label: "Founded" },
  { number: "500+", label: "Members" },
  { number: "15+", label: "Health conditions" },
]

export function Founder() {
  return (
    <section className="bg-[var(--color-surface-dark)]" id="about">
      <motion.div
        className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-36"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Photo */}
        <motion.div className="relative" variants={slideLeft}>
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl lg:mx-0 lg:max-w-none">
            <Image
              src="/images/omkar.jpeg"
              alt="Omkar — Founder of OMFIT"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-surface-dark)] via-[var(--color-surface-dark)]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-8 sm:pb-8">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-on-dark)] sm:text-3xl">
                Omkar
              </p>
              <p className="label-sm mt-1 text-[var(--color-on-dark-secondary)]">
                Founder, OMFIT
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div className="flex flex-col justify-center" variants={containerVariants}>
          <motion.span className="label-sm mb-5 text-[var(--color-accent)]" variants={fadeUp}>
            Our story
          </motion.span>

          <motion.h2 className="display-md mb-8 text-[var(--color-on-dark)]" variants={fadeUp}>
            Built from personal frustration with the fitness industry
          </motion.h2>

          <motion.p className="body-lg mb-5 text-[var(--color-on-dark-secondary)]" variants={fadeUp}>
            OMFIT was founded in 2018 with a simple belief: fitness should be
            scientific, personalised, and accessible. Not aggressive. Not
            aesthetic-obsessed. Not about pills and powders.
          </motion.p>

          <motion.p className="body-lg mb-10 text-[var(--color-on-dark-secondary)]" variants={fadeUp}>
            We work with a scientific approach and a vision to impact 1 billion
            lives. Every program, every meal plan, every coaching session is
            designed to make you the best version of yourself — naturally.
          </motion.p>

          <motion.blockquote
            className="relative mb-12 rounded-xl border border-[var(--color-on-dark-muted)] bg-[var(--color-surface-dark-raised)] px-6 py-6 sm:px-8"
            variants={fadeUp}
          >
            <Quote className="mb-3 h-5 w-5 text-[var(--color-accent)] opacity-70" />
            <p className="font-[family-name:var(--font-display)] text-[0.95rem] font-medium leading-relaxed text-[var(--color-on-dark)] italic">
              &ldquo;Aesthetics is not the goal, it is a by-product. Our
              programs make you the best version of yourself — naturally. No
              pills and powders. Healthy meals made with love.&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-[var(--color-on-dark-muted)]" />
              <span className="label-sm text-[var(--color-on-dark-muted)]">
                Omkar, Founder
              </span>
            </footer>
          </motion.blockquote>

          <motion.div className="flex flex-wrap gap-8 sm:gap-12" variants={fadeUp}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="number-display block text-2xl text-[var(--color-on-dark)] sm:text-3xl">
                  {stat.number}
                </span>
                <span className="mt-1 block text-[0.8rem] font-medium text-[var(--color-on-dark-muted)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
