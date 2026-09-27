import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { systems } from '../data'
import Reveal from './Reveal'

const bars = [46, 72, 58, 88, 64, 96, 70, 82]

export default function Work() {
  const [activeId, setActiveId] = useState(systems[0].id)
  const active = systems.find((item) => item.id === activeId) ?? systems[0]

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">The work</p>
            <h2>
              Systems we like
              <br />
              to <em>build.</em>
            </h2>
            <p className="section-note">
              Interfaces for operations, phones, and the public web — designed as complete products.
            </p>
          </header>
        </Reveal>

        <div className="work-layout">
          <div className="work-switch" role="tablist" aria-label="Product systems">
            {systems.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active.id === item.id}
                className={active.id === item.id ? 'active' : ''}
                onClick={() => setActiveId(item.id)}
              >
                <span>{item.kicker}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </button>
            ))}
          </div>

          <div className="stage" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="stage-body"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Mock type={active.visual} />
                <ul className="stage-points">
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

function Mock({ type }) {
  if (type === 'mobile') {
    return (
      <div className="mock mock-mobile">
        <div className="phone">
          <div className="phone-top">
            <i />
            <b>Today</b>
          </div>
          <p>Good morning</p>
          <h4>One clear next step.</h4>
          <div className="phone-card">
            <span>Review</span>
            <strong>Launch checklist</strong>
          </div>
          <div className="phone-card alt">
            <span>Team</span>
            <strong>3 notes waiting</strong>
          </div>
          <div className="phone-btn">Continue</div>
        </div>
      </div>
    )
  }

  if (type === 'site') {
    return (
      <div className="mock mock-site">
        <div className="browser">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <em>senvante.com</em>
          </div>
          <div className="site-hero">
            <small>Software company</small>
            <strong>
              Presence,
              <br />
              engineered.
            </strong>
            <div className="site-pills">
              <span>Design</span>
              <span>Build</span>
              <span>Stay</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mock mock-console">
      <aside>
        <i className="on" />
        <i />
        <i />
        <i />
      </aside>
      <div className="console-main">
        <div className="console-top">
          <strong>Live operations</strong>
          <em>Stable</em>
        </div>
        <div className="console-stats">
          <div>
            <span>Active</span>
            <b>128</b>
          </div>
          <div>
            <span>Queues</span>
            <b>04</b>
          </div>
          <div>
            <span>Latency</span>
            <b>42ms</b>
          </div>
        </div>
        <div className="bars" aria-hidden="true">
          {bars.map((height, index) => (
            <span key={index} style={{ '--h': `${height}%`, animationDelay: `${index * 0.06}s` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
