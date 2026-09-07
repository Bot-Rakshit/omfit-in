"use client"

import { Users, Calendar, GraduationCap, Heart } from "lucide-react"
import { Reveal } from "../components/reveal"

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
    <section className="bg-surface-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-center mb-4 text-brand">Community</span>
          <h2 className="display-lg mb-5 text-ink">The OmFit Inner Circle</h2>
          <p className="body-lg text-ink-secondary">
            Every member joins the OmFit Inner Circle &mdash; a community driven by
            positivity, enthusiasm, and fitness. It is the part members tell us they
            did not expect, and would not give up.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="card card-hover h-full p-6 text-left">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted">
                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="body-md text-ink-secondary">{feature.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
