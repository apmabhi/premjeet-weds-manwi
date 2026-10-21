import React from 'react';

// Royal Indian Gold Corner Flourish
export const GoldCornerOrnament: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = 'w-16 h-16', position = 'top-left' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#d4af37] ${rotationClass} ${className} pointer-events-none select-none`}
      aria-hidden="true"
    >
      <path
        d="M2 2 H60 C40 2, 40 20, 20 40 C2 40, 2 60, 2 2 Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Outer border lines */}
      <path d="M4 4 H75 M4 4 V75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 10 H55 M10 10 V55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3" />
      {/* Elegant scroll flourishes */}
      <path
        d="M4 4 Q 45 15 35 45 Q 25 35 15 35 Q 35 30 4 4"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <circle cx="16" cy="16" r="3.5" fill="currentColor" />
      <circle cx="35" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="35" r="2" fill="currentColor" />
      {/* Floral petals */}
      <path
        d="M20 20 C 30 15, 35 25, 20 30 C 25 35, 15 30, 20 20 Z"
        fill="currentColor"
      />
    </svg>
  );
};

// Royal Indian Mandala Motif (Center / Decorative Accent)
export const IndianMandalaMotif: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#d4af37] ${className} pointer-events-none select-none`}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
    <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
    <circle cx="100" cy="100" r="18" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
    <circle cx="100" cy="100" r="6" fill="currentColor" />

    {/* 8-Petal Radiance */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        {/* Outer petal */}
        <path
          d="M100 15 C110 40 120 60 100 70 C80 60 90 40 100 15 Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="100" cy="28" r="3" fill="currentColor" />
        {/* Inner flourish */}
        <path
          d="M100 55 C106 68 112 78 100 84 C88 78 94 68 100 55 Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <line x1="100" y1="85" x2="100" y2="92" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ))}
  </svg>
);

// Traditional Indian Lotus (Kamal) Blossom
export const IndianLotusMotif: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#d4af37] ${className} select-none`}
    aria-hidden="true"
  >
    {/* Center petal */}
    <path
      d="M50 10 C56 28 62 48 50 65 C38 48 44 28 50 10 Z"
      fill="currentColor"
      fillOpacity="0.4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Inner left & right petals */}
    <path
      d="M50 65 C30 52 26 30 40 22 C48 35 48 52 50 65 Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M50 65 C70 52 74 30 60 22 C52 35 52 52 50 65 Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    {/* Outer side petals */}
    <path
      d="M50 65 C20 62 10 40 25 35 C34 46 42 58 50 65 Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M50 65 C80 62 90 40 75 35 C66 46 58 58 50 65 Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1"
    />
    {/* Base pod */}
    <path
      d="M32 66 C42 74 58 74 68 66 C60 70 40 70 32 66 Z"
      fill="currentColor"
    />
  </svg>
);

// Traditional Golden Divider with Floral Center
export const GoldFloralDivider: React.FC<{ className?: string; title?: string }> = ({
  className = 'my-6',
  title,
}) => (
  <div className={`flex items-center justify-center gap-3 w-full ${className}`}>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#d4af37]" />
    <div className="flex items-center gap-2 text-[#d4af37] px-2 shrink-0">
      <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
      <IndianLotusMotif className="w-7 h-6 text-[#e8c86d]" />
      {title && (
        <span className="text-xs uppercase tracking-[0.25em] font-cinzel text-[#f5ebd7] font-semibold mx-1">
          {title}
        </span>
      )}
      <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
    </div>
    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#d4af37]" />
  </div>
);

// Elegant Paisley / Kalka Accent
export const GoldPaisleyAccent: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#d4af37] ${className}`}
    aria-hidden="true"
  >
    <path
      d="M30 85 C15 70 12 42 28 25 C45 8 72 12 78 30 C84 46 72 65 55 68 C45 70 40 60 48 54 C54 50 60 42 55 35 C50 28 38 32 35 42 C32 52 38 68 45 72 C50 75 42 84 30 85 Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="50" cy="38" r="4" fill="currentColor" />
  </svg>
);
