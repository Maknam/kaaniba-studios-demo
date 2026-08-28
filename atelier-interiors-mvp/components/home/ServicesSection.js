import { services } from '../../content/home'

export default function ServicesSection() {
  return <section className="services section-pad" id="services" aria-labelledby="services-title"><div className="services-intro"><p className="eyebrow">What we do</p><h2 id="services-title">From first idea<br />to final cushion.</h2><p>Flexible design support for complete transformations and carefully considered updates.</p></div><div className="service-list">{services.map((service) => <article key={service.number} className="service-row"><span className="service-num">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>
}
