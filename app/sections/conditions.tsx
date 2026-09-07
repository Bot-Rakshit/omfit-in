"use client"

import { useState } from "react"
import {
  Droplets,
  HeartPulse,
  Activity,
  Flower2,
  Scale,
  Heart,
  Leaf,
  Waves,
  Footprints,
  Bone,
  Salad,
  Sparkles,
  Shield,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { SITE_CONFIG } from "../site-config"
import { Reveal } from "../components/reveal"

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
    icon: HeartPulse,
    title: "Hypertension (Blood Pressure)",
    description: "DASH-aligned meals, stress management & progressive exercise.",
  },
  {
    icon: Activity,
    title: "Thyroid (Hypo & Hyper / Hashimoto’s)",
    description: "Targeted nutrition for energy, weight & metabolic health.",
  },
  {
    icon: Flower2,
    title: "PCOS / PCOD",
    description: "Reduce insulin resistance, support hormonal balance & fertility.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description: "Sustainable fat loss through real food, not crash diets.",
  },
  {
    icon: Heart,
    title: "Cholesterol & Heart Health",
    description: "Nutrition strategies to improve lipid profiles naturally.",
  },
  {
    icon: Leaf,
    title: "Fatty Liver",
    description: "Dietary interventions to reduce liver fat and restore function.",
  },
  {
    icon: Waves,
    title: "Chronic Kidney Disease (CKD)",
    description: "Personalised plans to support kidney health.",
  },
  {
    icon: Footprints,
    title: "Varicose Veins",
    description: "Exercise + nutrition to improve circulation and manage symptoms.",
  },
  {
    icon: Bone,
    title: "Musculoskeletal Conditions",
    description: "Injury recovery, joint health & pain management.",
  },
  {
    icon: Salad,
    title: "Gut Health & Digestive Issues",
    description: "Bloating, IBS, acid reflux — addressed through food.",
  },
  {
    icon: Sparkles,
    title: "Hormonal Imbalances",
    description: "Beyond PCOS — broader hormonal health for men & women.",
  },
  {
    icon: Shield,
    title: "Autoimmune Conditions",
    description: "Anti-inflammatory nutrition & immune support.",
  },
  {
    icon: Sun,
    title: "Geriatric / Senior Fitness (55+)",
    description: "Strength, balance, bone density & independence.",
  },
  {
    icon: Moon,
    title: "Stress, Sleep & Mental Wellness",
    description: "Nutrition and lifestyle changes for better mental health.",
  },
]

const INITIAL_COUNT = 8

function ConditionCard({ condition }: { condition: Condition }) {
  const Icon = condition.icon
  return (
    <div className="card card-hover h-full p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted">
        <Icon className="h-5 w-5 text-brand" strokeWidth={1.8} />
      </div>
      <h3 className="mb-1.5 font-display text-[0.95rem] font-semibold tracking-tight text-ink">
        {condition.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-secondary">{condition.description}</p>
    </div>
  )
}

export function Conditions() {
  const [showAll, setShowAll] = useState(false)
  const initial = conditions.slice(0, INITIAL_COUNT)
  const rest = conditions.slice(INITIAL_COUNT)

  return (
    <section id="conditions" className="bg-surface-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <Reveal className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <span className="eyebrow eyebrow-center mb-4 text-brand">Specialised care</span>
          <h2 className="display-lg mb-5 text-ink">
            Specialised Care for 15+ Health Conditions
          </h2>
          <p className="body-lg text-ink-secondary">
            We communicate directly with your physician to ensure every plan
            complements your medical treatment.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {initial.map((condition, i) => (
            <Reveal key={condition.title} delay={i * 60}>
              <ConditionCard condition={condition} />
            </Reveal>
          ))}
        </div>

        {/* Collapsible remainder */}
        <div className="collapsible" data-state={showAll ? "open" : "closed"} aria-hidden={!showAll}>
          <div className="overflow-hidden">
            <div className="grid gap-4 pt-4 pb-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rest.map((condition) => (
                <ConditionCard key={condition.title} condition={condition} />
              ))}
            </div>
          </div>
        </div>

        {/* Show more/less */}
        {rest.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="btn btn-secondary btn-sm"
            >
              {showAll ? "Show fewer conditions" : `See all ${conditions.length} conditions`}
              {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-ink-muted">
          Don&rsquo;t see your condition?{" "}
          <a
            href={SITE_CONFIG.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            Ask us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
