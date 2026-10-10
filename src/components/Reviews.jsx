import Reveal from './Reveal'
import { reviews } from '../data'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Person({ review }) {
  return (
    <figcaption className="review-person">
      <span className="review-avatar" aria-hidden="true">
        {initials(review.name)}
      </span>
      <span>
        <strong>{review.name}</strong>
        <span>
          {review.role} · {review.sector}
        </span>
      </span>
    </figcaption>
  )
}

export default function Reviews() {
  const [featured, ...rest] = reviews

  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <Reveal>
          <header className="section-head row-head">
            <div>
              <p className="eyebrow">Client reviews</p>
              <h2 id="reviews-title">
                Heard from the
                <br />
                people who <em>stayed.</em>
              </h2>
            </div>
            <p className="section-note">
              Short notes from teams that kept the same company past the first release.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <figure className="review-feature">
            <blockquote>
              <p>“{featured.quote}”</p>
            </blockquote>
            <Person review={featured} />
          </figure>
        </Reveal>

        <div className="review-grid">
          {rest.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <figure className="review-card">
                <blockquote>
                  <p>“{review.quote}”</p>
                </blockquote>
                <Person review={review} />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
