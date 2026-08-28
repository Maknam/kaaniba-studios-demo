import Image from 'next/image'
import { projects } from '../../content/home'

export default function ProjectsSection() {
  return <section className="projects section-pad" id="work" aria-labelledby="projects-title"><div className="section-heading"><div><p className="eyebrow">Selected projects</p><h2 id="projects-title">Recent work</h2></div><a href="/projects" className="under-link">Explore all projects <span aria-hidden="true">↗</span></a></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-image"><Image src={project.image} alt={`${project.title} interior design project`} fill sizes={index === 0 || index === 3 ? '(max-width: 900px) 100vw, 62vw' : '(max-width: 900px) 100vw, 38vw'} quality={82} /><span className="project-arrow" aria-hidden="true">↗</span></div><div className="project-meta"><h3>{project.title}</h3><p>{project.type}</p></div></article>)}</div></section>
}
