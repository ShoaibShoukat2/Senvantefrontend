import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home', end: true, icon: HomeIcon },
  { to: '/services', label: 'Services', icon: GridIcon },
  { to: '/industries', label: 'Industries', icon: LayersIcon },
  { to: '/contact', label: 'Talk', icon: TalkIcon },
]

export default function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Mobile">
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'active' : '')}>
          <item.icon />
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 8.2 9 3l6 5.2V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.2Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="2.5" y="2.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10.5" y="2.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2.5" y="10.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10.5" y="10.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 2.5 15.5 6 9 9.5 2.5 6 9 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 9 9 12.5 15.5 9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 12 9 15.5 15.5 12" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function TalkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3.5 4.5h11v7.2H8.2L5 14.2v-2.5H3.5V4.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
