"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Academy", href: "/academy" },
  { label: "Corporate", href: "/corporate" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-surface)]/95 shadow-[0_1px_0_var(--color-border-strong)]"
            : "bg-transparent"
        }`}
        style={scrolled ? { backdropFilter: "blur(8px)" } : undefined}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="group relative z-10 flex items-baseline gap-0.5">
            <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-bold tracking-tight text-[var(--color-ink)]">
              OMFIT
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-[0.84rem] font-medium text-[var(--color-ink-secondary)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://omfitforparents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3.5 py-1.5 text-[0.78rem] font-medium text-[var(--color-ink-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              OmFit for Parents
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <Link
              href="#contact"
              className="rounded-xl bg-[var(--color-brand)] px-5 py-2.5 text-[0.84rem] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.97]"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[var(--color-surface-sunken)] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-[var(--color-ink)]" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--color-ink)]" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[var(--color-ink)]/15 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-surface)] pt-20 pb-8 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-3.5 text-[1.05rem] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-sunken)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-[var(--color-border-strong)] pt-4">
                <a
                  href="https://omfitforparents.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-3.5 text-[0.95rem] font-medium text-[var(--color-ink-secondary)] transition-colors hover:bg-[var(--color-surface-sunken)]"
                >
                  OmFit for Parents
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-3 px-3">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-xl bg-[var(--color-brand)] py-3.5 text-center text-[0.95rem] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
