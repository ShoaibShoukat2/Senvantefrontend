import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, industries, services } from '../data'
import Wordmark from './Wordmark'

const points = ['One accountable company', 'Progress you can open', 'Support after launch']

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
      <div className="wrap">
        <div className="footer-panel">
          <div className="footer-intro">
            <div>
              <p className="eyebrow">Senvante</p>
              <h2 className="footer-title">
                Still here after
                <br />
                the <em>launch.</em>
              </h2>
            </div>
            <div className="footer-intro-side">
              <Link className="btn btn-primary" to="/contact">
                Talk to us
              </Link>
              <a className="footer-mail" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <p className="footer-time">
                <i aria-hidden="true" />
                <span>Your local time</span>
                <strong>{time}</strong>
              </p>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="brand" aria-label="Senvante">
                <span className="brand-mark">
                  <img src="/senvante-logo.png" alt="" />
                </span>
                <Wordmark />
              </Link>
              <p className="footer-blurb">
                Senvante is a software company. We design, engineer, and support products organizations rely on.
              </p>
              <ul className="footer-points">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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

            <nav aria-label="Solutions">
              <p>Solutions</p>
              {industries.map((industry) => (
                <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                  {industry.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-base">
            <p>© {new Date().getFullYear()} Senvante. All rights reserved.</p>
            <p>Design, engineering, and the responsibility to stay.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
