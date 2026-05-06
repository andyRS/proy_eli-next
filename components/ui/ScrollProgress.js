'use client'
import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    const handler = () => {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (bar) bar.style.width = `${Math.min(pct, 100)}%`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      id="scroll-progress"
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0,
        height: '2px', width: '0%',
        background: 'var(--gradient-cta)',
        zIndex: 9999,
        transition: 'width 0.05s linear',
      }}
    />
  )
}
