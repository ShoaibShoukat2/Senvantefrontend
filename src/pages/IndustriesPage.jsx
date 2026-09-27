import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { industries } from '../data'

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Software shaped for
            <br />
            the <em>sector.</em>
          </>
        }
        lede="A hospital, a carrier, and a retailer do not need the same product. These are the industries Senvante builds for, and the kind of software each one asks of a company."
        crumbs={[{ label: 'Industries' }]}
      />
      <section className="section tight">
        <div className="wrap industry-grid large">
          {industries.map((industry, index) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`}>
              <span>0{index + 1}</span>
              <h3>{industry.title}</h3>
              <p>{industry.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
