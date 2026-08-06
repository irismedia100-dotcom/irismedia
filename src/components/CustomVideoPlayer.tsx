import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface CustomVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title?: string;
}

/**
 * Generates multi-resolution quality sources for Cloudinary video URLs.
 */
function getQualitySources(url: string): { src: string; type: string; size: number }[] {
  if (!url) return [];

  if (!url.includes('cloudinary.com')) {
    return [{ src: url, type: 'video/mp4', size: 720 }];
  }

  // Strip any existing transformations and rebuild clean base URL
  const baseUrl = url.replace(/\/upload\/([a-zA-Z0-9_,]+\/)/, '/upload/');

  // Order: 720p first so the browser loads the right duration (not a tiny 360p preview)
  return [
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_720/'),  type: 'video/mp4', size: 720 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_360/'),  type: 'video/mp4', size: 360 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_480/'),  type: 'video/mp4', size: 480 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_1080/'), type: 'video/mp4', size: 1080 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_1440/'), type: 'video/mp4', size: 1440 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_2160/'), type: 'video/mp4', size: 2160 },
  ];
}

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title = 'IRIS Video',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    // Destroy any existing Plyr instance
    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
    }

    // Clear existing source children
    while (video.firstChild) {
      video.removeChild(video.firstChild);
    }

    // Build <source> elements with 'size' attribute so Plyr detects quality options
    const sources = getQualitySources(videoUrl);
    sources.forEach(({ src, type, size }) => {
      const el = document.createElement('source');
      el.src = src;
      el.type = type;
      el.setAttribute('size', String(size));
      video.appendChild(el);
    });

    // Set poster
    if (posterUrl) video.poster = posterUrl;

    // Force browser to re-detect the new source elements
    video.load();

    // Resolve Plyr constructor (handles both ESM default and CJS exports)
    const PlyrClass = (typeof Plyr === 'function'
      ? Plyr
      : (Plyr as unknown as { default: typeof Plyr }).default) as typeof Plyr;

    // Initialize Plyr after a short tick so the DOM sources are registered
    const timer = setTimeout(() => {
      try {
        const player = new PlyrClass(video, {
          controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'settings',
            'pip',
            'airplay',
            'fullscreen',
          ],
          settings: ['quality', 'speed'],
          quality: {
            default: 720,
            options: [2160, 1440, 1080, 720, 480, 360],
            forced: true,
          },
          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
          },
          i18n: {
            quality: 'الجودة',
            speed: 'السرعة',
            normal: 'عادي',
            qualityLabel: {
              360:  '360p',
              480:  '480p SD',
              720:  '720p HD',
              1080: '1080p Full HD',
              1440: '1440p 2K',
              2160: '2160p 4K',
            },
          },
          ratio: '16:9',
        });

        playerRef.current = player;
      } catch (err) {
        console.error('Plyr init error:', err);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch { /* ignore */ }
        playerRef.current = null;
      }
    };
  }, [videoUrl, posterUrl]);

  return (
    <div
      className="relative w-full bg-black rounded-xl overflow-hidden select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Plyr wraps this video element and takes over the controls */}
      <video
        ref={videoRef}
        playsInline
        controls
        className="w-full"
        aria-label={title}
      />
    </div>
  );
};
