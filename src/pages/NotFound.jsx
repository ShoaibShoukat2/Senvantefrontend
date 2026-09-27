import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          This page is not <em>here.</em>
        </>
      }
      lede="The address may have changed. The company is still on the pages below."
      crumbs={[{ label: 'Not found' }]}
    >
      <div className="hero-actions not-found-actions">
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
        <Link className="btn btn-ghost" to="/contact">
          Talk to us
        </Link>
      </div>
    </PageHero>
  )
}
