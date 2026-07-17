import HeroSection from './components/sections/hero-section'
import ServicesSection from './components/sections/services-section'
import ProjectsSection from './components/sections/projects-section'
import AboutMeSection from './components/sections/about-me-section'
import SoftSkillsSection from './components/sections/soft-skills-section'
import ExperienceSection from './components/sections/experience-section'
import TechnologiesSection from './components/sections/technologies-section'
import TestimonialsSection from './components/sections/testimonials-section'

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
    </>
  )
}

export default App
