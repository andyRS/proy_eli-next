'use client'
import { useState } from 'react'
import { Sparkles, Award, Pen, Home, Scissors, Gem } from 'lucide-react'
import { servicios } from '@/data/servicios'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const ICON_MAP = {
  'vestidos-fiesta':      Sparkles,
  'eventos-especiales':   Award,
  'diseno-personalizado': Pen,
  'textiles-hogar':       Home,
  'ajustes':              Scissors,
  'accesorios':           Gem,
}

function ServiceIcon({ id, hovered }) {
  const Icon = ICON_MAP[id] || Sparkles
  return (
    <div style={{
      width: '3.5rem', height: '3.5rem', borderRadius: '12px',
      background: hovered ? 'var(--color-primary)' : 'var(--color-neutral)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'background 0.3s ease', flexShrink: 0,
    }}>
      <Icon size={22} strokeWidth={1.5} color={hovered ? '#fff' : 'var(--color-secondary)'} style={{ transition: 'color 0.3s ease' }} />
    </div>
  )
}

function ServiceCard({ servicio, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius)',
        padding: '2rem 1.75rem',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        border: hovered ? '1px solid var(--color-primary)' : '1px solid var(--color-neutral)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column', gap: '1rem',
      }}
    >
      <ServiceIcon id={servicio.id} hovered={hovered} />

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
        {servicio.titulo}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
        {servicio.descripcion}
      </p>

      {servicio.features && servicio.features.length > 0 && (
        <ul style={{ margin: '0.25rem 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {servicio.features.map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>&#x2713;</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      <a href="#contacto" className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
        Consultar &#x2192;
      </a>
    </article>
  )
}

export default function Servicios() {
  const sectionRef = useScrollReveal()
  return (
    <section id="servicios" ref={sectionRef} style={{ padding: '5rem 0', background: 'var(--color-neutral)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
            Lo que ofrezco
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 1rem' }}>
            Servicios especializados
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Desde vestidos de fiesta hasta diseños completamente personalizados,
            ofrezco una gama completa de servicios de alta costura artesanal.
          </p>
        </div>

        <div className="servicios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {servicios.map((servicio, idx) => (
            <ServiceCard key={servicio.id} servicio={servicio} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .servicios-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px)  { .servicios-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
