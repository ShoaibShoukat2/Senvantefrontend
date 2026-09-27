import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { company, projectTypes } from '../data'
import { submitInquiry } from '../api'
import Reveal from './Reveal'

const initial = {
  name: '',
  email: '',
  company: '',
  project: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [formError, setFormError] = useState('')

  useEffect(() => {
    document.title = 'Contact — Senvante'
  }, [])

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Use a valid email so we can reply.'
    }
    if (!values.project) next.project = 'Choose a starting point.'
    if (values.message.trim().length < 12) {
      next.message = 'A sentence or two is enough to begin.'
    }
    return next
  }

  async function onSubmit(event) {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    setFormError('')
    if (Object.keys(next).length) return

    setSending(true)
    try {
      await submitInquiry({
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        project: values.project,
        message: values.message.trim(),
      })
      setSent(true)
    } catch (error) {
      if (error.fields && Object.keys(error.fields).length) {
        setErrors(error.fields)
      }
      setFormError(error.message || 'The note could not be saved.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <p className="eyebrow">Start</p>
          <h2>
            Tell us what
            <br />
            you want to <em>ship.</em>
          </h2>
          <p className="lede">
            A short note is enough. We reply with a clear next step — scope, fit, and how a first
            conversation would run.
          </p>
          <a className="mail-link" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <p className="availability">
            <i className="pulse" /> Open for new engagements
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="form-card">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  className="success"
                  role="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="eyebrow">Ready</p>
                  <h3>Your note is with Senvante.</h3>
                  <p>It is saved on the company server. We will reply with a practical next step.</p>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                      setSent(false)
                      setValues(initial)
                      setFormError('')
                    }}
                  >
                    Write another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="form-row">
                    <Field label="Name" name="name" value={values.name} error={errors.name} onChange={update} />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      error={errors.email}
                      onChange={update}
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-row">
                    <Field
                      label="Company"
                      name="company"
                      value={values.company}
                      onChange={update}
                      optional
                    />
                    <label className={errors.project ? 'field invalid' : 'field'}>
                      <span>Project</span>
                      <select name="project" value={values.project} onChange={update}>
                        <option value="">Select</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.project && <small role="alert">{errors.project}</small>}
                    </label>
                  </div>
                  <label className={errors.message ? 'field invalid' : 'field'}>
                    <span>What are you building?</span>
                    <textarea
                      name="message"
                      rows="5"
                      value={values.message}
                      onChange={update}
                      placeholder="The product, the people who use it, and what good looks like."
                    />
                    {errors.message && <small role="alert">{errors.message}</small>}
                  </label>
                  <button className="btn btn-primary" type="submit" disabled={sending}>
                    {sending ? 'Sending…' : 'Send the note'}
                  </button>
                  {formError && <p className="form-error" role="alert">{formError}</p>}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', optional = false, autoComplete }) {
  return (
    <label className={error ? 'field invalid' : 'field'}>
      <span>
        {label}
        {optional && <em>Optional</em>}
      </span>
      <input type={type} name={name} value={value} onChange={onChange} autoComplete={autoComplete} />
      {error && <small role="alert">{error}</small>}
    </label>
  )
}
