import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Compass, Cpu, Layers, FolderArchive } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { EVENTS_DATA, EventItem } from '../data/events.ts';
import { EventModal } from '../components/EventModal.tsx';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal.tsx';
import { Magnetic } from '../components/Magnetic.tsx';

type EventTab = 'upcoming' | 'ongoing' | 'past';

export const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventTab>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const upcomingEvents = EVENTS_DATA.filter((e) => e.category === 'upcoming');
  const ongoingEvents = EVENTS_DATA.filter((e) => e.category === 'ongoing');
  const pastEvents = EVENTS_DATA.filter((e) => e.category === 'past');

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Campus Initiatives"
          title="Club Events & Hackathons"
          subtitle="Participate in hands-on sustainability challenges, clean coding hackathons, and collaborative campus activities."
        />

        {/* Category Tabs: Apple Glass Segmented Control with Motion */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-center justify-center gap-2 mb-14">
            <div className="p-1.5 apple-glass rounded-2xl flex items-center gap-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'upcoming'
                    ? 'text-emerald-950 dark:text-emerald-300'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {activeTab === 'upcoming' && (
                  <motion.div
                    layoutId="eventTabActive"
                    className="absolute inset-0 bg-white dark:bg-stone-800 rounded-xl shadow-xs border border-black/[0.04] dark:border-white/[0.08] -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span>Upcoming</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold">
                  {upcomingEvents.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('ongoing')}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'ongoing'
                    ? 'text-emerald-950 dark:text-emerald-300'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {activeTab === 'ongoing' && (
                  <motion.div
                    layoutId="eventTabActive"
                    className="absolute inset-0 bg-white dark:bg-stone-800 rounded-xl shadow-xs border border-black/[0.04] dark:border-white/[0.08] -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span>Ongoing</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-stone-600 dark:text-stone-400 font-bold">
                  {ongoingEvents.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('past')}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'past'
                    ? 'text-emerald-950 dark:text-emerald-300'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {activeTab === 'past' && (
                  <motion.div
                    layoutId="eventTabActive"
                    className="absolute inset-0 bg-white dark:bg-stone-800 rounded-xl shadow-xs border border-black/[0.04] dark:border-white/[0.08] -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span>Past Events</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-stone-600 dark:text-stone-400 font-bold">
                  {pastEvents.length}
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'upcoming' && (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            >
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.1}>
                {upcomingEvents.map((event) => (
                  <StaggerItem key={event.id}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="apple-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full group"
                    >
                      <div>
                        {/* Card Header with Icon & Announcement Status */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                            {event.iconType === 'treasure' ? (
                              <Compass className="w-7 h-7 text-emerald-700 dark:text-emerald-400" />
                            ) : (
                              <Cpu className="w-7 h-7 text-teal-700 dark:text-teal-400" />
                            )}
                          </div>

                          <div className="text-right">
                            <span className="inline-block text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                              Dates to be announced soon
                            </span>
                            <div className="text-[11px] text-stone-500 dark:text-stone-400 font-medium mt-1">
                              Registration opening soon
                            </div>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mt-1 mb-4">
                          {event.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3 mb-6 font-normal">
                          {event.description}
                        </p>

                        {/* Logistics Row */}
                        <div className="space-y-2 py-4 border-t border-black/[0.05] dark:border-white/[0.06] text-xs text-stone-600 dark:text-stone-400 font-normal">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="font-semibold text-stone-900 dark:text-stone-200">Date:</span>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="font-semibold text-stone-900 dark:text-stone-200">Time:</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="font-semibold text-stone-900 dark:text-stone-200">Venue:</span>
                            <span>{event.venue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer CTA Button */}
                      <div className="pt-5 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between gap-4">
                        <span className="text-xs text-stone-400 dark:text-stone-500 font-mono">
                          ABES EC · 2026
                        </span>

                        <Magnetic strength={0.22} maxDistance={7}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedEvent(event)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-950 dark:text-emerald-200 apple-glass rounded-xl hover:bg-emerald-700 hover:text-white dark:hover:bg-emerald-600 transition-colors cursor-pointer"
                          >
                            <span>Event Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Magnetic>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}

          {activeTab === 'ongoing' && (
            <motion.div
              key="ongoing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
              className="max-w-xl mx-auto apple-card rounded-3xl p-10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-stone-400 flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-stone-100 mb-2">
                No live events in session today
              </h3>
              <p className="text-sm text-slate-700 dark:text-stone-300 leading-relaxed mb-6 font-normal">
                There are currently no active competitions or campus drives happening right now.
                Check out our upcoming events or watch for announcements!
              </p>
              <button
                onClick={() => setActiveTab('upcoming')}
                className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                View Announced Upcoming Events
              </button>
            </motion.div>
          )}

          {activeTab === 'past' && (
            <motion.div
              key="past"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
              className="max-w-xl mx-auto apple-card rounded-3xl p-10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-stone-400 flex items-center justify-center mx-auto mb-4">
                <FolderArchive className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-stone-100 mb-2">
                Archived activities will appear here
              </h3>
              <p className="text-sm text-slate-700 dark:text-stone-300 leading-relaxed mb-6 font-normal">
                As Eco Club convenes workshops, hackathons, and sustainability drives throughout the academic calendar,
                complete event summaries and reports will be archived in this section.
              </p>
              <div className="text-xs text-slate-500 dark:text-stone-400 font-mono">
                Eco Club ABES Engineering College
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};
