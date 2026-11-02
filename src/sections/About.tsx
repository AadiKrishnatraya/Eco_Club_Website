import React from 'react';
import { Target, Compass, Terminal, CheckCircle2, Recycle, Users, Cpu, Megaphone, Leaf } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal.tsx';

const OBJECTIVES = [
  {
    icon: CheckCircle2,
    title: 'Everyday Eco Consciousness',
    description: 'Promote environmental awareness and responsible everyday habits across hostels, labs, and lecture halls.',
  },
  {
    icon: Recycle,
    title: 'Zero Waste & Circularity',
    description: 'Encourage waste reduction, reuse, and methodical recycling of paper, plastic, and electronic items.',
  },
  {
    icon: Megaphone,
    title: 'Action Campaigns & Workshops',
    description: 'Organize high-impact sustainability campaigns, workshops, expert talks, and student engagement drives.',
  },
  {
    icon: Cpu,
    title: 'Green Tech Innovation',
    description: 'Encourage technology-driven solutions, clean coding, and engineering prototypes for ecological challenges.',
  },
  {
    icon: Users,
    title: 'Student Sustainability Network',
    description: 'Build a passionate, welcoming community of students across all academic branches dedicated to our planet.',
  },
  {
    icon: Leaf,
    title: 'Practical Environmental Impact',
    description: 'Support active collaboration, innovation, and measurable grassroots environmental action on and beyond campus.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About Eco Club"
          title="Shaping a Greener Tomorrow, Today"
          subtitle="Eco Club at ABES Engineering College bridges technical acumen with environmental stewardship to inspire real ecological impact."
        />

        {/* Vision, Mission & Motto Grid with Staggered Scroll Animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Vision */}
          <StaggerItem>
            <div className="apple-card bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm rounded-3xl p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-500/20">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
                  Guiding Compass
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base font-normal">
                  “To inspire a generation of environmentally conscious innovators who build a greener,
                  more sustainable future.”
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-stone-400 font-semibold">
                Long-term aspirational horizon
              </div>
            </div>
          </StaggerItem>

          {/* Mission */}
          <StaggerItem>
            <div className="apple-card bg-white/95 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm rounded-3xl p-8 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-6 border border-teal-200 dark:border-teal-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 mb-2">
                  Operational Purpose
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base font-normal">
                  “To encourage sustainable living, promote environmental awareness, and empower students
                  to transform ideas into meaningful environmental action through collaboration,
                  technology, and community engagement.”
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-stone-400 font-semibold">
                Daily student empowerment
              </div>
            </div>
          </StaggerItem>

          {/* Motto / Guiding Creed with High Contrast in Light & Dark Mode */}
          <StaggerItem>
            <div className="apple-card bg-emerald-50/60 dark:bg-stone-900/80 border border-emerald-200/90 dark:border-white/10 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-6 border border-emerald-300/80 dark:border-emerald-500/20">
                  <Terminal className="w-6 h-6 text-emerald-800 dark:text-emerald-400" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
                  Our Guiding Creed
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  Our Motto
                </h3>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-950 dark:text-emerald-300 tracking-wide leading-snug p-3.5 rounded-2xl bg-white/95 dark:bg-emerald-950/60 border border-emerald-300/80 dark:border-emerald-500/30 shadow-xs">
                  “THINK. ACT. CODE. WORK GREENER.”
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  Four clear imperatives that unite students across branches: contemplate the lifecycle of resources, take direct physical action, program lean computational algorithms, and cultivate green workplaces.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-emerald-800 dark:text-emerald-400 font-semibold flex items-center justify-between">
                <span>Official Club Motto</span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-stone-400">ABES EC</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Objectives Section with High-Contrast Glass */}
        <ScrollReveal delay={0.1}>
          <div className="apple-card bg-white/95 dark:bg-stone-900/85 border border-slate-200 dark:border-white/10 shadow-sm rounded-3xl p-8 sm:p-12">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
                Core Strategic Goals
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                Our Key Objectives
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 font-normal">
                Every workshop, hackathon, and campus campaign aligns with these pillars of sustainable transformation.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
              {OBJECTIVES.map((obj, idx) => {
                const IconComponent = obj.icon;
                return (
                  <StaggerItem key={idx}>
                    <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05] hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-colors h-full">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {obj.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-11 font-normal">
                        {obj.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
