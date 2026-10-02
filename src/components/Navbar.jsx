import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { services } from '../data'
import ThemeSwitch from './ThemeSwitch'
import Wordmark from './Wordmark'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/approach', label: 'Approach' },
  { to: '/company', label: 'Company' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('menu-open', open)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={scrolled || open ? 'nav scrolled' : 'nav'}>
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Senvante" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img src="/senvante-logo.png" alt="" />
          </span>
          <Wordmark />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <div className="nav-item">
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Services
            </NavLink>
            <div className="nav-menu">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`}>
                  <span>{service.id}</span>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          {links.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <ThemeSwitch />

        <Link className="btn btn-primary nav-cta" to="/contact">
          Talk to us
        </Link>

        <button
          type="button"
          className={open ? 'nav-toggle open' : 'nav-toggle'}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-panel"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
          >
            <div className="panel-scroll">
              {links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
              <p className="panel-label">Swipe a service</p>
              <div className="panel-services">
                {services.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="panel-cta">
              <Link className="btn btn-primary" to="/contact">
                Talk to us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
