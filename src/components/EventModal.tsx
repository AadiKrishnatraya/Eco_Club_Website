import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Share2, Compass, Cpu } from 'lucide-react';
import { EventItem } from '../data/events.ts';
import { Magnetic } from './Magnetic.tsx';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Apple style Backdrop Blur */}
      <div
        className="fixed inset-0 bg-stone-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative apple-card bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200/90 dark:border-white/[0.1] z-10 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              {event.iconType === 'treasure' ? (
                <Compass className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
              ) : (
                <Cpu className="w-6 h-6 text-teal-700 dark:text-teal-400" />
              )}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                Official Event Overview
              </div>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-stone-100">
                {event.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-stone-200 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close event details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Callout */}
        <div className="mt-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <div className="font-semibold text-amber-900 dark:text-amber-300">
              Registration Opening Soon
            </div>
            <div className="text-amber-800/90 dark:text-amber-300/80 text-xs mt-0.5 leading-relaxed">
              Official schedule, exact venue, and registration portal links will be released through Eco Club's official channels.
            </div>
          </div>
        </div>

        {/* Logistics Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center gap-3">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-stone-400">
                Date
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-stone-200">
                {event.date}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center gap-3">
            <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-stone-400">
                Time
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-stone-200">
                {event.time}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center gap-3">
            <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-stone-400">
                Venue
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-stone-200">
                {event.venue}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 mb-2">
            About the Activity
          </h4>
          <p className="text-slate-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base font-normal">
            {event.description}
          </p>
        </div>

        {/* Theme and Format */}
        <div className="mt-5 space-y-2 text-sm bg-slate-50 dark:bg-white/[0.03] p-4 rounded-2xl border border-slate-200 dark:border-white/[0.05]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
            <span className="font-semibold text-slate-900 dark:text-stone-100">Focus Theme:</span>
            <span className="text-emerald-800 dark:text-emerald-400 font-medium">{event.theme}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
            <span className="font-semibold text-slate-900 dark:text-stone-100">Format:</span>
            <span className="text-emerald-800 dark:text-emerald-400 font-medium">{event.format}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
            <span className="font-semibold text-slate-900 dark:text-stone-100">Eligibility:</span>
            <span className="text-emerald-800 dark:text-emerald-400 font-medium">{event.eligibility}</span>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 mb-3">
            What to Expect
          </h4>
          <div className="space-y-2">
            {event.keyHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300 font-normal">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-black/[0.05] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs="
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400 flex items-center gap-1.5"
          >
            <span>Follow announcements on Instagram</span>
            <Share2 className="w-3.5 h-3.5" />
          </a>

          <Magnetic strength={0.22} maxDistance={7} className="w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-stone-900 text-sm font-semibold transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};
