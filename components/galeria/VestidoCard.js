'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import QuickViewModal from './QuickViewModal'

export default function VestidoCard({ vestido }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [isFav, setIsFav] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
    } catch (_) {}
  }

  const badgeColors = {
    nuevo: '#22c55e',
    popular: '#2d6a4f',
    premium: '#a855f7',
  }

  return (
    <>
      <article
        style={{
          background: '#fff',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
        }}
        onClick={() => setShowModal(true)}
      >
        {/* Image wrapper */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '125%',
            background: 'linear-gradient(135deg, #eef7f1, #d8f3dc)',
            flexShrink: 0,
          }}
        >
          {/* Skeleton */}
          {!imgLoaded && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #c8e6d4 25%, #eef7f1 50%, #c8e6d4 75%)',
                backgroundSize: '200% 100%',
                animation: 'skeleton 1.4s ease-in-out infinite',
              }}
            />
          )}

          <Image
            src={vestido.imagen}
            alt={vestido.nombre}
            fill
            sizes="(max-width:600px) 100vw, (max-width:1024px) 50vw, 33vw"
            style={{ objectFit: 'cover', transition: 'opacity 0.4s' }}
            onLoad={() => setImgLoaded(true)}
          />

          {/* Badge */}
          {vestido.badge && (
            <span
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                padding: '0.25rem 0.625rem',
                borderRadius: '100px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background: badgeColors[vestido.badgeType] || '#2d6a4f',
                color: '#fff',
                zIndex: 1,
              }}
            >
              {vestido.badge}
            </span>
          )}

          {/* Fav button */}
          <button
            onClick={toggleFav}
            aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.92)',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'transform 0.2s, background 0.2s',
              zIndex: 1,
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = '')}
          >
            {isFav ? '♥' : '♡'}
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#1a3826',
              margin: 0,
            }}
          >
            {vestido.nombre}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: '0.85rem',
              color: '#4a7060',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {vestido.descripcion}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto',
              paddingTop: '0.75rem',
              borderTop: '1px solid #c8e6d4',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '0.8rem',
                color: '#1b4332',
                background: '#eef7f1',
                padding: '0.2rem 0.625rem',
                borderRadius: '100px',
                fontWeight: 500,
              }}
            >
              {vestido.edad} años
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#2d6a4f',
              }}
            >
              US${vestido.precio}
            </span>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setShowModal(true) }}
            style={{
              display: 'block',
              width: '100%',
              marginTop: '0.75rem',
              padding: '0.625rem',
              background: 'linear-gradient(135deg, #2d6a4f, #1b4332)',
              color: '#fff',
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              border: 'none',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Ver detalles
          </button>
        </div>
      </article>

      {showModal && (
        <QuickViewModal vestido={vestido} onClose={() => setShowModal(false)} />
      )}

      <style>{`
        @keyframes skeleton {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  )
}
