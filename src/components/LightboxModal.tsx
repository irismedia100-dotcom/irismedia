import React, { useState, useEffect } from 'react';
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
  Check
} from 'lucide-react';
import type { PortfolioItem } from '../data/portfolio';
import { CustomVideoPlayer } from './CustomVideoPlayer';

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
  // Default showInfo to false
  const [showInfo, setShowInfo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

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
              videoUrl={project.videoUrl}
              posterUrl={project.imageUrl}
              title={project.title}
            />
          </div>
        ) : (
          <div
            onClick={handleImageClick}
            onContextMenu={handleImageContextMenu}
            className="relative max-h-full max-w-full flex items-center justify-center protected-image-container cursor-pointer group"
            title="Left Click for Next Photo | Right Click for Previous Photo"
          >
            {/* Entire Un-cropped Photo Container */}
            <img
              src={project.imageUrl}
              alt={project.title}
              onDragStart={(e) => e.preventDefault()}
              className="max-h-[82vh] max-w-[94vw] w-auto h-auto object-contain shadow-xl rounded-sm select-none pointer-events-none transition-all duration-300"
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
      <div className="py-4 md:py-5 px-4 md:px-12 bg-white border-t border-neutral-100 flex items-center justify-center gap-5 md:gap-9 text-neutral-500 select-none z-30 shrink-0">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="p-1.5 hover:text-neutral-900 transition-colors"
          title="Previous Photo (Or Right-Click Image)"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Index Counter */}
        <span className="text-xs font-mono text-neutral-600 min-w-[70px] text-center tracking-wider font-medium">
          {currentIndex + 1} of {totalCount}
        </span>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="p-1.5 hover:text-neutral-900 transition-colors"
          title="Next Photo (Or Left-Click Image)"
        >
          <ChevronRight size={20} />
        </button>

        <div className="h-4 w-px bg-neutral-200 mx-1" />

        {/* Grid View Toggle */}
        <button
          onClick={onClose}
          className="p-1.5 hover:text-neutral-900 transition-colors"
          title="Back to Grid View"
        >
          <Grid size={18} />
        </button>

        {/* Play / Pause Slideshow */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-1.5 transition-colors ${isPlaying ? 'text-neutral-900 font-bold' : 'hover:text-neutral-900'}`}
          title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 hover:text-neutral-900 transition-colors"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>

        {/* Info Toggle Button (Click to show/hide Info description line) */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className={`p-1.5 transition-colors ${showInfo ? 'text-neutral-900 font-bold bg-neutral-100 rounded-full' : 'hover:text-neutral-900'}`}
          title="Toggle Photo Description"
        >
          <Info size={18} />
        </button>

        {/* Share Button (Copies direct link to image) */}
        <button
          onClick={handleShare}
          className="p-1.5 hover:text-neutral-900 transition-colors relative flex items-center gap-1.5"
          title="Share direct link to this image"
        >
          {copiedLink ? (
            <>
              <Check size={18} className="text-emerald-600" />
              <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">Copied!</span>
            </>
          ) : (
            <Share2 size={18} />
          )}
        </button>
      </div>
    </div>
  );
};
