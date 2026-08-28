import './globals.css'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { siteConfig } from '../config/site'

const sans = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })
const serif = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--font-serif' })

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'Luxury Interior Design Studio | Atelier Living', template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['luxury interior design', 'interior designer Ghana', 'Accra interior design', 'home styling', 'residential interiors', 'workspace design'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_GB', url: '/', siteName: siteConfig.name, title: 'Luxury Interior Design Studio | Atelier Living', description: siteConfig.description, images: [{ url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&h=630&q=82', width: 1200, height: 630, alt: 'Atelier Living luxury interior' }] },
  twitter: { card: 'summary_large_image', title: 'Luxury Interior Design Studio | Atelier Living', description: siteConfig.description },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  )
}
