import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'

export default function Preloader({ onDone }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence
      onExitComplete={() => {
        sessionStorage.setItem('sv-intro', '1')
        onDone()
      }}
    >
      {show && (
        <motion.div
          className="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-mark">
            <img src="/senvante-logo.png" alt="" />
          </div>
          <Wordmark />
          <motion.div
            className="loader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
