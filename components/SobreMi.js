'use client'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function SobreMi() {
  const sectionRef = useScrollReveal()
  const highlights = [
    {
      icon: '🎓',
      title: 'Formación Académica',
      desc: 'Licenciada en Diseño de Modas con especialización en alta costura y confección artesanal.',
    },
    {
      icon: '✂️',
      title: 'Técnica Impecable',
      desc: 'Cada costura, bordado y detalle refleja más de 15 años perfeccionando el arte de la confección.',
    },
    {
      icon: '💝',
      title: 'Atención Personalizada',
      desc: 'Trabajamos contigo paso a paso para que el vestido supere todas tus expectativas.',
    },
  ]

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      style={{
        padding: '5rem 0',
        background: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Photo */}
        <div className="reveal" style={{ position: 'relative' }}>
          {/* Decorative background blob */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-1.5rem',
              width: '80%',
              height: '80%',
              borderRadius: '60% 40% 40% 60% / 50% 60% 40% 50%',
              background: 'linear-gradient(135deg, rgba(45,106,79,0.15), rgba(45,106,79,0.05))',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '1.5rem',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: '0 24px 64px rgba(44,24,16,0.18)',
            }}
          >
            <Image
              src="/Imagenes/LcdaElizabeth.png"
              alt="Elizabeth Mendez — Diseñadora de Modas"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              right: '-1.5rem',
              zIndex: 2,
              background: '#fff',
              borderRadius: '1rem',
              padding: '1rem 1.25rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid #c8e6d4',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif,Georgia,serif)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#2d6a4f',
                margin: 0,
                lineHeight: 1,
              }}
            >
              15+
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans,sans-serif)',
                fontSize: '0.72rem',
                color: '#4a7060',
                margin: '0.25rem 0 0',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Años de experiencia
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="reveal reveal-delay-2">
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
            Sobre Mí
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-serif,Georgia,serif)',
              fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
              fontWeight: 700,
              color: '#1a3826',
              margin: '0 0 1.5rem',
              lineHeight: 1.2,
            }}
          >
            Más de 15 años creando momentos mágicos
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '1rem',
              color: '#2d4a3a',
              lineHeight: 1.75,
              marginBottom: '1rem',
            }}
          >
            Soy Elizabeth Mendez, diseñadora y costurera dominicana con más de 15 años
            de experiencia creando vestidos únicos para niñas de todas las edades. Mi
            pasión nació en el hogar familiar, rodeada de telas y agujas, y hoy se ha
            convertido en mi profesión y mi mayor orgullo.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '1rem',
              color: '#2d4a3a',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}
          >
            Cada vestido que creo lleva mi corazón. Trabajo de manera artesanal,
            prestando atención a cada puntada, cada bordado y cada detalle para que
            tu hija luzca espectacular en su día especial. Porque los recuerdos
            que creamos juntos duran para siempre.
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {highlights.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  borderRadius: '0.875rem',
                  background: '#eef7f1',
                  border: '1px solid #c8e6d4',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.925rem',
                      color: '#1a3826',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: '#4a7060',
                      margin: 0,
                      lineHeight: 1.55,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '1rem',
              marginBottom: '2rem',
              padding: '1.25rem',
              background: 'linear-gradient(135deg,#eef7f1,#fff)',
              borderRadius: '1rem',
              border: '1px solid #c8e6d4',
            }}
          >
            {[
              { value: '320+', label: 'Vestidos' },
              { value: '280+', label: 'Familias' },
              { value: '98%', label: 'Satisfacción' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#2d6a4f',
                    margin: 0,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: '#4a7060',
                    margin: '0.25rem 0 0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'linear-gradient(135deg,#2d6a4f,#1b4332)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.925rem',
              letterSpacing: '0.04em',
              borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(45,106,79,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            Trabajemos juntos →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre-mi > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
