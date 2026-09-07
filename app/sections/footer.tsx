"use client"

import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "../site-config"

const footerLinks = {
  programs: [
    { label: "Nutrition Program", href: "#programs" },
    { label: "Personal Training", href: "#programs" },
    { label: "OmFit Academy", href: "/academy" },
    { label: "OmFit for Parents", href: SITE_CONFIG.PARENTS_URL, external: true },
  ],
  conditions: [
    { label: "Diabetes", href: "#conditions" },
    { label: "Hypertension", href: "#conditions" },
    { label: "Thyroid", href: "#conditions" },
    { label: "PCOS", href: "#conditions" },
    { label: "Weight Management", href: "#conditions" },
    { label: "See all conditions", href: "#conditions" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Corporate Programs", href: "/corporate" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
}

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/omfit_lifestyle/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@teamomfit", label: "YouTube" },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4 className="label-sm mb-5 text-on-dark-muted">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="body-md text-on-dark-secondary transition-colors duration-200 hover:text-on-dark"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-surface-dark">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="pb-14">
          <p
            className="font-display text-3xl italic text-on-dark sm:text-4xl"
            style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
          >
            {SITE_CONFIG.BRAND_LINE}
          </p>
        </div>

        <div className="mb-14 border-t border-on-dark-faint" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-semibold text-on-dark">
                OMFIT
              </span>
            </Link>
            <p className="body-md mt-4 max-w-xs text-on-dark-secondary">
              Science-backed nutrition &amp; fitness programs. Founded 2018.
              Vision to impact 1 billion lives.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href={`tel:${SITE_CONFIG.PHONE_RAW}`}
                className="flex items-start gap-2.5 text-sm text-on-dark-secondary transition-colors duration-200 hover:text-on-dark"
              >
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                {SITE_CONFIG.PHONE}
              </Link>
              <Link
                href={`mailto:${SITE_CONFIG.EMAIL}`}
                className="flex items-start gap-2.5 text-sm text-on-dark-secondary transition-colors duration-200 hover:text-on-dark"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                {SITE_CONFIG.EMAIL}
              </Link>
              <div className="flex items-start gap-2.5 text-sm text-on-dark-muted">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{SITE_CONFIG.ADDRESS}</span>
              </div>
            </div>
          </div>

          <FooterColumn title="PROGRAMS" links={footerLinks.programs} />
          <FooterColumn title="CONDITIONS" links={footerLinks.conditions} />
          <FooterColumn title="COMPANY" links={footerLinks.company} />
        </div>

        {/* Social */}
        <div className="mt-14 flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="btn h-10 w-10 rounded-lg p-0 bg-surface-dark-raised text-on-dark-muted hover:bg-brand hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </Link>
            )
          })}
        </div>

        <div className="mt-10 border-t border-on-dark-faint" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-on-dark-muted">&copy; 2026 OMFIT. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-1 text-sm text-on-dark-muted">
            <Link href="/privacy" className="px-2 py-1 transition-colors duration-200 hover:text-on-dark-secondary">Privacy</Link>
            <span className="opacity-30">&middot;</span>
            <Link href="/terms" className="px-2 py-1 transition-colors duration-200 hover:text-on-dark-secondary">Terms</Link>
            <span className="opacity-30">&middot;</span>
            <Link href="/refund" className="px-2 py-1 transition-colors duration-200 hover:text-on-dark-secondary">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
