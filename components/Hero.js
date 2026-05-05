'use client'
export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 40%, #6b3d24 70%, #3d2518 100%)',
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201,166,104,0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(201,166,104,0.06) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(201,166,104,0.05) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,166,104,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '6rem 1.5rem 3rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Content */}
        <div style={{ maxWidth: '680px' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(201,166,104,0.15)',
              border: '1px solid rgba(201,166,104,0.35)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '1.75rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{ fontSize: '0.7rem', color: '#c9a668' }}>✦</span>
            <span
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#d4b07a',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Licenciada en Diseño de Modas
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#fff',
              margin: '0 0 1.25rem',
            }}
          >
            Vestidos de ensueño{' '}
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#c9a668',
                position: 'relative',
              }}
            >
              para princesas únicas
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '100%',
                  height: '8px',
                  fill: 'none',
                  stroke: '#c9a668',
                  strokeWidth: 2,
                  opacity: 0.5,
                }}
              >
                <path d="M0 8 Q75 2 150 8 Q225 14 300 8" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.78)',
              margin: '0 0 2.25rem',
              maxWidth: '560px',
            }}
          >
            Cada vestido es una obra de arte única, creada con amor y precisión en
            Santo Domingo. Más de 15 años dando vida a los sueños de cientos de
            familias dominicanas — porque cada niña merece sentirse princesa.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#galeria-vestidos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.875rem',
                background: 'linear-gradient(135deg, #c9a668, #a07840)',
                color: '#fff',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontWeight: 600,
                fontSize: '0.925rem',
                letterSpacing: '0.04em',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(201,166,104,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,166,104,0.45)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,166,104,0.35)'
              }}
            >
              Ver colección
              <span style={{ fontSize: '1rem' }}>→</span>
            </a>

            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.875rem',
                background: 'transparent',
                color: '#fff',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontWeight: 500,
                fontSize: '0.925rem',
                letterSpacing: '0.04em',
                borderRadius: '100px',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.4)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#c9a668'
                e.currentTarget.style.background = 'rgba(201,166,104,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Solicitar cotización
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '320+', label: 'Vestidos creados' },
              { value: '280+', label: 'Familias felices' },
              { value: '98%', label: 'Satisfacción' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: 'var(--font-serif, Georgia, serif)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#c9a668',
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans, sans-serif)',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.6)',
                    margin: '0.375rem 0 0',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative dress emoji side panel */}
        <div
          aria-hidden="true"
          style={{
            fontSize: 'clamp(5rem, 12vw, 9rem)',
            lineHeight: 1,
            userSelect: 'none',
            filter: 'drop-shadow(0 8px 32px rgba(201,166,104,0.3))',
            animation: 'heroFloat 4s ease-in-out infinite',
          }}
        >
          👗
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'bounce 2s ease-in-out infinite',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans, sans-serif)',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Desliza
        </span>
        <div
          style={{
            width: '1.5px',
            height: '2rem',
            background: 'linear-gradient(to bottom, rgba(201,166,104,0.7), transparent)',
          }}
        />
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes bounce {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 768px) {
          #inicio .container {
            grid-template-columns: 1fr !important;
          }
          #inicio [aria-hidden="true"]:last-of-type {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
