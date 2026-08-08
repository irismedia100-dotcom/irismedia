import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface CustomVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title?: string;
}

/** Handle exposed to parent via ref */
export interface CustomVideoPlayerHandle {
  setQuality: (quality: number | string) => void;
  isVimeo: boolean;
  qualityOptions: (number | string)[];
}

/** Extract Vimeo video ID from various Vimeo URL formats */
function getVimeoId(url: string): string | null {
  const m = url.match(/(?:vimeo\.com\/video\/|vimeo\.com\/)(\d+)/);
  return m ? m[1] : null;
}

/** Generates multi-resolution quality sources for Cloudinary video URLs. */
function getQualitySources(url: string): { src: string; type: string; size: number }[] {
  if (!url) return [];
  if (!url.includes('cloudinary.com')) {
    return [{ src: url, type: 'video/mp4', size: 720 }];
  }
  const baseUrl = url.replace(/\/upload\/([a-zA-Z0-9_,]+\/)/, '/upload/');
  return [
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_720/'),  type: 'video/mp4', size: 720 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_360/'),  type: 'video/mp4', size: 360 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_480/'),  type: 'video/mp4', size: 480 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_1080/'), type: 'video/mp4', size: 1080 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_1440/'), type: 'video/mp4', size: 1440 },
    { src: baseUrl.replace('/upload/', '/upload/q_auto,h_2160/'), type: 'video/mp4', size: 2160 },
  ];
}

const CLOUDINARY_QUALITY_OPTIONS: number[] = [2160, 1440, 1080, 720, 480, 360];
const VIMEO_QUALITY_OPTIONS: string[] = ['4K', '1080p', '720p', '540p', '360p', '240p'];

export const CustomVideoPlayer = forwardRef<CustomVideoPlayerHandle, CustomVideoPlayerProps>(({
  videoUrl,
  posterUrl,
  title = 'IRIS Video',
}, ref) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const vimeoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);

  const vimeoId = videoUrl ? getVimeoId(videoUrl) : null;
  const isVimeo = !!vimeoId;

  // Expose setQuality and metadata to parent via ref
  useImperativeHandle(ref, () => ({
    setQuality: (quality: number | string) => {
      if (playerRef.current) {
        try {
          (playerRef.current as any).quality = quality;
        } catch { /* ignore */ }
      }
    },
    isVimeo,
    qualityOptions: isVimeo ? VIMEO_QUALITY_OPTIONS : CLOUDINARY_QUALITY_OPTIONS,
  }), [isVimeo]);

  useEffect(() => {
    const PlyrClass = (typeof Plyr === 'function'
      ? Plyr
      : (Plyr as unknown as { default: typeof Plyr }).default) as typeof Plyr;

    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
    }

    const timer = setTimeout(() => {
      try {
        if (isVimeo && vimeoRef.current) {
          const player = new PlyrClass(vimeoRef.current, {
            controls: [
              'play-large', 'play', 'progress', 'current-time',
              'duration', 'mute', 'volume', 'settings', 'fullscreen',
            ],
            settings: ['quality', 'speed'],
            quality: {
              default: '1080p' as any,
              options: ['4K', '1080p', '720p', '540p', '360p', '240p'] as any,
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
            },
            ratio: '16:9',
          });
          playerRef.current = player;

        } else if (videoRef.current && videoUrl) {
          const video = videoRef.current;
          while (video.firstChild) video.removeChild(video.firstChild);

          const sources = getQualitySources(videoUrl);
          sources.forEach(({ src, type, size }) => {
            const el = document.createElement('source');
            el.src = src;
            el.type = type;
            el.setAttribute('size', String(size));
            video.appendChild(el);
          });

          if (posterUrl) video.poster = posterUrl;
          video.load();

          const player = new PlyrClass(video, {
            controls: [
              'play-large', 'play', 'progress', 'current-time',
              'duration', 'mute', 'volume', 'settings', 'pip', 'airplay', 'fullscreen',
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
        }
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
  }, [videoUrl, posterUrl, isVimeo]);

  return (
    <div
      className="relative w-full bg-black rounded-xl overflow-hidden select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {isVimeo ? (
        <div
          ref={vimeoRef}
          data-plyr-provider="vimeo"
          data-plyr-embed-id={vimeoId!}
          aria-label={title}
        />
      ) : (
        <video
          ref={videoRef}
          playsInline
          controls
          className="w-full"
          aria-label={title}
        />
      )}
    </div>
  );
});

CustomVideoPlayer.displayName = 'CustomVideoPlayer';
