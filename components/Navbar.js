'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'galeria-vestidos', label: 'Vestidos' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <>
      <nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
        id="navbar"
      >
        <div className={`${styles.navInner} container`}>
          <Link href="#inicio" className={styles.logo} onClick={close}>
            <span className={styles.logoText}>Elizabeth Mendez</span>
          </Link>

          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <Link href={`#${id}`} onClick={close} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  )
}
