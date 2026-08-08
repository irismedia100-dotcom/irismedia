import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Info,
  Share2,
  X,
  Check,
  Gauge
} from 'lucide-react';
import type { PortfolioItem } from '../data/portfolio';
import { CustomVideoPlayer, type CustomVideoPlayerHandle } from './CustomVideoPlayer';

interface LightboxModalProps {
  project: PortfolioItem | null;
  allProjects: PortfolioItem[];
  onClose: () => void;
  onSelectProject: (proj: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject
}) => {
  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const totalCount = allProjects.length;

  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState<number | string | null>(null);
  const videoPlayerRef = useRef<CustomVideoPlayerHandle>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allProjects]);

  // Slideshow auto advance
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, allProjects]);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % totalCount;
    onSelectProject(allProjects[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + totalCount) % totalCount;
    onSelectProject(allProjects[prevIdx]);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Copy direct link to image (?project=id)
  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?project=${project.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Mouse Left Click (Next) & Right Click (Prev) on image
  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNext();
  };

  const handleImageContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    handlePrev();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header Bar */}
      <div className="p-5 md:p-6 flex items-center justify-between z-30 border-b border-neutral-100/60 shrink-0">
        <div className="flex items-center gap-3.5">
          <img
            src="/assets/iris-logo-01.png"
            alt="IRIS Media Production"
            className="h-8 w-auto object-contain"
          />
          <div className="border-l border-neutral-200 pl-3">
            <span className="font-serif-heading font-bold text-sm text-neutral-900 tracking-wider block leading-none">
              IRIS MEDIA PRODUCTION
            </span>
            <span className="text-[9px] text-neutral-400 uppercase tracking-widest block mt-0.5 font-medium">
              {project.category} {project.type === 'video' && '// CINEMATIC FILM'}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors"
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Content Stage: Custom Video Player or Photo Container */}
      <div className={`relative flex-1 flex flex-col items-center justify-center w-full p-4 md:p-6 overflow-y-auto`}>
        {project.videoUrl ? (
          <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl">
            <CustomVideoPlayer
              ref={videoPlayerRef}
              videoUrl={project.videoUrl}
              posterUrl={project.imageUrl}
              title={project.title}
            />
          </div>
        ) : (
          <div
            onClick={handleImageClick}
            onContextMenu={handleImageContextMenu}
            className="relative flex items-center justify-center protected-image-container cursor-pointer w-full"
            title="Left Click for Next Photo | Right Click for Previous Photo"
          >
            {/* Full natural dimensions photo */}
            <img
              src={project.imageUrl}
              alt={project.title}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-auto max-h-[88vh] object-contain shadow-xl rounded-sm select-none pointer-events-none transition-all duration-300"
            />

            {/* Transparent Anti-Theft Overlay */}
            <div
              className="absolute inset-0 z-10 bg-transparent"
              onContextMenu={handleImageContextMenu}
            />
          </div>
        )}

        {/* Info Icon Single-Line Description Bar */}
        {showInfo && (
          <div className="absolute bottom-4 px-5 py-2 rounded-full bg-neutral-900/90 text-white shadow-lg text-center z-20 backdrop-blur-md transition-all animate-fade-in border border-white/20">
            <p className="text-[11px] font-sans tracking-tight leading-relaxed">
              <span className="font-semibold uppercase tracking-wider text-white">
                {project.title}
              </span>
              {' — '}
              <span className="text-neutral-300 font-medium">{project.location} ({project.year})</span>
              {project.designer && ` • Architecture: ${project.designer}`}
              {project.lighting && ` • Lighting: ${project.lighting}`}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Control Bar */}
      <div className="py-3 md:py-5 px-3 md:px-12 bg-white border-t border-neutral-100 flex items-center justify-center gap-2 sm:gap-6 md:gap-9 text-neutral-500 select-none z-30 shrink-0 flex-wrap sm:flex-nowrap">
        {/* Navigation Group */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="p-1 sm:p-1.5 hover:text-neutral-900 transition-colors"
            title="Previous Photo (Or Right-Click Image)"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Index Counter */}
          <span className="text-[11px] sm:text-xs font-mono text-neutral-600 min-w-[55px] sm:min-w-[70px] text-center tracking-wider font-medium">
            {currentIndex + 1} of {totalCount}
          </span>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="p-1 sm:p-1.5 hover:text-neutral-900 transition-colors"
            title="Next Photo (Or Left-Click Image)"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="h-4 w-px bg-neutral-200 hidden sm:block" />

        {/* Tools Action Group */}
        <div className="flex items-center gap-1.5 sm:gap-4">
          {/* Grid View Toggle */}
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 hover:text-neutral-900 transition-colors"
            title="Back to Grid View"
          >
            <Grid size={17} />
          </button>

          {/* Play / Pause Slideshow */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-1 sm:p-1.5 transition-colors ${isPlaying ? 'text-neutral-900 font-bold' : 'hover:text-neutral-900'}`}
            title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          >
            {isPlaying ? <Pause size={17} /> : <Play size={17} />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1 sm:p-1.5 hover:text-neutral-900 transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>

          {/* Info Toggle Button */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-1 sm:p-1.5 transition-colors ${showInfo ? 'text-neutral-900 font-bold bg-neutral-100 rounded-full' : 'hover:text-neutral-900'}`}
            title="Toggle Photo Description"
          >
            <Info size={17} />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-1 sm:p-1.5 hover:text-neutral-900 transition-colors relative flex items-center gap-1"
            title="Share direct link to this image"
          >
            {copiedLink ? (
              <>
                <Check size={17} className="text-emerald-600" />
                <span className="text-[9px] text-emerald-600 font-semibold uppercase tracking-wider hidden sm:inline">Copied!</span>
              </>
            ) : (
              <Share2 size={17} />
            )}
          </button>

          {/* Quality Selector — visible only for video items */}
          {project.videoUrl && (
            <div className="relative">
              <button
                onClick={() => setShowQualityMenu(!showQualityMenu)}
                className={`p-1 sm:p-1.5 transition-colors flex items-center gap-1 ${
                  showQualityMenu ? 'text-neutral-900 bg-neutral-100 rounded-full' : 'hover:text-neutral-900'
                }`}
                title="اختر جودة الفيديو"
              >
                <Gauge size={17} />
                {selectedQuality && (
                  <span className="text-[9px] font-bold uppercase tracking-wider hidden sm:inline">
                    {selectedQuality}
                  </span>
                )}
              </button>

              {/* Quality Dropdown */}
              {showQualityMenu && (
                <div className="absolute bottom-10 right-0 bg-white border border-neutral-200 rounded-xl shadow-2xl py-2 min-w-[110px] z-50">
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold px-3 pb-1.5 border-b border-neutral-100">
                    الجودة
                  </p>
                  {(videoPlayerRef.current?.qualityOptions ?? [2160, 1440, 1080, 720, 480, 360]).map((q) => {
                    const label = typeof q === 'number'
                      ? q === 2160 ? '4K' : q === 1440 ? '2K' : `${q}p`
                      : String(q);
                    const isActive = selectedQuality === q;
                    return (
                      <button
                        key={String(q)}
                        onClick={() => {
                          videoPlayerRef.current?.setQuality(q);
                          setSelectedQuality(q);
                          setShowQualityMenu(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-[11px] font-medium transition-colors ${
                          isActive
                            ? 'bg-neutral-900 text-white'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
