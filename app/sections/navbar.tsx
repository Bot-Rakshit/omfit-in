"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { getBatchInfo, SITE_CONFIG } from "../site-config"

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Academy", href: "/academy" },
  { label: "Corporate", href: "/corporate" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)
  const batch = getBatchInfo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  return (
    <>
      {/* Drawer backdrop — a sibling of the header so it paints beneath it */}
      <div
        data-state={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="fixed inset-0 z-40 bg-ink/15 opacity-0 transition-opacity duration-200 data-[state=open]:opacity-100 lg:hidden"
      />

      <div
        className="nav-shell sticky top-0 z-50"
        data-state={isOpen ? "open" : scrolled ? "scrolled" : "top"}
      >
        {/* Top banner */}
        {!bannerDismissed && (
          <div className="relative bg-brand text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-10 py-1.5 text-center text-[0.78rem] font-medium">
              <span>
                Nutrition Program &mdash; {batch.label} &middot;{" "}
                <a
                  href={SITE_CONFIG.RAZORPAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                >
                  Enrol now &rarr;
                </a>
              </span>
            </div>
            <button
              onClick={() => setBannerDismissed(true)}
              className="btn absolute right-2 top-[calc(50%-0.875rem)] h-7 w-7 rounded-lg p-0 text-white/70 hover:text-white"
              aria-label="Dismiss banner"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Navbar */}
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
            <Link href="/" className="relative z-10 flex items-baseline gap-0.5">
              <span className="font-display text-[1.35rem] font-bold tracking-tight text-ink">
                OMFIT
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3.5 py-2 text-[0.84rem] font-medium text-ink-secondary transition-colors hover:bg-surface-sunken hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={SITE_CONFIG.PARENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm rounded-full"
              >
                OmFit for Parents
                <ArrowUpRight className="btn-arrow-diag h-3.5 w-3.5" />
              </a>

              <a
                href={SITE_CONFIG.RAZORPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Enrol Now
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost relative z-10 h-10 w-10 rounded-lg p-0 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
            </button>
          </nav>
        </header>

        {/* Mobile drawer — always rendered, animated */}
        <div
          data-state={isOpen ? "open" : "closed"}
          className="drawer-panel absolute inset-x-0 top-full -z-10 bg-surface pb-8 pt-4 shadow-[var(--shadow-float)] lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                tabIndex={isOpen ? undefined : -1}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-3.5 text-[1.05rem] font-medium text-ink transition-colors hover:bg-surface-sunken"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border-strong pt-4">
              <a
                href={SITE_CONFIG.PARENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? undefined : -1}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-3.5 text-[0.95rem] font-medium text-ink-secondary transition-colors hover:bg-surface-sunken"
              >
                OmFit for Parents
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-3 px-3">
              <a
                href={SITE_CONFIG.RAZORPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? undefined : -1}
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                Enrol Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
