import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { GalleryGrid } from './components/GalleryGrid';
import { LightboxModal } from './components/LightboxModal';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { HomePage } from './components/HomePage';
import { ALL_PROJECTS } from './data/portfolio';
import type { PortfolioItem } from './data/portfolio';

export const App: React.FC = () => {
  // ─── View State ───────────────────────────────────────────────
  // true = show the marketing Home Page; false = show portfolio gallery
  const [showHome, setShowHome] = useState<boolean>(true);

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
        setShowHome(false);
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

  // Navigate to portfolio from Home Page and optionally select a category
  const handleNavigateCategory = (catId: string) => {
    setShowHome(false);
    setActiveCategory(catId);
    setSelectedProjectId(null);
    setLightboxProject(null);
    // Clear project query param
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.replaceState({}, '', url.toString());
  };

  // When clicking a category or project from the sidebar
  const handleSidebarCategorySelect = (catId: string) => {
    setShowHome(false);
    setActiveCategory(catId);
    setSelectedProjectId(null);
    setLightboxProject(null);
  };

  const handleSidebarProjectSelect = (proj: PortfolioItem) => {
    setShowHome(false);
    setActiveCategory(proj.categoryId);
    setSelectedProjectId(proj.id);
    setLightboxProject(null);
  };

  // Return to Home Page
  const handleNavigateHome = () => {
    setShowHome(true);
    setLightboxProject(null);
    setSelectedProjectId(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.replaceState({}, '', url.toString());
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

  // Determine current active company item if any
  const selectedItem = selectedProjectId
    ? ALL_PROJECTS.find((p) => p.id === selectedProjectId)
    : null;

  // Compute the exact list of items for the currently active view/company
  let currentActiveItems =
    activeCategory === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.categoryId === activeCategory);

  if (selectedItem) {
    currentActiveItems = currentActiveItems.filter((p) => p.title === selectedItem.title);
  } else if (lightboxProject) {
    // Scope lightbox navigation to the company of the opened item
    const companyItems = ALL_PROJECTS.filter((p) => p.title === lightboxProject.title);
    if (companyItems.length > 0) {
      currentActiveItems = companyItems;
    }
  }

  // ─── Render Home Page ────────────────────────────────────────
  if (showHome) {
    return (
      <>
        <HomePage
          activeCategory={activeCategory}
          onNavigateCategory={handleNavigateCategory}
          onNavigateHome={handleNavigateHome}
        />

        {/* Fullscreen Lightbox (if opened from URL param) */}
        {lightboxProject && (
          <LightboxModal
            project={lightboxProject}
            allProjects={currentActiveItems}
            onClose={() => handleSelectLightboxProject(null)}
            onSelectProject={(proj) => handleSelectLightboxProject(proj)}
          />
        )}
      </>
    );
  }

  // ─── Render Portfolio Gallery ────────────────────────────────
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
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content Area (Offset by 295px left margin on desktop) */}
      <div className="md:ml-[295px] min-h-screen bg-white flex flex-col transition-all duration-300">
        {/* Top Right Navigation (Category Pills) */}
        <TopNav
          activeCategory={activeCategory}
          onSelectCategory={handleSidebarCategorySelect}
          onNavigateHome={handleNavigateHome}
        />

        {/* Main Masonry Photography Grid next to sidebar */}
        <main className="flex-1">
          <GalleryGrid
            activeCategory={activeCategory}
            selectedProjectId={selectedProjectId}
            onSelectProject={(proj) => handleSelectLightboxProject(proj)}
          />
        </main>
      </div>

      {/* Fullscreen Lightbox / Slideshow Viewer Modal */}
      {lightboxProject && (
        <LightboxModal
          project={lightboxProject}
          allProjects={currentActiveItems}
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
