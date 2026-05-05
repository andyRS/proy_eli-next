'use client'
import { useState, useEffect, useRef } from 'react'

const WA_URL =
  'https://api.whatsapp.com/send?phone=18492151118&text=Hola%20Elizabeth%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20vestido.'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY
      const footer = document.getElementById('footer')
      let atFooter = false

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        atFooter = footerTop <= window.innerHeight + 40
      }

      setVisible(scrollY > 800 && !atFooter)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden={!visible}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1050,
        background: 'rgba(28,22,16,0.97)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(82,183,136,0.25)',
        padding: '0.875rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
        flexWrap: 'wrap',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-serif,Georgia,serif)',
          fontSize: 'clamp(0.875rem,2vw,1rem)',
          color: '#fff',
          margin: 0,
          fontStyle: 'italic',
        }}
      >
        ¿Lista para crear el vestido perfecto?
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        {/* WhatsApp - visible on desktop */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          style={{
            display: 'none', // shown via media query in <style>
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            background: '#25d366',
            color: '#fff',
            borderRadius: '100px',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans,sans-serif)',
            fontWeight: 600,
            fontSize: '0.85rem',
            transition: 'opacity 0.2s',
          }}
          className="sticky-wa-btn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.982l6.31-1.657A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.424l-.37-.219-3.743.982.998-3.648-.24-.375A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          WhatsApp
        </a>

        {/* Cotización */}
        <a
          href="#contacto"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.6rem 1.375rem',
            background: 'linear-gradient(135deg,#2d6a4f,#1b4332)',
            color: '#fff',
            borderRadius: '100px',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans,sans-serif)',
            fontWeight: 600,
            fontSize: '0.875rem',
            boxShadow: '0 4px 16px rgba(45,106,79,0.3)',
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
        >
          Solicitar cotización →
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .sticky-wa-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  )
}
