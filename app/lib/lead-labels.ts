export type Source = "hero" | "cta" | "corporate"

type SourceMeta = {
  label: string
  where: string
  description: string
  tone: "brand" | "accent" | "neutral"
}

export const SOURCE_META: Record<string, SourceMeta> = {
  hero: {
    label: "Homepage callback",
    where: "Homepage — top banner",
    description:
      "Filled the short name + phone form at the very top of omfit.in. Usually the warmest leads — they asked for a call before reading anything else.",
    tone: "brand",
  },
  cta: {
    label: "Bottom CTA callback",
    where: "Homepage — bottom section",
    description:
      "Filled the “get a free callback” form in the Start Your Health Transformation section at the end of the homepage. They read the full page and the ₹18,000 price, then chose a call over paying online.",
    tone: "accent",
  },
  corporate: {
    label: "Corporate enquiry",
    where: "/corporate page",
    description:
      "A company submitted the Corporate Wellness enquiry form. These include a company name, work email and what they want (seminar, employee program, or both).",
    tone: "neutral",
  },
}

export function sourceLabel(source: string) {
  return SOURCE_META[source]?.label ?? source
}

export const INTEREST_LABELS: Record<string, string> = {
  seminar: "Wellness Seminar / Workshop",
  program: "Employee Wellness Program",
  both: "Both seminar & program",
  other: "Other",
}

export function interestLabel(interest: string | null) {
  if (!interest) return null
  return INTEREST_LABELS[interest] ?? interest
}

/** "Call within 24h" promise made on both callback forms. */
export const CALLBACK_SOURCES = new Set(["hero", "cta"])
