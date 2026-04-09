"use client"

import { useState } from "react"
import {
  Droplets,
  Heart,
  Zap,
  Circle,
  Scale,
  Activity,
  Pill,
  HeartPulse,
  Accessibility,
  Brain,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

interface Condition {
  icon: React.ElementType
  title: string
  description: string
}

const conditions: Condition[] = [
  {
    icon: Droplets,
    title: "Type 2 Diabetes & Pre-Diabetes",
    description: "Lower blood sugar naturally with nutrition-first protocols.",
  },
  {
    icon: Heart,
    title: "Hypertension (Blood Pressure)",
    description: "DASH-aligned meals, stress management & progressive exercise.",
  },
  {
    icon: Zap,
    title: "Thyroid (Hypo & Hyper / Hashimoto\u2019s)",
    description: "Targeted nutrition for energy, weight & metabolic health.",
  },
  {
    icon: Circle,
    title: "PCOS / PCOD",
    description: "Reduce insulin resistance, support hormonal balance & fertility.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description: "Sustainable fat loss through real food, not crash diets.",
  },
  {
    icon: Activity,
    title: "Cholesterol & Heart Health",
    description: "Nutrition strategies to improve lipid profiles naturally.",
  },
  {
    icon: Pill,
    title: "Fatty Liver",
    description: "Dietary interventions to reduce liver fat and restore function.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Kidney Disease (CKD)",
    description: "Personalised plans to support kidney health.",
  },
  {
    icon: Accessibility,
    title: "Varicose Veins",
    description: "Exercise + nutrition to improve circulation and manage symptoms.",
  },
  {
    icon: Accessibility,
    title: "Musculoskeletal Conditions",
    description: "Injury recovery, joint health & pain management.",
  },
  {
    icon: Activity,
    title: "Gut Health & Digestive Issues",
    description: "Bloating, IBS, acid reflux \u2014 addressed through food.",
  },
  {
    icon: Circle,
    title: "Hormonal Imbalances",
    description: "Beyond PCOS \u2014 broader hormonal health for men & women.",
  },
  {
    icon: Zap,
    title: "Autoimmune Conditions",
    description: "Anti-inflammatory nutrition & immune support.",
  },
  {
    icon: Heart,
    title: "Geriatric / Senior Fitness (55+)",
    description: "Strength, balance, bone density & independence.",
  },
  {
    icon: Brain,
    title: "Stress, Sleep & Mental Wellness",
    description: "Nutrition and lifestyle changes for better mental health.",
  },
]

export function Conditions() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? conditions : conditions.slice(0, 8)

  return (
    <section id="conditions" className="bg-[var(--color-surface-sunken)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <span className="label-sm mb-4 inline-block text-[var(--color-brand)]">Specialised care</span>
          <h2 className="display-lg mb-5 text-[var(--color-ink)]">
            Specialised Care for 15+ Health Conditions
          </h2>
          <p className="body-lg text-[var(--color-ink-secondary)]">
            We communicate directly with your physician to ensure every plan
            complements your medical treatment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((condition) => {
            const Icon = condition.icon
            return (
              <div
                key={condition.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 transition-all duration-200 hover:border-[var(--color-border-strong)] hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-muted)]">
                  <Icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={1.8} />
                </div>
                <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-[0.95rem] font-semibold tracking-tight text-[var(--color-ink)]">
                  {condition.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                  {condition.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Show more/less */}
        {conditions.length > 8 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border-strong)] px-6 py-2.5 text-sm font-medium text-[var(--color-ink-secondary)] transition-all hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
            >
              {showAll ? "Show fewer conditions" : `See all ${conditions.length} conditions`}
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
