"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  MessageCircle,
  Mic,
  Users,
  BarChart3,
  Building2,
  Calendar,
  Heart,
} from "lucide-react"
import { Navbar } from "../sections/navbar"
import { Footer } from "../sections/footer"
import { FloatingWhatsApp } from "../sections/floating-whatsapp"
import { SITE_CONFIG } from "../site-config"

const seminars = [
  "Nutrition for the Corporate Athlete",
  "Managing Diabetes & Lifestyle Conditions at Work",
  "Stress, Sleep & Productivity",
  "Desk-Friendly Exercise & Posture",
]

const stats = [
  { number: "10,000+", label: "Employees impacted" },
  { number: "3+", label: "Major IT companies" },
  { number: "Since 2018", label: "" },
]

const companies = ["LTIMindtree", "Infosys", "Tech Mahindra"]

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-surface-dark)] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="label-sm mb-4 inline-block text-[var(--color-accent)]">For organisations</span>
            <h1 className="display-xl mb-5 text-[var(--color-on-dark)]">Corporate Wellness by OmFit</h1>
            <p className="body-lg max-w-lg text-[var(--color-on-dark-secondary)]">
              Science-backed wellness programs for India&rsquo;s leading companies.
              Seminars, workshops, and long-term employee wellness programs.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/corporate-seminar.png"
                alt="OmFit corporate wellness seminar in action"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-b border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="label-sm mb-6 text-[var(--color-ink-muted)]">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {companies.map((company) => (
              <span
                key={company}
                className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)] sm:text-2xl"
              >
                {company}
              </span>
            ))}
          </div>
          <p className="body-md mt-6 text-[var(--color-ink-secondary)]">
            We&rsquo;ve conducted wellness programs for employees at India&rsquo;s top IT companies.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-[var(--color-surface)] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="display-lg mb-14 text-center text-[var(--color-ink)]">What We Offer</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Seminars */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-muted)]">
                <Mic className="h-6 w-6 text-[var(--color-accent)]" strokeWidth={1.8} />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                Wellness Seminars &amp; Workshops
              </h3>
              <p className="body-md mb-5 text-[var(--color-ink-secondary)]">
                60-90 minute interactive sessions. In-person or virtual.
                Can be conducted as one-off sessions or a recurring series.
              </p>
              <ul className="space-y-2.5">
                {seminars.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" strokeWidth={2} />
                    <span className="text-sm text-[var(--color-ink-secondary)]">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-muted)]">
                <Heart className="h-6 w-6 text-[var(--color-brand)]" strokeWidth={1.8} />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                Employee Wellness Programs
              </h3>
              <p className="body-md mb-5 text-[var(--color-ink-secondary)]">
                4-12 week structured programs for employee groups. Designed to
                reduce absenteeism and healthcare costs.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Health assessments for all participants",
                  "Group nutrition coaching",
                  "Fitness challenges & leaderboards",
                  "Progress tracking & reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" strokeWidth={2} />
                    <span className="text-sm text-[var(--color-ink-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--color-border-strong)] bg-[var(--color-surface-sunken)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-8 sm:gap-x-20 sm:py-10">
          {stats.map((stat) => (
            <div key={stat.number} className="text-center">
              <span className="number-display block text-2xl text-[var(--color-ink)] sm:text-3xl">
                {stat.number}
              </span>
              {stat.label && (
                <span className="mt-1 block text-xs font-medium text-[var(--color-ink-muted)]">
                  {stat.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[var(--color-surface)] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="display-md mb-3 text-center text-[var(--color-ink)]">
            Get a Custom Quote for Your Organisation
          </h2>
          <p className="body-md mx-auto mb-10 max-w-md text-center text-[var(--color-ink-secondary)]">
            Tell us about your team and we&rsquo;ll design a program that fits.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-success-muted)] px-6 py-8 text-center">
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                Thank you, {formData.name.split(" ")[0] || "there"}!
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink-secondary)]">
                Our corporate team will reach out within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={update("name")}
                className="form-input"
              />
              <input
                type="text"
                required
                placeholder="Company name"
                value={formData.company}
                onChange={update("company")}
                className="form-input"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  value={formData.email}
                  onChange={update("email")}
                  className="form-input"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={update("phone")}
                  className="form-input"
                />
              </div>
              <select
                value={formData.interest}
                onChange={update("interest")}
                className="form-input"
                style={!formData.interest ? { color: "var(--color-ink-faint)" } : undefined}
              >
                <option value="" disabled>What are you looking for?</option>
                <option value="seminar">Wellness Seminar / Workshop</option>
                <option value="program">Employee Wellness Program</option>
                <option value="both">Both</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}

          {/* WhatsApp */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-xs text-[var(--color-ink-faint)]">or</span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          <a
            href={SITE_CONFIG.WHATSAPP_CORPORATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border-strong)] px-6 py-3 text-[0.875rem] font-medium text-[var(--color-ink-secondary)] transition-all hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
