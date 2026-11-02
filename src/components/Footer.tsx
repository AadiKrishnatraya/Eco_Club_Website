import React from 'react';
import { Leaf, ArrowUpRight } from 'lucide-react';
import { EcoLogo } from './Logo.tsx';
import { Magnetic } from './Magnetic.tsx';

const FOOTER_NAV = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Team', href: '#team' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Join Us', href: '#join' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#090d0b] text-stone-300 pt-16 pb-12 border-t border-black/[0.08] dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <EcoLogo variant="light" size="lg" />

            <p className="text-stone-400 text-sm leading-relaxed max-w-md pt-2">
              Eco Club is the official student-led environmental and sustainability initiative of{' '}
              <strong className="text-stone-200">ABES Engineering College</strong>, Ghaziabad, Uttar Pradesh, India.
            </p>

            <div className="font-mono text-xs font-semibold text-emerald-400 tracking-wider pt-1">
              “THINK. ACT. CODE. WORK GREENER.”
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Connect With Us
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Follow our official Instagram for real-time announcements, stories, and green initiatives.
            </p>
            <Magnetic strength={0.22} maxDistance={7}>
              <a
                href="https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/15 text-pink-300 hover:bg-pink-500/25 hover:text-white border border-pink-500/30 text-xs font-semibold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@abes_ecoclub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>

            <div className="mt-4 text-[11px] text-stone-500">
              ABES Engineering College, 19th KM Stone, NH-09, Ghaziabad, Uttar Pradesh 201009
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Sustainability Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {currentYear} Eco Club, ABES Engineering College. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Built with care for a greener, cleaner planet</span>
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
