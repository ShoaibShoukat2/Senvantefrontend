import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { heroMeta } from '../data'
import Wordmark from './Wordmark'

const ease = [0.22, 1, 0.36, 1]

export default function Hero({ ready }) {
  const reduce = useReducedMotion()
  const hidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
  const shown = { opacity: 1, y: 0 }

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
      </div>

      <div className="wrap hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
          }}
        >
          <motion.p className="eyebrow" variants={{ hidden, show: shown }} transition={{ duration: 0.7, ease }}>
            <i className="pulse" /> Software company
          </motion.p>
          <motion.h1 variants={{ hidden, show: shown }} transition={{ duration: 0.8, ease }}>
            Software your
            <br />
            business can <em>trust.</em>
          </motion.h1>
          <motion.p className="lede" variants={{ hidden, show: shown }} transition={{ duration: 0.8, ease }}>
            Senvante is a software company. We design, engineer, and support the platforms, applications,
            and systems an organization depends on — with a named team and a delivery path you can see.
          </motion.p>
          <motion.div className="hero-actions" variants={{ hidden, show: shown }} transition={{ duration: 0.8, ease }}>
            <Link className="btn btn-primary" to="/contact">
              Talk to us
              <Arrow />
            </Link>
            <Link className="btn btn-ghost" to="/services">
              Explore services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-mark"
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
        >
          <div className="ring ring-spin" />
          <div className="ring ring-dashed" />
          <div className="ring ring-outer" />
          <div className="orbit o1">
            <div className="orbit-slot">
              <span>Design</span>
            </div>
          </div>
          <div className="orbit o2">
            <div className="orbit-slot">
              <span>Build</span>
            </div>
          </div>
          <div className="orbit o3">
            <div className="orbit-slot">
              <span>Scale</span>
            </div>
          </div>
          <div className="mark">
            <img src="/senvante-logo.png" alt="" />
            <Wordmark />
          </div>
        </motion.div>
        <div className="mobile-pills" aria-hidden="true">
          <span>Design</span>
          <span>Build</span>
          <span>Scale</span>
        </div>
      </div>

      <div className="hero-foot">
        <ul className="wrap">
          {heroMeta.map((item) => (
            <li key={item.n}>
              <Link to={item.to}>
                <span>{item.n}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
