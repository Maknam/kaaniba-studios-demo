import { designRequestConfig } from '../../lib/designRequestConfig'

export default function SuccessState({ reference }) {
  return <div className="wizard-success"><span className="success-mark">✓</span><p className="eyebrow">Enquiry received</p><h1>Your Space Is In Good Hands.</h1><p>Thanks for sharing your project with us. Our design team will review your request and contact you shortly.</p><div className="reference">Reference <strong>{reference}</strong></div><div className="success-actions"><a className="primary-button" href="/">Back to Home <span aria-hidden="true">↗</span></a><a className="under-link" href="/#work">View Our Projects <span aria-hidden="true">↗</span></a><a className="under-link" href={`https://wa.me/${designRequestConfig.whatsappNumber}`} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a></div></div>
}
