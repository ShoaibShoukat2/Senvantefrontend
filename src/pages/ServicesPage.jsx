import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { services } from '../data'

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0].id)
  const active = services.find((item) => item.id === activeId) ?? services[0]

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            A company that can hold
            <br />
            the whole <em>product.</em>
          </>
        }
        lede="Six practices, one standard. Open any service to see what is included, who it is for, and how an engagement runs."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section tight">
        <div className="wrap services">
          <div className="service-list" role="tablist" aria-label="Services">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={active.id === service.id}
                className={active.id === service.id ? 'service-btn active' : 'service-btn'}
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
              >
                <span className="idx">{service.id}</span>
                <span>{service.title}</span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="service-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="panel-index">{active.id}</p>
                <h3>{active.title}</h3>
                <p>{active.text}</p>
                <ul>
                  {active.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary panel-link" to={`/services/${active.slug}`}>
                  Open this service
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
