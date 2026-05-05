'use client'
import { useState } from 'react'

const SERVICIOS_OPTS = [
  'Vestido de fiesta',
  'Evento especial (boda, comunión)',
  'Diseño personalizado',
  'Textiles para el hogar',
  'Quinceañeras',
  'Otro',
]

const initForm = { nombre: '', email: '', telefono: '', servicio: '', mensaje: '', website: '' }
const initErrors = {}

function validate(form) {
  const errs = {}
  if (!form.nombre.trim() || form.nombre.trim().length < 2) errs.nombre = 'Ingresa tu nombre completo'
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Ingresa un email válido'
  if (!form.servicio) errs.servicio = 'Selecciona un servicio'
  if (!form.mensaje.trim() || form.mensaje.trim().length < 10) errs.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  return errs
}

export default function Contacto() {
  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState(initErrors)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success'|'error', msg }

  const showToast = (type, msg) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) {
      setErrors((er) => ({ ...er, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    // Honeypot check
    if (form.website) return

    setLoading(true)
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        showToast('success', data.message || '¡Mensaje enviado exitosamente!')
        setForm(initForm)
        setErrors({})
      } else {
        showToast('error', data.error || 'Hubo un error al enviar el mensaje. Intenta de nuevo.')
      }
    } catch (_) {
      showToast('error', 'No pudimos conectar con el servidor. Intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (name) => ({
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '0.75rem',
    border: `1.5px solid ${errors[name] ? '#ef4444' : '#e8d5b8'}`,
    background: errors[name] ? '#fff5f5' : '#fff',
    fontFamily: 'var(--font-sans,sans-serif)',
    fontSize: '0.925rem',
    color: '#2c1810',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  })

  return (
    <section
      id="contacto"
      style={{
        padding: '5rem 0',
        background: '#fff',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c9a668',
              marginBottom: '0.75rem',
            }}
          >
            Contacto
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
            Hagamos realidad tu sueño
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#7a6050',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Cuéntame sobre el vestido que imaginas y te daré una cotización personalizada.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Info */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2c1810',
                margin: '0 0 1.5rem',
              }}
            >
              Información de contacto
            </h3>

            {[
              {
                icon: '📱',
                label: 'WhatsApp',
                value: '+1 849-215-1118',
                href: 'https://wa.me/18492151118?text=Hola%20Elizabeth%2C%20me%20interesa%20un%20vestido',
              },
              {
                icon: '✉️',
                label: 'Email',
                value: 'elizabethmendezp18@gmail.com',
                href: 'mailto:elizabethmendezp18@gmail.com',
              },
              {
                icon: '📍',
                label: 'Ubicación',
                value: 'Santo Domingo, República Dominicana',
                href: null,
              },
              {
                icon: '🕐',
                label: 'Horario',
                value: 'Lun–Sáb 8:00 AM – 6:00 PM',
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem',
                  padding: '1rem',
                  borderRadius: '0.875rem',
                  background: '#fdf8f3',
                  border: '1px solid #f0e8dc',
                }}
              >
                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#c9a668',
                      margin: '0 0 0.2rem',
                    }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: '#2c1810',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: '#2c1810',
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/18492151118?text=Hola%20Elizabeth%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20vestido"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
                padding: '0.875rem 1.5rem',
                background: '#25d366',
                color: '#fff',
                borderRadius: '100px',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.925rem',
                boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                marginTop: '0.5rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.982l6.31-1.657A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.67-.52-5.18-1.424l-.37-.219-3.743.982.998-3.648-.24-.375A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Form */}
          <div
            style={{
              background: '#fdf8f3',
              borderRadius: '1.25rem',
              padding: '2rem',
              border: '1px solid #f0e8dc',
            }}
          >
            {/* Toast */}
            {toast && (
              <div
                role="alert"
                style={{
                  padding: '0.875rem 1rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  background: toast.type === 'success' ? '#f0fdf4' : '#fef2f2',
                  border: `1px solid ${toast.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
                  color: toast.type === 'success' ? '#166534' : '#991b1b',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>{toast.type === 'success' ? '✓' : '!'}</span>
                {toast.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0 }}
              />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: '#4a3325', marginBottom: '0.375rem' }}
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    style={inputStyle('nombre')}
                    onFocus={(e) => (e.target.style.borderColor = '#c9a668')}
                    onBlur={(e) => (e.target.style.borderColor = errors.nombre ? '#ef4444' : '#e8d5b8')}
                  />
                  {errors.nombre && (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#ef4444', margin: '0.25rem 0 0' }}>
                      {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: '#4a3325', marginBottom: '0.375rem' }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    style={inputStyle('email')}
                    onFocus={(e) => (e.target.style.borderColor = '#c9a668')}
                    onBlur={(e) => (e.target.style.borderColor = errors.email ? '#ef4444' : '#e8d5b8')}
                  />
                  {errors.email && (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#ef4444', margin: '0.25rem 0 0' }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Teléfono */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="telefono"
                  style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: '#4a3325', marginBottom: '0.375rem' }}
                >
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+1 809-000-0000"
                  autoComplete="tel"
                  style={inputStyle('telefono')}
                  onFocus={(e) => (e.target.style.borderColor = '#c9a668')}
                  onBlur={(e) => (e.target.style.borderColor = '#e8d5b8')}
                />
              </div>

              {/* Servicio */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="servicio"
                  style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: '#4a3325', marginBottom: '0.375rem' }}
                >
                  Servicio de interés *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  style={{ ...inputStyle('servicio'), cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = '#c9a668')}
                  onBlur={(e) => (e.target.style.borderColor = errors.servicio ? '#ef4444' : '#e8d5b8')}
                >
                  <option value="">Selecciona una opción</option>
                  {SERVICIOS_OPTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.servicio && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#ef4444', margin: '0.25rem 0 0' }}>
                    {errors.servicio}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.375rem' }}>
                  <label
                    htmlFor="mensaje"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: '#4a3325' }}
                  >
                    Mensaje *
                  </label>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: form.mensaje.length > 450 ? '#ef4444' : '#a08060' }}>
                    {form.mensaje.length}/500
                  </span>
                </div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  placeholder="Cuéntame sobre el vestido que deseas, la ocasión, tallas, colores preferidos..."
                  style={{ ...inputStyle('mensaje'), resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => (e.target.style.borderColor = '#c9a668')}
                  onBlur={(e) => (e.target.style.borderColor = errors.mensaje ? '#ef4444' : '#e8d5b8')}
                />
                {errors.mensaje && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#ef4444', margin: '0.25rem 0 0' }}>
                    {errors.mensaje}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: loading
                    ? 'rgba(201,166,104,0.6)'
                    : 'linear-gradient(135deg,#c9a668,#a07840)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.975rem',
                  letterSpacing: '0.04em',
                  border: 'none',
                  borderRadius: '100px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.625rem',
                  transition: 'opacity 0.2s',
                  boxShadow: '0 4px 16px rgba(201,166,104,0.3)',
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        width: '1rem',
                        height: '1rem',
                        border: '2px solid rgba(255,255,255,0.4)',
                        borderTop: '2px solid #fff',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                        display: 'inline-block',
                      }}
                    />
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje ✦'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          #contacto > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          #contacto form > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
