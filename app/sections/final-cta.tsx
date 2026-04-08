"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[var(--color-surface-dark)] sm:rounded-[2rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          {/* Left — image */}
          <div className="relative hidden h-full min-h-[28rem] lg:block">
            <Image
              src="/images/ingredients.png"
              alt="Fresh ingredients for healthy cooking"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-surface-dark)]/80" />
          </div>

          {/* Right — form */}
          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
            <motion.h2
              variants={itemVariants}
              className="display-md mb-3 text-[var(--color-on-dark)]"
            >
              Start your health transformation
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="body-md mb-8 max-w-sm text-[var(--color-on-dark-secondary)]"
            >
              Leave your details and our team will reach out within 24 hours.
              Join 500+ members who chose real food over quick fixes.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand-glow)] px-6 py-8 text-center"
              >
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-on-dark)]">
                  Thank you, {formData.name.split(" ")[0] || "friend"}!
                </p>
                <p className="mt-2 text-sm text-[var(--color-on-dark-secondary)]">
                  We&rsquo;ll call you within 24 hours to get started.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={update("name")}
                  className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] placeholder:!text-[var(--color-on-dark-muted)] focus:!border-[var(--color-brand-light)]"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={formData.email}
                    onChange={update("email")}
                    className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] placeholder:!text-[var(--color-on-dark-muted)] focus:!border-[var(--color-brand-light)]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={update("phone")}
                    className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] placeholder:!text-[var(--color-on-dark-muted)] focus:!border-[var(--color-brand-light)]"
                  />
                </div>

                <select
                  value={formData.condition}
                  onChange={update("condition")}
                  className="form-input !border-[var(--color-on-dark-muted)] !bg-[var(--color-surface-dark-raised)] !text-[var(--color-on-dark)] focus:!border-[var(--color-brand-light)]"
                  style={!formData.condition ? { color: "var(--color-on-dark-muted)" } : undefined}
                >
                  <option value="" disabled>What are you looking for? (optional)</option>
                  <option value="diabetes">Diabetes Management</option>
                  <option value="hypertension">Hypertension / BP</option>
                  <option value="thyroid">Thyroid Management</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="fitness">General Fitness</option>
                  <option value="training">Personal Training</option>
                  <option value="other">Other</option>
                </select>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:bg-[var(--color-accent-light)] active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.form>
            )}

            {/* WhatsApp fallback */}
            <motion.div variants={itemVariants} className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[var(--color-on-dark-muted)]" />
              <span className="text-xs text-[var(--color-on-dark-muted)]">or</span>
              <div className="h-px flex-1 bg-[var(--color-on-dark-muted)]" />
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="https://wa.me/918484808896"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-on-dark-muted)] px-6 py-3 text-[0.875rem] font-medium text-[var(--color-on-dark-secondary)] transition-all hover:border-[var(--color-on-dark-secondary)] hover:text-[var(--color-on-dark)]"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to us on WhatsApp
            </motion.a>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-center text-xs text-[var(--color-on-dark-muted)]"
            >
              New batch starts every Monday &middot; 7-day refund guarantee
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
