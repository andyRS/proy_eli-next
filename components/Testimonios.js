'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const TESTIMONIOS = [
  {
    id: 1,
    nombre: 'Ana Martínez',
    rol: 'Mamá de Sofía (6 años)',
    texto: 'El vestido que Elizabeth creó para el cumpleaños de mi hija fue simplemente espectacular. Cada detalle fue perfecto y Sofía se sintió como una verdadera princesa. ¡Todos preguntaban quién lo había hecho!',
    estrellas: 5,
    iniciales: 'AM',
  },
  {
    id: 2,
    nombre: 'Jorge García',
    rol: 'Papá de Isabella (8 años)',
    texto: 'Buscamos durante semanas el vestido ideal para la primera comunión de nuestra hija. Elizabeth lo confeccionó exactamente como lo imaginamos, incluso mejor. El trabajo artesanal es de una calidad increíble.',
    estrellas: 5,
    iniciales: 'JG',
  },
  {
    id: 3,
    nombre: 'María Rodríguez',
    rol: 'Mamá de Valentina (10 años)',
    texto: 'Elizabeth es una artista. Transformó una simple idea en un vestido de cuento de hadas para la graduación de Valentina. La atención personalizada y la puntualidad en la entrega superaron mis expectativas.',
    estrellas: 5,
    iniciales: 'MR',
  },
  {
    id: 4,
    nombre: 'Carmen Santos',
    rol: 'Mamá de Luciana (4 años)',
    texto: 'Jamás pensé que un vestido para niña podría ser tan perfectamente confeccionado. Los bordados, los detalles, la tela... todo es de primera categoría. Elizabeth tiene un don especial para este trabajo.',
    estrellas: 5,
    iniciales: 'CS',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ fontSize: '1rem', color: i < count ? 'var(--color-accent)' : 'rgba(201,123,123,0.25)' }}>★</span>
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

  const goTo = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  useEffect(() => {
    if (!autoplay) return
    timerRef.current = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [autoplay, current, goTo])

  const pause = () => { setAutoplay(false); clearInterval(timerRef.current) }

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; pause() }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1)
    touchStartX.current = null
  }

  const t = TESTIMONIOS[current]

  return (
    <section
      id="testimonios"
      style={{ padding: '5rem 0', background: 'var(--color-neutral)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative blob */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', right: '-15%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,160,160,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
            Testimonios
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
            Lo que dicen nuestras familias
          </h2>
        </div>

        {/* Card */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem,5vw,3.5rem)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(232,160,160,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Large decorative quote — Playfair Display */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-0.5rem',
              left: '1.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '8rem',
              lineHeight: 1,
              color: 'var(--color-primary)',
              opacity: 0.25,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            &ldquo;
          </span>

          {/* Avatar */}
          <div style={{
            width: '4.5rem', height: '4.5rem', borderRadius: '50%',
            background: 'var(--gradient-cta)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
            fontSize: '1.25rem', fontWeight: 700, color: '#fff',
            fontFamily: 'var(--font-body)',
            boxShadow: 'var(--shadow-rose)',
          }}>
            {t.iniciales}
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <Stars count={t.estrellas} />
          </div>

          {/* Quote text */}
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem,2.5vw,1.2rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--color-text)',
            lineHeight: 1.75,
            margin: '0 0 1.75rem',
            position: 'relative',
            zIndex: 1,
          }}>
            {t.texto}
          </blockquote>

          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-secondary)', margin: '0 0 0.25rem' }}>
            {t.nombre}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--color-text-muted)', margin: 0 }}>
            {t.rol}
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button
            onClick={() => { pause(); goTo(current - 1) }}
            aria-label="Anterior testimonio"
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1.5px solid var(--color-primary)', background: 'transparent', color: 'var(--color-secondary)', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseOut={(e)  => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-secondary)' }}
          >
            &#x2039;
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {TESTIMONIOS.map((_, i) => (
              <button
                key={i}
                onClick={() => { pause(); setCurrent(i) }}
                aria-label={`Testimonio ${i + 1}`}
                style={{ width: i === current ? '1.75rem' : '0.5rem', height: '0.5rem', borderRadius: '100px', border: 'none', background: i === current ? 'var(--color-secondary)' : 'var(--color-primary)', cursor: 'pointer', transition: 'all 0.3s', padding: 0, opacity: i === current ? 1 : 0.5 }}
              />
            ))}
          </div>

          <button
            onClick={() => { pause(); goTo(current + 1) }}
            aria-label="Siguiente testimonio"
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1.5px solid var(--color-primary)', background: 'transparent', color: 'var(--color-secondary)', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff' }}
            onMouseOut={(e)  => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-secondary)' }}
          >
            &#x203a;
          </button>
        </div>
      </div>
    </section>
  )
}
