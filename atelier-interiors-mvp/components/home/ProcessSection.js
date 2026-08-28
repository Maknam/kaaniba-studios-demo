import BeforeAfter from '../BeforeAfter'
import { processSteps } from '../../content/home'

export default function ProcessSection() {
  return <><section className="transformation section-pad" aria-labelledby="transformation-title"><div className="section-heading transformation-heading"><div><p className="eyebrow">The transformation</p><h2 id="transformation-title">See the difference.</h2></div><p>Drag the handle to compare a typical space before and after a considered design intervention.</p></div><BeforeAfter /></section><section className="process section-pad" id="studio" aria-labelledby="process-title"><div className="process-title"><p className="eyebrow light">How it works</p><h2 id="process-title">Designed to feel<br /><em>effortless.</em></h2></div><div className="process-steps">{processSteps.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section></>
}
