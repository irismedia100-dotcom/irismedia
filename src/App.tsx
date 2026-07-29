import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { GalleryGrid } from './components/GalleryGrid';
import { LightboxModal } from './components/LightboxModal';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { ALL_PROJECTS } from './data/portfolio';
import type { PortfolioItem } from './data/portfolio';

export const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [lightboxProject, setLightboxProject] = useState<PortfolioItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  // Check URL query parameters for direct image share links (?project=id)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    if (projectId) {
      const matchedProject = ALL_PROJECTS.find((p) => p.id === projectId);
      if (matchedProject) {
        setLightboxProject(matchedProject);
        setActiveCategory(matchedProject.categoryId);
        setSelectedProjectId(matchedProject.id);
      }
    }
  }, []);

  // Update URL search param when lightbox project changes
  const handleSelectLightboxProject = (proj: PortfolioItem | null) => {
    setLightboxProject(proj);
    const url = new URL(window.location.href);
    if (proj) {
      url.searchParams.set('project', proj.id);
    } else {
      url.searchParams.delete('project');
    }
    window.history.replaceState({}, '', url.toString());
  };

  // When clicking a category or project from the sidebar
  const handleSidebarCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setSelectedProjectId(null);
    setLightboxProject(null);
  };

  const handleSidebarProjectSelect = (proj: PortfolioItem) => {
    setActiveCategory(proj.categoryId);
    setSelectedProjectId(proj.id);
    setLightboxProject(null); // Ensure grid view is shown next to sidebar, not full-screen modal!
  };

  // Anti-Theft / Copyright protection global event handlers (Silent protection)
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U' || e.key === 'p' || e.key === 'P')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filter projects by current category
  const filteredProjects =
    activeCategory === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.categoryId === activeCategory);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans-body relative select-none">
      {/* Fixed Left Sidebar (295px width) */}
      <Sidebar
        activeCategory={activeCategory}
        onSelectCategory={handleSidebarCategorySelect}
        selectedProjectId={selectedProjectId}
        onSelectProjectFilter={handleSidebarProjectSelect}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onOpenAboutModal={() => setIsAboutModalOpen(true)}
        isOpenMobile={isOpenMobile}
        onToggleMobile={() => setIsOpenMobile(!isOpenMobile)}
      />

      {/* Main Content Area (Offset by 295px left margin on desktop) */}
      <div className="md:ml-[295px] min-h-screen bg-white flex flex-col transition-all duration-300">
        {/* Top Right Navigation (Category Pills) */}
        <TopNav
          activeCategory={activeCategory}
          onSelectCategory={handleSidebarCategorySelect}
        />

        {/* Main Masonry Photography Grid next to sidebar (Screenshot match) */}
        <main className="flex-1">
          <GalleryGrid
            activeCategory={activeCategory}
            selectedProjectId={selectedProjectId}
            onSelectProject={(proj) => handleSelectLightboxProject(proj)}
          />
        </main>
      </div>

      {/* Fullscreen Lightbox / Slideshow Viewer Modal (Only when photo card clicked!) */}
      {lightboxProject && (
        <LightboxModal
          project={lightboxProject}
          allProjects={filteredProjects}
          onClose={() => handleSelectLightboxProject(null)}
          onSelectProject={(proj) => handleSelectLightboxProject(proj)}
        />
      )}

      {/* Full Portfolio Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* About Company Story Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
};

export default App;
