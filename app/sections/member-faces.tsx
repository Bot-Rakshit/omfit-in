"use client"

import Image from "next/image"
import { SITE_CONFIG } from "../site-config"
import { Reveal } from "../components/reveal"

interface Member {
  name: string
  age?: number
  city?: string
  tag?: string
  photo: string
}

const members: Member[] = [
  { name: "Archana K", age: 38, city: "Pune", tag: "Weight Loss", photo: "/images/members/archana.png" },
  { name: "Lata M", age: 67, city: "Pune", tag: "Powerlifter", photo: "/images/members/lata.png" },
  { name: "Pravin K", age: 51, city: "USA", tag: "Health Management", photo: "/images/members/pravin.png" },
  { name: "Rajesh T", age: 52, tag: "Type 2 Diabetes", photo: "/images/members/rajesh.png" },
  { name: "Sneha P", age: 29, tag: "Weight Loss", photo: "/images/members/sneha.png" },
  { name: "Dr. Shashi", age: 68, tag: "Hypertension", photo: "/images/members/shashi.png" },
  { name: "Hemant", tag: "Fitness", photo: "/images/members/hemant.png" },
  { name: "Sakshi M", tag: "Strength", photo: "/images/members/sakshi.png" },
]

// Duplicate for seamless loop
const scrollMembers = [...members, ...members]

function MemberPill({ member }: { member: Member }) {
  return (
    <div className="card card-hover flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
        <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="36px" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{member.name}</p>
        <p className="text-xs text-ink-muted">
          {[member.age, member.city, member.tag].filter(Boolean).join(" · ")}
        </p>
      </div>
    </div>
  )
}

export function MemberFaces() {
  return (
    <section className="overflow-hidden bg-surface pt-16 pb-8 sm:pt-20 sm:pb-10">
      <Reveal className="mx-auto mb-10 max-w-7xl px-5 sm:px-8 lg:px-10">
        <span className="eyebrow text-brand">
          {SITE_CONFIG.STAT_TRANSFORMED} lifestyles transformed
        </span>
        <h2 className="display-md mt-4 text-ink">Real People. Real Transformations.</h2>
      </Reveal>

      {/* Marquee strip */}
      <div className="marquee-mask relative">
        <div className="flex animate-marquee gap-4">
          {scrollMembers.map((member, i) => (
            <MemberPill key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
