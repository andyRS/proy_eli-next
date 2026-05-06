'use client'
const NAV_LINKS = [
  { id: 'inicio',          label: 'Inicio' },
  { id: 'galeria-vestidos', label: 'Vestidos' },
  { id: 'sobre-mi',        label: 'Sobre Mí' },
  { id: 'servicios',       label: 'Servicios' },
  { id: 'testimonios',     label: 'Testimonios' },
  { id: 'contacto',        label: 'Contacto' },
]

/* Inline SVG social icons */
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.982l6.31-1.657A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.424l-.37-.219-3.743.982.998-3.648-.24-.375A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.25rem', height: '2.25rem', borderRadius: '50%', border: '1.5px solid rgba(232,160,160,0.35)', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.2s' }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.background = 'rgba(232,160,160,0.12)' }}
      onMouseOut={(e)  => { e.currentTarget.style.borderColor = 'rgba(232,160,160,0.35)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'transparent' }}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: 'var(--color-text)', color: 'rgba(255,255,255,0.72)', padding: '4rem 0 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-primary)', textTransform: 'uppercase' }}>
              Elizabeth Mendez
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.52)', maxWidth: '340px', marginBottom: '1.5rem' }}>
            Diseñadora de modas con más de 15 años creando vestidos únicos para
            niñas en Santo Domingo, República Dominicana. Cada pieza es una
            obra de arte confeccionada con amor.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '1.5rem' }}>
            <SocialLink href="https://www.instagram.com" label="Instagram de Elizabeth Mendez">
              <IconInstagram />
            </SocialLink>
            <SocialLink href="https://www.facebook.com" label="Facebook de Elizabeth Mendez">
              <IconFacebook />
            </SocialLink>
            <SocialLink href="https://wa.me/18492151118" label="WhatsApp de Elizabeth Mendez">
              <IconWhatsApp />
            </SocialLink>
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {[
              { icon: '📱', text: '+1 849-215-1118', href: 'https://wa.me/18492151118' },
              { icon: '✉️', text: 'elizabethmendezp18@gmail.com', href: 'mailto:elizabethmendezp18@gmail.com' },
              { icon: '📍', text: 'Santo Domingo, República Dominicana', href: null },
            ].map(({ icon, text, href }) => {
              const Tag = href ? 'a' : 'span'
              return (
                <Tag key={text} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={href ? (e) => (e.currentTarget.style.color = 'var(--color-primary)') : undefined}
                  onMouseOut={href  ? (e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)') : undefined}
                >
                  <span style={{ color: 'var(--color-primary)' }}>{icon}</span>
                  {text}
                </Tag>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
            Navegación
          </h4>
          <nav aria-label="Footer navigation">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseOut={(e)  => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)')}
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
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
            Servicios
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {['Vestidos de fiesta', 'Eventos especiales', 'Diseño personalizado', 'Textiles para el hogar', 'Quinceañeras', 'Ajustes y reparaciones'].map((s) => (
              <li key={s}>
                <a href="#servicios"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseOut={(e)  => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)')}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar with ✦ ornament separator */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        {/* ✦ ornament */}
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--color-primary)', letterSpacing: '0.5em', opacity: 0.6 }} aria-hidden="true">
          ✦ &#x2015;&#x2015;&#x2015; ✦ &#x2015;&#x2015;&#x2015; ✦
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.32)', margin: 0 }}>
            © 2025–2026 Elizabeth Mendez. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Política de privacidad', 'Cookies', 'Términos y condiciones'].map((link) => (
              <a key={link} href="#"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 300, color: 'rgba(255,255,255,0.30)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                onMouseOut={(e)  => (e.currentTarget.style.color = 'rgba(255,255,255,0.30)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  )
}
