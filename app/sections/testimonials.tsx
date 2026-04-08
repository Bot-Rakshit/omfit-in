"use client"

interface Testimonial {
  name: string
  age: number
  location: string
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
    tags: ["Weight Loss", "Fitness"],
    quote:
      "A working mother\u2019s inspiring transformation. I lost 12 kg in 5 months and feel more energetic than I have in years.",
    accentColor: "bg-[var(--color-brand)]",
  },
  {
    name: "Mudra M",
    age: 35,
    location: "Pune",
    initials: "MM",
    tags: ["Fat Loss", "Strength"],
    quote:
      "Being a full-time CEO with a busy life, I started with a goal of getting fit and ended up becoming a competitive athlete.",
    accentColor: "bg-[var(--color-accent)]",
  },
  {
    name: "Lorraine M",
    age: 67,
    location: "Pune",
    initials: "LM",
    tags: ["Athlete", "Powerlifter"],
    quote:
      "I\u2019m stronger than my 30-year-old self. I never dreamt I\u2019d compete as a powerlifter, winning 8 Gold medals for India.",
    accentColor: "bg-[var(--color-success)]",
  },
  {
    name: "Pravin K",
    age: 51,
    location: "USA",
    initials: "PK",
    tags: ["Cancer Management"],
    quote:
      "Diagnosed with Stage 4 Cancer, I focused on fitness and nutrition. My Cancer Antigen markers dropped from 825 to 29.",
    accentColor: "bg-[var(--color-ink)]",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-shadow duration-200 hover:shadow-md ${
        index === 1 || index === 3 ? "md:mt-8" : ""
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
              {testimonial.age} &middot; {testimonial.location}
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
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl sm:mb-16">
          <span className="label-sm mb-4 inline-block text-[var(--color-accent)]">
            Real stories
          </span>
          <h2 className="display-md">Members who transformed their lives</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
