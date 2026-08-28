export const siteConfig = {
  name: 'Atelier Living',
  shortName: 'Atelier',
  description: 'Luxury interior design and styling for calm, character-rich homes and workspaces in Ghana and beyond.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://atelierliving.example',
  email: 'hello@atelierliving.design',
  phone: '+233000000000',
  whatsappNumber: '233000000000',
  locations: ['Accra', 'Kumasi', 'Remote'],
  social: {
    instagram: '#work',
    pinterest: '#work',
  },
  navigation: [
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/#services' },
    { label: 'Studio', href: '/#studio' },
    { label: 'Contact', href: '/#contact' },
  ],
}
