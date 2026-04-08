"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Academy", href: "#academy" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-surface)]/95 shadow-[0_1px_0_var(--color-border-strong)]"
            : "bg-transparent"
        }`}
        style={scrolled ? { backdropFilter: "blur(8px)" } : undefined}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          {/* Wordmark */}
          <Link href="/" className="group relative z-10 flex items-baseline gap-0.5">
            <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-bold tracking-tight text-[var(--color-ink)]">
              OMFIT
            </span>
          </Link>

          {/* Desktop nav */}
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

          {/* Desktop right */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://omfitforparents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3.5 py-1.5 text-[0.78rem] font-medium text-[var(--color-ink-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Parents (55+)?
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <Link
              href="#contact"
              className="rounded-xl bg-[var(--color-brand)] px-5 py-2.5 text-[0.84rem] font-semibold text-white transition-all hover:bg-[var(--color-brand-dark)] active:scale-[0.97]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[var(--color-surface-sunken)] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5 text-[var(--color-ink)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5 text-[var(--color-ink)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[var(--color-ink)]/15 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-surface)] pt-20 pb-8 shadow-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 sm:px-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-3.5 text-[1.05rem] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-sunken)]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * navLinks.length, duration: 0.25 }}
                  className="mt-2 border-t border-[var(--color-border-strong)] pt-4"
                >
                  <a
                    href="https://omfitforparents.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-3.5 text-[0.95rem] font-medium text-[var(--color-ink-secondary)] transition-colors hover:bg-[var(--color-surface-sunken)]"
                  >
                    Parents (55+)?
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mt-3 px-3"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-xl bg-[var(--color-brand)] py-3.5 text-center text-[0.95rem] font-semibold text-white transition-all hover:bg-[var(--color-brand-dark)] active:scale-[0.98]"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
