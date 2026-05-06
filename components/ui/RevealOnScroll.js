'use client'
/**
 * <RevealOnScroll stagger={80}>
 *   …direct children each get opacity 0→1 + translateY 24→0 on scroll
 * </RevealOnScroll>
 *
 * Props:
 *   stagger  {number}  ms between each child's transition-delay (default 80)
 *   as       {string}  wrapper tag (default 'div')
 *   className{string}  extra classes on the wrapper
 */
import { useEffect, useRef } from 'react'

export default function RevealOnScroll({
  children,
  stagger   = 80,
  as: Tag   = 'div',
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = Array.from(container.children)
    targets.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.transitionDelay = `${i * stagger}ms`
    })

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [stagger])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
