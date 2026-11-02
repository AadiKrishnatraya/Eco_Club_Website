import React, { useState, useEffect } from 'react';
import { RotateCcw, Droplets, ShoppingBag, Zap, Trash2, ShieldAlert, Check, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal.tsx';

interface HabitAction {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bottleImpact: number;
  bagImpact: number;
  kwhImpact: number;
  co2KgImpact: number;
}

const HABIT_ACTIONS: HabitAction[] = [
  {
    id: 'bottle',
    label: 'Carry a Reusable Water Bottle',
    description: 'Refill at campus coolers instead of buying disposable bottled water.',
    icon: Droplets,
    bottleImpact: 156,
    bagImpact: 0,
    kwhImpact: 2,
    co2KgImpact: 12,
  },
  {
    id: 'bags',
    label: 'Carry a Reusable Cloth Bag',
    description: 'Decline single-use polythene wrappers at bookstores and canteens.',
    icon: ShoppingBag,
    bottleImpact: 0,
    bagImpact: 220,
    kwhImpact: 1,
    co2KgImpact: 8,
  },
  {
    id: 'lights',
    label: 'Switch Off Unused Lights & Lab Gear',
    description: 'Turn off monitors, ambient fixtures, and fans when vacating study areas.',
    icon: Zap,
    bottleImpact: 0,
    bagImpact: 0,
    kwhImpact: 48,
    co2KgImpact: 35,
  },
  {
    id: 'waste',
    label: 'Segregate Dry & Wet Waste',
    description: 'Ensure clean paper and recyclables do not get contaminated with food.',
    icon: Trash2,
    bottleImpact: 12,
    bagImpact: 30,
    kwhImpact: 6,
    co2KgImpact: 15,
  },
  {
    id: 'singleuse',
    label: 'Avoid Single-Use Plastic Cutlery',
    description: 'Opt for reusable campus utensils or carry personal wooden spoons.',
    icon: UtensilsCrossed,
    bottleImpact: 20,
    bagImpact: 60,
    kwhImpact: 3,
    co2KgImpact: 9,
  },
];

const LOCAL_STORAGE_KEY = 'abes_eco_club_habits';

export const EcoImpactCounter: React.FC = () => {
  const [selectedHabits, setSelectedHabits] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : ['bottle', 'lights'];
    } catch {
      return ['bottle', 'lights'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedHabits));
    } catch (e) {
      console.warn('Unable to save habit state to localStorage', e);
    }
  }, [selectedHabits]);

  const toggleHabit = (id: string) => {
    setSelectedHabits((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setSelectedHabits([]);
  };

  const handleSelectAll = () => {
    setSelectedHabits(HABIT_ACTIONS.map((h) => h.id));
  };

  const totals = selectedHabits.reduce(
    (acc, id) => {
      const habit = HABIT_ACTIONS.find((h) => h.id === id);
      if (habit) {
        acc.bottles += habit.bottleImpact;
        acc.bags += habit.bagImpact;
        acc.kwh += habit.kwhImpact;
        acc.co2 += habit.co2KgImpact;
      }
      return acc;
    },
    { bottles: 0, bags: 0, kwh: 0, co2: 0 }
  );

  return (
    <ScrollReveal delay={0.05}>
      <div className="apple-card rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto my-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.05] dark:border-white/[0.06]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              Interactive Engagement Widget
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 dark:text-stone-100 mt-1">
              Every Action Counts.
            </h3>
            <p className="text-stone-600 dark:text-stone-300 text-sm mt-1 font-normal">
              Select the sustainable habits you practice or pledge to adopt, and view an illustrative annual impact model.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSelectAll}
              className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-full transition-colors cursor-pointer"
            >
              Select All
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] rounded-full transition-colors cursor-pointer"
              title="Reset selections"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </motion.button>
          </div>
        </div>

        {/* Interactive Habit Checklist */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {HABIT_ACTIONS.map((habit) => {
            const isSelected = selectedHabits.includes(habit.id);
            const IconComponent = habit.icon;
            return (
              <motion.button
                key={habit.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => toggleHabit(habit.id)}
                className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/60 dark:border-emerald-400/50 shadow-xs'
                    : 'bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-emerald-700 dark:bg-emerald-500 text-white dark:text-stone-950'
                      : 'border border-slate-300 dark:border-stone-600 bg-white dark:bg-transparent text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`w-4 h-4 ${isSelected ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500 dark:text-stone-400'}`} />
                    <span className={`text-sm font-semibold ${isSelected ? 'text-emerald-950 dark:text-emerald-200' : 'text-slate-900 dark:text-stone-200'}`}>
                      {habit.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-stone-400 mt-1 leading-relaxed font-normal">
                    {habit.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Results Dashboard in Apple Glass */}
        <div className="mt-8 p-6 rounded-2xl apple-card bg-emerald-50/60 dark:bg-stone-900/90 border border-emerald-200/90 dark:border-white/10 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              Estimated Annual Personal Impact
            </div>
            <div className="text-xs text-slate-600 dark:text-stone-400 font-mono font-medium">
              {selectedHabits.length} of {HABIT_ACTIONS.length} habits active
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="bg-white/95 dark:bg-white/5 p-4 rounded-2xl border border-emerald-200/90 dark:border-white/10 shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={totals.bottles}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-800 dark:text-emerald-300"
                >
                  {totals.bottles}
                </motion.div>
              </AnimatePresence>
              <div className="text-xs text-slate-700 dark:text-stone-300 mt-1 font-medium">
                Bottles Avoided
              </div>
            </div>

            <div className="bg-white/95 dark:bg-white/5 p-4 rounded-2xl border border-emerald-200/90 dark:border-white/10 shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={totals.bags}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-display font-extrabold text-teal-800 dark:text-teal-300"
                >
                  {totals.bags}
                </motion.div>
              </AnimatePresence>
              <div className="text-xs text-slate-700 dark:text-stone-300 mt-1 font-medium">
                Bags Refused
              </div>
            </div>

            <div className="bg-white/95 dark:bg-white/5 p-4 rounded-2xl border border-emerald-200/90 dark:border-white/10 shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={totals.kwh}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-display font-extrabold text-amber-800 dark:text-amber-300"
                >
                  ~{totals.kwh} kWh
                </motion.div>
              </AnimatePresence>
              <div className="text-xs text-slate-700 dark:text-stone-300 mt-1 font-medium">
                Electricity Saved
              </div>
            </div>

            <div className="bg-white/95 dark:bg-white/5 p-4 rounded-2xl border border-emerald-200/90 dark:border-white/10 shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={totals.co2}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white"
                >
                  ~{totals.co2} kg
                </motion.div>
              </AnimatePresence>
              <div className="text-xs text-slate-700 dark:text-stone-300 mt-1 font-medium">
                CO₂e Offset
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-start gap-2 text-xs text-slate-600 dark:text-stone-400 font-normal">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-800 dark:text-stone-300 font-semibold">Illustrative Estimate Disclaimer:</strong> All calculated figures
              are simplified pedagogical models representing average personal consumption heuristics. They are
              intended to highlight individual impact potential and do not represent audited club achievements.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
