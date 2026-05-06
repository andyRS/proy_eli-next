'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function QuickViewModal({ vestido, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!vestido) return null

  const badgeColors = {
    nuevo:   { background: 'var(--color-accent)',    color: '#fff' },
    popular: { background: 'var(--color-secondary)', color: '#fff' },
    premium: { background: '#8b5cf6',                color: '#fff' },
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles: ${vestido.nombre}`}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      {/* Backdrop */}
      <div onClick={onClose} aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(61,43,43,0.70)', backdropFilter: 'blur(6px)' }} />

      {/* Modal */}
      <div
        style={{ position: 'relative', zIndex: 1, background: 'var(--color-surface)', borderRadius: 'var(--radius)', overflow: 'hidden', width: '100%', maxWidth: '760px', maxHeight: '90vh', overflowY: 'auto', animation: 'modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}
        className="modal-grid"
      >
        {/* Image */}
        <div style={{ position: 'relative', minHeight: '360px', background: 'var(--color-neutral)' }}>
          <Image src={vestido.imagen} alt={vestido.nombre} fill style={{ objectFit: 'cover' }} sizes="380px" />
          {vestido.badge && (
            <span style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', ...(badgeColors[vestido.badgeType] || badgeColors.premium) }}>
              {vestido.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          <button onClick={onClose} aria-label="Cerrar" style={{ position: 'absolute', top: '1rem', right: '1rem', width: '2rem', height: '2rem', borderRadius: '50%', border: 'none', background: 'var(--color-neutral)', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', color: 'var(--color-text-muted)' }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-primary)')}
            onMouseOut={(e)  => (e.currentTarget.style.background = 'var(--color-neutral)')}
          >
            &#x00D7;
          </button>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 0.75rem', paddingRight: '2rem' }}>
            {vestido.nombre}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.925rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
            {vestido.descripcion}
          </p>

          {vestido.detalles && vestido.detalles.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-secondary)', margin: '0 0 0.625rem' }}>
                Características
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {vestido.detalles.map((d) => (
                  <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.75rem' }}>&#x2713;</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div style={{ flex: 1, background: 'var(--color-neutral)', borderRadius: 'var(--radius-sm)', padding: '0.875rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '0.68rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Edad</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>{vestido.edad} años</p>
            </div>
            <div style={{ flex: 1, background: 'var(--gradient-cta)', borderRadius: 'var(--radius-sm)', padding: '0.875rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '0.68rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Desde</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '1.1rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>US${vestido.precio}</p>
            </div>
          </div>

          <a href="#contacto" onClick={onClose} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Solicitar cotización
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @media (max-width: 600px) { .modal-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
