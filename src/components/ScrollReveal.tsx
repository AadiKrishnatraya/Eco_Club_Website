import React from 'react';
import { motion } from 'motion/react';

export const SOFT_SPRING_CONFIG = {
  type: 'spring',
  stiffness: 70,
  damping: 20,
} as const;

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewportMargin?: string;
  blur?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.65,
  className = '',
  viewportMargin = '-40px',
  blur = true,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 12, x: 0 };
      case 'down':
        return { y: -12, x: 0 };
      case 'left':
        return { x: 12, y: 0 };
      case 'right':
        return { x: -12, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.99,
        ...initialPos,
        filter: blur ? 'blur(3px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        filter: blur ? 'blur(0px)' : 'none',
      }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 20,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.07,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.04,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.99, filter: 'blur(3px)' },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            stiffness: 70,
            damping: 20,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
