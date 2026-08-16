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

  const selectedItem = selectedProjectId
    ? ALL_PROJECTS.find((p) => p.id === selectedProjectId)
    : null;

  // If a specific project/company is selected from sidebar, filter ONLY that company's photos
  if (selectedItem) {
    projectsToDisplay = projectsToDisplay.filter((p) => p.title === selectedItem.title);
  }

  const currentCategoryInfo = CATEGORIES_DATA.find((c) => c.id === activeCategory);

  const [mediaFilter, setMediaFilter] = React.useState<'all' | 'photo' | 'video'>('all');
  const [brokenImageIds, setBrokenImageIds] = React.useState<Set<string>>(new Set());

  // Apply media filter if selected
  if (mediaFilter === 'photo') {
    projectsToDisplay = projectsToDisplay.filter((p) => p.type !== 'video');
  } else if (mediaFilter === 'video') {
    projectsToDisplay = projectsToDisplay.filter((p) => p.type === 'video');
  }

  // Filter out any broken images
  projectsToDisplay = projectsToDisplay.filter((p) => !brokenImageIds.has(p.id));

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-10 select-none">
      {/* Category / Company Heading */}
      <div className="mb-8 border-b border-neutral-100 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <h2 className="font-serif-heading text-xl md:text-2xl font-normal text-neutral-900 tracking-wide">
            {selectedItem
              ? selectedItem.title
              : activeCategory === 'all'
              ? 'Featured Portfolio'
              : currentCategoryInfo?.name}
          </h2>
        </div>

        {/* Media Filter Tabs & Count */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="flex items-center bg-neutral-100 p-1 rounded-full text-[11px] font-medium text-neutral-600">
            <button
              onClick={() => setMediaFilter('all')}
              className={`px-3 py-1 rounded-full transition-all ${
                mediaFilter === 'all'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'hover:text-neutral-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setMediaFilter('photo')}
              className={`px-3 py-1 rounded-full transition-all ${
                mediaFilter === 'photo'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'hover:text-neutral-900'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setMediaFilter('video')}
              className={`px-3 py-1 rounded-full transition-all ${
                mediaFilter === 'video'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'hover:text-neutral-900'
              }`}
            >
              Videos
            </button>
          </div>

          <span className="text-xs font-mono text-neutral-400 whitespace-nowrap">
            {projectsToDisplay.length} Works
          </span>
        </div>
      </div>

      {/* Clean Luxury Ordered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {projectsToDisplay.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onContextMenu={(e) => e.preventDefault()}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 protected-image-container w-full aspect-[4/3] flex items-center justify-center border border-neutral-100 hover:border-neutral-200"
            >
              {/* Clean Image with Subtle Zoom Hover Effect */}
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                onDragStart={(e) => e.preventDefault()}
                onError={() => {
                  setBrokenImageIds((prev) => new Set(prev).add(project.id));
                }}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none block"
              />

              {/* Video Play Badge Indicator (only if video) */}
              {project.type === 'video' && (
                <div className="absolute top-3 left-3 z-20 bg-black/70 backdrop-blur-md text-white p-2.5 rounded-full shadow-lg border border-white/20">
                  <Play size={14} fill="currentColor" />
                </div>
              )}

              {/* Anti-Theft Shield Overlay */}
              <div
                className="absolute inset-0 z-30 bg-transparent"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
