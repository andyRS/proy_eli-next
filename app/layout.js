import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ui/ScrollProgress';
import WhatsAppBtn from '@/components/ui/WhatsAppBtn';
import ScrollTop from '@/components/ui/ScrollTop';
import StickyCTA from '@/components/ui/StickyCTA';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = 'https://proy-eli-next.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Elizabeth Mendez — Diseñadora de Modas | Santo Domingo, RD',
  description:
    'Elizabeth Mendez, Licenciada en Diseño de Modas especializada en vestidos únicos para niñas. +15 años de experiencia, diseños personalizados y confección artesanal premium en Santo Domingo.',
  keywords:
    'vestidos niñas santo domingo, diseñadora modas, vestidos personalizados, ropa infantil lujo, vestidos fiesta niñas, vestidos comunion, vestidos cumpleanos niñas, alta costura RD',
  authors: [{ name: 'Elizabeth Mendez' }],
  openGraph: {
    title: 'Elizabeth Mendez — Diseñadora de Modas',
    description: 'Vestidos únicos y personalizados para niñas. Alta costura en Santo Domingo, RD.',
    type: 'website',
    locale: 'es_DO',
    url: SITE_URL,
    siteName: 'Elizabeth Mendez Diseñadora',
    images: [
      {
        url: '/Imagenes/LcdaElizabeth.png',
        width: 1200,
        height: 630,
        alt: 'Elizabeth Mendez — Diseñadora de Modas en Santo Domingo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elizabeth Mendez — Diseñadora de Modas',
    description: 'Vestidos únicos y personalizados para niñas en Santo Domingo, RD.',
    images: ['/Imagenes/LcdaElizabeth.png'],
  },
  alternates: { canonical: SITE_URL },
  icons: { icon: '/Imagenes/favicon_transparente.ico' },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elizabeth Mendez — Diseñadora de Modas',
  description: 'Diseño y confección artesanal de vestidos únicos para niñas en Santo Domingo, RD.',
  url: SITE_URL,
  telephone: '+18492151118',
  email: 'elizabethmendezp18@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santo Domingo',
    addressCountry: 'DO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '18.4861',
    longitude: '-69.9312',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$$',
  image: `${SITE_URL}/Imagenes/LcdaElizabeth.png`,
  sameAs: ['https://github.com/andyRS/proy_eli-next'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <WhatsAppBtn />
        <ScrollTop />
        <StickyCTA />
      </body>
    </html>
  );
}
