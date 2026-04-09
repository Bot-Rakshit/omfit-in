"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Video,
  FileText,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react"
import { Navbar } from "../sections/navbar"
import { Footer } from "../sections/footer"
import { FloatingWhatsApp } from "../sections/floating-whatsapp"

interface Course {
  title: string
  duration: string
  format: string
  formatIcon: React.ElementType
  status: string
  description: string
  topics?: string[]
  accentColor: string
  accentBg: string
}

const courses: Course[] = [
  {
    title: "Strength & Conditioning Fundamentals",
    duration: "6 weeks",
    format: "Video + Live Q&A",
    formatIcon: Video,
    status: "Coming Soon",
    description:
      "Learn the science of strength training \u2014 programming, periodisation, progressive overload, and injury prevention. Designed for aspiring trainers, coaches, and serious fitness enthusiasts.",
    topics: [
      "Exercise selection & technique",
      "Program design for different goals",
      "Anatomy & biomechanics essentials",
      "Assessment & screening",
      "Nutrition for strength athletes",
    ],
    accentColor: "var(--color-brand)",
    accentBg: "var(--color-brand-muted)",
  },
  {
    title: "Advanced Strength & Conditioning",
    duration: "8 weeks",
    format: "Video + Practical Assignments",
    formatIcon: FileText,
    status: "Coming Soon",
    description:
      "Go deeper into periodisation models, sport-specific conditioning, power development, and coaching methodology.",
    accentColor: "var(--color-accent)",
    accentBg: "var(--color-accent-muted)",
  },
  {
    title: "Nutrition Fundamentals",
    duration: "4 weeks",
    format: "Video + Workbook",
    formatIcon: FileText,
    status: "Coming Soon",
    description:
      "Master macronutrients, micronutrients, meal timing, and how to read food labels like a nutritionist.",
    accentColor: "var(--color-success)",
    accentBg: "var(--color-success-muted)",
  },
  {
    title: "Nutrition and Exercise for Diabetes",
    duration: "6 weeks",
    format: "Video + Live Q&A",
    formatIcon: Video,
    status: "Coming Soon",
    description:
      "Learn the science behind insulin resistance, build a sustainable meal plan, and track your progress \u2014 all at your own pace.",
    accentColor: "var(--color-brand)",
    accentBg: "var(--color-brand-muted)",
  },
]

function WaitlistForm({ courseTitle }: { courseTitle: string }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p className="mt-3 text-sm font-medium text-[var(--color-brand)]">
        You&rsquo;re on the waitlist!
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="mt-4 flex flex-col gap-2 sm:flex-row"
    >
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input text-sm sm:flex-1"
      />
      <input
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input text-sm sm:flex-1"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
      >
        Join Waitlist
      </button>
    </form>
  )
}

export default function AcademyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[var(--color-surface)] px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-muted)]">
              <BookOpen className="h-4 w-4 text-[var(--color-brand)]" strokeWidth={2.5} />
            </div>
            <span className="label-sm text-[var(--color-brand)]">OmFit Academy</span>
          </div>
          <h1 className="display-xl mb-5 text-[var(--color-ink)]">OmFit Academy</h1>
          <p className="body-lg mx-auto max-w-2xl text-[var(--color-ink-secondary)]">
            Digital courses for fitness professionals and self-learners. Built on
            the same science we use with our 1-on-1 clients.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-[var(--color-surface-sunken)] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8">
            {courses.map((course) => {
              const FormatIcon = course.formatIcon
              return (
                <div
                  key={course.title}
                  className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-shadow hover:shadow-md"
                >
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span
                        className="label-sm rounded-full px-3 py-1.5"
                        style={{ backgroundColor: course.accentBg, color: course.accentColor }}
                      >
                        {course.status}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[var(--color-ink-faint)]" strokeWidth={2} />
                        <span className="text-[0.8125rem] font-medium text-[var(--color-ink-secondary)]">
                          {course.duration}
                        </span>
                      </div>
                      <div className="h-3 w-px bg-[var(--color-border-strong)]" />
                      <div className="flex items-center gap-1.5">
                        <FormatIcon className="h-3.5 w-3.5 text-[var(--color-ink-faint)]" strokeWidth={2} />
                        <span className="text-[0.8125rem] font-medium text-[var(--color-ink-secondary)]">
                          {course.format}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                      {course.title}
                    </h3>
                    <p className="body-md max-w-2xl text-[var(--color-ink-secondary)]">
                      {course.description}
                    </p>

                    {course.topics && (
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {course.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2">
                            <Check
                              className="h-3.5 w-3.5 shrink-0 text-[var(--color-brand)]"
                              strokeWidth={3}
                            />
                            <span className="text-sm text-[var(--color-ink-secondary)]">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <WaitlistForm courseTitle={course.title} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-surface)] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="body-lg mb-5 text-[var(--color-ink-secondary)]">
            Want personalised 1-on-1 coaching instead?
          </p>
          <Link
            href="/#programs"
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Check out our Nutrition Program
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
