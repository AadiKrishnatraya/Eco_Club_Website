import React from 'react';
import { ArrowUpRight, Camera, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { InstagramPostCard } from '../components/InstagramPostCard.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { Magnetic } from '../components/Magnetic.tsx';

const INSTAGRAM_URL = 'https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs=';

const UPCOMING_ACTIVITIES = [
  { name: 'Eco Treasure Hunt 2026', desc: 'Clues & campus adventure' },
  { name: 'Eco Hackathon', desc: 'CleanTech prototypes & code' },
  { name: 'Campus Tree Drives', desc: 'Biodiversity preservation' },
  { name: 'Waste Audits', desc: 'Circular segregation efforts' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Apple-style background illumination */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/8 dark:bg-emerald-400/8 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our Visual Chronicle"
          title="Moments That Make a Difference"
          subtitle="A space for our sustainability journey, community initiatives, and campus memories."
        />

        {/* Gallery Showcase Grid: Instagram Post Highlight + Chronicle Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: The Single Official Instagram Post with Ethereal Floating Motion */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            className="lg:col-span-7 flex justify-center"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="w-full"
            >
              <InstagramPostCard />
            </motion.div>
          </motion.div>

          {/* Right: Apple Glass Narrative Card with Staggered Scroll Reveal */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.15}>
              <div className="apple-card rounded-3xl p-7 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Featured Live Post</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-snug">
                  Official Campus Launch on Instagram
                </h3>

                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  Connect with our active digital community. We share official announcements, green lifestyle challenges, and student spotlights directly through our verified channel.
                </p>

                <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">
                    @abes_ecoclub
                  </div>

                  <Magnetic strength={0.2} maxDistance={6}>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300"
                    >
                      <span>Open Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>

            {/* Gallery Status Note with Smooth Reveal */}
            <ScrollReveal delay={0.25}>
              <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  <Camera className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Our Gallery is Growing</span>
                </div>

                <h4 className="text-base font-display font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Upcoming Event Coverage
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4 font-normal">
                  High-resolution photo galleries and documentary highlights will be published here following our announced events:
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {UPCOMING_ACTIVITIES.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05]"
                    >
                      <div className="font-semibold text-slate-900 dark:text-stone-200">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-stone-400">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
