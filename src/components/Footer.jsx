import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, industries, services } from '../data'
import Wordmark from './Wordmark'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="brand" aria-label="Senvante">
            <span className="brand-mark">
              <img src="/senvante-logo.png" alt="" />
            </span>
            <Wordmark />
          </Link>
          <p className="footer-blurb">
            Senvante is a software company. We design, engineer, and support products organizations rely on.
          </p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p className="footer-time">Your time {time}</p>
        </div>

        <nav aria-label="Company">
          <p>Company</p>
          <Link to="/company">About</Link>
          <Link to="/approach">Approach</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <nav aria-label="Services">
          <p>Services</p>
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </nav>

        <nav aria-label="Industries">
          <p>Industries</p>
          {industries.map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`}>
              {industry.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Senvante. All rights reserved.</p>
        <p>Software, designed and engineered.</p>
      </div>
    </footer>
  )
}
