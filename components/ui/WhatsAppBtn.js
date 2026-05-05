'use client'
import { useState, useEffect } from 'react'

const WA_URL =
  'https://api.whatsapp.com/send?phone=18492151118&text=Hola%20Elizabeth%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20vestidos.%20%C2%BFPodr%C3%ADa%20darme%20informaci%C3%B3n%3F'

export default function WhatsAppBtn() {
  const [visible, setVisible] = useState(false)
  const [stickyActive, setStickyActive] = useState(false)

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY
      setVisible(scrollY > 300)
      setStickyActive(scrollY > 800)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          position: 'fixed',
          right: '1.5rem',
          bottom: stickyActive ? '5.5rem' : '1.5rem',
          zIndex: 1100,
          width: '3.25rem',
          height: '3.25rem',
          borderRadius: '50%',
          background: '#25d366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          textDecoration: 'none',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: visible ? 'scale(1)' : 'scale(0.8)',
          transition: 'bottom 0.35s ease, opacity 0.35s ease, transform 0.35s ease',
          animation: 'pulseWa 2.5s ease-in-out infinite',
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.982l6.31-1.657A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.424l-.37-.219-3.743.982.998-3.648-.24-.375A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>

      <style>{`
        @keyframes pulseWa {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
          50%       { box-shadow: 0 4px 32px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.12); }
        }
      `}</style>
    </>
  )
}
