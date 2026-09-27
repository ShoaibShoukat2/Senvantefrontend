import { principles } from '../data'
import Reveal from './Reveal'

export default function Studio() {
  return (
    <section className="section studio" id="studio">
      <div className="wrap studio-grid">
        <Reveal>
          <p className="eyebrow">The studio</p>
          <h2>
            Named for service.
            <br />
            Built for <em>craft.</em>
          </h2>
          <p className="lede studio-lede">
            The ribbon in our mark is a single gesture — continuous, precise, and in motion. That is how
            the work should feel, from the first screen to the release after launch.
          </p>
          <a className="btn btn-ghost" href="#contact">
            Work with Senvante
          </a>
        </Reveal>

        <div className="principles">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
          <blockquote>
            “One line. The product should feel the same — continuous, and impossible to mistake for anyone
            else.”
          </blockquote>
        </div>
      </div>
    </section>
  )
}
