import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Preloader from './components/Preloader'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import IndustriesPage from './pages/IndustriesPage'
import IndustryDetail from './pages/IndustryDetail'
import ApproachPage from './pages/ApproachPage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  const [ready, setReady] = useState(() => sessionStorage.getItem('sv-intro') === '1')
  const glow = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const el = glow.current
    if (!fine || !el) return undefined

    let frame = 0
    let x = 0
    let y = 0

    const move = (event) => {
      x = event.clientX
      y = event.clientY
      el.hidden = false
      if (!frame) {
        frame = requestAnimationFrame(() => {
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
          frame = 0
        })
      }
    }

    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <BrowserRouter>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <motion.div className="progress" style={{ scaleX }} />
      <div ref={glow} className="glow" hidden />
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <ScrollToTop />
      <div id="content">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home ready={ready} />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="industries" element={<IndustriesPage />} />
            <Route path="industries/:slug" element={<IndustryDetail />} />
            <Route path="approach" element={<ApproachPage />} />
            <Route path="company" element={<CompanyPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
