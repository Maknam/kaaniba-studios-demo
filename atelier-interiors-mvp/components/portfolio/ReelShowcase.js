import Image from 'next/image'
import { projectReels } from '../../content/portfolio'

export default function ReelShowcase() {
  return <div className="reel-grid">{projectReels.map((reel) => <article className="reel-card" key={reel.title}>{reel.videoUrl ? <video controls playsInline preload="metadata" poster={reel.image}><source src={reel.videoUrl} /></video> : <div className="reel-poster"><Image src={reel.image} alt={`${reel.title} project reel cover`} fill sizes="(max-width: 700px) 85vw, 30vw" quality={80} /><span className="reel-play" aria-hidden="true">▶</span><span className="reel-demo-label">Video ready</span></div>}<div className="reel-meta"><h3>{reel.title}</h3><span>{reel.duration}</span></div></article>)}</div>
}
