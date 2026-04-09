"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Testimonial {
  name: string
  age: number
  location?: string
  initials: string
  tags: string[]
  quote: string
  accentColor: string
}

const testimonials: Testimonial[] = [
  {
    name: "Archana K",
    age: 38,
    location: "Pune",
    initials: "AK",
    tags: ["Weight Loss"],
    quote:
      "A working mother\u2019s inspiring transformation. I lost 12 kg in 5 months and feel more energetic than I have in years.",
    accentColor: "bg-[var(--color-brand)]",
  },
  {
    name: "Lorraine M",
    age: 67,
    location: "Pune",
    initials: "LM",
    tags: ["Powerlifter", "8 Gold Medals"],
    quote:
      "I\u2019m stronger than my 30-year-old self. I never dreamt I\u2019d compete as a powerlifter, winning 8 Gold medals for India.",
    accentColor: "bg-[var(--color-success)]",
  },
  {
    name: "Pravin K",
    age: 51,
    location: "USA",
    initials: "PK",
    tags: ["Health Management"],
    quote:
      "Diagnosed with a serious condition, I focused on fitness and nutrition. My health markers improved dramatically.",
    accentColor: "bg-[var(--color-ink)]",
  },
  {
    name: "Rajesh T",
    age: 52,
    initials: "RT",
    tags: ["Type 2 Diabetes"],
    quote:
      "My blood sugar levels have been consistently normal for the first time in 8 years.",
    accentColor: "bg-[var(--color-accent)]",
  },
  {
    name: "Sneha P",
    age: 29,
    initials: "SP",
    tags: ["Weight Loss"],
    quote:
      "I went from not being able to climb stairs to doing squats with 40 kg.",
    accentColor: "bg-[var(--color-brand-dark)]",
  },
  {
    name: "Dr. Shashi",
    age: 68,
    initials: "DS",
    tags: ["Hypertension"],
    quote:
      "After 6 months, my doctor reduced my BP medication by half.",
    accentColor: "bg-[var(--color-success)]",
  },
  {
    name: "NRI Member",
    age: 45,
    location: "USA",
    initials: "NM",
    tags: ["Type 2 Diabetes"],
    quote:
      "As an Indian working in the States, the stress was high which also led to T2 Diabetes. Thanks to the OMFIT team for guiding and supporting me.",
    accentColor: "bg-[var(--color-accent)]",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-shadow duration-200 hover:shadow-md ${
        index % 3 === 1 ? "md:mt-6" : ""
      }`}
    >
      <div className="p-6 sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${testimonial.accentColor} text-sm font-bold text-white`}
          >
            {testimonial.initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-ink)]">
              {testimonial.name}
            </h3>
            <p className="mt-0.5 text-sm text-[var(--color-ink-muted)]">
              {testimonial.age}
              {testimonial.location && ` \u00B7 ${testimonial.location}`}
            </p>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {testimonial.tags.map((tag) => (
            <span
              key={tag}
              className="label-sm rounded-full bg-[var(--color-surface-sunken)] px-2.5 py-1 text-[var(--color-ink-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <blockquote className="body-md leading-relaxed text-[var(--color-ink-secondary)]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? testimonials : testimonials.slice(0, 6)

  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl sm:mb-16">
          <span className="label-sm mb-4 inline-block text-[var(--color-accent)]">
            Real stories
          </span>
          <h2 className="display-md">Stories That Inspire</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
          {visible.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {testimonials.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-dark)]"
            >
              {showAll ? "Show fewer" : "See more stories"}
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
