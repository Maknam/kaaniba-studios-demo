import SiteHeader from '../../components/layout/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter'
import ProjectArchive from '../../components/portfolio/ProjectArchive'
import TransformationStories from '../../components/portfolio/TransformationStories'
import ReelShowcase from '../../components/portfolio/ReelShowcase'

export const metadata = {
  title: 'Interior Design Projects',
  description: 'Explore Atelier Living residential, workspace and hospitality interiors, including transformations and project films.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return <><SiteHeader /><main className="portfolio-page"><header className="portfolio-hero"><p className="eyebrow">Selected work · 2024—2026</p><h1>Spaces with a<br /><em>story to tell.</em></h1><p>A growing archive of homes, workplaces and hospitality interiors shaped with warmth, restraint and a distinct sense of place.</p></header><section className="archive-section section-pad" aria-labelledby="archive-title"><div className="archive-intro"><p className="eyebrow">Project archive</p><h2 id="archive-title">Explore the work.</h2></div><ProjectArchive /></section><section className="portfolio-transformations section-pad" aria-labelledby="transformations-title"><div className="portfolio-section-heading"><p className="eyebrow light">Before & after</p><h2 id="transformations-title">Transformation,<br /><em>made visible.</em></h2><p>Move each handle to see how planning, material and atmosphere change the way a room feels.</p></div><TransformationStories /></section><section className="reels-section section-pad" aria-labelledby="reels-title"><div className="section-heading"><div><p className="eyebrow">Project films</p><h2 id="reels-title">A closer look.</h2></div><p>Short-form walkthroughs, material stories and reveal moments. Video sources can be connected through the future content backend.</p></div><ReelShowcase /></section><section className="portfolio-cta section-pad"><p className="eyebrow light">Your space could be next</p><h2>Let’s create something<br /><em>worth remembering.</em></h2><a className="primary-button light-button" href="/design-my-space">Design My Space <span aria-hidden="true">↗</span></a></section></main><SiteFooter /></>
}
