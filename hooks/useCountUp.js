'use client'
import { useEffect, useRef, useState } from 'react'

/** Ease-out cubic: t ∈ [0,1] → eased [0,1] */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

/**
 * Animates a number from 0 to `target` over `duration` ms
 * when the returned `ref` element enters the viewport.
 *
 * @param {number} target   Final value
 * @param {number} duration Animation duration in ms (default 2000)
 * @returns {{ ref: React.RefObject, value: number }}
 */
export function useCountUp(target, duration = 2000) {
  const [value, setValue] = useState(0)
  const ref    = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          observer.disconnect()

          const start = performance.now()

          const tick = (now) => {
            const elapsed  = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased    = easeOutCubic(progress)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}
