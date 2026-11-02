import React, { useRef } from 'react';
import { ArrowRight, Leaf, Cpu, Users, Compass, Calendar, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { StaggerContainer, StaggerItem, ScrollReveal } from '../components/ScrollReveal.tsx';
import { Magnetic } from '../components/Magnetic.tsx';

interface HeroProps {
  onJoinClick: () => void;
  onEventsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onEventsClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-linked dynamic parallax and scale transitions
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.65], [1, 0.1]);
  const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative pt-12 pb-24 lg:pt-24 lg:pb-36 overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        {/* Soft radial emerald aura */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-emerald-500/12 via-teal-500/6 to-transparent blur-3xl rounded-full"
        />

        {/* Minimal geometric grid */}
        <svg
          className="absolute inset-0 w-full h-full stroke-slate-900/[0.03] dark:stroke-white/[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="apple-eco-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#apple-eco-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Block with Scroll-linked Parallax */}
        <motion.div
          style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
          className="text-center max-w-4xl mx-auto will-change-transform"
        >
          {/* Eyebrow in Apple Glass Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 text-emerald-900 dark:text-emerald-300 text-xs sm:text-[13px] font-semibold tracking-wide mb-6 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            <span>ABES ENGINEERING COLLEGE PRESENTS</span>
          </motion.div>

          {/* Display Club Name */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.05 }}
            className="text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-3"
          >
            ECO CLUB — ABES ENGINEERING COLLEGE
          </motion.div>

          {/* Main Heading in Crisp Plus Jakarta Sans Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6"
          >
            Small Actions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-300">
              Greener Futures.
            </span>
          </motion.h1>

          {/* Official Tagline in High-Contrast Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.16 }}
            className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-emerald-950 dark:text-emerald-200 bg-emerald-500/10 dark:bg-emerald-500/15 inline-block px-4 py-1.5 rounded-xl border border-emerald-600/30 dark:border-emerald-400/20 mb-6 shadow-xs"
          >
            “THINK. ACT. CODE. WORK GREENER.”
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.22 }}
            className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            Think sustainably. Act responsibly. Build innovative solutions. Together, we&apos;re
            turning environmental awareness into meaningful action.
          </motion.p>

          {/* Action CTAs with Magnetic Hover Physics */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.28 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
          >
            <Magnetic className="w-full sm:w-auto" strength={0.25} maxDistance={10}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onJoinClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Join the Movement</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Magnetic>

            <Magnetic className="w-full sm:w-auto" strength={0.22} maxDistance={9}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onEventsClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-900 dark:text-white bg-white/95 dark:bg-stone-900/80 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-stone-800 shadow-xs transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Explore Our Events</span>
              </motion.button>
            </Magnetic>
          </motion.div>

          {/* Transparent High-Contrast Announcement Card */}
          <motion.div
            initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.35 }}
            className="p-4 rounded-2xl bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-300/60 dark:border-emerald-500/30">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  Upcoming Campus Highlights
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Eco Treasure Hunt & Eco Hackathon
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <span className="text-xs text-amber-900 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-950/60 px-2.5 py-1 rounded-md font-semibold border border-amber-300/80 dark:border-amber-700/50">
                Dates to be announced soon
              </span>
              <button
                onClick={onEventsClick}
                className="text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-0.5 ml-1 cursor-pointer"
              >
                Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Short Club Introduction */}
        <ScrollReveal delay={0.1}>
          <div className="mt-24 max-w-4xl mx-auto text-center px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400 mb-2">
              Who We Are
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
              A Student-Led Catalyst for Sustainable Campus Innovation
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
              Eco Club at ABES Engineering College is dedicated to cultivating environmental consciousness,
              resource stewardship, and tech-driven eco solutions among students. From campus waste reduction
              and renewable energy dialogues to student competitions and green coding hackathons, we empower
              young engineers to protect our planet through tangible grassroots initiatives.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Feature Pillars with Staggered Scroll Animation & Crystal-Clear Light Contrast */}
        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StaggerItem>
            <div className="p-6 rounded-3xl apple-card bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm group h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-emerald-200 dark:border-emerald-500/20">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Advocating zero-waste habits, energy efficiency, circular lifestyle choices, and active campus biodiversity preservation.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-6 rounded-3xl apple-card bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm group h-full">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-teal-200 dark:border-teal-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Applying engineering principles, green computing algorithms, IoT sensors, and smart CleanTech prototypes to ecological challenges.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-6 rounded-3xl apple-card bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm group h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-amber-200 dark:border-amber-500/20">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                Community
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Uniting students, faculty mentors, and green champions from every department to collaborate on shared ecological responsibility.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-6 rounded-3xl apple-card bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm group h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-emerald-200 dark:border-emerald-500/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                Action
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Translating ideas into concrete reality through interactive treasure hunts, campus cleanup drives, and practical audits.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Illustrative Demo Statistics in High-Contrast Glass */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 rounded-3xl apple-card bg-white/95 dark:bg-stone-900/85 p-8 sm:p-10 border border-slate-200 dark:border-white/10 shadow-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-200 dark:border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Impact Framework</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                  Our Sustainability Footprint Goal
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-1 font-normal">
                  Visualizing the collective potential when students adopt greener habits across ABES campus.
                </p>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/80 dark:border-emerald-700/50 text-[11px] text-emerald-900 dark:text-emerald-300 font-mono font-semibold shrink-0">
                *Sample / Demo projections for collective student potential
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="border-l-2 border-emerald-600 dark:border-emerald-500 pl-4">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  8+
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-400 mt-1">
                  Active Divisions
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                  Tech, Events, PR & Creatives
                </div>
              </div>

              <div className="border-l-2 border-teal-600 dark:border-teal-500 pl-4">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  2
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-teal-800 dark:text-teal-400 mt-1">
                  Flagship Events
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                  Treasure Hunt & Hackathon
                </div>
              </div>

              <div className="border-l-2 border-emerald-600 dark:border-emerald-400 pl-4">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-emerald-800 dark:text-emerald-300 tracking-tight">
                  10k+
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-400 mt-1">
                  Bottles Avoided*
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                  Targeted student refill goal
                </div>
              </div>

              <div className="border-l-2 border-amber-600 dark:border-amber-400 pl-4">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-amber-800 dark:text-amber-300 tracking-tight">
                  100%
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mt-1">
                  Student-Driven
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                  Collaborative governance
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
