import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle, ArrowUpRight, Aperture } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface ServicesProps {
  lang: Language;
  onHoverStart?: (text: string) => void;
  onHoverEnd?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onHoverStart, onHoverEnd }) => {
  const [activeService, setActiveService] = useState<string>('hospitality-tourism');

  const t = TRANSLATIONS[lang].services;

  return (
    <section id="services" className="relative py-28 px-6 md:px-12 bg-[#080808] border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 text-[11px] font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase">
            <Aperture className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
            {t.title}
          </h2>
        </div>

        {/* Accordion Services Stack */}
        <div className="space-y-4">
          {t.items.map((service) => {
            const isOpen = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                className={`glass-panel rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isOpen ? 'border-white/40 bg-zinc-950/80 shadow-2xl' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Accordion Header Bar */}
                <button
                  onClick={() => setActiveService(isOpen ? '' : service.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left group"
                  onMouseEnter={() => onHoverStart?.('SERVICE')}
                  onMouseLeave={() => onHoverEnd?.()}
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-syne text-sm sm:text-base font-bold text-zinc-500 tracking-widest">
                      {service.number}
                    </span>
                    <h3 className="font-syne text-xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-zinc-300 transition-colors uppercase">
                      {service.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-white/10 px-6 sm:px-8 pb-8 pt-6"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Subtitle & Highlight Quote */}
                        <div className="lg:col-span-6 space-y-6">
                          <p className="text-zinc-300 font-inter text-base sm:text-lg font-light leading-relaxed">
                            {service.subtitle}
                          </p>

                          <div className="glass-card p-5 rounded-xl border border-white/15">
                            <span className="text-[10px] font-syne font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-2">
                              // IRIS GUARANTEE
                            </span>
                            <blockquote className="text-sm font-inter text-white font-medium italic">
                              "{service.highlight}"
                            </blockquote>
                          </div>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-syne font-bold text-xs tracking-widest hover:bg-zinc-200 transition-all shadow-lg"
                          >
                            <span>BOOK THIS SERVICE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Deliverables Checklist Grid */}
                        <div className="lg:col-span-6 space-y-3 bg-black/40 p-6 rounded-xl border border-white/10">
                          <span className="text-[10px] font-syne font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-4">
                            // DELIVERABLES & CAPABILITIES
                          </span>
                          <div className="grid grid-cols-1 gap-2.5">
                            {service.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-xs font-inter text-zinc-300">
                                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
