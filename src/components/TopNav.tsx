import React from 'react';
import { Home } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/portfolio';

interface TopNavProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onNavigateHome?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ activeCategory, onSelectCategory, onNavigateHome }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4 px-6 md:px-10 flex items-center justify-between select-none">
      {/* Home button — returns to landing page */}
      {onNavigateHome && (
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
          title="Return to Home Page"
        >
          <Home size={14} />
          <span className="hidden sm:inline">Home</span>
        </button>
      )}

      <nav className="flex items-center gap-2 md:gap-3 flex-wrap ml-auto">
        {/* ALL PORTFOLIO Button */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-neutral-900 text-white rounded-full px-4 py-1.5 shadow-sm'
              : 'text-neutral-500 hover:text-neutral-900 px-3 py-1.5'
          }`}
        >
          ALL PORTFOLIO
        </button>

        {/* Category Pills */}
        {CATEGORIES_DATA.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'bg-neutral-900 text-white rounded-full px-4 py-1.5 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 px-3 py-1.5'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
