import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HomeNavbarProps {
  activeCategory: string;
  onNavigateHome: () => void;
  onNavigateCategory: (categoryId: string) => void;
  onNavigateContact: () => void;
}

export const HomeNavbar: React.FC<HomeNavbarProps> = ({
  onNavigateHome,
  onNavigateCategory,
  onNavigateContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-md py-3 border-b border-white/10 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between gap-2">
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center group focus:outline-none flex-shrink-0"
            aria-label="IRIS Media Production Home"
          >
            <img
              src="/assets/iris-logo-01.png"
              alt="IRIS Media Production Logo"
              className="h-10 sm:h-12 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </button>

          {/* Navigation Links — always visible on all screen sizes */}
          <nav className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 overflow-x-auto no-scrollbar">
            <button
              onClick={onNavigateHome}
              className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-white hover:text-neutral-300 transition-colors uppercase py-1 relative group whitespace-nowrap"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transform scale-x-100 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onNavigateCategory('hotels')}
              className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-neutral-300 hover:text-white transition-colors uppercase py-1 relative group whitespace-nowrap"
            >
              HOTELS
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onNavigateCategory('nile-cruise')}
              className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-neutral-300 hover:text-white transition-colors uppercase py-1 relative group whitespace-nowrap"
            >
              NILE CRUISE
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onNavigateCategory('nile-dahabiya')}
              className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-neutral-300 hover:text-white transition-colors uppercase py-1 relative group whitespace-nowrap"
            >
              NILE DAHABIYA
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          </nav>

          {/* Let's Talk CTA */}
          <button
            onClick={onNavigateContact}
            className="flex flex-shrink-0 px-3 sm:px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/80 hover:border-white text-white font-bold text-[9px] sm:text-[10px] md:text-[12px] tracking-[0.15em] md:tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-md items-center gap-2"
          >
            LET'S TALK
          </button>
        </div>
      </header>

    </>
  );
};
