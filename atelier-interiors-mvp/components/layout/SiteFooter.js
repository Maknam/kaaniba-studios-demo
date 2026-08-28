import { siteConfig } from '../../config/site'

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">ATELIER <em>LIVING</em></div>
      <nav className="footer-links" aria-label="Social links">
        <a href={siteConfig.social.instagram}>Instagram</a>
        <a href={siteConfig.social.pinterest}>Pinterest</a>
        <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
      <p>© {new Date().getFullYear()} {siteConfig.name}. Demo concept.</p>
    </footer>
  )
}
