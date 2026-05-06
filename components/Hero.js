'use client'
import Image from 'next/image'
import { useCountUp } from '@/hooks/useCountUp'

function StatCounter({ target, suffix = '', label }) {
  const { ref, value } = useCountUp(target, 2000)
  return (
    <div ref={ref}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-secondary)', margin: 0, lineHeight: 1 }}>
        {value}{suffix}
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', margin: '0.375rem 0 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </p>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 15% 60%, rgba(232,160,160,0.18) 0%, transparent 55%), radial-gradient(circle at 85% 15%, rgba(201,168,76,0.10) 0%, transparent 45%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,123,123,0.10) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.4 }} />

      <div
        className="hero-grid"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,4vw,4rem)', alignItems: 'center', padding: 'clamp(5.5rem,10vw,7rem) 1.5rem clamp(3rem,5vw,4rem)' }}
      >
        {/* LEFT */}
        <div className="hero-content">
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-pill)', padding: '0.375rem 1.125rem', marginBottom: '1.75rem', background: 'rgba(232,160,160,0.10)' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}>&#10022;</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Licenciada en Diseño de Modas
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--color-text)', margin: '0 0 1.25rem' }}>
            Vestidos de ensueño{' '}
            <span style={{ display: 'block', fontStyle: 'italic', fontWeight: 400, color: 'var(--color-secondary)', position: 'relative' }}>
              para princesas únicas
              <svg aria-hidden="true" viewBox="0 0 300 12" style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', height: '8px', fill: 'none', stroke: 'var(--color-primary)', strokeWidth: 2, opacity: 0.7 }}>
                <path d="M0 8 Q75 2 150 8 Q225 14 300 8" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem,2vw,1.1rem)', fontWeight: 300, lineHeight: 1.8, color: 'var(--color-text-muted)', margin: '0 0 2.25rem', maxWidth: '520px' }}>
            Cada vestido es una obra de arte única, creada con amor y precisión en
            Santo Domingo. Más de 15 años dando vida a los sueños de cientos de
            familias dominicanas — porque cada niña merece sentirse princesa.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#galeria-vestidos" className="btn btn-primary">Ver colección →</a>
            <a href="#contacto" className="btn btn-secondary">Solicitar cotización</a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,123,123,0.18)', flexWrap: 'wrap' }}>
            <StatCounter target={320} suffix="+" label="Vestidos creados" />
            <StatCounter target={280} suffix="+" label="Familias felices" />
            <StatCounter target={98}  suffix="%" label="Satisfacción" />
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-image-wrap" style={{ position: 'relative', height: 'clamp(420px,60vh,620px)', borderRadius: '4px 80px 4px 80px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(61,43,43,0.16)' }}>
          <Image
            src="/Imagenes/LcdaElizabeth.png"
            alt="Elizabeth Mendez — Diseñadora de Modas"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(61,43,43,0.10) 0%, transparent 40%)' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'heroBounce 2s ease-in-out infinite' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>Desliza</span>
        <div style={{ width: '1.5px', height: '2rem', background: 'linear-gradient(to bottom, var(--color-primary), transparent)' }} />
      </div>

      <style>{`
        @keyframes heroBounce {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
          50%       { opacity: 1;   transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 5.5rem !important; }
          .hero-image-wrap { height: 60svh !important; border-radius: 4px !important; order: -1; }
          .hero-content { text-align: center; }
          .hero-content p { max-width: 100% !important; }
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas .btn { width: 100% !important; justify-content: center; }
          .hero-stats { justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}
