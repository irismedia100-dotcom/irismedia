import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail, Globe } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';
import { TRANSLATIONS, Language } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLanguage: () => void;
  onHoverStart?: (text: string) => void;
  onHoverEnd?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLanguage,
  onHoverStart,
  onHoverEnd
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang].nav;

  // Scroll Progress Line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.work, href: '#work' },
    { name: t.services, href: '#services' },
    { name: t.about, href: '#about' },
    { name: t.contact, href: '#contact' }
  ];

  return (
    <>
      {/* Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Main Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 relative z-50"
            onMouseEnter={() => onHoverStart?.('IRIS')}
            onMouseLeave={() => onHoverEnd?.()}
          >
            <img
              src="/assets/iris-logo-01.png"
              alt="IRIS Media Production Logo"
              className="h-10 sm:h-12 w-auto object-contain group-hover:brightness-125 transition-all duration-300"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-syne font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-300 group py-1"
                onMouseEnter={() => onHoverStart?.(link.name)}
                onMouseLeave={() => onHoverEnd?.()}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons: Instagram, Translation Toggle, Let's Talk CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/iris.media_production/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group"
              title="Follow IRIS Media Production on Instagram"
              onMouseEnter={() => onHoverStart?.('INSTAGRAM')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Facebook Button */}
            <a
              href="https://www.facebook.com/share/1JhB6ZMycS/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group"
              title="Follow IRIS Media Production on Facebook"
              onMouseEnter={() => onHoverStart?.('FACEBOOK')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            {/* Translation Language Toggle Button (Desktop & Tablet) */}
            <button
              onClick={onToggleLanguage}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-xs font-syne font-bold text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group"
              title={lang === 'en' ? 'التحويل للغة العربية' : 'Switch to English'}
              onMouseEnter={() => onHoverStart?.(lang === 'en' ? 'ARABIC' : 'ENGLISH')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="tracking-wider">{t.langSwitch}</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-xs font-syne font-bold tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group shadow-lg"
              onMouseEnter={() => onHoverStart?.('TALK')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              <span>{t.talk}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 p-2.5 rounded-full border border-white/20 bg-black/60 text-white hover:border-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-syne tracking-[0.3em] text-zinc-500 uppercase">
                // NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="font-syne text-3xl font-extrabold tracking-wider text-white hover:text-zinc-400 transition-colors flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-6 h-6 text-zinc-500" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-white text-black font-syne font-extrabold text-sm tracking-widest text-center block hover:bg-zinc-200 transition-colors"
              >
                {t.talk}
              </a>

              <div className="flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/iris.media_production/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>@iris.media_production</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1JhB6ZMycS/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
                <button
                  onClick={onToggleLanguage}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{t.langSwitch}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
