import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { getIndustry, getService } from '../data'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = getIndustry(slug)

  if (!industry) return <Navigate to="/industries" replace />

  const linked = industry.services.map((item) => getService(item)).filter(Boolean)

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={
          <>
            {industry.title} <em>software.</em>
          </>
        }
        lede={industry.text}
        crumbs={[{ label: 'Industries', to: '/industries' }, { label: industry.title }]}
      />

      <section className="section tight">
        <div className="wrap detail-grid">
          <article className="detail-card">
            <h2>What the sector is carrying</h2>
            <ul className="check-list">
              {industry.pressures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <h2>What we build</h2>
            <ul className="check-list">
              {industry.builds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Practices</p>
            <h2>
              Services that usually <em>travel</em> with this work.
            </h2>
          </header>
          <div className="card-grid three">
            {linked.map((service) => (
              <Link key={service.slug} className="offer-card" to={`/services/${service.slug}`}>
                <span>{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <em>View service</em>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Planning software for ${industry.title.toLowerCase()}?`} />
    </>
  )
}
