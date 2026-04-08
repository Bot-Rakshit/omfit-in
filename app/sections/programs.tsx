"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Utensils,
  Dumbbell,
  Check,
  ArrowRight,
  Clock,
  Video,
  ShieldCheck,
  ClipboardList,
  MessageCircle,
  FileText,
} from "lucide-react"

/* ── Countdown ── */
function getNextMonday(): Date {
  const now = new Date()
  const istOffset = 5.5 * 60 * 60 * 1000
  const istNow = new Date(now.getTime() + istOffset + now.getTimezoneOffset() * 60 * 1000)
  const day = istNow.getDay()
  let daysUntilMonday = (8 - day) % 7
  if (daysUntilMonday === 0) daysUntilMonday = 7
  const nextMon = new Date(istNow)
  nextMon.setDate(istNow.getDate() + daysUntilMonday)
  nextMon.setHours(0, 0, 0, 0)
  return new Date(nextMon.getTime() - istOffset - now.getTimezoneOffset() * 60 * 1000)
}

function formatMondayLabel(date: Date): string {
  const istOffset = 5.5 * 60 * 60 * 1000
  const now = new Date()
  const istDate = new Date(date.getTime() + istOffset + now.getTimezoneOffset() * 60 * 1000)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `Monday, ${months[istDate.getMonth()]} ${istDate.getDate()}`
}

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function useCountdown(target: Date): TimeLeft {
  const calc = useCallback((): TimeLeft => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }, [target])
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calc)
  useEffect(() => {
    setTimeLeft(calc())
    const id = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(id)
  }, [calc])
  return timeLeft
}

/* ── Data ── */
const nutritionFeatures = [
  { icon: ClipboardList, text: "Personalised meal plan by certified nutritionist" },
  { icon: Video, text: "Weekly 1-on-1 check-ins & adjustments" },
  { icon: ShieldCheck, text: "Condition-specific protocols (diabetes, thyroid, BP)" },
  { icon: Utensils, text: "Grocery lists & meal prep guidance" },
  { icon: FileText, text: "Blood report analysis & tracking" },
  { icon: MessageCircle, text: "WhatsApp support all 7 days" },
]

const trainingFeatures = [
  { icon: Dumbbell, text: "Dedicated personal trainer" },
  { icon: ClipboardList, text: "Custom workout plan" },
  { icon: Video, text: "Real-time video form corrections" },
  { icon: ShieldCheck, text: "Injury-safe modifications" },
  { icon: FileText, text: "Monthly progress assessments" },
]

/* ── Animations ── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}
const featureVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-[var(--color-accent-muted)] sm:h-14 sm:w-16">
        <span className="number-display text-xl text-[var(--color-accent)] sm:text-2xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="label-sm text-[0.6rem] text-[var(--color-ink-faint)]">
        {label}
      </span>
    </div>
  )
}

/* ── Component ── */
export function Programs() {
  const nextMonday = getNextMonday()
  const timeLeft = useCountdown(nextMonday)
  const mondayLabel = formatMondayLabel(nextMonday)

  return (
    <section id="programs" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <span className="label-sm mb-4 inline-block text-[var(--color-accent)]">
            Our programs
          </span>
          <h2 className="display-lg mb-4 text-[var(--color-ink)]">
            Two paths to a healthier you
          </h2>
          <p className="body-lg mx-auto max-w-xl text-[var(--color-ink-secondary)]">
            Whether you need nutrition guidance or personal training, we have
            a science-backed program designed for your goals.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* NUTRITION — hero card */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-3xl bg-[var(--color-surface-dark)] p-8 ring-1 ring-[var(--color-border-strong)] sm:p-10 lg:p-12"
          >
            {/* Food image strip */}
            <div className="relative -mx-8 -mt-8 mb-8 h-48 overflow-hidden sm:-mx-10 sm:-mt-10 lg:-mx-12 lg:-mt-12">
              <Image
                src="/images/hero-food.png"
                alt="Wholesome Indian meal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-surface-dark)]" />
            </div>

            {/* Badge + icon */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-muted)]">
                <Utensils className="h-5 w-5 text-[var(--color-accent-light)]" strokeWidth={2} />
              </div>
              <span className="label-sm rounded-full bg-[var(--color-accent-muted)] px-3 py-1.5 text-[var(--color-accent-light)]">
                Most Popular
              </span>
            </div>

            <p className="label-sm mb-2 text-[var(--color-accent)]">Hero Program</p>
            <h3 className="display-md mb-3 text-[var(--color-on-dark)]">Nutrition Program</h3>
            <p className="body-md mb-8 max-w-lg text-[var(--color-on-dark-secondary)]">
              A comprehensive 3-month transformation combining personalised nutrition,
              medical-grade protocols, and weekly coaching to reverse lifestyle conditions naturally.
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="number-display text-4xl text-[var(--color-on-dark)] sm:text-5xl">
                &#8377;18,000
              </span>
              <p className="mt-1.5 text-sm text-[var(--color-on-dark-muted)]">
                3-month program&nbsp;&middot;&nbsp;~&#8377;200/day&nbsp;&middot;&nbsp;EMI available
              </p>
            </div>

            {/* Countdown */}
            <div className="mb-10 rounded-2xl bg-[var(--color-surface-dark-raised)] p-5 ring-1 ring-[var(--color-on-dark-muted)] sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--color-accent-light)]" strokeWidth={2.2} />
                <span className="text-sm font-medium text-[var(--color-on-dark-secondary)]">
                  Next batch starts{" "}
                  <span className="text-[var(--color-on-dark)]">{mondayLabel}</span>
                </span>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <CountdownCell value={timeLeft.days} label="Days" />
                <div className="flex items-start pt-3 text-lg font-bold text-[var(--color-on-dark-muted)]">:</div>
                <CountdownCell value={timeLeft.hours} label="Hours" />
                <div className="flex items-start pt-3 text-lg font-bold text-[var(--color-on-dark-muted)]">:</div>
                <CountdownCell value={timeLeft.minutes} label="Mins" />
                <div className="flex items-start pt-3 text-lg font-bold text-[var(--color-on-dark-muted)]">:</div>
                <CountdownCell value={timeLeft.seconds} label="Secs" />
              </div>
            </div>

            {/* Features */}
            <motion.ul
              className="mb-10 grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {nutritionFeatures.map((f) => (
                <motion.li key={f.text} variants={featureVariants} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-muted)]">
                    <Check className="h-3 w-3 text-[var(--color-success)]" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-snug text-[var(--color-on-dark-secondary)]">
                    {f.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <a
              href="#contact"
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-light)] active:scale-[0.98]"
            >
              Start My Transformation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* 1-ON-1 TRAINING */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-3xl bg-[var(--color-surface-raised)] p-8 ring-1 ring-[var(--color-border-strong)] sm:p-10"
          >
            {/* Training image */}
            <div className="relative -mx-8 -mt-8 mb-8 h-44 overflow-hidden sm:-mx-10 sm:-mt-10">
              <Image
                src="/images/training.png"
                alt="Personal training session"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-surface-raised)]" />
            </div>

            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-muted)]">
              <Dumbbell className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
            </div>

            <h3 className="display-md mb-3 text-[var(--color-ink)]">1-on-1 Personal Training</h3>
            <p className="body-md mb-8 text-[var(--color-ink-secondary)]">
              A dedicated 1-month program with your own personal trainer.
              Tailored workouts, real-time corrections, progressive programming.
            </p>

            <div className="mb-8">
              <span className="number-display text-3xl text-[var(--color-ink)] sm:text-4xl">
                Custom pricing
              </span>
              <p className="mt-1.5 text-sm text-[var(--color-ink-muted)]">
                1-month program&nbsp;&middot;&nbsp;Based on your goals
              </p>
            </div>

            <motion.ul
              className="mb-10 grid gap-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {trainingFeatures.map((f) => (
                <motion.li key={f.text} variants={featureVariants} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-muted)]">
                    <Check className="h-3 w-3 text-[var(--color-brand)]" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-snug text-[var(--color-ink-secondary)]">
                    {f.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <a
              href="#contact"
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
