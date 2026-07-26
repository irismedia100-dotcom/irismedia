import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/translations';

interface HeroProps {
  lang: Language;
  onHoverStart?: (text: string) => void;
  onHoverEnd?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onHoverStart, onHoverEnd }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = TRANSLATIONS[lang].hero;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden bg-black">
      {/* Background Video Reel with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-125 opacity-40 transition-all duration-700"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-a-futuristic-city-at-night-42861-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Vignette over Video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_90%)]" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-start gap-8">
        
        {/* Top Tag / Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-zinc-300 animate-pulse" />
          <span className="text-[11px] font-syne font-bold tracking-[0.25em] text-zinc-300 uppercase">
            {t.pill}
          </span>
        </motion.div>

        {/* Large Impact Typography: Staggered Words */}
        <div className="w-full">
          <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight leading-[0.95] text-white uppercase max-w-6xl">
            {t.titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block mr-[0.25em] ${
                  word === 'CRAFT' || word === 'MOMENTS.' || word === 'نصنع' || word === 'اللحظات.'
                    ? 'font-editorial italic font-normal text-gradient-mono tracking-normal'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Sub-headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 pt-4 border-t border-white/10"
        >
          <p className="text-zinc-300 font-inter text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            {t.subtitle}
          </p>

          {/* Quick CTA Actions & Video Controls */}
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="px-8 py-3.5 rounded-full bg-white text-black font-syne font-bold text-xs tracking-widest hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 shadow-xl"
              onMouseEnter={() => onHoverStart?.('WORK')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              {t.exploreReel}
            </a>

            {/* Video Controls */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full p-1 bg-black/40 backdrop-blur-md">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                title={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Metrics Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
      >
        {/* Scroll Indicator */}
        <a
          href="#work"
          className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
          onMouseEnter={() => onHoverStart?.('SCROLL')}
          onMouseLeave={() => onHoverEnd?.()}
        >
          <div className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </div>
          <span className="text-[10px] font-syne font-bold tracking-[0.25em] uppercase">
            {t.scrollToExplore}
          </span>
        </a>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-6 text-xs font-inter text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="text-white font-syne font-bold">{t.statsProjects}</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div>
            <span className="text-white font-syne font-bold">{t.statsSpeed}</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div>
            <span className="text-white font-syne font-bold">{t.statsTarget}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
