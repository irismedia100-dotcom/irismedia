import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/portfolio';

interface HomePortfolioShowcaseProps {
  onSelectCategory: (catId: string) => void;
}

export const HomePortfolioShowcase: React.FC<HomePortfolioShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-900 text-white select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-400 uppercase block mb-2">
              OUR SPECIALIZED DIVISIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-white">
              EXPLORE OUR PORTFOLIO
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors group"
          >
            <span>VIEW ALL WORKS</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Categories Showcase Grid — 3 cards: Hotels, Nile Cruise, Nile Dahabiya */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat) => {
            const firstProject = cat.projects[0];
            const coverImage = firstProject?.imageUrl || '';

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/40 transition-all duration-500 shadow-2xl"
              >
                {/* Background Cover Image */}
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800" />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-white border border-white/20">
                      {cat.projects.length} PROJECTS
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white group-hover:translate-x-1 transition-transform duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
