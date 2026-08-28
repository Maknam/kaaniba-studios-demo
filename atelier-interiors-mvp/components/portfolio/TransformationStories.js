import BeforeAfter from '../BeforeAfter'
import { transformations } from '../../content/portfolio'

export default function TransformationStories() {
  return <div className="transformation-stories">{transformations.map((item, index) => <article className="transformation-story" key={item.title}><div className="story-number">0{index + 1}</div><div className="story-heading"><h3>{item.title}</h3><p>{item.location}</p></div><BeforeAfter beforeImage={item.before} afterImage={item.after} label={`${item.title} before and after comparison`} /></article>)}</div>
}
