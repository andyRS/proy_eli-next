'use client'
import { servicios } from '@/data/servicios'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Servicios() {
  const sectionRef = useScrollReveal()
  return (
    <section
      id="servicios"
      ref={sectionRef}
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, #eef7f1 0%, #eef7f1 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#2d6a4f',
              marginBottom: '0.75rem',
            }}
          >
            Lo que ofrezco
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif,Georgia,serif)',
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 700,
              color: '#1a3826',
              margin: '0 0 1rem',
            }}
          >
            Servicios especializados
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '1rem',
              color: '#4a7060',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Desde vestidos de fiesta hasta diseños completamente personalizados,
            ofrezco una gama completa de servicios de alta costura artesanal.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {servicios.map((servicio, idx) => (
            <article
              key={servicio.id}
              className={`reveal reveal-delay-${Math.min(idx + 1, 4)}`}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                padding: '2rem 1.75rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                border: '1px solid #c8e6d4',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(45,106,79,0.15)'
                e.currentTarget.style.borderColor = '#2d6a4f'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = '#c8e6d4'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, rgba(45,106,79,0.15), rgba(45,106,79,0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                }}
              >
                {servicio.icono}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif,Georgia,serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#1a3826',
                  margin: 0,
                }}
              >
                {servicio.titulo}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans,sans-serif)',
                  fontSize: '0.875rem',
                  color: '#4a7060',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {servicio.descripcion}
              </p>

              {/* Features */}
              {servicio.features && servicio.features.length > 0 && (
                <ul
                  style={{
                    margin: '0.25rem 0 0',
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  {servicio.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-sans,sans-serif)',
                        fontSize: '0.82rem',
                        color: '#2d4a3a',
                      }}
                    >
                      <span
                        style={{
                          color: '#2d6a4f',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              <a
                href="#contacto"
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  paddingTop: '0.875rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#2d6a4f',
                  textDecoration: 'none',
                  borderTop: '1px solid #c8e6d4',
                  transition: 'gap 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.gap = '0.625rem')}
                onMouseOut={(e) => (e.currentTarget.style.gap = '0.4rem')}
              >
                Consultar →
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #servicios > div > div:last-child {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #servicios > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
