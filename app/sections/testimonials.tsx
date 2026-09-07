"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Reveal } from "../components/reveal"

interface Testimonial {
  name: string
  age: number
  location?: string
  photo: string
  tags: string[]
  quote: string
}

const featured: Testimonial = {
  name: "Lata M",
  age: 67,
  location: "Pune",
  photo: "/images/members/lata.png",
  tags: ["Powerlifter", "8 Gold Medals"],
  quote:
    "I’m stronger than my 30-year-old self. I never dreamt I’d compete as a powerlifter, winning 8 Gold medals for India.",
}

const testimonials: Testimonial[] = [
  {
    name: "Archana K",
    age: 38,
    location: "Pune",
    photo: "/images/members/archana.png",
    tags: ["Weight Loss"],
    quote:
      "A working mother’s inspiring transformation. I lost 12 kg in 5 months and feel more energetic than I have in years.",
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
    quote: "I went from not being able to climb stairs to doing squats with 40 kg.",
  },
  {
    name: "Dr. Shashi",
    age: 68,
    photo: "/images/members/shashi.png",
    tags: ["Hypertension"],
    quote: "After 6 months, my doctor reduced my BP medication by half.",
  },
  {
    name: "Vikram S",
    age: 45,
    location: "USA",
    photo: "/images/members/vikram.png",
    tags: ["Type 2 Diabetes"],
    quote:
      "As an Indian working in the States, the stress was high which also led to T2 Diabetes. Thanks to the OMFIT team for guiding and supporting me.",
  },
]

const VISIBLE_COUNT = 3

function Tag({ label }: { label: string }) {
  return (
    <span className="label-sm rounded-full bg-accent-muted px-2.5 py-1 text-accent">{label}</span>
  )
}

function Byline({ testimonial, size }: { testimonial: Testimonial; size: "sm" | "lg" }) {
  const box = size === "lg" ? "h-16 w-16" : "h-12 w-12"
  return (
    <div className="flex items-start gap-4">
      <div className={`relative ${box} shrink-0 overflow-hidden rounded-full`}>
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes={size === "lg" ? "64px" : "48px"}
        />
      </div>
      <div className="min-w-0">
        <h3
          className={`font-display font-semibold text-ink ${size === "lg" ? "text-lg" : "text-base"}`}
        >
          {testimonial.name}
        </h3>
        <p className="mt-0.5 text-sm text-ink-muted">
          {testimonial.age}
          {testimonial.location && ` · ${testimonial.location}`}
        </p>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card card-hover h-full p-6">
      <Byline testimonial={testimonial} size="sm" />

      <div className="mt-5 mb-4 flex flex-wrap gap-1.5">
        {testimonial.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <blockquote className="body-md leading-relaxed text-ink-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const initial = testimonials.slice(0, VISIBLE_COUNT)
  const rest = testimonials.slice(VISIBLE_COUNT)

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="eyebrow eyebrow-center mb-4 text-accent">Real stories</span>
          <h2 className="display-lg text-ink">Stories That Inspire</h2>
        </Reveal>

        {/* Featured */}
        <Reveal className="mb-5">
          <div className="card p-7 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:items-center lg:gap-12">
              <div>
                <Byline testimonial={featured} size="lg" />
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {featured.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <blockquote className="relative">
                <span
                  aria-hidden="true"
                  className="font-display text-6xl leading-none text-accent/40"
                >
                  &ldquo;
                </span>
                <p className="-mt-4 font-display text-xl leading-snug text-ink sm:text-2xl">
                  {featured.quote}
                </p>
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* Rest */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {initial.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 60}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <div className="collapsible" data-state={showAll ? "open" : "closed"} aria-hidden={!showAll}>
          <div className="overflow-hidden">
            <div className="grid gap-5 pt-5 pb-2 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {rest.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="btn btn-ghost btn-sm"
            >
              {showAll ? "Show fewer" : "See more stories"}
              {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
