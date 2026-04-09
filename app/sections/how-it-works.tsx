"use client"

import { ClipboardList, UserCheck, Utensils, Video } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Health Assessment",
    description:
      "We analyse your fitness level, medical history, injuries, blood reports and goals.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Dedicated Coach Assigned",
    description:
      "A certified nutrition coach is assigned exclusively to you.",
  },
  {
    number: "03",
    icon: Utensils,
    title: "Custom Plan Created",
    description:
      "Personalised nutrition plan built around real Indian food you actually enjoy.",
  },
  {
    number: "04",
    icon: Video,
    title: "Weekly Check-ins & Adjustments",
    description:
      "1-on-1 video calls, WhatsApp support all 7 days, plan tweaks based on your progress.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-[var(--color-surface-raised)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <span className="label-sm mb-4 inline-block text-[var(--color-brand)]">How it works</span>
          <h2 className="display-lg text-[var(--color-ink)]">Your Transformation in 4 Steps</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative text-center lg:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-brand-muted)] lg:mx-0">
                  <Icon className="h-6 w-6 text-[var(--color-brand)]" strokeWidth={1.8} />
                </div>

                <span className="label-sm mb-2 inline-block text-[var(--color-accent)]">
                  Step {step.number}
                </span>

                <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                  {step.title}
                </h3>

                <p className="body-md text-[var(--color-ink-secondary)]">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
