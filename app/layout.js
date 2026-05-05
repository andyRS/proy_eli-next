import { Playfair_Display, Inter } from 'next/font/google';
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

export const metadata = {
  title: 'Elizabeth Mendez — Diseñadora de Modas | Santo Domingo, RD',
  description:
    'Elizabeth Mendez, Licenciada en Diseño de Modas especializada en vestidos únicos para niñas. +15 años de experiencia, diseños personalizados y confección artesanal premium en Santo Domingo.',
  keywords:
    'vestidos niñas santo domingo, diseñadora modas, vestidos personalizados, ropa infantil lujo, vestidos fiesta niñas',
  authors: [{ name: 'Elizabeth Mendez' }],
  openGraph: {
    title: 'Elizabeth Mendez — Diseñadora de Modas',
    description: 'Vestidos únicos y personalizados para niñas. Alta costura en Santo Domingo, RD.',
    type: 'website',
    locale: 'es_DO',
  },
  icons: { icon: '/Imagenes/favicon_transparente.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
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
