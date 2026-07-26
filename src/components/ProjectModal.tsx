import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, ExternalLink, Film } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';
import type { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!project) return null;

  const hasGallery = project.galleryImages && project.galleryImages.length > 0;

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#0D0D0D] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Top Bar with Title & Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-syne font-bold tracking-widest text-zinc-400 uppercase">
                {project.category} // {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Container for Media & Details */}
          <div className="flex-1 overflow-y-auto">
            {/* Photo Gallery Showcase */}
            {hasGallery ? (
              <div className="bg-black p-4 space-y-4">
                {/* Main Active Image Display */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10 group">
                  <img
                    src={project.galleryImages![activeImageIndex]}
                    alt={`${project.title} - Image ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-syne font-bold text-white">
                    {activeImageIndex + 1} / {project.galleryImages!.length}
                  </div>
                </div>

                {/* Thumbnails Row — Touch-friendly scroll */}
                <div
                  className="flex items-center gap-3 overflow-x-auto pb-3"
                  style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
                >
                  {project.galleryImages!.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{ scrollSnapAlign: 'start' }}
                      className={`relative w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 rounded-xl overflow-hidden shrink-0 border-2 transition-all touch-pan-x ${
                        activeImageIndex === idx
                          ? 'border-white scale-105 shadow-lg shadow-white/20'
                          : 'border-transparent opacity-50 hover:opacity-100 active:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            ) : project.videoUrl ? (
              /* Main Video Player Container */
              <div className="relative aspect-video w-full bg-black group shrink-0">
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-syne font-bold text-white border border-white/20">
                      {project.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-transform hover:scale-105"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                    </div>

                    {project.facebookUrl ? (
                      <a
                        href={project.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-syne font-bold text-white hover:bg-white hover:text-black transition-all"
                      >
                        <FacebookIcon className="w-4 h-4" />
                        <span>WATCH ON FACEBOOK</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-syne font-bold text-white hover:bg-white hover:text-black transition-all"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span>WATCH ON INSTAGRAM</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Project Details Body */}
            <div className="p-6 md:p-8 space-y-8 bg-[#0D0D0D]">
            {/* Header Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h2 className="font-syne text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
                  {project.title}
                </h2>
                <p className="text-zinc-400 font-inter text-sm mt-1">
                  Client: <span className="text-white font-medium">{project.client}</span>
                </p>
              </div>

              {project.facebookUrl ? (
                <a
                  href={project.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-syne font-bold text-xs tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-105 self-start md:self-auto shadow-lg"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>VIEW REEL ON FACEBOOK</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-syne font-bold text-xs tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-105 self-start md:self-auto shadow-lg"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>VIEW REEL ON INSTAGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Description & Credits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column: Overview */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xs font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase">
                  // PROJECT OVERVIEW
                </h3>
                <p className="text-zinc-300 font-inter leading-relaxed text-sm md:text-base font-light">
                  {project.description}
                </p>

                {/* Facebook Post Embed If Available */}
                {project.embedCode && (
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-xs font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase mb-3">
                      // OFFICIAL FACEBOOK POST
                    </h3>
                    <div
                      className="rounded-xl overflow-hidden bg-white/5 border border-white/10 p-2 flex justify-center"
                      dangerouslySetInnerHTML={{ __html: project.embedCode }}
                    />
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-syne text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Credits Table */}
              <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <h3 className="text-xs font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase">
                  // PRODUCTION CREDITS
                </h3>
                <div className="space-y-3">
                  {project.credits.map((credit, i) => (
                    <div key={i} className="flex flex-col text-xs border-b border-white/5 pb-2">
                      <span className="text-zinc-500 font-inter">{credit.role}</span>
                      <span className="text-white font-syne font-semibold">{credit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
