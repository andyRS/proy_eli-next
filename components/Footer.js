'use client'
const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'galeria-vestidos', label: 'Vestidos' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: '#0d2b1e',
        color: 'rgba(255,255,255,0.75)',
        padding: '4rem 0 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Brand column */}
        <div>
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#2d6a4f,#1b4332)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif,Georgia,serif)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              E
            </div>
            <span
              style={{
                fontFamily: 'var(--font-serif,Georgia,serif)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#52b788',
                textTransform: 'uppercase',
              }}
            >
              Elizabeth Mendez
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '340px',
              marginBottom: '1.5rem',
            }}
          >
            Diseñadora de modas con más de 15 años creando vestidos únicos para
            niñas en Santo Domingo, República Dominicana. Cada pieza es una
            obra de arte confeccionada con amor.
          </p>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <a
              href="https://wa.me/18492151118"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <span style={{ color: '#52b788' }}>📱</span>
              +1 849-215-1118
            </a>
            <a
              href="mailto:elizabethmendezp18@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <span style={{ color: '#52b788' }}>✉️</span>
              elizabethmendezp18@gmail.com
            </a>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              <span style={{ color: '#52b788' }}>📍</span>
              Santo Domingo, República Dominicana
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#52b788',
              marginBottom: '1.25rem',
            }}
          >
            Navegación
          </h4>
          <nav aria-label="Footer navigation">
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}
            >
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#52b788')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#52b788',
              marginBottom: '1.25rem',
            }}
          >
            Servicios
          </h4>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
            }}
          >
            {[
              'Vestidos de fiesta',
              'Eventos especiales',
              'Diseño personalizado',
              'Textiles para el hogar',
              'Quinceañeras',
              'Ajustes y reparaciones',
            ].map((s) => (
              <li key={s}>
                <a
                  href="#servicios"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#52b788')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.5rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.38)',
            margin: 0,
          }}
        >
          © 2025–2026 Elizabeth Mendez. Todos los derechos reservados.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Política de privacidad', 'Cookies', 'Términos y condiciones'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#52b788')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  )
}
