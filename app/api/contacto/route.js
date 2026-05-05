import { NextResponse } from 'next/server'

// Rate limiting — per IP, max 3 requests per 10 minutes
const rateMap = new Map()
function isRateLimited(ip) {
  const now = Date.now()
  const window = 10 * 60 * 1000 // 10 min
  const entry = rateMap.get(ip) || { count: 0, start: now }
  if (now - entry.start > window) {
    rateMap.set(ip, { count: 1, start: now })
    return false
  }
  if (entry.count >= 3) return true
  rateMap.set(ip, { count: entry.count + 1, start: entry.start })
  return false
}

export async function POST(request) {
  try {
    // Rate limit by IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor espera unos minutos.' },
        { status: 429 }
      )
    }

    const data = await request.json()
    const { nombre, email, telefono, servicio, mensaje, website } = data

    // Honeypot — bot protection
    if (website) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    // Validations
    if (!nombre || nombre.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre inválido' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (!mensaje || mensaje.trim().length < 10) {
      return NextResponse.json({ error: 'El mensaje debe tener al menos 10 caracteres' }, { status: 400 })
    }

    const nombreClean = nombre.trim()
    const mensajeClean = mensaje.trim()

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'Elizabeth Mendez Web <onboarding@resend.dev>',
        to: ['elizabethmendezp18@gmail.com'],
        replyTo: email,
        subject: `Nueva consulta de ${nombreClean} — ${servicio || 'Sin especificar'}`,
        html: `
          <!DOCTYPE html>
          <html lang="es">
          <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
          <body style="margin:0;padding:0;background:#e8f5ee;font-family:'Segoe UI',sans-serif;">
            <div style="max-width:600px;margin:2rem auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
              <div style="background:linear-gradient(135deg,#2d6a4f,#1b4332);padding:2rem 2.5rem;">
                <h1 style="margin:0;color:#fff;font-size:1.5rem;font-weight:700;letter-spacing:0.05em;">
                  ✉ Nueva consulta desde tu portfolio
                </h1>
              </div>
              <div style="padding:2rem 2.5rem;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#5a7a68;font-size:0.85rem;width:120px;">Nombre</td>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#0d2b1e;font-weight:600;">${nombreClean}</td>
                  </tr>
                  <tr>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#5a7a68;font-size:0.85rem;">Email</td>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;"><a href="mailto:${email}" style="color:#2d6a4f;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#5a7a68;font-size:0.85rem;">Teléfono</td>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#0d2b1e;">${telefono || 'No proporcionado'}</td>
                  </tr>
                  <tr>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#5a7a68;font-size:0.85rem;">Servicio</td>
                    <td style="padding:0.75rem 0;border-bottom:1px solid #c8e6d4;color:#0d2b1e;font-weight:600;">${servicio || 'No especificado'}</td>
                  </tr>
                </table>
                <div style="margin-top:1.5rem;">
                  <p style="margin:0 0 0.5rem;color:#5a7a68;font-size:0.85rem;">Mensaje</p>
                  <div style="background:#eef7f1;border-radius:12px;padding:1.25rem;color:#0d2b1e;line-height:1.7;font-size:0.95rem;">
                    ${mensajeClean.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <div style="margin-top:2rem;text-align:center;">
                  <a href="mailto:${email}" style="display:inline-block;padding:0.75rem 2rem;background:linear-gradient(135deg,#2d6a4f,#1b4332);color:#fff;border-radius:100px;text-decoration:none;font-weight:600;font-size:0.9rem;">
                    Responder a ${nombreClean}
                  </a>
                </div>
              </div>
              <div style="padding:1rem 2.5rem;background:#eef7f1;text-align:center;color:#5a7a68;font-size:0.8rem;">
                Enviado desde elizabethmendez.com
              </div>
            </div>
          </body>
          </html>
        `,
      })
    } else {
      // Log to Vercel function logs if no key configured
      console.log('=== Nueva consulta ===')
      console.log(`Nombre: ${nombreClean} | Email: ${email} | Tel: ${telefono || 'N/A'} | Servicio: ${servicio || 'N/A'}`)
      console.log(`Mensaje: ${mensajeClean}`)
    }

    return NextResponse.json({
      ok: true,
      message: '¡Mensaje enviado! Me pondré en contacto contigo muy pronto.',
    })
  } catch (err) {
    console.error('Error en /api/contacto:', err)
    return NextResponse.json({ error: 'Error del servidor. Intenta nuevamente.' }, { status: 500 })
  }
}
