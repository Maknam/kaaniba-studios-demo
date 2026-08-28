'use client'

import { useState } from 'react'
import Image from 'next/image'
import { portfolioCategories, portfolioProjects } from '../../content/portfolio'

export default function ProjectArchive() {
  const [category, setCategory] = useState('All')
  const visibleProjects = category === 'All' ? portfolioProjects : portfolioProjects.filter((project) => project.category === category)

  return <><div className="archive-filters" role="group" aria-label="Filter projects by category">{portfolioCategories.map((item) => <button type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)} aria-pressed={category === item} key={item}>{item}</button>)}</div><div className="archive-grid">{visibleProjects.map((project, index) => <article className={`archive-card ${project.featured ? 'archive-featured' : ''}`} key={project.slug}><div className="archive-image"><Image src={project.image} alt={`${project.title}, ${project.category.toLowerCase()} interior in ${project.location}`} fill sizes={project.featured ? '(max-width: 800px) 100vw, 66vw' : '(max-width: 800px) 100vw, 33vw'} priority={index === 0} quality={82} /></div><div className="archive-card-copy"><div><p>{project.category} · {project.location}</p><h2>{project.title}</h2></div><span>{project.year}</span><p className="archive-summary">{project.summary}</p></div></article>)}</div></>
}
