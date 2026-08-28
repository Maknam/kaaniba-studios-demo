'use client'

import { useEffect, useState } from 'react'
import { trackDesignEvent } from '../../lib/analytics'
import Brand from '../ui/Brand'
import ProgressIndicator from './ProgressIndicator'
import SuccessState from './SuccessState'
import RoomStep from './steps/RoomStep'
import StyleStep from './steps/StyleStep'
import BudgetStep from './steps/BudgetStep'
import PhotoStep from './steps/PhotoStep'
import ContactStep from './steps/ContactStep'
import ReviewStep from './steps/ReviewStep'

const initialForm = {
  roomType: '', otherRoom: '', styles: [], budget: '', timeframe: '', images: [],
  fullName: '', email: '', phone: '', location: '', description: '',
  preferredContactMethod: 'WhatsApp', consent: false,
}

function getStepError(step, form) {
  if (step === 0 && (!form.roomType || (form.roomType === 'other' && !form.otherRoom.trim()))) return 'Please choose a room type.'
  if (step === 1 && !form.styles.length) return 'Please choose at least one style direction.'
  if (step === 2 && (!form.budget || !form.timeframe)) return 'Please choose a budget and timeframe.'
  if (step === 4 && (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !form.consent)) return 'Please complete the required fields and consent to be contacted.'
  if (step === 4 && !/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.'
  return ''
}

export default function DesignSpaceWizard() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')
  const [reference, setReference] = useState('')

  useEffect(() => { trackDesignEvent('design_my_space_started') }, [])

  function update(changes, nextError = '') {
    setForm((current) => ({ ...current, ...changes }))
    setError(nextError)
  }

  function continueToNextStep() {
    const validationError = getStepError(step, form)
    if (validationError) return setError(validationError)
    setError('')
    if (step === 0) trackDesignEvent('room_selected', { room: form.roomType })
    if (step < 5) setStep((current) => current + 1)
    else submitRequest()
  }

  async function submitRequest() {
    setStatus('submitting')
    try {
      const images = form.images.map(({ name, type, size }) => ({ name, type, size }))
      const response = await fetch('/api/design-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, images }) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setReference(result.reference)
      setStatus('success')
      trackDesignEvent('design_request_submitted')
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  function goBack() {
    setError('')
    setStep((current) => current - 1)
  }

  const stepProps = { form, update }

  return <main className="design-page"><header className="design-nav"><Brand /><a className="under-link" href="/">Back to home <span aria-hidden="true">↗</span></a></header><div className="wizard-layout"><aside className="wizard-aside"><p className="eyebrow light">A considered beginning</p><h2>Tell Us About<br /><em>Your Space.</em></h2><p>Share a few details about your room and vision. We’ll review your project and get in touch to discuss how we can bring it to life.</p><span className="aside-line" /></aside><div className="wizard-main">{status === 'success' ? <SuccessState reference={reference} /> : <><ProgressIndicator step={Math.min(step, 4)} />{step === 0 && <RoomStep {...stepProps} />}{step === 1 && <StyleStep {...stepProps} />}{step === 2 && <BudgetStep {...stepProps} />}{step === 3 && <PhotoStep {...stepProps} error={error} />}{step === 4 && <ContactStep {...stepProps} />}{step === 5 && <ReviewStep form={form} onEdit={setStep} />}{error && step !== 3 && <p className="inline-error" role="alert">{error}</p>}<div className="wizard-actions">{step > 0 && <button type="button" className="back-button" onClick={goBack}>← Previous</button>}<button type="button" className="primary-button wizard-next" onClick={continueToNextStep} disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : step === 4 ? 'Review my request' : step === 5 ? 'Submit My Design Request' : 'Continue'} <span aria-hidden="true">↗</span></button></div></>}</div></div></main>
}
