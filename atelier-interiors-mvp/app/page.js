import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import LocalBusinessJsonLd from '../components/seo/LocalBusinessJsonLd'
import HeroSection from '../components/home/HeroSection'
import StudioIntro from '../components/home/StudioIntro'
import ProjectsSection from '../components/home/ProjectsSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import ConversionSections from '../components/home/ConversionSections'

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <StudioIntro />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <ConversionSections />
      </main>
      <SiteFooter />
    </>
  )
}
