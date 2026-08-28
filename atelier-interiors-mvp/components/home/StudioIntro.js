import { statistics } from '../../content/home'

export default function StudioIntro() {
  return <><section className="intro section-pad" aria-labelledby="philosophy-title"><p className="eyebrow">Our philosophy</p><div className="intro-copy"><h2 id="philosophy-title">Beautiful rooms are only the beginning.</h2><p>Good interiors should make everyday life easier, warmer and more intentional. We balance functionality, craftsmanship and personality to create spaces that stay relevant long after the reveal.</p><a href="#studio" className="under-link">Discover our approach <span aria-hidden="true">↗</span></a></div></section><section className="numbers" aria-label="Studio achievements">{statistics.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section></>
}
