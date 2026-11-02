import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Bot } from 'lucide-react';
import { EcoLogo } from './Logo.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { Magnetic } from './Magnetic.tsx';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Our Team', href: '#team', id: 'team' },
  { name: 'Gallery', href: '#gallery', id: 'gallery' },
  { name: 'Events', href: '#events', id: 'events' },
  { name: 'Join Us', href: '#join', id: 'join' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-[#0c0f0d]/75 backdrop-blur-2xl shadow-xs border-b border-black/[0.06] dark:border-white/[0.08]'
          : 'bg-white/50 dark:bg-[#0c0f0d]/50 backdrop-blur-xl border-b border-black/[0.03] dark:border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1"
          >
            <EcoLogo size="md" variant={theme === 'dark' ? 'light' : 'emerald'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2 text-[13px] font-medium tracking-tight transition-all relative rounded-xl ${
                    isActive
                      ? 'text-emerald-950 dark:text-emerald-300 font-semibold bg-emerald-500/10 dark:bg-emerald-400/10'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs: Theme Toggle & Instagram & Join with Magnetic hover */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Apple-style Light / Dark Mode Toggle */}
            <Magnetic strength={0.2} maxDistance={6}>
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2.5 rounded-xl text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] transition-all cursor-pointer"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>
            </Magnetic>

            {/* Instagram Link */}
            <Magnetic strength={0.2} maxDistance={6}>
              <a
                href="https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-stone-600 dark:text-stone-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-500/10 rounded-xl transition-colors border border-black/[0.06] dark:border-white/[0.08] inline-flex items-center justify-center"
                title="Follow Eco Club on Instagram"
                aria-label="Follow Eco Club on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </Magnetic>

            {/* EcoBot AI Assistant Trigger */}
            <Magnetic strength={0.2} maxDistance={6}>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-ecobot'))}
                className="px-3.5 py-2 text-xs font-semibold text-emerald-950 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/15 rounded-full border border-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
                title="Ask EcoBot AI"
                aria-label="Open EcoBot AI Chat"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>EcoBot AI</span>
              </button>
            </Magnetic>

            {/* Apple style Join Pill with Magnetic Hover */}
            <Magnetic strength={0.25} maxDistance={8}>
              <a
                href="#join"
                onClick={(e) => handleNavClick(e, '#join')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-full shadow-sm transition-all cursor-pointer"
              >
                <span>Join Club</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-stone-700 dark:text-stone-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] rounded-xl border border-black/[0.06] dark:border-white/[0.08]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 dark:text-stone-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] rounded-xl border border-black/[0.06] dark:border-white/[0.08] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Apple Glass */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/[0.06] dark:border-white/[0.08] bg-white/90 dark:bg-[#0c0f0d]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="text-[11px] font-semibold tracking-wider uppercase text-emerald-800 dark:text-emerald-400 px-3 py-1">
            Navigation Menu
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-950 dark:text-emerald-300 font-semibold'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-ecobot'));
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-950 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 rounded-xl border border-emerald-500/20 text-center cursor-pointer"
            >
              <Bot className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>Ask EcoBot AI</span>
            </button>

            <a
              href="https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-black/[0.03] dark:bg-white/[0.06] rounded-xl"
            >
              <span>Connect on Instagram</span>
            </a>

            <a
              href="#join"
              onClick={(e) => handleNavClick(e, '#join')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 rounded-xl text-center shadow-sm"
            >
              <span>Join Eco Club</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
