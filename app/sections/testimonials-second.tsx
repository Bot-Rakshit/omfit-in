"use client"

import { motion } from "framer-motion"

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
    quote:
      "My blood sugar levels have been consistently normal for the first time in 8 years.",
  },
  {
    name: "Sneha P",
    age: 29,
    condition: "Weight Loss",
    quote:
      "I went from not being able to climb stairs to doing squats with 40 kg.",
  },
  {
    name: "Dr. Shashi",
    age: 68,
    condition: "Hypertension",
    quote:
      "After 6 months, my doctor reduced my BP medication by half.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function TestimonialsSecond() {
  return (
    <section className="bg-[var(--color-surface-sunken)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <span className="label-sm text-[var(--color-ink-muted)]">
            More voices from the community
          </span>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 sm:p-7"
            >
              <blockquote className="body-md mb-6 italic leading-relaxed text-[var(--color-ink-secondary)]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-ink)]">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">
                    {testimonial.age} &middot; {testimonial.condition}
                  </p>
                </div>
                <span className="label-sm rounded-full bg-[var(--color-surface-sunken)] px-2.5 py-1 text-[var(--color-ink-muted)]">
                  {testimonial.condition}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
