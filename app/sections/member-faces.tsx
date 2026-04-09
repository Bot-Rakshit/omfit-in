"use client"

import Image from "next/image"
import { SITE_CONFIG } from "../site-config"

interface Member {
  name: string
  age?: number
  city?: string
  tag?: string
  photo: string
}

const members: Member[] = [
  { name: "Archana K", age: 38, city: "Pune", tag: "Weight Loss", photo: "/images/members/archana.png" },
  { name: "Lorraine M", age: 67, city: "Pune", tag: "Powerlifter", photo: "/images/members/lorraine.png" },
  { name: "Pravin K", age: 51, city: "USA", tag: "Health Management", photo: "/images/members/pravin.png" },
  { name: "Rajesh T", age: 52, tag: "Type 2 Diabetes", photo: "/images/members/rajesh.png" },
  { name: "Sneha P", age: 29, tag: "Weight Loss", photo: "/images/members/sneha.png" },
  { name: "Dr. Shashi", age: 68, tag: "Hypertension", photo: "/images/members/shashi.png" },
  { name: "Hemant", tag: "Fitness", photo: "/images/members/hemant.png" },
  { name: "Sabah Mistry", tag: "Strength", photo: "/images/members/sabah.png" },
]

// Duplicate for seamless loop
const scrollMembers = [...members, ...members]

function MemberPill({ member }: { member: Member }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2.5 transition-shadow hover:shadow-md">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--color-ink)]">{member.name}</p>
        <p className="text-xs text-[var(--color-ink-muted)]">
          {[member.age, member.city, member.tag].filter(Boolean).join(" \u00B7 ")}
        </p>
      </div>
    </div>
  )
}

export function MemberFaces() {
  return (
    <section className="overflow-hidden bg-[var(--color-surface)] py-16 sm:py-20">
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8 lg:px-10">
        <span className="label-sm mb-4 inline-block text-[var(--color-brand)]">
          {SITE_CONFIG.STAT_TRANSFORMED} lifestyles transformed
        </span>
        <h2 className="display-md text-[var(--color-ink)]">Real People. Real Transformations.</h2>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[var(--color-surface)] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[var(--color-surface)] to-transparent sm:w-24" />

        <div className="flex animate-marquee gap-4">
          {scrollMembers.map((member, i) => (
            <MemberPill key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
