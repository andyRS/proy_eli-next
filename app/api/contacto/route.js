import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    const { nombre, email, telefono, servicio, mensaje, website } = data

    // Honeypot — bot protection
    if (website) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    // Basic validations
    if (!nombre || nombre.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre inválido' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (!mensaje || mensaje.trim().length < 10) {
      return NextResponse.json({ error: 'Mensaje muy corto' }, { status: 400 })
    }

    // Log the inquiry (console visible in Vercel Function Logs)
    console.log('=== Nueva consulta desde elizabethmendez.com ===')
    console.log('Nombre:', nombre.trim())
    console.log('Email:', email)
    console.log('Teléfono:', telefono || 'No proporcionado')
    console.log('Servicio:', servicio || 'No especificado')
    console.log('Mensaje:', mensaje.trim())
    console.log('================================================')

    // TODO: Integrar Resend para envío real de email:
    //
    // 1. npm install resend
    // 2. Agregar RESEND_API_KEY en .env.local y en Vercel dashboard
    // 3. Descomentar el bloque de abajo:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'web@elizabethmendez.com',
    //   to: 'elizabethmendezp18@gmail.com',
    //   subject: `Nueva consulta de ${nombre} — ${servicio || 'Sin especificar'}`,
    //   html: `
    //     <h2>Nueva consulta desde tu portfolio</h2>
    //     <p><strong>Nombre:</strong> ${nombre}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
    //     <p><strong>Servicio:</strong> ${servicio || 'No especificado'}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${mensaje.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    return NextResponse.json({
      ok: true,
      message: '¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.',
    })
  } catch (err) {
    console.error('Error en /api/contacto:', err)
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 })
  }
}
