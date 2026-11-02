import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Section {
  id: string;
  name: string;
}

const SECTIONS: Section[] = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'team', name: 'Team' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'events', name: 'Events' },
  { id: 'join', name: 'Join Us' },
  { id: 'contact', name: 'Contact' },
];

export const ScrollProgressNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero top
      setIsVisible(window.scrollY > 300);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const item = SECTIONS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 24, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 24, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Quick section navigation"
          className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto"
        >
          <div className="p-2 rounded-full apple-glass border border-slate-200/80 dark:border-white/10 shadow-lg flex flex-col items-center gap-2">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              const isHovered = hoveredSection === sec.id;
              return (
                <div
                  key={sec.id}
                  className="relative flex items-center justify-end"
                  onMouseEnter={() => setHoveredSection(sec.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  {/* Tooltip on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: -6, scale: 0.95 }}
                        animate={{ opacity: 1, x: -12, scale: 1 }}
                        exit={{ opacity: 0, x: -6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-full px-2.5 py-1 rounded-md bg-stone-900/90 dark:bg-white text-white dark:text-stone-900 text-xs font-semibold whitespace-nowrap shadow-md pointer-events-none"
                      >
                        {sec.name}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation dot / pill */}
                  <button
                    onClick={() => scrollTo(sec.id)}
                    aria-label={`Scroll to ${sec.name}`}
                    className="relative p-1.5 rounded-full flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none"
                  >
                    <div
                      className={`transition-all duration-300 rounded-full ${
                        isActive
                          ? 'w-2.5 h-6 bg-emerald-600 dark:bg-emerald-400 shadow-sm shadow-emerald-600/50'
                          : 'w-2 h-2 bg-stone-400/60 dark:bg-stone-500/60 hover:bg-stone-700 dark:hover:bg-stone-300 hover:scale-125'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
