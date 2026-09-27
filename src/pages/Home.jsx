import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { services, industries, trust, steps } from '../data'

export default function Home({ ready }) {
  useEffect(() => {
    document.title = 'Senvante — Software Company'
  }, [])
  return (
    <>
      <Hero ready={ready} />
      <Marquee />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <header className="section-head">
              <p className="eyebrow">Services</p>
              <h2>
                One company for the
                <br />
                whole <em>product.</em>
              </h2>
              <p className="section-note">
                Design, engineering, cloud delivery, and a team that can stay. Each practice is a page of its own.
              </p>
            </header>
          </Reveal>
          <div className="card-grid">
            {services.map((service) => (
              <Link key={service.slug} className="offer-card" to={`/services/${service.slug}`}>
                <span>{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <em>View service</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <Reveal>
            <header className="section-head">
              <p className="eyebrow">Industries</p>
              <h2>
                Software for work
                <br />
                that is <em>specific.</em>
              </h2>
            </header>
          </Reveal>
          <div className="industry-grid">
            {industries.map((industry) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                <h3>{industry.title}</h3>
                <p>{industry.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <header className="section-head">
              <p className="eyebrow">Why Senvante</p>
              <h2>
                Built to be trusted
                <br />
                with the <em>work.</em>
              </h2>
            </header>
          </Reveal>
          <div className="trust-grid">
            {trust.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <Reveal>
            <header className="section-head row-head">
              <div>
                <p className="eyebrow">Approach</p>
                <h2>
                  A delivery path
                  <br />
                  you can <em>follow.</em>
                </h2>
              </div>
              <Link className="btn btn-ghost" to="/approach">
                How we work
              </Link>
            </header>
          </Reveal>
          <div className="steps home-steps">
            {steps.map((step) => (
              <article key={step.n} className="step">
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
