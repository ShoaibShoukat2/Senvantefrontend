import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { practices, principles } from '../data'

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            Named for service.
            <br />
            Built as a <em>company.</em>
          </>
        }
        lede="Senvante is a software company. The ribbon in our mark is one continuous line — precise, and in motion. That is the standard we hold the work to: design, engineering, and the responsibility to stay."
        crumbs={[{ label: 'Company' }]}
      />

      <section className="section tight">
        <div className="wrap principles">
          {principles.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <blockquote>
            “One company should be able to explain the product, build it, and still know it a year later.”
          </blockquote>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">How we are organized</p>
            <h2>
              Four practices. <em>One</em> standard.
            </h2>
          </header>
          <div className="trust-grid">
            {practices.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="section-note company-note">
            Looking for the work itself? Start with <Link to="/services">services</Link> or the{' '}
            <Link to="/industries">industries</Link> we build for.
          </p>
        </div>
      </section>
      <CtaBand title="Work with Senvante." />
    </>
  )
}
