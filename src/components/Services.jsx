import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../data'
import Reveal from './Reveal'

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id)
  const active = services.find((item) => item.id === activeId) ?? services[0]

  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>
              A company that can hold
              <br />
              the whole <em>product.</em>
            </h2>
          </header>
        </Reveal>

        <div className="services">
          <div className="service-list" role="tablist" aria-label="Services">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={active.id === service.id}
                aria-controls="service-panel"
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

          <div
            className="service-panel"
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
