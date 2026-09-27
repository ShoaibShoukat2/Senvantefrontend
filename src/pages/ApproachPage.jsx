import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { steps } from '../data'

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title={
          <>
            Four movements.
            <br />
            No <em>theatre.</em>
          </>
        }
        lede="Senvante runs an engagement so a company can see the work, question it, and recognize the product when it arrives. Each stage leaves something you can keep."
        crumbs={[{ label: 'Approach' }]}
      />

      <section className="section tight">
        <div className="wrap approach-list">
          {steps.map((step) => (
            <article key={step.n}>
              <div>
                <span>{step.n}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
              <ul className="check-list">
                {step.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Accountability</p>
            <h2>
              How the company <em>stays</em> easy to work with.
            </h2>
          </div>
          <ul className="check-list plain">
            <li>A named group, not a rotating bench you have to retrain.</li>
            <li>Working software you can open, not a status that only lives in a slide.</li>
            <li>Decisions written down, so the reason survives the meeting.</li>
            <li>Handover that includes access, notes, and a path to keep going.</li>
          </ul>
        </div>
      </section>
      <CtaBand title="If the path fits, start the conversation." />
    </>
  )
}
