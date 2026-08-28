export default function Brand({ homeHref = '/' }) {
  return (
    <a className="brand" href={homeHref} aria-label="Atelier Living home">
      <span className="brand-mark" aria-hidden="true">A</span>
      <span>ATELIER <em>LIVING</em></span>
    </a>
  )
}
