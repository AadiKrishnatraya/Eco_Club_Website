import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, ShieldCheck, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { Magnetic } from '../components/Magnetic.tsx';

interface FormData {
  fullName: string;
  email: string;
  branch: string;
  yearOfStudy: string;
  areasOfInterest: string[];
  whyJoin: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  branch?: string;
  yearOfStudy?: string;
  areasOfInterest?: string;
  consent?: string;
}

const INTEREST_AREAS = [
  'Tech & Project',
  'Event & Management',
  'Social Media & Content',
  'PR & Outreach',
  'Creative & Decor',
  'Registration',
  'Sustainability & Environmental Awareness',
];

const STUDY_YEARS = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  'Other',
];

const LOCAL_STORAGE_SUBMISSIONS_KEY = 'abes_eco_club_applications_demo';

export const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    branch: '',
    yearOfStudy: '1st Year',
    areasOfInterest: [],
    whyJoin: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'College email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@abes.ac.in).';
    }

    if (!formData.branch.trim()) {
      newErrors.branch = 'Branch / Department is required (e.g. CSE, IT, ME, ECE).';
    }

    if (!formData.yearOfStudy) {
      newErrors.yearOfStudy = 'Please select your current year of study.';
    }

    if (formData.areasOfInterest.length === 0) {
      newErrors.areasOfInterest = 'Please select at least one area of interest.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must confirm consent to be contacted about Eco Club activities.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (area: string) => {
    setFormData((prev) => {
      const exists = prev.areasOfInterest.includes(area);
      const updated = exists
        ? prev.areasOfInterest.filter((item) => item !== area)
        : [...prev.areasOfInterest, area];
      return { ...prev, areasOfInterest: updated };
    });

    if (errors.areasOfInterest) {
      setErrors((prev) => ({ ...prev, areasOfInterest: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existingData = localStorage.getItem(LOCAL_STORAGE_SUBMISSIONS_KEY);
        const list = existingData ? JSON.parse(existingData) : [];
        list.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem(LOCAL_STORAGE_SUBMISSIONS_KEY, JSON.stringify(list));
      } catch (err) {
        console.warn('Could not save to localStorage', err);
      }

      setSubmittedName(formData.fullName);
      setIsSuccess(true);
      setIsSubmitting(false);

      setFormData({
        fullName: '',
        email: '',
        branch: '',
        yearOfStudy: '1st Year',
        areasOfInterest: [],
        whyJoin: '',
        consent: false,
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Join Us"
          title="Be Part of the Change"
          subtitle="Have ideas for a greener campus? Bring your energy, creativity, and curiosity to Eco Club."
        />

        <ScrollReveal delay={0.1}>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 70, damping: 20 }}
                className="apple-card rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full mb-3 border border-emerald-500/20">
                  Interest Recorded Successfully
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-stone-100 mb-3">
                  Thank You, {submittedName}!
                </h3>

                <p className="text-slate-700 dark:text-stone-300 text-base leading-relaxed mb-6 font-normal">
                  Your interest in joining Eco Club has been logged.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-left text-xs text-slate-700 dark:text-stone-400 mb-8 space-y-2 font-normal">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-stone-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Local Demonstration Notice</span>
                  </div>
                  <p>
                    This form currently stores your registration entry in your browser&apos;s local storage for preview purposes.
                    In production with club server integration, entries will be routed securely to the general secretary and division leads.
                  </p>
                  <p className="text-slate-500 dark:text-stone-400">
                    To stay up to date with official recruitment callouts and orientation sessions, make sure to follow{' '}
                    <a
                      href="https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 dark:text-pink-400 font-semibold hover:underline"
                    >
                      @abes_ecoclub
                    </a>.
                  </p>
                </div>

                <Magnetic strength={0.22} maxDistance={8}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-stone-900 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Submit Another Application</span>
                  </motion.button>
                </Magnetic>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="apple-card rounded-3xl p-6 sm:p-10"
              >
                <div className="pb-6 mb-6 border-b border-black/[0.05] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Student Membership Interest Form
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    * Indicates required fields
                  </span>
                </div>

                <div className="space-y-6">
                  {/* 1. Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-800 dark:text-stone-200 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Aditi Sharma"
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 bg-white dark:bg-stone-900/90 text-slate-900 dark:text-white ${
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-300 dark:border-white/[0.1] focus:ring-emerald-500/20 focus:border-emerald-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* 2. College Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 dark:text-stone-200 mb-1.5">
                      College Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. aditi.24btech001@abes.ac.in"
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 bg-white dark:bg-stone-900/90 text-slate-900 dark:text-white ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-300 dark:border-white/[0.1] focus:ring-emerald-500/20 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* 3 & 4. Branch and Year Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="branch" className="block text-sm font-semibold text-slate-800 dark:text-stone-200 mb-1.5">
                        Branch / Department <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="branch"
                        value={formData.branch}
                        onChange={(e) => {
                          setFormData({ ...formData, branch: e.target.value });
                          if (errors.branch) setErrors({ ...errors, branch: undefined });
                        }}
                        placeholder="e.g. Computer Science (CSE)"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 bg-white dark:bg-stone-900/90 text-slate-900 dark:text-white ${
                          errors.branch
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-300 dark:border-white/[0.1] focus:ring-emerald-500/20 focus:border-emerald-500'
                        }`}
                      />
                      {errors.branch && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.branch}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="yearOfStudy" className="block text-sm font-semibold text-slate-800 dark:text-stone-200 mb-1.5">
                        Year of Study <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="yearOfStudy"
                        value={formData.yearOfStudy}
                        onChange={(e) => {
                          setFormData({ ...formData, yearOfStudy: e.target.value });
                          if (errors.yearOfStudy) setErrors({ ...errors, yearOfStudy: undefined });
                        }}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-white/[0.1] text-sm bg-white dark:bg-stone-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 cursor-pointer"
                      >
                        {STUDY_YEARS.map((y) => (
                          <option key={y} value={y} className="bg-white dark:bg-stone-900 text-slate-900 dark:text-white">
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 5. Areas of Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 dark:text-stone-200 mb-2">
                      Area of Interest <span className="text-rose-500">*</span>
                      <span className="text-xs font-normal text-slate-500 dark:text-stone-400 ml-1.5">
                        (Select all divisions you wish to contribute to)
                      </span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {INTEREST_AREAS.map((area) => {
                        const isChecked = formData.areasOfInterest.includes(area);
                        return (
                          <label
                            key={area}
                            className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/60 dark:border-emerald-400/50 text-emerald-950 dark:text-emerald-300 font-semibold'
                                : 'bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.05] text-slate-700 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleCheckboxChange(area)}
                              className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                            />
                            <span className="text-xs sm:text-sm">
                              {area}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    {errors.areasOfInterest && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.areasOfInterest}</span>
                      </p>
                    )}
                  </div>

                  {/* 6. Why Join */}
                  <div>
                    <label htmlFor="whyJoin" className="block text-sm font-semibold text-slate-800 dark:text-stone-200 mb-1.5">
                      Why would you like to join?
                      <span className="text-xs font-normal text-slate-500 dark:text-stone-400 ml-1.5">
                        (Optional — share your passions or ideas)
                      </span>
                    </label>
                    <textarea
                      id="whyJoin"
                      rows={3}
                      value={formData.whyJoin}
                      onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                      placeholder="Tell us what excites you about building a greener campus at ABES EC..."
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-white/[0.1] text-sm bg-white dark:bg-stone-900/90 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                  </div>

                  {/* 7. Consent */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => {
                          setFormData({ ...formData, consent: e.target.checked });
                          if (errors.consent) setErrors({ ...errors, consent: undefined });
                        }}
                        className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 mt-1 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                        I confirm that I am a student of ABES Engineering College and agree to be contacted
                        about Eco Club activities, orientations, and upcoming recruitment sessions. <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 pl-7 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Notice */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-xs text-slate-600 dark:text-stone-400 flex items-center gap-2 font-normal">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      Demo Mode: Submissions are stored locally in your browser for testing and verification.
                    </span>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <Magnetic className="w-full sm:w-auto" strength={0.25} maxDistance={10}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-all disabled:opacity-60 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Recording Interest...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Membership Interest</span>
                          </>
                        )}
                      </motion.button>
                    </Magnetic>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
};
