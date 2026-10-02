import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { industries, services } from '../data'
import ThemeSwitch from './ThemeSwitch'
import Wordmark from './Wordmark'

const menus = [
  {
    id: 'services',
    label: 'Services',
    to: '/services',
    all: 'All services',
    wide: true,
    match: (path) => path.startsWith('/services'),
    items: services.map((service) => ({
      to: `/services/${service.slug}`,
      title: service.title,
      text: service.summary,
    })),
  },
  {
    id: 'solutions',
    label: 'Solutions',
    to: '/industries',
    all: 'All solutions',
    wide: true,
    match: (path) => path.startsWith('/industries'),
    items: industries.map((industry) => ({
      to: `/industries/${industry.slug}`,
      title: industry.title,
      text: industry.summary,
    })),
  },
  {
    id: 'company',
    label: 'Company',
    to: '/company',
    all: 'About the company',
    wide: false,
    match: (path) => path.startsWith('/company') || path.startsWith('/approach') || path === '/contact',
    items: [
      {
        to: '/company',
        title: 'About',
        text: 'The company, the mark, and the standard we hold the work to.',
      },
      {
        to: '/approach',
        title: 'How we work',
        text: 'Listen, shape, build, and stay — a delivery path you can follow.',
      },
      {
        to: '/contact',
        title: 'Contact',
        text: 'Tell us what the business needs. We reply with a clear next step.',
      },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null)
  const [section, setSection] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMenu(null)
    setSection(null)
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
      if (event.key === 'Escape') {
        setOpen(false)
        setMenu(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={scrolled || open || menu ? 'nav scrolled' : 'nav'}>
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Senvante" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img src="/senvante-logo.png" alt="" />
          </span>
          <Wordmark />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {menus.map((item) => (
            <div
              key={item.id}
              className={menu === item.id ? 'nav-item open' : 'nav-item'}
              onMouseEnter={() => setMenu(item.id)}
              onMouseLeave={() => setMenu(null)}
              onFocus={() => setMenu(item.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setMenu(null)
              }}
            >
              <NavLink
                to={item.to}
                className={item.match(location.pathname) ? 'active' : ''}
                aria-expanded={menu === item.id}
                aria-haspopup="true"
                onClick={(event) => {
                  const coarse = window.matchMedia('(hover: none)').matches
                  if (coarse && menu !== item.id) {
                    event.preventDefault()
                    setMenu(item.id)
                  }
                }}
              >
                {item.label}
                <Chevron />
              </NavLink>
              <div className={item.wide ? 'mega' : 'mega mega-end'}>
                <div className="mega-card">
                  <div className="mega-grid">
                    {item.items.map((link) => (
                      <Link key={link.to} to={link.to}>
                        <strong>{link.title}</strong>
                        <span>{link.text}</span>
                      </Link>
                    ))}
                  </div>
                  <Link className="mega-all" to={item.to}>
                    {item.all}
                    <Arrow />
                  </Link>
                </div>
              </div>
            </div>
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
              {menus.map((item) => {
                const expanded = section === item.id
                return (
                  <div key={item.id} className="panel-group">
                    <button
                      type="button"
                      className="panel-head"
                      aria-expanded={expanded}
                      onClick={() => setSection(expanded ? null : item.id)}
                    >
                      {item.label}
                      <Chevron />
                    </button>
                    {expanded && (
                      <div className="panel-items">
                        {item.items.map((link) => (
                          <Link key={link.to} to={link.to}>
                            <strong>{link.title}</strong>
                            <span>{link.text}</span>
                          </Link>
                        ))}
                        <Link className="panel-all" to={item.to}>
                          {item.all}
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
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

function Chevron() {
  return (
    <svg className="nav-chev" width="10" height="10" viewBox="0 0 12 8" aria-hidden="true">
      <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
