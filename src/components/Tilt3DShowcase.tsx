import React, { useRef, useState } from 'react';

interface Tilt3DShowcaseProps {
  image: string;
  alt: string;
  badgeIcon?: string;
}

export const Tilt3DShowcase: React.FC<Tilt3DShowcaseProps> = ({
  image,
  alt,
  badgeIcon = 'spa'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const MAX_TILT = 12;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 2 * MAX_TILT;
    const rotateX = -(py - 0.5) * 2 * MAX_TILT;

    setRotate({
      x: rotateX,
      y: rotateY
    });

    setGlare({
      x: px * 100,
      y: py * 100
    });
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[9000px] select-none"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative transition-transform duration-300 ease-out will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        {/* Product Card */}
        <div
          className="relative rounded-[1.75rem] overflow-hidden shadow-2xl border border-[#cba72f]/25 bg-white"
          style={{ transform: 'translateZ(0px)' }}
        >
          <img
            src={image}
            alt={alt}
            className="block w-full h-auto object-contain"
            draggable={false}
          />

          {/* Cursor-following glare */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: hovering ? 1 : 0,
              background: `radial-gradient(
                circle at ${glare.x}% ${glare.y}%,
                rgba(255,255,255,0.35),
                transparent 55%
              )`
            }}
          />

          {/* Permanent sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
        </div>

        {/* Floating Badge */}
        <span
          className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#012d1d] text-[#ffe088] flex items-center justify-center shadow-lg border-4 border-[#f8f9fa] dark:border-[#121614]"
          style={{
            transform: `translateZ(48px) rotateX(${-rotate.x * 0.4}deg) rotateY(${-rotate.y * 0.4}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl">
            {badgeIcon}
          </span>
        </span>

        {/* Contact Shadow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 rounded-full bg-black/20 dark:bg-black/40 blur-xl transition-transform duration-300"
          style={{
            transform: `translateX(${-rotate.y * 1.2}px) scale(${1 - Math.abs(rotate.x) / 60})`,
            zIndex: -1
          }}
        />
      </div>
    </div>
  );
};