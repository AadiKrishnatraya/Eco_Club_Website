import React, { useState } from 'react';
import { ArrowRight, X, Bell } from 'lucide-react';

interface Announcement {
  id: string;
  tag: string;
  message: string;
  status: string;
  targetId: string;
}

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'treasure-hunt',
    tag: 'Upcoming Activity',
    message: 'Eco Treasure Hunt',
    status: 'Date to be announced soon',
    targetId: 'events',
  },
  {
    id: 'hackathon',
    tag: 'Flagship Challenge',
    message: 'Eco Hackathon',
    status: 'Date to be announced soon',
    targetId: 'events',
  },
  {
    id: 'general-update',
    tag: 'Official Notice',
    message: 'Stay connected with Eco Club for future updates',
    status: 'Official Channels',
    targetId: 'contact',
  },
];

export const AnnouncementBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const current = ANNOUNCEMENTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="region"
      aria-label="Campus announcements"
      className="bg-emerald-950/60 dark:bg-[#070b09]/60 backdrop-blur-2xl text-white text-xs sm:text-[13px] border-b border-emerald-500/15 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* Left Badge & Current Announcement */}
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 text-emerald-400 font-medium uppercase tracking-wider text-[11px] shrink-0">
            <Bell className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline">Bulletin:</span>
          </div>

          <div className="flex items-center gap-2 truncate">
            <span className="text-emerald-100 font-normal truncate">
              <strong className="text-white font-medium">{current.message}</strong>
              <span className="text-emerald-400/60 mx-1.5" aria-hidden="true">—</span>
              <span className="text-emerald-200/90">{current.status}</span>
            </span>

            <button
              onClick={() => scrollToSection(current.targetId)}
              className="hidden md:inline-flex items-center gap-1 text-emerald-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer text-xs shrink-0 ml-1"
            >
              <span>View</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Carousel indicators and controls */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-400/70 font-mono">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{ANNOUNCEMENTS.length}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous announcement"
              className="p-1 rounded-md text-emerald-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next announcement"
              className="p-1 rounded-md text-emerald-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement banner"
            className="p-1 rounded-md text-emerald-300/80 hover:text-white hover:bg-white/10 transition-colors ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
