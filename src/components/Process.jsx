import { steps } from '../data'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">Method</p>
            <h2>
              Four movements.
              <br />
              No <em>theatre.</em>
            </h2>
          </header>
        </Reveal>

        <div className="steps">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <article className="step">
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
