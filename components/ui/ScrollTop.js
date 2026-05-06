'use client'
import { useState, useEffect } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Volver al inicio"
      style={{
        position: 'fixed',
        left: '1.5rem',
        bottom: '1.5rem',
        zIndex: 1100,
        width: '2.75rem',
        height: '2.75rem',
        borderRadius: '50%',
        border: '1.5px solid var(--color-primary)',
        background: hovered ? 'var(--gradient-cta)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
        color: hovered ? '#fff' : 'var(--color-secondary)',
        fontSize: '1.1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hovered ? 'var(--shadow-rose)' : 'var(--shadow-sm)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: hovered ? 'translateY(-3px)' : visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      &#x2191;
    </button>
  )
}
