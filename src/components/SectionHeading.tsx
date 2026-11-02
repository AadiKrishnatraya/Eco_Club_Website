import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 70, damping: 20 }}
      className={`max-w-3xl mb-12 sm:mb-16 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400">
          {centered && <span className="h-px w-6 bg-emerald-400/60 dark:bg-emerald-500/40" aria-hidden="true" />}
          <span>{kicker}</span>
          {centered && <span className="h-px w-6 bg-emerald-400/60 dark:bg-emerald-500/40" aria-hidden="true" />}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
