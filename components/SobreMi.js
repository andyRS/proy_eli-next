'use client'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'

function StatBadge({ target, suffix = '', label }) {
  const { ref, value } = useCountUp(target, 2000)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-secondary)', margin: 0 }}>
        {value}{suffix}
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-muted)', margin: '0.25rem 0 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </p>
    </div>
  )
}

export default function SobreMi() {
  const sectionRef = useScrollReveal()

  const highlights = [
    { icon: '🎓', title: 'Formación Académica',    desc: 'Licenciada en Diseño de Modas con especialización en alta costura y confección artesanal.' },
    { icon: '✂️', title: 'Técnica Impecable',      desc: 'Cada costura, bordado y detalle refleja más de 15 años perfeccionando el arte de la confección.' },
    { icon: '💝', title: 'Atención Personalizada', desc: 'Trabajamos contigo paso a paso para que el vestido supere todas tus expectativas.' },
  ]

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      style={{ padding: '5rem 0', background: 'var(--color-surface)' }}
    >
      <div
        className="sobre-mi-grid"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
      >
        {/* Photo column */}
        <div className="reveal" style={{ position: 'relative' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: '80%', height: '80%', borderRadius: '60% 40% 40% 60% / 50% 60% 40% 50%', background: 'linear-gradient(135deg, rgba(232,160,160,0.20), rgba(201,168,76,0.08))', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: 'var(--shadow-xl)' }}>
            <Image
              src="/Imagenes/LcdaElizabeth.png"
              alt="Elizabeth Mendez — Diseñadora de Modas"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '-1.5rem', zIndex: 2, background: 'var(--color-surface)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(232,160,160,0.25)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-secondary)', margin: 0, lineHeight: 1 }}>15+</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-muted)', margin: '0.25rem 0 0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Años de experiencia
            </p>
          </div>
        </div>

        {/* Content column */}
        <div className="reveal reveal-delay-2">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
            Sobre Mí
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 1.5rem', lineHeight: 1.2 }}>
            Más de 15 años creando momentos mágicos
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
            Soy Elizabeth Mendez, diseñadora y costurera dominicana con más de 15 años
            de experiencia creando vestidos únicos para niñas de todas las edades. Mi
            pasión nació en el hogar familiar, rodeada de telas y agujas, y hoy se ha
            convertido en mi profesión y mi mayor orgullo.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Cada vestido que creo lleva mi corazón. Trabajo de manera artesanal,
            prestando atención a cada puntada, cada bordado y cada detalle para que
            tu hija luzca espectacular en su día especial. Porque los recuerdos
            que creamos juntos duran para siempre.
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'var(--color-neutral)', border: '1px solid rgba(232,160,160,0.2)' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.925rem', color: 'var(--color-text)', margin: '0 0 0.25rem' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2rem', padding: '1.25rem', background: 'var(--color-neutral)', borderRadius: 'var(--radius)', border: '1px solid rgba(232,160,160,0.2)' }}>
            <StatBadge target={320} suffix="+" label="Vestidos" />
            <StatBadge target={280} suffix="+" label="Familias" />
            <StatBadge target={98}  suffix="%" label="Satisfacción" />
          </div>

          <a href="#contacto" className="btn btn-primary">
            Trabajemos juntos &#x2192;
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-mi-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
