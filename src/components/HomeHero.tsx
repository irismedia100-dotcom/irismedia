import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HomeHeroProps {
  onExplore: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onExplore }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[55vh] md:h-[60vh] min-h-[400px] max-h-[560px] pt-16 flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Video Reel */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source src="/videos/11.mp4" type="video/mp4" />
          <source src="11.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Vignette / Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
      </div>

      {/* Main Headline Text */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.15] drop-shadow-2xl max-w-4xl">
          WE DON’T JUST SHOOT — WE CRAFT MOMENTS.
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-300 font-light tracking-widest uppercase max-w-xl drop-shadow">
          360° Integrated Luxury Media & Hospitality Production
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={onExplore}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[9px] uppercase font-bold tracking-[0.25em]">SCROLL</span>
        <ChevronDown size={18} className="animate-bounce group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
