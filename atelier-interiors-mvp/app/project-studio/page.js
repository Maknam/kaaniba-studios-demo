import Brand from '../../components/ui/Brand'
import ProjectStudio from '../../components/portfolio/ProjectStudio'

export const metadata = { title: 'Project Studio', description: 'Prepare portfolio projects and media for Atelier Living.', robots: { index: false, follow: false } }

export default function ProjectStudioPage() {
  return <main className="project-studio-page"><header className="design-nav"><Brand /><a className="under-link" href="/projects">View archive <span aria-hidden="true">↗</span></a></header><div className="studio-layout"><aside className="studio-intro"><p className="eyebrow light">Portfolio workspace</p><h1>Build the<br /><em>project story.</em></h1><p>Prepare photography, transformations and short films in one consistent format. Authentication and permanent publishing will be connected with the backend.</p></aside><section className="studio-main" aria-labelledby="studio-form-title"><p className="eyebrow">New portfolio entry</p><h2 id="studio-form-title">Add a project.</h2><ProjectStudio /></section></div></main>
}
