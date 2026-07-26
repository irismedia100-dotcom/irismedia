import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { AboutConcept } from './components/AboutConcept';
import { ContactFooter } from './components/ContactFooter';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';
import type { Project } from './data/projectsData';
import type { Language } from './data/translations';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isCursorHovered, setIsCursorHovered] = useState<boolean>(false);
  const [lang, setLang] = useState<Language>('en');

  // Toggle Language between English and Arabic with document dir handling
  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Initialize Lenis Smooth Scroll with ESM/CJS safe fallback
  const [lenisInstance, setLenisInstance] = useState<any>(null);

  useEffect(() => {
    let lenis: any = null;

    try {
      const LenisClass = (Lenis as any)?.default || Lenis;
      if (typeof LenisClass === 'function') {
        lenis = new LenisClass({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1
        });
        setLenisInstance(lenis);

        const raf = (time: number) => {
          if (lenis) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
        };

        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn('Lenis smooth scroll initialization skipped:', e);
    }

    return () => {
      if (lenis && typeof lenis.destroy === 'function') {
        lenis.destroy();
      }
    };
  }, []);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      if (lenisInstance) lenisInstance.stop();
    } else {
      document.body.style.overflow = '';
      if (lenisInstance) lenisInstance.start();
    }
  }, [selectedProject, lenisInstance]);

  const handleHoverStart = (text: string) => {
    setCursorText(text);
    setIsCursorHovered(true);
  };

  const handleHoverEnd = () => {
    setCursorText('');
    setIsCursorHovered(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-white selection:text-black">
      {/* Custom Lenis Cursor & Noise Overlay */}
      <CustomCursor cursorText={cursorText} isHovered={isCursorHovered} />
      <NoiseOverlay />

      {/* Navigation Header */}
      <Navbar
        lang={lang}
        onToggleLanguage={handleToggleLanguage}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      />

      {/* Main Sections */}
      <main>
        {/* Fullscreen Hero Section */}
        <Hero
          lang={lang}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />

        {/* Selected Works Portfolio Grid */}
        <PortfolioGrid
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />

        {/* Services Accordion */}
        <Services
          lang={lang}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />

        {/* About & IRIS Vision Concept */}
        <AboutConcept
          lang={lang}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />
      </main>

      {/* Contact Form & Footer */}
      <ContactFooter
        lang={lang}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      />

      {/* Lightbox Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
