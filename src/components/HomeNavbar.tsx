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
            ? 'bg-black/85 backdrop-blur-md py-4 border-b border-white/10 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="IRIS Media Production Home"
          >
            <img
              src="/assets/iris-logo-01.png"
              alt="IRIS Media Production Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </button>

          {/* Navigation Links — Desktop & Mobile visible directly */}
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => onNavigateCategory('hotels')}
              className="text-[10px] sm:text-[12px] font-bold tracking-[0.15em] text-neutral-300 hover:text-white transition-colors uppercase whitespace-nowrap py-1 relative group"
            >
              HOTELS
            </button>

            <button
              onClick={() => onNavigateCategory('nile-cruise')}
              className="text-[10px] sm:text-[12px] font-bold tracking-[0.15em] text-neutral-300 hover:text-white transition-colors uppercase whitespace-nowrap py-1 relative group"
            >
              NILE CRUISE
            </button>

            <button
              onClick={() => onNavigateCategory('nile-dahabiya')}
              className="text-[10px] sm:text-[12px] font-bold tracking-[0.15em] text-neutral-300 hover:text-white transition-colors uppercase whitespace-nowrap py-1 relative group"
            >
              NILE DAHABIYA
            </button>
          </nav>

          {/* Let's Talk CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onNavigateContact}
              className="px-6 py-2 rounded-full border-2 border-white/80 hover:border-white text-white font-bold text-[12px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              LET'S TALK
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">
              NAVIGATION
            </span>

            <button
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-bold tracking-wider text-white hover:text-neutral-300 transition-colors text-left border-b border-white/10 pb-3 flex items-center justify-between"
            >
              <span>HOME</span>
              <ArrowRight size={18} className="text-neutral-500" />
            </button>

            <button
              onClick={() => {
                onNavigateCategory('hotels');
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-bold tracking-wider text-white hover:text-neutral-300 transition-colors text-left border-b border-white/10 pb-3 flex items-center justify-between"
            >
              <span>HOTELS</span>
              <ArrowRight size={18} className="text-neutral-500" />
            </button>

            <button
              onClick={() => {
                onNavigateCategory('nile-cruise');
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-bold tracking-wider text-white hover:text-neutral-300 transition-colors text-left border-b border-white/10 pb-3 flex items-center justify-between"
            >
              <span>NILE CRUISE</span>
              <ArrowRight size={18} className="text-neutral-500" />
            </button>

            <button
              onClick={() => {
                onNavigateCategory('nile-dahabiya');
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-bold tracking-wider text-white hover:text-neutral-300 transition-colors text-left border-b border-white/10 pb-3 flex items-center justify-between"
            >
              <span>NILE DAHABIYA</span>
              <ArrowRight size={18} className="text-neutral-500" />
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                onNavigateContact();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 rounded-full border border-white text-white font-bold text-xs tracking-widest uppercase text-center block hover:bg-white hover:text-black transition-colors"
            >
              LET'S TALK
            </button>

            <div className="text-center text-xs text-neutral-400">
              irismediaproduction01@gmail.com | +20 102 887 5361 | +20 12 74795553
            </div>
          </div>
        </div>
      )}
    </>
  );
};
