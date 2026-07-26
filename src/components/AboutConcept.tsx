import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Zap, Building2, Quote } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface AboutConceptProps {
  lang: Language;
  onHoverStart?: (text: string) => void;
  onHoverEnd?: () => void;
}

export const AboutConcept: React.FC<AboutConceptProps> = ({ lang, onHoverStart, onHoverEnd }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-black border-t border-white/10 overflow-hidden">
      {/* Background Decorative Lens Vectors */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-10">
        <svg width="800" height="800" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="250" cy="250" r="180" stroke="white" strokeWidth="1" />
          <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Concept Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300 animate-pulse" />
              <span className="text-[11px] font-syne font-bold tracking-[0.25em] text-zinc-300 uppercase">
                {t.badge}
              </span>
            </div>

            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              {t.headingMain} <br />
              <span className="font-editorial italic font-normal text-gradient-mono tracking-normal">
                {t.headingItalic}
              </span> {t.headingEnd}
            </h2>

            <p className="text-zinc-300 font-inter text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              {t.storyP1}
            </p>

            <p className="text-zinc-400 font-inter text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              {t.storyP2}
            </p>

            <p className="text-zinc-400 font-inter text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              {t.storyP3}
            </p>

            {/* Differentiators: What Sets Us Apart */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase">
                {t.diffBadge}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2 glass-card p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 font-syne font-bold text-xs text-white">
                    <Camera className="w-4 h-4 text-zinc-300" />
                    <span>{t.differentiators[0].title}</span>
                  </div>
                  <p className="text-[11px] font-inter text-zinc-400 leading-relaxed">
                    {t.differentiators[0].desc}
                  </p>
                </div>

                <div className="space-y-2 glass-card p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 font-syne font-bold text-xs text-white">
                    <Zap className="w-4 h-4 text-zinc-300" />
                    <span>{t.differentiators[1].title}</span>
                  </div>
                  <p className="text-[11px] font-inter text-zinc-400 leading-relaxed">
                    {t.differentiators[1].desc}
                  </p>
                </div>

                <div className="space-y-2 glass-card p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 font-syne font-bold text-xs text-white">
                    <Building2 className="w-4 h-4 text-zinc-300" />
                    <span>{t.differentiators[2].title}</span>
                  </div>
                  <p className="text-[11px] font-inter text-zinc-400 leading-relaxed">
                    {t.differentiators[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Official iRIS Brand Emblem Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-8 flex items-center justify-center shadow-2xl group cursor-pointer"
              onMouseEnter={() => onHoverStart?.('IRIS')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              {/* Outer Rotating Dash Ring */}
              <div className="absolute inset-4 rounded-full border border-white/15 border-dashed animate-spin" style={{ animationDuration: '45s' }} />

              {/* Inner Circle displaying Official iRIS Brand Logo */}
              <div className="relative w-56 h-56 rounded-full border border-white/30 bg-black flex flex-col items-center justify-center p-6 text-center shadow-2xl group-hover:border-white transition-colors">
                <img
                  src="/assets/iris-logo-01.png"
                  alt="Official iRIS Media Production Logo"
                  className="w-44 h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Motto & Philosophy Quote Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden">
          <Quote className="absolute right-6 bottom-6 w-24 h-24 text-white/5 pointer-events-none" />
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-[11px] font-syne font-bold tracking-[0.3em] text-zinc-400 uppercase block">
              {t.mottoBadge}
            </span>
            <blockquote className="font-editorial italic text-2xl sm:text-4xl text-white font-normal leading-snug">
              {t.mottoQuote}
            </blockquote>
            <p className="text-xs font-syne font-bold tracking-widest text-zinc-400 uppercase pt-2">
              {t.mottoAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
