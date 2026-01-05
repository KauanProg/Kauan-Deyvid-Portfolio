import AboutSection from "../components/about-section";
// import ContactSection from "../components/contact-section";
import ExperienceSection from "../components/experience-section";
import Footer from "../components/footer";
import HardSkillsSection from "../components/hard-skills-section";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import ProjectsSection from "../components/projects-section";
import ServicesSection from "../components/services-section";
// import TestimonialsSection from "../components/testimonials-section";
import TrainingCertificationsSection from "../components/training-certifications-section";

const HomePage = () => {
  return (
    <>
      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <HardSkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TrainingCertificationsSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        {/* <ContactSection /> */}
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
