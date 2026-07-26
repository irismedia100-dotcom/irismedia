import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  cursorText?: string;
  isHovered?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorText = '', isHovered = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/40 mix-blend-difference flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : isHovered ? 24 : 12),
          y: mousePosition.y - (cursorText ? 40 : isHovered ? 24 : 12),
          width: cursorText ? 80 : isHovered ? 48 : 24,
          height: cursorText ? 80 : isHovered ? 48 : 24,
          backgroundColor: cursorText ? 'rgba(255, 255, 255, 0.95)' : isHovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          scale: isHovered || cursorText ? 1.1 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-syne font-bold tracking-widest text-black uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: isHovered ? 0.3 : 1
          }}
          transition={{
            type: 'spring',
            stiffness: 800,
            damping: 35
          }}
        />
      )}
    </div>
  );
};
