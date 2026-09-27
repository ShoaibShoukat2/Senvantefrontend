import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function PageHero({ eyebrow, title, lede, crumbs = [], children }) {
  const label = crumbs[crumbs.length - 1]?.label

  useEffect(() => {
    document.title = label ? `${label} — Senvante` : 'Senvante — Software Company'
  }, [label])
  return (
    <header className="page-hero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label}>
              <i aria-hidden="true">/</i>
              {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            </span>
          ))}
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </header>
  )
}
