"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Testimonial {
  name: string
  age: number
  location?: string
  photo: string
  tags: string[]
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Archana K",
    age: 38,
    location: "Pune",
    photo: "/images/members/archana.png",
    tags: ["Weight Loss"],
    quote:
      "A working mother\u2019s inspiring transformation. I lost 12 kg in 5 months and feel more energetic than I have in years.",
  },
  {
    name: "Lorraine M",
    age: 67,
    location: "Pune",
    photo: "/images/members/lorraine.png",
    tags: ["Powerlifter", "8 Gold Medals"],
    quote:
      "I\u2019m stronger than my 30-year-old self. I never dreamt I\u2019d compete as a powerlifter, winning 8 Gold medals for India.",
  },
  {
    name: "Pravin K",
    age: 51,
    location: "USA",
    photo: "/images/members/pravin.png",
    tags: ["Health Management"],
    quote:
      "Diagnosed with a serious condition, I focused on fitness and nutrition. My health markers improved dramatically.",
  },
  {
    name: "Rajesh T",
    age: 52,
    photo: "/images/members/rajesh.png",
    tags: ["Type 2 Diabetes"],
    quote:
      "My blood sugar levels have been consistently normal for the first time in 8 years.",
  },
  {
    name: "Sneha P",
    age: 29,
    photo: "/images/members/sneha.png",
    tags: ["Weight Loss"],
    quote:
      "I went from not being able to climb stairs to doing squats with 40 kg.",
  },
  {
    name: "Dr. Shashi",
    age: 68,
    photo: "/images/members/shashi.png",
    tags: ["Hypertension"],
    quote:
      "After 6 months, my doctor reduced my BP medication by half.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-shadow duration-200 hover:shadow-lg">
      <div className="p-6 sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="48px"
            />
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
          {visible.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
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
