'use client'

import { useState } from 'react'

export default function ConsultationForm() {
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success">
        <span className="success-mark">✓</span>
        <h3>Thank you.</h3>
        <p>Your project brief has been received. We’ll be in touch within one business day.</p>
        <button className="text-button" onClick={() => setSent(false)}>Send another enquiry</button>
      </div>
    )
  }

  return (
    <form className="consultation-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input required placeholder="Your full name" />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input required placeholder="+233 ..." />
        </label>
      </div>
      <div className="field-grid">
        <label>
          <span>Project type</span>
          <select defaultValue="Residential">
            <option>Residential</option>
            <option>Office / Workspace</option>
            <option>Hospitality</option>
            <option>Retail / Commercial</option>
          </select>
        </label>
        <label>
          <span>Estimated budget</span>
          <select defaultValue="GHS 20k – 50k">
            <option>Below GHS 20k</option>
            <option>GHS 20k – 50k</option>
            <option>GHS 50k – 100k</option>
            <option>GHS 100k+</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us about your space</span>
        <textarea rows="4" placeholder="What would you like to transform? Include location, room type, style preferences and timeline." />
      </label>
      <button className="primary-button full-button" type="submit">Request a consultation <span>↗</span></button>
      <p className="form-note">No commitment required. This demo form currently shows a success state only.</p>
    </form>
  )
}
