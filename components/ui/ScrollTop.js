'use client'
import { useState, useEffect } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      style={{
        position: 'fixed',
        left: '1.5rem',
        bottom: '1.5rem',
        zIndex: 1100,
        width: '2.75rem',
        height: '2.75rem',
        borderRadius: '50%',
        border: '1.5px solid rgba(45,106,79,0.4)',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
        color: '#2d6a4f',
        fontSize: '1.15rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 16px rgba(0,0,0,0.1)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg,#2d6a4f,#1b4332)'
        e.currentTarget.style.color = '#fff'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.95)'
        e.currentTarget.style.color = '#2d6a4f'
        e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(8px)'
      }}
    >
      ↑
    </button>
  )
}
