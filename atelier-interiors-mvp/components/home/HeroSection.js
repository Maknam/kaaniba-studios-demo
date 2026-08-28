export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-photo" role="img" aria-label="Elegant neutral-toned luxury living room" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow light">Interior architecture · styling · spatial design</p>
        <h1 id="hero-title">Spaces that feel<br /><em>like you.</em></h1>
        <p className="hero-copy">We create calm, character-rich interiors shaped around how you live, work and gather.</p>
        <div className="hero-actions"><a className="primary-button light-button" href="#work">Explore our work <span aria-hidden="true">↗</span></a><a className="ghost-link" href="/design-my-space">Design My Space <span aria-hidden="true">→</span></a></div>
      </div>
      <div className="hero-caption"><span>Featured</span><strong>Adair Residence</strong><span>Accra, Ghana · 2026</span></div>
    </section>
  )
}
