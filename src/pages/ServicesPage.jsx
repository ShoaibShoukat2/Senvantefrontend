import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { services } from '../data'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Six practices.
            <br />
            One <em>standard.</em>
          </>
        }
        lede="Each practice is a page of its own: what is included, who it is for, and how the work runs. Start with the one that matches the job."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section tight" aria-labelledby="services-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">The work</p>
            <h2 id="services-title">
              Open a practice.
              <br />
              See the <em>fit.</em>
            </h2>
          </header>
          <div className="service-catalog">
            {services.map((service) => (
              <Link key={service.slug} className="service-card" to={`/services/${service.slug}`}>
                <div className="service-card-top">
                  <span className="service-card-id">{service.id}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-card-summary">{service.summary}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="service-card-foot">
                  <p className="service-card-fit">
                    <strong>Best fit</strong>
                    {service.fit}
                  </p>
                  <em>View service</em>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Not sure which practice fits?" text="A short note is enough. We reply with the practice, the first step, and whether Senvante is the right company for it." />
    </>
  )
}
