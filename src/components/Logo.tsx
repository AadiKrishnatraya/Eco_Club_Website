import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'emerald';
}

export const EcoLogo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'emerald',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const subTextSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Bespoke Original Vector Emblem: Dual-Leaf Sprout inside an Orbital Eco Ring with Circuit Nodes */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-950 text-emerald-200 p-1.5 shadow-sm shadow-emerald-900/15 border border-emerald-600/30`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Orbital Eco Ring (Circular Sustainability Loop) */}
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeDasharray="4 2.5"
            strokeOpacity="0.45"
          />

          {/* Earth curve arc */}
          <path
            d="M8 28C11 36 21 41 29 39"
            stroke="#6ee7b7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Circuit Tech Nodes representing 'Code Greener' */}
          <circle cx="29" cy="39" r="2" fill="#34d399" />
          <path d="M29 39L35 34" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="35" cy="34" r="1.5" fill="#a7f3d0" />

          {/* Central Sprout Stem */}
          <path
            d="M24 37V22C24 16.5 28 13 32 12"
            stroke="#ecfdf5"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Primary Leaf (Right) */}
          <path
            d="M24 22C28 17 37 18 36 26C31 28 26 25 24 22Z"
            fill="#10b981"
            fillOpacity="0.9"
            stroke="#a7f3d0"
            strokeWidth="1.2"
          />

          {/* Secondary Leaf (Left - Sprouting) */}
          <path
            d="M24 27C19 23 13 26 14 31C18 33 22 30 24 27Z"
            fill="#34d399"
            stroke="#ecfdf5"
            strokeWidth="1.2"
          />

          {/* Central Sun/Sprout Pulse */}
          <circle cx="24" cy="12" r="2" fill="#fef08a" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-bold tracking-tight ${textSizes[size]} ${
                variant === 'light'
                  ? 'text-white'
                  : 'text-emerald-950 dark:text-emerald-50'
              }`}
            >
              Eco Club
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-1.5 py-0.2 rounded border border-emerald-300/60">
              ABES EC
            </span>
          </div>
          <span
            className={`font-medium tracking-normal ${subTextSizes[size]} ${
              variant === 'light' ? 'text-emerald-200/80' : 'text-emerald-800/80'
            }`}
          >
            ABES Engineering College
          </span>
        </div>
      )}
    </div>
  );
};
