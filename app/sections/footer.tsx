"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  programs: [
    { label: "Nutrition Program", href: "#programs" },
    { label: "1-on-1 Training", href: "#programs" },
    { label: "Omfit Academy", href: "#academy" },
    { label: "Omfit for Parents (55+)", href: "https://omfitforparents.com", external: true },
  ],
  conditions: [
    { label: "Diabetes", href: "#conditions" },
    { label: "Hypertension", href: "#conditions" },
    { label: "Thyroid", href: "#conditions" },
    { label: "Weight Management", href: "#conditions" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
}

const socials = [
  { icon: Instagram, href: "https://instagram.com/omfit.in", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@omfit", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/omfit", label: "LinkedIn" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <motion.div variants={itemVariants}>
      <h4 className="label-sm mb-5 text-[var(--color-on-dark-muted)]">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="body-md text-[var(--color-on-dark-secondary)] transition-colors duration-200 hover:text-[var(--color-on-dark)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-dark)]">
      <motion.div
        className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
      >
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-on-dark)]">
                OMFIT
              </span>
            </Link>
            <p className="body-md mt-4 max-w-xs text-[var(--color-on-dark-secondary)]">
              Science-backed fitness and nutrition programs. Founded in 2018,
              vision to impact 1 billion lives.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="tel:+918484808896"
                className="flex items-start gap-2.5 text-sm text-[var(--color-on-dark-secondary)] transition-colors duration-200 hover:text-[var(--color-on-dark)]"
              >
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                +91 84848 08896
              </Link>
              <Link
                href="mailto:hello@omfit.in"
                className="flex items-start gap-2.5 text-sm text-[var(--color-on-dark-secondary)] transition-colors duration-200 hover:text-[var(--color-on-dark)]"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                hello@omfit.in
              </Link>
              <div className="flex items-start gap-2.5 text-sm text-[var(--color-on-dark-muted)]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                <span>201, Altius, Samarth Colony, Pimple Nilakh, Pune 411027</span>
              </div>
            </div>
          </motion.div>

          <FooterColumn title="PROGRAMS" links={footerLinks.programs} />
          <FooterColumn title="CONDITIONS" links={footerLinks.conditions} />
          <FooterColumn title="COMPANY" links={footerLinks.company} />
        </div>

        {/* Social */}
        <motion.div variants={itemVariants} className="mt-14 flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-dark-raised)] text-[var(--color-on-dark-muted)] transition-all duration-200 hover:bg-[var(--color-brand)] hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </Link>
            )
          })}
        </motion.div>

        <div className="mt-10 border-t border-[var(--color-on-dark-muted)]" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-[var(--color-on-dark-muted)]">
            &copy; 2026 OMFIT. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-on-dark-muted)]">
            <Link href="/privacy" className="px-2 py-1 transition-colors duration-200 hover:text-[var(--color-on-dark-secondary)]">
              Privacy
            </Link>
            <span className="opacity-30">&middot;</span>
            <Link href="/terms" className="px-2 py-1 transition-colors duration-200 hover:text-[var(--color-on-dark-secondary)]">
              Terms
            </Link>
            <span className="opacity-30">&middot;</span>
            <Link href="/refund" className="px-2 py-1 transition-colors duration-200 hover:text-[var(--color-on-dark-secondary)]">
              Refunds
            </Link>
            <span className="opacity-30">&middot;</span>
            <Link href="/consent" className="px-2 py-1 transition-colors duration-200 hover:text-[var(--color-on-dark-secondary)]">
              Consent
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
