'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import QuickViewModal from './QuickViewModal'

export default function VestidoCard({ vestido }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [isFav, setIsFav]         = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [hovered, setHovered]     = useState(false)
  const [favAnim, setFavAnim]     = useState(false)

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem('eli-favs') || '[]')
      setIsFav(favs.includes(vestido.id))
    } catch (_) {}
  }, [vestido.id])

  const toggleFav = (e) => {
    e.stopPropagation()
    try {
      const favs = JSON.parse(localStorage.getItem('eli-favs') || '[]')
      const next = isFav ? favs.filter((f) => f !== vestido.id) : [...favs, vestido.id]
      localStorage.setItem('eli-favs', JSON.stringify(next))
      setIsFav(!isFav)
      setFavAnim(true)
      setTimeout(() => setFavAnim(false), 500)
    } catch (_) {}
  }

  // Badge color: nuevo → accent/gold, popular → secondary/rose
  const badgeStyle = {
    nuevo:   { background: 'var(--color-accent)',    color: '#fff' },
    popular: { background: 'var(--color-secondary)', color: '#fff' },
    premium: { background: '#8b5cf6',                color: '#fff' },
  }
  const badge = vestido.badgeType ? (badgeStyle[vestido.badgeType] || badgeStyle.premium) : null

  return (
    <>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowModal(true)}
        style={{
          background: 'var(--color-surface)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── Image wrapper ── */}
        <div style={{ position: 'relative', paddingBottom: '125%', background: 'var(--color-neutral)', flexShrink: 0, overflow: 'hidden' }}>
          {/* Skeleton */}
          {!imgLoaded && (
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F2E4DE 25%, #F7EDE8 50%, #F2E4DE 75%)', backgroundSize: '200% 100%', animation: 'skeleton 1.4s ease-in-out infinite' }} />
          )}

          <Image
            src={vestido.imagen}
            alt={vestido.nombre}
            fill
            sizes="(max-width:600px) 100vw, (max-width:1024px) 50vw, 33vw"
            style={{ objectFit: 'cover', transition: 'transform 600ms cubic-bezier(0.25,0.46,0.45,0.94)', transform: hovered ? 'scale(1.05)' : 'scale(1)', opacity: imgLoaded ? 1 : 0 }}
            onLoad={() => setImgLoaded(true)}
          />

          {/* Hover overlay with CTA */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(61,43,43,0.72) 0%, rgba(61,43,43,0.20) 60%, transparent 100%)', opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1.5px solid rgba(255,255,255,0.6)', paddingBottom: '2px' }}>
              Ver detalles
            </span>
          </div>

          {/* Badge */}
          {vestido.badge && badge && (
            <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 1, ...badge }}>
              {vestido.badge}
            </span>
          )}

          {/* Fav button with spring animation */}
          <button
            onClick={toggleFav}
            aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', width: '2.25rem', height: '2.25rem', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.92)', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', zIndex: 1, transition: 'transform 0.2s', transform: favAnim ? 'scale(1.4)' : 'scale(1)', color: isFav ? 'var(--color-secondary)' : 'var(--color-text-muted)' }}
          >
            {isFav ? '♥' : '♡'}
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
            {vestido.nombre}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
            {vestido.descripcion}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--color-neutral)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-text-muted)', background: 'var(--color-neutral)', padding: '0.2rem 0.625rem', borderRadius: 'var(--radius-pill)', fontWeight: 500 }}>
              {vestido.edad} años
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
              US${vestido.precio}
            </span>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setShowModal(true) }}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}
          >
            Ver detalles
          </button>
        </div>
      </article>

      {showModal && <QuickViewModal vestido={vestido} onClose={() => setShowModal(false)} />}

      <style>{`
        @keyframes skeleton {
          0%   { background-position:  200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  )
}
