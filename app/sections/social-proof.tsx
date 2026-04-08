"use client"

const stats = [
  { number: "500+", label: "Members" },
  { number: "2018", label: "Founded" },
  { number: "4.9", label: "Google Rating" },
  { number: "100%", label: "Doctor-reviewed" },
]

export function SocialProof() {
  return (
    <section className="border-y border-[var(--color-border-strong)] bg-[var(--color-surface-raised)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-5 sm:gap-x-16 md:gap-x-20">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-baseline gap-2">
            <span className="number-display text-base text-[var(--color-ink)]">
              {stat.number}
            </span>
            <span className="text-xs font-medium text-[var(--color-ink-muted)]">
              {stat.label}
            </span>
            {i < stats.length - 1 && (
              <span className="ml-4 hidden h-3 w-px bg-[var(--color-border-strong)] sm:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
