import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <>
      {/* SVG Noise Texture Background */}
      <div className="fixed inset-0 pointer-events-none z-30 bg-noise opacity-40 mix-blend-overlay" />
      
      {/* Dark Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
    </>
  );
};
