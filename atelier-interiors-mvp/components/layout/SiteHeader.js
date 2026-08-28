import Brand from '../ui/Brand'
import { siteConfig } from '../../config/site'

export default function SiteHeader() {
  return (
    <header className="nav-wrap">
      <Brand homeHref="#top" />
      <nav className="desktop-nav" aria-label="Main navigation">
        {siteConfig.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <a className="nav-cta" href="/design-my-space">Design My Space <span aria-hidden="true">↗</span></a>
    </header>
  )
}
