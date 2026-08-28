import { siteConfig } from '../../config/site'

export default function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: siteConfig.locations,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
