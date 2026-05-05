'use client'
import { useEffect, useRef } from 'react'

/**
 * Aplica clase 'revealed' cuando el elemento entra en el viewport.
 * Elementos deben tener la clase 'reveal' en el HTML.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const targets = el.querySelectorAll('.reveal')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return containerRef
}
