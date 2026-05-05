'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function QuickViewModal({ vestido, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!vestido) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles: ${vestido.nombre}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(20,12,6,0.72)',
          backdropFilter: 'blur(6px)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#fff',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '760px',
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* Image */}
        <div
          style={{
            position: 'relative',
            minHeight: '360px',
            background: 'linear-gradient(135deg, #fdf8f3, #f5e6d0)',
          }}
        >
          <Image
            src={vestido.imagen}
            alt={vestido.nombre}
            fill
            style={{ objectFit: 'cover' }}
            sizes="380px"
          />
          {vestido.badge && (
            <span
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background:
                  vestido.badgeType === 'nuevo'
                    ? '#22c55e'
                    : vestido.badgeType === 'popular'
                    ? '#c9a668'
                    : '#a855f7',
                color: '#fff',
              }}
            >
              {vestido.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(0,0,0,0.08)',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            ×
          </button>

          <h2
            style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#2c1810',
              margin: '0 0 0.75rem',
              paddingRight: '2rem',
            }}
          >
            {vestido.nombre}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: '0.925rem',
              color: '#6b5744',
              lineHeight: 1.65,
              margin: '0 0 1.5rem',
            }}
          >
            {vestido.descripcion}
          </p>

          {/* Details */}
          {vestido.detalles && vestido.detalles.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c9a668',
                  margin: '0 0 0.625rem',
                }}
              >
                Características
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {vestido.detalles.map((d) => (
                  <li
                    key={d}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-sans, sans-serif)',
                      fontSize: '0.875rem',
                      color: '#4a3325',
                    }}
                  >
                    <span style={{ color: '#c9a668', fontWeight: 700, fontSize: '0.75rem' }}>✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Age & Price */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div
              style={{
                flex: 1,
                background: '#fdf8f3',
                borderRadius: '0.75rem',
                padding: '0.875rem',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.7rem', color: '#9a7c5e', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-sans)' }}>
                Edad
              </p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: '#2c1810', fontFamily: 'var(--font-serif)' }}>
                {vestido.edad} años
              </p>
            </div>
            <div
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #c9a668, #a07840)',
                borderRadius: '0.75rem',
                padding: '0.875rem',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-sans)' }}>
                Desde
              </p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-serif)' }}>
                US${vestido.precio}
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            onClick={onClose}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '0.875rem',
              background: 'linear-gradient(135deg, #c9a668, #a07840)',
              color: '#fff',
              fontFamily: 'var(--font-sans, sans-serif)',
              fontWeight: 600,
              fontSize: '0.925rem',
              letterSpacing: '0.04em',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Solicitar cotización
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 600px) {
          [role="dialog"] > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
