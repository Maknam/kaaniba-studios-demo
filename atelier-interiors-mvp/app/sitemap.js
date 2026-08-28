import { siteConfig } from '../config/site'

export default function sitemap() {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${siteConfig.url}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/design-my-space`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
