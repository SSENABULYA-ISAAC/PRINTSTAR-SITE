import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import { NavSection } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<NavSection>(NavSection.HOME);

  const handleNavChange = (section: NavSection) => {
    setActiveSection(section);
    // Smooth scroll logic
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === NavSection.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        activeSection={activeSection} 
        setActiveSection={handleNavChange} 
      />
      
      <main className="flex-grow">
        {/* We keep all sections rendered for smooth scrolling anchor links, 
            but logically structured in the layout */}
        <div id="home">
          <Hero onCtaClick={() => handleNavChange(NavSection.SERVICES)} />
        </div>
        
        <ServicesSection />

        <GallerySection />
        
        <TeamSection />
        
        <ContactSection />
      </main>

      <Footer />
      
      <ChatAssistant />
    </div>
  );
}

export default App;