import { useRef } from "react";
import { useTheme } from "@/hooks/use-theme";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const { isDarkMode } = useTheme();
  
  // Refs for scroll navigation
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <Header 
        onNavigate={{
          howItWorks: () => scrollToSection(howItWorksRef),
          projects: () => scrollToSection(projectsRef),
          testimonials: () => scrollToSection(testimonialsRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
      
      <main>
        <Hero onGetStarted={() => scrollToSection(contactRef)} />
        <Features />
        <div ref={howItWorksRef}>
          <HowItWorks />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactRef}>
          <ContactCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
