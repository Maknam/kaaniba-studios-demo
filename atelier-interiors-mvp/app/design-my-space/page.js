import DesignSpaceWizard from '../../components/design-space/DesignSpaceWizard'

export const metadata = {
  title: 'Design My Space',
  description: 'Share your room, style and budget with Atelier Living and request a personal interior design consultation.',
  alternates: { canonical: '/design-my-space' },
}

export default function DesignMySpacePage() {
  return <DesignSpaceWizard />
}
