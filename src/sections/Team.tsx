import React, { useState } from 'react';
import {
  GraduationCap,
  Crown,
  Code2,
  CalendarCheck,
  Share2,
  Megaphone,
  Palette,
  ClipboardList,
  Users,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal.tsx';
import { TEAM_MEMBERS } from '../data/team.ts';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Divisions' },
  { id: 'counselor', label: 'Faculty Counselors' },
  { id: 'leadership', label: 'Core Leadership' },
  { id: 'tech', label: 'Tech & Project' },
  { id: 'event', label: 'Event & Management' },
  { id: 'social', label: 'Social & Content' },
  { id: 'pr', label: 'PR & Outreach' },
  { id: 'creative', label: 'Creative & Decor' },
  { id: 'registration', label: 'Registration' },
];

const getDivisionIcon = (category: string) => {
  switch (category) {
    case 'counselor':
      return <GraduationCap className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />;
    case 'leadership':
      return <Crown className="w-4 h-4 text-amber-700 dark:text-amber-400" />;
    case 'tech':
      return <Code2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />;
    case 'event':
      return <CalendarCheck className="w-4 h-4 text-teal-700 dark:text-teal-400" />;
    case 'social':
      return <Share2 className="w-4 h-4 text-rose-700 dark:text-rose-400" />;
    case 'pr':
      return <Megaphone className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />;
    case 'creative':
      return <Palette className="w-4 h-4 text-purple-700 dark:text-purple-400" />;
    case 'registration':
      return <ClipboardList className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />;
    default:
      return <Users className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />;
  }
};

const getInitials = (name: string, isTBA?: boolean): string => {
  if (isTBA) return 'TBA';
  const cleanName = name.replace(/^(Mr\.|Dr\.|Ms\.)\s*/i, '');
  const parts = cleanName.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return cleanName.slice(0, 2).toUpperCase();
};

const getAvatarStyle = (category: string, isTBA?: boolean) => {
  if (isTBA) {
    return 'bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-stone-400 border border-dashed border-slate-300 dark:border-stone-700';
  }
  switch (category) {
    case 'counselor':
      return 'bg-gradient-to-br from-emerald-800 to-teal-900 text-white border border-emerald-600/40 shadow-xs';
    case 'leadership':
      return 'bg-gradient-to-br from-amber-700 via-emerald-800 to-slate-900 text-white border border-amber-500/40 shadow-xs';
    case 'tech':
      return 'bg-gradient-to-br from-teal-800 to-emerald-900 text-white border border-teal-500/30';
    case 'event':
      return 'bg-gradient-to-br from-emerald-800 to-slate-900 text-white border border-emerald-500/30';
    case 'social':
      return 'bg-gradient-to-br from-rose-800 to-slate-900 text-white border border-rose-500/30';
    case 'pr':
      return 'bg-gradient-to-br from-indigo-800 to-slate-900 text-white border border-indigo-500/30';
    case 'creative':
      return 'bg-gradient-to-br from-purple-800 to-slate-900 text-white border border-purple-500/30';
    case 'registration':
      return 'bg-gradient-to-br from-emerald-800 to-slate-900 text-white border border-emerald-500/30';
    default:
      return 'bg-emerald-800 text-white';
  }
};

export const Team: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMembers =
    selectedCategory === 'all'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.divisionCategory === selectedCategory);

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our People"
          title="Meet the Eco Club Team"
          subtitle="Guided by dedicated faculty counselors and driven by passionate student innovators across specialized divisions at ABES Engineering College."
        />

        {/* Division Filter Segmented Tabs */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-14 scrollbar-none gap-1.5 p-1.5 bg-slate-100/90 dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 rounded-2xl max-w-5xl mx-auto shadow-xs">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`relative px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'text-emerald-950 dark:text-emerald-300 font-bold'
                      : 'text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="teamFilterActive"
                      className="absolute inset-0 bg-white dark:bg-stone-800 rounded-xl shadow-xs border border-slate-200/90 dark:border-white/10 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Highlighted Faculty & Core Leadership Banner */}
        {(selectedCategory === 'all' ||
          selectedCategory === 'counselor' ||
          selectedCategory === 'leadership') && (
          <div className="mb-14">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
                  Advisory & Institutional Governance
                </span>
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5" staggerDelay={0.06}>
              {/* Faculty Counselors */}
              {TEAM_MEMBERS.filter((m) => m.divisionCategory === 'counselor').map((member) => (
                <StaggerItem key={member.id}>
                  <div className="apple-card bg-white dark:bg-stone-900/80 border-2 border-emerald-600/40 dark:border-emerald-500/30 shadow-sm rounded-3xl p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg shadow-sm ${getAvatarStyle(
                            member.divisionCategory
                          )}`}
                        >
                          {getInitials(member.name)}
                        </div>
                        <div className="p-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300">
                          {getDivisionIcon(member.divisionCategory)}
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
                        {member.name}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 mt-1">
                        {member.role}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-stone-400 font-medium">
                      <span>Faculty Counselor</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    </div>
                  </div>
                </StaggerItem>
              ))}

              {/* Core Leadership */}
              {TEAM_MEMBERS.filter((m) => m.divisionCategory === 'leadership').map((member) => (
                <StaggerItem key={member.id}>
                  <div
                    className={`apple-card bg-white dark:bg-stone-900/80 border shadow-sm rounded-3xl p-6 flex flex-col justify-between h-full ${
                      member.isTBA
                        ? 'border-dashed border-slate-300 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-900/40'
                        : 'border-amber-600/40 dark:border-amber-500/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg shadow-sm ${getAvatarStyle(
                            member.divisionCategory,
                            member.isTBA
                          )}`}
                        >
                          {getInitials(member.name, member.isTBA)}
                        </div>
                        <div className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300">
                          {member.isTBA ? (
                            <HelpCircle className="w-4 h-4 text-slate-400" />
                          ) : (
                            { ...getDivisionIcon(member.divisionCategory) }
                          )}
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
                        {member.name}
                      </h3>
                      <div
                        className={`text-xs sm:text-sm font-semibold mt-1 ${
                          member.isTBA ? 'text-slate-500 italic' : 'text-amber-800 dark:text-amber-400'
                        }`}
                      >
                        {member.role}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-stone-400 font-medium">
                      <span>Core Leadership</span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          member.isTBA ? 'bg-slate-400 dark:bg-stone-600' : 'bg-amber-600 dark:bg-amber-400'
                        }`}
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* Division Teams Section */}
        {selectedCategory === 'all' && (
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
                Division-Wise Teams & Core Contributors
              </span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>
          </ScrollReveal>
        )}

        {/* Team Grid with High Contrast Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredMembers
              .filter((m) =>
                selectedCategory === 'all'
                  ? m.divisionCategory !== 'counselor' && m.divisionCategory !== 'leadership'
                  : true
              )
              .map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 20, delay: index * 0.02 }}
                  whileHover={{ y: -4 }}
                  className="apple-card bg-white dark:bg-stone-900/80 border border-slate-200 dark:border-white/10 shadow-sm rounded-3xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-base shadow-xs ${getAvatarStyle(
                          member.divisionCategory,
                          member.isTBA
                        )}`}
                      >
                        {getInitials(member.name, member.isTBA)}
                      </div>
                      <div className="p-1 rounded-lg bg-slate-100 dark:bg-white/[0.06]">
                        {getDivisionIcon(member.divisionCategory)}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">
                      {member.name}
                    </h3>

                    <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mt-1">
                      {member.role}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-400 truncate font-medium">
                    {member.division}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom invitation */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center text-xs text-slate-600 dark:text-stone-400 max-w-xl mx-auto font-normal">
            Eco Club is organized and led by students of ABES Engineering College under faculty guidance. Want to build green tech with us?{' '}
            <a href="#join" className="text-emerald-800 dark:text-emerald-400 font-bold underline hover:text-emerald-950 dark:hover:text-emerald-300">
              Apply to join our divisions
            </a>.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
