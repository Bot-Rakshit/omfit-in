"use client"

import { ClipboardList, UserCheck, Utensils, Video } from "lucide-react"
import { Reveal } from "../components/reveal"

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
    description: "A certified nutrition coach is assigned exclusively to you.",
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
    <section className="bg-surface-raised py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <span className="eyebrow eyebrow-center mb-4 text-brand">How it works</span>
          <h2 className="display-lg text-ink">Your Transformation in 4 Steps</h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.number} delay={i * 80} className="relative text-left">
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-display text-5xl font-light tabular-nums text-ink-faint">
                    {step.number}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-muted">
                    <Icon className="h-6 w-6 text-brand" strokeWidth={1.8} />
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden flex-1 border-t border-dashed border-border-strong lg:-mr-6 lg:block"
                    />
                  )}
                </div>

                <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>

                <p className="body-md text-ink-secondary">{step.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
