"use client"

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  as?: ElementType
  id?: string
}

/**
 * Scroll-triggered entrance. Styles live in globals.css under [data-reveal].
 * Fires once; elements already in view on mount reveal immediately.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div", id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.inview = "true"
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.inview = "true"
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined

  return (
    <Tag ref={ref} id={id} data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  )
}
