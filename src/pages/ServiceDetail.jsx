import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { getService, industries, services } from '../data'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = industries.filter((industry) => industry.services.includes(service.slug))
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.id}`}
        title={
          <>
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <em>{service.title.split(' ').slice(-1)}</em>
          </>
        }
        lede={service.text}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="section tight">
        <div className="wrap detail-grid">
          <article className="detail-card">
            <h2>What you can expect</h2>
            <ul className="check-list">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <h2>Included</h2>
            <ul className="check-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="wrap fit-line">
          <p>
            <strong>Best fit</strong> {service.fit}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section band">
          <div className="wrap">
            <header className="section-head">
              <p className="eyebrow">Industries</p>
              <h2>
                Where this service <em>lands.</em>
              </h2>
            </header>
            <div className="industry-grid">
              {related.map((industry) => (
                <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                  <h3>{industry.title}</h3>
                  <p>{industry.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Also from Senvante</p>
            <h2>Related services</h2>
          </header>
          <div className="card-grid three">
            {others.map((item) => (
              <Link key={item.slug} className="offer-card" to={`/services/${item.slug}`}>
                <span>{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <em>View service</em>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Talk to us about ${service.title.toLowerCase()}.`} />
    </>
  )
}
