import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, Film } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { PROJECTS_DATA, type Project } from '../data/projectsData';
import { TRANSLATIONS, Language } from '../data/translations';

interface PortfolioGridProps {
  lang: Language;
  onSelectProject: (project: Project) => void;
  onHoverStart?: (text: string) => void;
  onHoverEnd?: () => void;
}

const CATEGORY_KEYS = [
  'ALL',
  'Hospitality & Tourism',
  'Events & Luxury',
  'Drone & Aerial',
  'Post-Production'
] as const;

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  lang,
  onSelectProject,
  onHoverStart,
  onHoverEnd
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const t = TRANSLATIONS[lang].portfolio;

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase">
              <Film className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.badge}</span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              {t.title}
            </h2>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_KEYS.map((catKey) => {
              const label = t.categories[catKey] || catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`px-5 py-2.5 rounded-full text-xs font-syne font-bold tracking-wider transition-all duration-300 ${
                    activeCategory === catKey
                      ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                      : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                  }`}
                  onMouseEnter={() => onHoverStart?.('FILTER')}
                  onMouseLeave={() => onHoverEnd?.()}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-white/40 ${
                  project.aspectRatio === 'wide' ? 'md:col-span-2 aspect-video' : 'aspect-square'
                }`}
                onMouseEnter={() => onHoverStart?.('VIEW')}
                onMouseLeave={() => onHoverEnd?.()}
              >
                {/* Image / Video Thumbnail */}
                <div className="relative w-full h-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                </div>

                {/* Top Category Badge & Year */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-syne font-bold tracking-widest text-zinc-300 uppercase">
                    {t.categories[project.category] || project.category}
                  </span>
                  <span className="text-xs font-syne font-bold text-zinc-400">
                    {project.year}
                  </span>
                </div>

                {/* Play Button Indicator Centered */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                {/* Bottom Title & Description Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 space-y-3 transform group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <h3 className="font-syne text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs font-inter text-zinc-400 font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-[11px] text-zinc-400">
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>@iris.media_production</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
