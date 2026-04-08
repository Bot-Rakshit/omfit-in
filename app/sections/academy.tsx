"use client"

import { BookOpen, Clock, Video, FileText, BarChart3, ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Reverse Diabetes Naturally",
    subtitle: "6-week self-paced course",
    description:
      "Learn the science behind insulin resistance, build a sustainable meal plan, and track your progress.",
    duration: "6 weeks",
    format: "Video + Live Q&A",
    formatIcon: Video,
    accentColor: "var(--color-brand)",
    accentBg: "var(--color-brand-muted)",
  },
  {
    title: "Nutrition Fundamentals",
    subtitle: "Understanding food & your body",
    description:
      "Master macronutrients, micronutrients, meal timing, and how to read food labels like a nutritionist.",
    duration: "4 weeks",
    format: "Video + Workbook",
    formatIcon: FileText,
    accentColor: "var(--color-accent)",
    accentBg: "var(--color-accent-muted)",
  },
  {
    title: "Strength Training at Home",
    subtitle: "No gym, no excuses",
    description:
      "Progressive bodyweight and minimal-equipment program for beginners who want functional strength.",
    duration: "8 weeks",
    format: "Video + Tracking",
    formatIcon: BarChart3,
    accentColor: "var(--color-success)",
    accentBg: "var(--color-success-muted)",
  },
]

export function Academy() {
  return (
    <section id="academy" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-brand-muted)]">
                <BookOpen className="h-3.5 w-3.5 text-[var(--color-brand)]" strokeWidth={2.5} />
              </div>
              <span className="label-sm text-[var(--color-brand)]">Omfit Academy</span>
            </div>
            <h2 className="display-lg text-[var(--color-ink)]">
              Digital courses for{" "}
              <span className="text-[var(--color-ink-muted)]">self-learners</span>
            </h2>
            <p className="body-lg mt-4 max-w-lg text-[var(--color-ink-secondary)]">
              Structured, expert-led programs you can take at your own pace.
              Built on the same science we use with our 1-on-1 clients.
            </p>
          </div>

          <a
            href="#"
            className="group hidden items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-dark)] sm:flex"
          >
            View all courses
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const FormatIcon = course.formatIcon
            return (
              <div
                key={course.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-all duration-200 hover:border-[var(--color-border-strong)] hover:shadow-md"
              >
                {/* Header */}
                <div
                  className="relative flex h-40 items-center justify-center bg-[var(--color-surface-sunken)]"
                >
                  <div className="absolute top-4 right-4 rounded-full px-3 py-1.5" style={{ backgroundColor: course.accentBg }}>
                    <span className="label-sm" style={{ color: course.accentColor }}>Coming Soon</span>
                  </div>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: course.accentColor }}
                  >
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-[1.125rem] font-semibold tracking-tight text-[var(--color-ink)]">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] font-medium text-[var(--color-ink-muted)]">
                    {course.subtitle}
                  </p>
                  <p className="body-md mt-3 flex-1 text-[var(--color-ink-secondary)]">
                    {course.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-border)] pt-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[var(--color-ink-faint)]" strokeWidth={2} />
                      <span className="text-[0.8125rem] font-medium text-[var(--color-ink-secondary)]">{course.duration}</span>
                    </div>
                    <div className="h-3 w-px bg-[var(--color-border-strong)]" />
                    <div className="flex items-center gap-1.5">
                      <FormatIcon className="h-3.5 w-3.5 text-[var(--color-ink-faint)]" strokeWidth={2} />
                      <span className="text-[0.8125rem] font-medium text-[var(--color-ink-secondary)]">{course.format}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="#"
            className="group flex items-center gap-1.5 text-[0.875rem] font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-dark)]"
          >
            View all courses
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
