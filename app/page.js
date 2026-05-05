import Hero from '@/components/Hero';
import Galeria from '@/components/galeria/Galeria';
import SobreMi from '@/components/SobreMi';
import Servicios from '@/components/Servicios';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Galeria />
      <SobreMi />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Footer />
    </>
  );
}
