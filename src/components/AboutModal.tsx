import React from 'react';
import { X, Award, Zap, ShieldCheck } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md transition-all select-none">
      <div className="bg-white text-neutral-900 rounded-lg shadow-2xl max-w-2xl w-full p-8 relative overflow-hidden border border-neutral-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Logo & Header */}
        <div className="mb-8 border-b border-neutral-100 pb-6 text-center">
          <img
            src="/assets/iris-logo-01.png"
            alt="IRIS Media Production"
            className="h-14 w-auto mx-auto mb-4 object-contain"
          />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block mb-2">
            LUXURY VISUAL PRODUCTION AGENCY
          </span>
          <h2 className="font-serif-heading text-3xl font-normal tracking-wide text-neutral-900">
            We Don't Just Shoot — We Craft Moments.
          </h2>
        </div>

        {/* Story Content */}
        <div className="space-y-6 text-xs text-neutral-600 leading-relaxed font-sans">
          <p className="text-sm font-serif-heading italic text-neutral-800 border-l-2 border-neutral-900 pl-4 py-1">
            "At IRIS Media Production, we believe that some stories don't need words... they just need the right frame."
          </p>

          <p>
            We are a premier media and visual production agency specializing in creating cinematic content and luxury visual marketing for iconic spaces: five-star hotels, luxury resorts, Nile cruises, maritime superyachts, and desert architecture.
          </p>

          <p>
            Our agency bridges our clients' vision with stunning visual reality, relying on global filming, drone technology, and high-end post-production color science.
          </p>

          {/* Differentiators Grid */}
          <div className="pt-4 border-t border-neutral-100">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              What Sets Us Apart
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded border border-neutral-100 bg-neutral-50/50">
                <Award size={18} className="text-neutral-900 mb-2" />
                <h4 className="font-semibold text-neutral-900 mb-1 uppercase text-[10px]">
                  Cinematic Precision
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Treating every frame as artwork — from lighting angles to final color grading.
                </p>
              </div>

              <div className="p-4 rounded border border-neutral-100 bg-neutral-50/50">
                <Zap size={18} className="text-neutral-900 mb-2" />
                <h4 className="font-semibold text-neutral-900 mb-1 uppercase text-[10px]">
                  Same-Day Edit (SDE)
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Live coverage and instant editing delivery during major galas & conferences.
                </p>
              </div>

              <div className="p-4 rounded border border-neutral-100 bg-neutral-50/50">
                <ShieldCheck size={18} className="text-neutral-900 mb-2" />
                <h4 className="font-semibold text-neutral-900 mb-1 uppercase text-[10px]">
                  Luxury Mastery
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Expertise in capturing hospitality prestige, resort vibes, and marine elegance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">
            © 2026 IRIS Media Production — All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
