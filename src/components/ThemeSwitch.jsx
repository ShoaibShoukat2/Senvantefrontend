import { useEffect, useState } from 'react'

const KEY = 'sv-theme'

function readTheme() {
  const value = document.documentElement.getAttribute('data-theme')
  return value === 'light' ? 'light' : 'dark'
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark'
  try {
    localStorage.setItem(KEY, theme)
  } catch {
    /* ignore private-mode storage failures */
  }
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f4f7f7' : '#050708')
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const choose = (next) => {
    setTheme(next)
    applyTheme(next)
  }

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      <button type="button" aria-pressed={theme === 'dark'} onClick={() => choose('dark')}>
        <Moon />
        <span>Dark</span>
      </button>
      <button type="button" aria-pressed={theme === 'light'} onClick={() => choose('light')}>
        <Sun />
        <span>White</span>
      </button>
    </div>
  )
}

function Moon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M7.2 1.2a5.2 5.2 0 1 0 5.6 6.4A4.3 4.3 0 0 1 7.2 1.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  )
}

function Sun() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M7 1.4v1.5M7 11.1v1.5M1.4 7h1.5M11.1 7h1.5M3 3l1.1 1.1M9.9 9.9 11 11M11 3 9.9 4.1M4.1 9.9 3 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}
