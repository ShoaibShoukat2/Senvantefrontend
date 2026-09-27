import { Link } from 'react-router-dom'

export default function CtaBand({
  title = 'Tell us what the business needs to run.',
  text = 'A short note is enough. We reply with a clear next step — fit, scope, and how a first conversation would run.',
}) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <p className="eyebrow">Senvante</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn-primary" to="/contact">
          Talk to us
        </Link>
      </div>
    </section>
  )
}
