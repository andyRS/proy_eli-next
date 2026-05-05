'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { vestidos } from '@/data/vestidos'
import VestidoCard from './VestidoCard'

const EDADES = ['Todos', '2-4', '5-7', '8-10', '11-14']
const OCASIONES = ['Todos', 'fiesta', 'boda', 'comunión', 'graduación', 'casual']
const COLORES = ['Todos', 'rosa', 'blanco', 'azul', 'lila', 'rojo', 'verde', 'dorado']

function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.4rem 1rem',
        borderRadius: '100px',
        border: active ? 'none' : '1.5px solid #e8d5b8',
        background: active ? 'linear-gradient(135deg,#c9a668,#a07840)' : '#fff',
        color: active ? '#fff' : '#6b5744',
        fontFamily: 'var(--font-sans,sans-serif)',
        fontSize: '0.82rem',
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        transition: 'all 0.2s',
        letterSpacing: '0.02em',
        textTransform: label !== 'Todos' ? 'capitalize' : 'none',
      }}
    >
      {label}
    </button>
  )
}

export default function Galeria() {
  const [edadFiltro, setEdadFiltro] = useState('Todos')
  const [ocasionFiltro, setOcasionFiltro] = useState('Todos')
  const [colorFiltro, setColorFiltro] = useState('Todos')
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const carouselRef = useRef(null)
  const touchStartX = useRef(null)
  const autoplayRef = useRef(null)

  const filtered = vestidos.filter((v) => {
    const matchEdad = edadFiltro === 'Todos' || v.edad === edadFiltro
    const matchOcasion = ocasionFiltro === 'Todos' || v.ocasion === ocasionFiltro
    const matchColor = colorFiltro === 'Todos' || v.color === colorFiltro
    return matchEdad && matchOcasion && matchColor
  })

  // How many slides visible depends on window width — we use groups of 3
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1)
      else if (window.innerWidth < 1024) setPerPage(2)
      else setPerPage(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(filtered.length / perPage)

  const goTo = useCallback(
    (idx) => {
      const safe = (idx + totalPages) % (totalPages || 1)
      setCurrent(safe)
    },
    [totalPages]
  )

  // Reset to 0 when filters change
  useEffect(() => {
    setCurrent(0)
  }, [edadFiltro, ocasionFiltro, colorFiltro, perPage])

  // Autoplay
  useEffect(() => {
    if (!autoplay || totalPages <= 1) return
    autoplayRef.current = setInterval(() => goTo(current + 1), 4500)
    return () => clearInterval(autoplayRef.current)
  }, [autoplay, current, totalPages, goTo])

  const pauseAutoplay = () => {
    setAutoplay(false)
    clearInterval(autoplayRef.current)
  }

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    pauseAutoplay()
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1)
    touchStartX.current = null
  }

  const clearFilters = () => {
    setEdadFiltro('Todos')
    setOcasionFiltro('Todos')
    setColorFiltro('Todos')
  }

  const hasFilters =
    edadFiltro !== 'Todos' || ocasionFiltro !== 'Todos' || colorFiltro !== 'Todos'

  const pageVestidos = filtered.slice(current * perPage, current * perPage + perPage)

  return (
    <section
      id="galeria-vestidos"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, #fdf9f4 0%, #fff 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c9a668',
              marginBottom: '0.75rem',
            }}
          >
            Nuestra Colección
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif,Georgia,serif)',
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 700,
              color: '#2c1810',
              margin: '0 0 1rem',
            }}
          >
            Vestidos para cada ocasión
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '1rem',
              color: '#7a6050',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Explora nuestra colección y encuentra el vestido perfecto para tu princesa.
            Cada pieza es única, creada con amor y detalle artesanal.
          </p>
        </div>

        {/* Filters */}
        <div
          style={{
            background: '#fff',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            border: '1px solid #f0e8dc',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
            {/* Edad */}
            <div>
              <p
                style={{
                  margin: '0 0 0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c9a668',
                }}
              >
                Edad
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {EDADES.map((e) => (
                  <FilterChip
                    key={e}
                    label={e === 'Todos' ? 'Todas' : `${e} años`}
                    active={edadFiltro === e}
                    onClick={() => setEdadFiltro(e)}
                  />
                ))}
              </div>
            </div>

            {/* Ocasión */}
            <div>
              <p
                style={{
                  margin: '0 0 0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c9a668',
                }}
              >
                Ocasión
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {OCASIONES.map((o) => (
                  <FilterChip
                    key={o}
                    label={o === 'Todos' ? 'Todas' : o}
                    active={ocasionFiltro === o}
                    onClick={() => setOcasionFiltro(o)}
                  />
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <p
                style={{
                  margin: '0 0 0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c9a668',
                }}
              >
                Color
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {COLORES.map((c) => (
                  <FilterChip
                    key={c}
                    label={c === 'Todos' ? 'Todos' : c}
                    active={colorFiltro === c}
                    onClick={() => setColorFiltro(c)}
                  />
                ))}
              </div>
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              style={{
                marginTop: '1rem',
                padding: '0.35rem 0.875rem',
                border: '1.5px solid #e8d5b8',
                borderRadius: '100px',
                background: 'transparent',
                color: '#a07840',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              ✕ Limpiar filtros
            </button>
          )}
        </div>

        {/* Carousel */}
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              color: '#a08060',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#2c1810',
                marginBottom: '0.5rem',
              }}
            >
              No encontramos vestidos con esos filtros
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Intenta con diferentes criterios o limpia los filtros.
            </p>
            <button
              onClick={clearFilters}
              style={{
                padding: '0.625rem 1.5rem',
                background: 'linear-gradient(135deg,#c9a668,#a07840)',
                color: '#fff',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              Ver todos los vestidos
            </button>
          </div>
        ) : (
          <>
            <div style={{ position: 'relative' }}>
              {/* Prev */}
              <button
                onClick={() => { pauseAutoplay(); goTo(current - 1) }}
                aria-label="Anterior"
                disabled={totalPages <= 1}
                style={{
                  position: 'absolute',
                  left: '-1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: '1.5px solid #e8d5b8',
                  background: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  cursor: totalPages > 1 ? 'pointer' : 'default',
                  opacity: totalPages > 1 ? 1 : 0.4,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                ‹
              </button>

              {/* Cards */}
              <div
                ref={carouselRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${perPage}, 1fr)`,
                  gap: '1.5rem',
                  transition: 'opacity 0.3s',
                }}
              >
                {pageVestidos.map((v) => (
                  <VestidoCard key={v.id} vestido={v} />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => { pauseAutoplay(); goTo(current + 1) }}
                aria-label="Siguiente"
                disabled={totalPages <= 1}
                style={{
                  position: 'absolute',
                  right: '-1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: '1.5px solid #e8d5b8',
                  background: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  cursor: totalPages > 1 ? 'pointer' : 'default',
                  opacity: totalPages > 1 ? 1 : 0.4,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                ›
              </button>
            </div>

            {/* Dots */}
            {totalPages > 1 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '2rem',
                }}
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => { pauseAutoplay(); setCurrent(i) }}
                    aria-label={`Página ${i + 1}`}
                    style={{
                      width: i === current ? '1.75rem' : '0.5rem',
                      height: '0.5rem',
                      borderRadius: '100px',
                      border: 'none',
                      background: i === current ? '#c9a668' : '#e8d5b8',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            <p
              style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: '#a08060',
              }}
            >
              Mostrando {Math.min((current + 1) * perPage, filtered.length)} de {filtered.length} vestidos
            </p>
          </>
        )}
      </div>
    </section>
  )
}
