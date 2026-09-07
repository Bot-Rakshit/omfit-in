"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { SITE_CONFIG } from "../site-config"
import { Reveal } from "../components/reveal"

const stats = [
  { number: SITE_CONFIG.FOUNDED, label: "Founded" },
  { number: SITE_CONFIG.STAT_TRANSFORMED, label: "Lifestyles transformed" },
  { number: "15+", label: "Health conditions" },
  { number: "Worldwide", label: "India, USA & more" },
]

export function Founder() {
  return (
    <section className="bg-surface-dark" id="about">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-36">
        {/* Photo */}
        <Reveal className="relative">
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-float)] lg:mx-0 lg:max-w-none">
            <Image
              src="/images/omkar.jpeg"
              alt="Omkar — Founder of OMFIT"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-8 sm:pb-8">
              <p className="font-display text-2xl font-semibold text-on-dark sm:text-3xl">Omkar</p>
              <p className="label-sm mt-1 text-on-dark-secondary">Founder, OMFIT</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={80} className="flex flex-col justify-center">
          <span className="eyebrow mb-5 text-accent">Our story</span>

          <h2 className="display-lg mb-8 text-on-dark">
            Built From Personal Frustration With the Fitness Industry
          </h2>

          <p className="body-lg mb-5 text-on-dark-secondary">
            OMFIT was founded in 2018 with a simple belief: fitness should be
            scientific, personalised, and accessible. Not aggressive. Not
            aesthetic-obsessed. Not about pills and powders.
          </p>

          <p className="body-lg mb-10 text-on-dark-secondary">
            We work with a scientific approach and a vision to impact 1 billion
            lives. Every program, every meal plan, every coaching session is
            designed to make you the best version of yourself &mdash; naturally.
          </p>

          <blockquote className="relative mb-12 rounded-xl border border-on-dark-faint bg-surface-dark-raised/60 px-6 py-6 backdrop-blur sm:px-8">
            <Quote className="mb-3 h-5 w-5 text-accent opacity-70" />
            <p className="font-display text-[0.95rem] font-medium italic leading-relaxed text-on-dark">
              &ldquo;Aesthetics is not the goal, it is a by-product. Our
              programs make you the best version of yourself &mdash; naturally.
              Healthy meals made with love.&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-on-dark-faint" />
              <span className="label-sm text-on-dark-muted">Omkar, Founder</span>
            </footer>
          </blockquote>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="number-display block text-2xl text-on-dark">{stat.number}</span>
                <span className="mt-1.5 block text-xs font-medium text-on-dark-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
