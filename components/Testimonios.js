'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const TESTIMONIOS = [
  {
    id: 1,
    nombre: 'Ana Martínez',
    rol: 'Mamá de Sofía (6 años)',
    texto:
      'El vestido que Elizabeth creó para el cumpleaños de mi hija fue simplemente espectacular. Cada detalle fue perfecto y Sofía se sintió como una verdadera princesa. ¡Todos preguntaban quién lo había hecho!',
    estrellas: 5,
    iniciales: 'AM',
    gradiente: 'linear-gradient(135deg, #f472b6, #ec4899)',
  },
  {
    id: 2,
    nombre: 'Jorge García',
    rol: 'Papá de Isabella (8 años)',
    texto:
      'Buscamos durante semanas el vestido ideal para la primera comunión de nuestra hija. Elizabeth lo confeccionó exactamente como lo imaginamos, incluso mejor. El trabajo artesanal es de una calidad increíble.',
    estrellas: 5,
    iniciales: 'JG',
    gradiente: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
  },
  {
    id: 3,
    nombre: 'María Rodríguez',
    rol: 'Mamá de Valentina (10 años)',
    texto:
      'Elizabeth es una artista. Transformó una simple idea en un vestido de cuento de hadas para la graduación de Valentina. La atención personalizada y la puntualidad en la entrega superaron mis expectativas.',
    estrellas: 5,
    iniciales: 'MR',
    gradiente: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
  },
  {
    id: 4,
    nombre: 'Carmen Santos',
    rol: 'Mamá de Luciana (4 años)',
    texto:
      'Jamás pensé que un vestido para niña podría ser tan perfectamente confeccionado. Los bordados, los detalles, la tela... todo es de primera categoría. Elizabeth tiene un don especial para este trabajo.',
    estrellas: 5,
    iniciales: 'CS',
    gradiente: 'linear-gradient(135deg, #34d399, #10b981)',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          style={{
            fontSize: '1rem',
            color: i < count ? '#f59e0b' : '#e5e7eb',
          }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const touchStartX = useRef(null)
  const timerRef = useRef(null)

  const total = TESTIMONIOS.length

  const goTo = useCallback(
    (idx) => {
      setCurrent(((idx % total) + total) % total)
    },
    [total]
  )

  useEffect(() => {
    if (!autoplay) return
    timerRef.current = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [autoplay, current, goTo])

  const pause = () => {
    setAutoplay(false)
    clearInterval(timerRef.current)
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    pause()
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1)
    touchStartX.current = null
  }

  const t = TESTIMONIOS[current]

  return (
    <section
      id="testimonios"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #1a3826 0%, #1b4332 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#74c69d',
              marginBottom: '0.75rem',
            }}
          >
            Testimonios
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif,Georgia,serif)',
              fontSize: 'clamp(1.8rem,4vw,2.6rem)',
              fontWeight: 700,
              color: '#fff',
              margin: 0,
            }}
          >
            Lo que dicen nuestras familias
          </h2>
        </div>

        {/* Card */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(45,106,79,0.2)',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem,5vw,3rem)',
            textAlign: 'center',
            transition: 'opacity 0.3s',
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: '4.5rem',
              height: '4.5rem',
              borderRadius: '50%',
              background: t.gradiente,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            {t.iniciales}
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <Stars count={t.estrellas} />
          </div>

          {/* Quote */}
          <blockquote
            style={{
              fontFamily: 'var(--font-serif,Georgia,serif)',
              fontSize: 'clamp(1rem,2.5vw,1.2rem)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.75,
              margin: '0 0 1.75rem',
              position: 'relative',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-0.5rem',
                left: '-0.5rem',
                fontSize: '3rem',
                color: 'rgba(45,106,79,0.3)',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
              }}
            >
              "
            </span>
            {t.texto}
          </blockquote>

          {/* Author */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: '#52b788',
              margin: '0 0 0.25rem',
            }}
          >
            {t.nombre}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}
          >
            {t.rol}
          </p>
        </div>

        {/* Nav */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <button
            onClick={() => { pause(); goTo(current - 1) }}
            aria-label="Anterior testimonio"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '1.5px solid rgba(82,183,136,0.5)',
              background: 'transparent',
              color: '#52b788',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            ‹
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {TESTIMONIOS.map((_, i) => (
              <button
                key={i}
                onClick={() => { pause(); setCurrent(i) }}
                aria-label={`Testimonio ${i + 1}`}
                style={{
                  width: i === current ? '1.75rem' : '0.5rem',
                  height: '0.5rem',
                  borderRadius: '100px',
                  border: 'none',
                  background: i === current ? '#2d6a4f' : 'rgba(45,106,79,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => { pause(); goTo(current + 1) }}
            aria-label="Siguiente testimonio"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '1.5px solid rgba(82,183,136,0.5)',
              background: 'transparent',
              color: '#52b788',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
