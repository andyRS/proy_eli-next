'use client'
import { useState } from 'react'
import { vestidos } from '@/data/vestidos'
import VestidoCard from './VestidoCard'

const EDADES    = ['Todos', '2-4', '5-7', '8-10', '11-14']
const OCASIONES = ['Todos', 'fiesta', 'boda', 'comunion', 'casual']
const COLORES   = ['Todos', 'rosa', 'blanco', 'azul', 'lila', 'rojo', 'verde', 'dorado']

const OCASION_LABELS = {
  Todos: 'Todas', fiesta: 'Fiesta', boda: 'Boda', comunion: 'Comuni\u00f3n', casual: 'Casual',
}

function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.375rem 1rem',
        borderRadius: 'var(--radius-pill)',
        border: active ? 'none' : '1.5px solid var(--color-primary)',
        background: active ? 'var(--gradient-cta)' : 'var(--color-surface)',
        color: active ? '#fff' : 'var(--color-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.82rem',
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        transition: 'all 0.2s',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        boxShadow: active ? 'var(--shadow-rose)' : 'none',
      }}
    >
      {label}
    </button>
  )
}

export default function Galeria() {
  const [edadFiltro,    setEdadFiltro]    = useState('Todos')
  const [ocasionFiltro, setOcasionFiltro] = useState('Todos')
  const [colorFiltro,   setColorFiltro]   = useState('Todos')

  const filtered = vestidos.filter((v) => {
    const matchEdad    = edadFiltro    === 'Todos' || v.edad    === edadFiltro
    const matchOcasion = ocasionFiltro === 'Todos' || v.ocasion === ocasionFiltro
    const matchColor   = colorFiltro   === 'Todos' || v.color   === colorFiltro
    return matchEdad && matchOcasion && matchColor
  })

  const clearFilters = () => {
    setEdadFiltro('Todos')
    setOcasionFiltro('Todos')
    setColorFiltro('Todos')
  }

  const hasFilters = edadFiltro !== 'Todos' || ocasionFiltro !== 'Todos' || colorFiltro !== 'Todos'

  return (
    <section id="galeria-vestidos" style={{ padding: '5rem 0', background: 'var(--gradient-soft)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
            Nuestra Colecci\u00f3n
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 1rem' }}>
            Vestidos para cada ocasi\u00f3n
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Explora nuestra colecci\u00f3n y encuentra el vestido perfecto para tu princesa.
            Cada pieza es \u00fanica, creada con amor y detalle artesanal.
          </p>
        </div>

        {/* Filters */}
        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius)', padding: '1.25rem 1.5rem', marginBottom: '2.5rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-neutral)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: '0 0 0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>Edad</p>
              <div className="filter-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {EDADES.map((e) => (
                  <FilterChip key={e} label={e === 'Todos' ? 'Todas' : e + ' a\u00f1os'} active={edadFiltro === e} onClick={() => setEdadFiltro(e)} />
                ))}
              </div>
            </div>
            <div>
              <p style={{ margin: '0 0 0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>Ocasi\u00f3n</p>
              <div className="filter-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {OCASIONES.map((o) => (
                  <FilterChip key={o} label={OCASION_LABELS[o] || o} active={ocasionFiltro === o} onClick={() => setOcasionFiltro(o)} />
                ))}
              </div>
            </div>
            <div>
              <p style={{ margin: '0 0 0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>Color</p>
              <div className="filter-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {COLORES.map((c) => (
                  <FilterChip key={c} label={c === 'Todos' ? 'Todos' : c} active={colorFiltro === c} onClick={() => setColorFiltro(c)} />
                ))}
              </div>
            </div>
          </div>
          {hasFilters && (
            <button onClick={clearFilters} style={{ marginTop: '1rem', padding: '0.35rem 0.875rem', border: '1.5px solid var(--color-primary)', borderRadius: 'var(--radius-pill)', background: 'transparent', color: 'var(--color-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', cursor: 'pointer' }}>
              &#x2715; Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#128269;</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              No encontramos vestidos con esos filtros
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', fontWeight: 300 }}>
              Intenta con diferentes criterios o limpia los filtros.
            </p>
            <button onClick={clearFilters} className="btn btn-primary btn-sm">
              Ver todos los vestidos
            </button>
          </div>
        ) : (
          <>
            <div
              className="vestidos-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}
            >
              {filtered.map((v) => (
                <VestidoCard key={v.id} vestido={v} />
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
              {filtered.length} {filtered.length === 1 ? 'vestido encontrado' : 'vestidos encontrados'}
            </p>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .filter-chips { flex-wrap: nowrap !important; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: 4px; }
          .filter-chips::-webkit-scrollbar { display: none; }
          .vestidos-grid { grid-template-columns: repeat(auto-fill, minmax(260px,1fr)) !important; }
        }
        @media (max-width: 480px) {
          .vestidos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
