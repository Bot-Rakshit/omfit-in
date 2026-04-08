"use client"

interface ShortTestimonial {
  name: string
  age: number
  condition: string
  quote: string
}

const testimonials: ShortTestimonial[] = [
  {
    name: "Rajesh T",
    age: 52,
    condition: "Type 2 Diabetes",
    quote: "My blood sugar levels have been consistently normal for the first time in 8 years.",
  },
  {
    name: "Sneha P",
    age: 29,
    condition: "Weight Loss",
    quote: "I went from not being able to climb stairs to doing squats with 40 kg.",
  },
  {
    name: "Dr. Shashi",
    age: 68,
    condition: "Hypertension",
    quote: "After 6 months, my doctor reduced my BP medication by half.",
  },
]

export function TestimonialsSecond() {
  return (
    <section className="bg-[var(--color-surface-sunken)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          <span className="label-sm text-[var(--color-ink-muted)]">More voices from the community</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 sm:p-7"
            >
              <blockquote className="body-md mb-6 italic leading-relaxed text-[var(--color-ink-secondary)]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex flex-wrap items-center gap-2 sm:justify-between">
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-ink)]">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">
                    {testimonial.age} &middot; {testimonial.condition}
                  </p>
                </div>
                <span className="label-sm shrink-0 rounded-full bg-[var(--color-surface-sunken)] px-2.5 py-1 text-[var(--color-ink-muted)]">
                  {testimonial.condition}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
