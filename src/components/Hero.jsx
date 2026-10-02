import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { heroMeta } from '../data'
import Wordmark from './Wordmark'

const ease = [0.22, 1, 0.36, 1]
const DURATION = 6800

const slides = [
  {
    id: 'trust',
    eyebrow: 'Software company',
    lead: 'Software your',
    rest: 'business can ',
    em: 'trust.',
    lede: 'Senvante designs, engineers, and supports the platforms an organization depends on — with a named team and a delivery path you can see.',
    primary: { to: '/contact', label: 'Talk to us' },
    secondary: { to: '/services', label: 'Explore services' },
    tab: 'Trust',
    visual: 'mark',
  },
  {
    id: 'platforms',
    eyebrow: 'Web platforms',
    lead: 'Sites and products',
    rest: 'that stay ',
    em: 'fast.',
    lede: 'From the public website to the signed-in application, we build web platforms a company can grow without starting over.',
    primary: { to: '/services/web-platforms', label: 'See platforms' },
    secondary: { to: '/contact', label: 'Talk to us' },
    tab: 'Platforms',
    visual: 'board',
  },
  {
    id: 'products',
    eyebrow: 'Product engineering',
    lead: 'Built for the work',
    rest: 'people actually ',
    em: 'do.',
    lede: 'Mobile and web products shaped around one clear job — then the accounts, alerts, and care that keep them in daily use.',
    primary: { to: '/services/mobile-apps', label: 'See mobile' },
    secondary: { to: '/services/product-design', label: 'See design' },
    tab: 'Products',
    visual: 'stack',
  },
  {
    id: 'delivery',
    eyebrow: 'Delivery',
    lead: 'A team that stays',
    rest: 'after ',
    em: 'launch.',
    lede: 'You see working software on a regular cadence. Release is a milestone. The people who built it can stay on the product.',
    primary: { to: '/approach', label: 'How we work' },
    secondary: { to: '/company', label: 'The company' },
    tab: 'Delivery',
    visual: 'rail',
  },
]

export default function Hero({ ready }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const meter = useRef(null)
  const pausedRef = useRef(false)
  const startX = useRef(null)
  const count = slides.length
  const slide = slides[index]

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    if (!ready || reduce) return undefined
    let frame = 0
    let acc = 0
    let last = performance.now()

    const tick = (now) => {
      if (!pausedRef.current && !document.hidden) acc += now - last
      last = now
      if (acc >= DURATION) {
        acc = 0
        setIndex((value) => (value + 1) % count)
      }
      if (meter.current) {
        meter.current.style.transform = `scaleX(${Math.min(acc / DURATION, 1)})`
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [ready, reduce, index, count])

  const go = (next) => setIndex(((next % count) + count) % count)

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    startX.current = event.clientX
  }

  const onPointerUp = (event) => {
    if (startX.current == null) return
    const delta = event.clientX - startX.current
    startX.current = null
    if (delta > 56) go(index - 1)
    if (delta < -56) go(index + 1)
  }

  return (
    <section
      className={paused ? 'hero hero-slider is-paused' : 'hero hero-slider'}
      id="top"
      aria-roledescription="carousel"
      aria-label="Senvante"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="grid" />
        <div className={`orb orb-a slide-${slide.id}`} />
        <div className="orb orb-b" />
      </div>

      <div
        className="wrap hero-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null
        }}
      >
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {count}. {slide.eyebrow}. {slide.lead} {slide.rest}
          {slide.em}
        </p>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            className="hero-inner hero-slide"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="hero-copy">
              <p className="eyebrow">
                <i className="pulse" /> {slide.eyebrow}
              </p>
              <h1>
                {slide.lead}
                <br />
                {slide.rest}
                <em>{slide.em}</em>
              </h1>
              <p className="lede">{slide.lede}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to={slide.primary.to}>
                  {slide.primary.label}
                  <Arrow />
                </Link>
                <Link className="btn btn-ghost" to={slide.secondary.to}>
                  {slide.secondary.label}
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              {slide.visual === 'mark' && <MarkVisual />}
              {slide.visual === 'board' && <BoardVisual />}
              {slide.visual === 'stack' && <StackVisual />}
              {slide.visual === 'rail' && <RailVisual />}
            </div>

            {slide.visual === 'mark' && (
              <div className="mobile-pills" aria-hidden="true">
                <span>Design</span>
                <span>Build</span>
                <span>Scale</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="slider-ui">
          <button type="button" className="slider-arrow" aria-label="Previous slide" onClick={() => go(index - 1)}>
            <ArrowLeft />
          </button>
          <div className="slider-tabs" role="tablist" aria-label="Featured">
            {slides.map((item, itemIndex) => {
              const selected = itemIndex === index
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className="slider-tab"
                  aria-selected={selected}
                  aria-label={`${item.tab}, slide ${itemIndex + 1} of ${count}`}
                  onClick={() => go(itemIndex)}
                >
                  <small>0{itemIndex + 1}</small>
                  <strong>{item.tab}</strong>
                  {selected && <i className="meter" ref={meter} />}
                </button>
              )
            })}
          </div>
          <button type="button" className="slider-arrow" aria-label="Next slide" onClick={() => go(index + 1)}>
            <Arrow />
          </button>
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

function MarkVisual() {
  return (
    <div className="hero-mark" aria-hidden="true">
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
    </div>
  )
}

function BoardVisual() {
  const bars = ['42%', '68%', '54%', '86%', '63%', '91%', '74%']
  return (
    <div className="slide-frame" aria-hidden="true">
      <div className="slide-kicker">
        <i />
        Platform view
      </div>
      <div className="board-stats">
        <div>
          <small>Latency</small>
          <strong>42ms</strong>
        </div>
        <div>
          <small>Builds</small>
          <strong>Weekly</strong>
        </div>
        <div>
          <small>Coverage</small>
          <strong>Clear</strong>
        </div>
      </div>
      <div className="board-bars">
        {bars.map((height) => (
          <span key={height} style={{ '--h': height }} />
        ))}
      </div>
    </div>
  )
}

function StackVisual() {
  const rows = [
    ['01', 'Design', 'Flows people can learn'],
    ['02', 'Build', 'Web and mobile, one system'],
    ['03', 'Care', 'Accounts, alerts, support'],
  ]
  return (
    <div className="slide-stack" aria-hidden="true">
      {rows.map(([n, title, text]) => (
        <article key={n}>
          <span>{n}</span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function RailVisual() {
  const steps = [
    ['01', 'Discover'],
    ['02', 'Build'],
    ['03', 'Release'],
    ['04', 'Stay'],
  ]
  return (
    <ol className="slide-rail" aria-hidden="true">
      {steps.map(([n, title]) => (
        <li key={n}>
          <span>{n}</span>
          <strong>{title}</strong>
        </li>
      ))}
    </ol>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13 8H3M7 4 3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
