import React from 'react';
import type { PortfolioItem } from '../data/portfolio';
import { ALL_PROJECTS, CATEGORIES_DATA } from '../data/portfolio';
import { Eye, Play } from 'lucide-react';

interface GalleryGridProps {
  activeCategory: string;
  selectedProjectId?: string | null;
  onSelectProject: (project: PortfolioItem) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  activeCategory,
  selectedProjectId,
  onSelectProject
}) => {
  // Filter projects by active category
  let projectsToDisplay =
    activeCategory === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.categoryId === activeCategory);

  // If a specific project is selected from sidebar, sort it first
  if (selectedProjectId) {
    const selectedItem = projectsToDisplay.find((p) => p.id === selectedProjectId);
    if (selectedItem) {
      projectsToDisplay = [
        selectedItem,
        ...projectsToDisplay.filter((p) => p.id !== selectedProjectId)
      ];
    }
  }

  const currentCategoryInfo = CATEGORIES_DATA.find((c) => c.id === activeCategory);

  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-10 select-none">
      {/* Category Sub-heading */}
      <div className="mb-8 border-b border-neutral-100 pb-4 flex items-baseline justify-between">
        <div>
          <h2 className="font-serif-heading text-2xl font-normal text-neutral-900 tracking-wide">
            {activeCategory === 'all' ? 'Featured Portfolio' : currentCategoryInfo?.name}
          </h2>
          <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">
            {activeCategory === 'all'
              ? 'Architectural, Maritime & Desert Spatial Photography'
              : currentCategoryInfo?.subtitle}
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400">
          {projectsToDisplay.length} Works
        </span>
      </div>

      {/* Masonry Photo Grid */}
      <div className="masonry-grid">
        {projectsToDisplay.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onContextMenu={(e) => e.preventDefault()}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-sm bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 protected-image-container"
            >
              {/* Image Wrapper */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                />

                {/* Video Play Badge Indicator */}
                {project.type === 'video' && (
                  <div className="absolute top-3 left-3 z-15 bg-black/60 backdrop-blur-md text-white p-2 rounded-full shadow-lg">
                    <Play size={14} fill="currentColor" />
                  </div>
                )}

                {/* Anti-Theft Shield Overlay */}
                <div
                  className="absolute inset-0 z-10 bg-transparent"
                  onContextMenu={(e) => e.preventDefault()}
                />

                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye size={16} />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-300 block mb-1 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-serif-heading text-lg font-medium text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1 font-light">
                      {project.location} — {project.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="p-3 bg-white border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-800 tracking-tight">
                  {project.title}
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                  {project.year}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
