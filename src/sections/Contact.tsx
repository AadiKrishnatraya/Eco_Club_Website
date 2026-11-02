import React from 'react';
import { ArrowUpRight, MapPin, Bell, Users, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { Magnetic } from '../components/Magnetic.tsx';

const INSTAGRAM_URL = 'https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs=';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Get In Touch"
          title="Connect With Eco Club"
          subtitle="Join our community of sustainability advocates and follow all campus initiatives, event announcements, and collaborative drives."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Prominent Instagram Card (Primary Channel) - 3 Columns with Ethereal Scroll Motion */}
          <ScrollReveal delay={0.1} className="md:col-span-3 h-full">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-gradient-to-br from-purple-950/90 via-pink-950/85 to-stone-950/90 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-pink-700/30 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    Primary Contact Channel
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  Connect With Us on Instagram
                </h3>

                <p className="text-pink-100/90 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  Follow our journey, discover updates, and stay connected with our sustainability community.
                </p>
              </div>

              <div>
                <Magnetic className="w-full sm:w-auto" strength={0.25} maxDistance={10}>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-stone-950 font-semibold text-sm hover:bg-pink-50 transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Visit Our Instagram</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </Magnetic>
                <div className="text-xs text-pink-200/80 mt-3 font-mono">
                  @abes_ecoclub
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Side Cards in Apple Glass - 2 Columns */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Friendly Invitation Card */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div className="apple-card rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <HeartHandshake className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-stone-100 mb-2">
                    Collaborate & Participate
                  </h4>
                  <p className="text-slate-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                    We welcome ideas from student groups, departments, and collegiate partners interested in environmental sustainability and campus stewardship.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-400 font-semibold">
                  <Users className="w-4 h-4" />
                  <span>Student-run community</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Official Announcement Channels Note */}
            <ScrollReveal delay={0.3}>
              <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-800 dark:text-stone-300 uppercase tracking-wider">
                  <Bell className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Notice on Announcements</span>
                </div>
                <p className="text-slate-700 dark:text-stone-300 text-xs leading-relaxed font-normal">
                  All event schedules, registration deadlines, and operational notices are issued exclusively via Eco Club's official communication channels and campus bulletin boards.
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center gap-2 text-[11px] text-slate-500 dark:text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>ABES Engineering College, Ghaziabad, UP</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
