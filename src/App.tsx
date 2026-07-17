import HeroSection from './components/sections/hero-section'
import ServicesSection from './components/sections/services-section'
import ProjectsSection from './components/sections/projects-section'
import AboutMeSection from './components/sections/about-me-section'
import SoftSkillsSection from './components/sections/soft-skills-section'
import ExperienceSection from './components/sections/experience-section'
import TechnologiesSection from './components/sections/technologies-section'
import TestimonialsSection from './components/sections/testimonials-section'
import ContactSection from './components/sections/contact-section'
import FooterSection from './components/sections/footer-section'

function App() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SoftSkillsSection />
      <TechnologiesSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App
