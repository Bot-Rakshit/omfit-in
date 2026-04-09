"use client"

import { Users, Calendar, GraduationCap, Heart } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Weekly Founder Meets",
    description: "Regular sessions with Omkar and the core team.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge Classes",
    description: "Learn nutrition science, meal planning, and fitness fundamentals.",
  },
  {
    icon: Users,
    title: "Member Meet-ups",
    description: "Fitness challenges, group activities, and community events.",
  },
  {
    icon: Heart,
    title: "Support Network",
    description: "A group of like-minded people cheering you on every day.",
  },
]

export function InnerCircle() {
  return (
    <section className="bg-[var(--color-surface-sunken)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-sm mb-4 inline-block text-[var(--color-brand)]">Community</span>
          <h2 className="display-md mb-5 text-[var(--color-ink)]">The OmFit Inner Circle</h2>
          <p className="body-lg text-[var(--color-ink-secondary)]">
            When you become a member, you join the OmFit Inner Circle — a community
            driven by positivity, enthusiasm, and fitness. Weekly meetings with the
            founder, knowledge classes, fitness challenges, member meet-ups, and a
            support group of like-minded people.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-muted)]">
                  <Icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-ink)]">
                  {feature.title}
                </h3>
                <p className="body-md text-[var(--color-ink-secondary)]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
