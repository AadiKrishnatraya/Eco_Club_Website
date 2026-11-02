import React, { useState } from 'react';
import { Droplet, ShoppingBag, Zap, Recycle, Printer, Bike, Shuffle, ArrowRight, Lightbulb, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SUSTAINABILITY_TIPS, SustainabilityTip } from '../data/sustainabilityTips.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal.tsx';
import { Magnetic } from './Magnetic.tsx';

const getTipIcon = (iconName: string) => {
  switch (iconName) {
    case 'Droplet':
      return <Droplet className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-5 h-5 text-teal-700 dark:text-teal-400" />;
    case 'Zap':
      return <Zap className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
    case 'Recycle':
      return <Recycle className="w-5 h-5 text-emerald-800 dark:text-emerald-400" />;
    case 'Printer':
      return <Printer className="w-5 h-5 text-stone-700 dark:text-stone-300" />;
    case 'Bike':
      return <Bike className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />;
    default:
      return <Leaf className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
  }
};

export const SustainabilityTips: React.FC = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const cycleNextTip = () => {
    setFeaturedIndex((prev) => (prev + 1) % SUSTAINABILITY_TIPS.length);
  };

  const featuredTip: SustainabilityTip = SUSTAINABILITY_TIPS[featuredIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Practical Action"
          title="Small Habits. Big Impact."
          subtitle="Micro-actions adopted by students across classrooms, labs, and hostels build measurable campus-wide ecological change."
        />

        {/* Featured Tip Spotlight Card in High-Contrast Apple Glass with Motion */}
        <ScrollReveal delay={0.05}>
          <div className="max-w-4xl mx-auto mb-14 apple-card bg-emerald-50/60 dark:bg-stone-900/85 rounded-3xl p-6 sm:p-10 shadow-md border border-emerald-200/90 dark:border-white/10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                <Lightbulb className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Campus Tip Spotlight #{featuredTip.id} of {SUSTAINABILITY_TIPS.length}</span>
              </div>

              <Magnetic strength={0.22} maxDistance={7}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={cycleNextTip}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white text-xs font-semibold transition-colors cursor-pointer border border-emerald-700/50 dark:border-white/15 shadow-xs"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Show Me Another Tip</span>
                </motion.button>
              </Magnetic>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={featuredTip.id}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
              >
                <div className="md:col-span-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
                    {featuredTip.title}
                  </h3>
                  <p className="text-emerald-800 dark:text-emerald-400 text-sm font-semibold mb-3">
                    {featuredTip.tagline}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
                    {featuredTip.description}
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-white/5 border border-emerald-200/90 dark:border-white/10 text-xs flex items-center gap-2 shadow-xs">
                    <span className="font-bold text-emerald-900 dark:text-emerald-300">Action:</span>
                    <span className="font-normal text-slate-800 dark:text-slate-200">{featuredTip.actionNote}</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/95 dark:bg-white/5 border border-emerald-200/90 dark:border-white/10 text-center flex flex-col items-center justify-center shadow-xs">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-3 border border-emerald-200 dark:border-emerald-500/30">
                    {getTipIcon(featuredTip.iconName)}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold mb-1">
                    Estimated Benefit
                  </div>
                  <div className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-white">
                    {featuredTip.impactMetric}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* 6 Concise Cards Grid in Apple Glass with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto" staggerDelay={0.06}>
          {SUSTAINABILITY_TIPS.map((tip, index) => {
            const isFeatured = index === featuredIndex;
            return (
              <StaggerItem key={tip.id}>
                <motion.div
                  whileHover={{ y: -3 }}
                  onClick={() => setFeaturedIndex(index)}
                  className={`p-6 rounded-3xl apple-card cursor-pointer flex flex-col justify-between h-full ${
                    isFeatured
                      ? 'ring-2 ring-emerald-500/80 border-emerald-500/80'
                      : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                        {getTipIcon(tip.iconName)}
                      </div>
                      <span className="text-xs font-mono text-stone-400">
                        0{tip.id}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-stone-900 dark:text-stone-100 mb-1">
                      {tip.title}
                    </h4>
                    <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mb-3">
                      {tip.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4 font-normal">
                      {tip.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-stone-400">
                    <span className="truncate">{tip.impactMetric}</span>
                    {isFeatured ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-[11px] uppercase tracking-wide">
                        Active
                      </span>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
