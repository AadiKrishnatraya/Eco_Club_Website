import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export const EtherealCanvas: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();

  // Smooth liquid spring for the top scroll progress line
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax shifts for ethereal ambient light orbs
  const orb1Y = useTransform(scrollY, [0, 4000], [0, 400]);
  const orb2Y = useTransform(scrollY, [0, 4000], [0, -350]);
  const orb3Y = useTransform(scrollY, [0, 4000], [0, 600]);

  return (
    <>
      {/* Top Liquid Scroll Progress Indicator (Apple Ethereal Style) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 origin-left z-50 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
        style={{ scaleX }}
      />

      {/* Background Ethereal Light Field (Positioned behind transparent glass cards) */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
        {/* Luminous Emerald Aurora Orb 1 */}
        <motion.div
          style={{ y: orb1Y }}
          className="absolute -top-32 left-1/4 w-[750px] h-[650px] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-400/10 to-transparent blur-[110px] animate-ethereal-1 opacity-70 dark:opacity-40"
        />

        {/* Deep Mint Aurora Orb 2 */}
        <motion.div
          style={{ y: orb2Y }}
          className="absolute top-1/3 -right-48 w-[650px] h-[700px] rounded-full bg-gradient-to-bl from-teal-500/12 via-emerald-400/8 to-transparent blur-[120px] animate-ethereal-2 opacity-65 dark:opacity-35"
        />

        {/* Soft Opalescent Ambient Orb 3 */}
        <motion.div
          style={{ y: orb3Y }}
          className="absolute top-2/3 -left-36 w-[800px] h-[650px] rounded-full bg-gradient-to-tr from-emerald-600/12 via-cyan-500/6 to-transparent blur-[130px] animate-ethereal-1 opacity-60 dark:opacity-30"
        />

        {/* Subtle Bottom Grounding Glow */}
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-gradient-to-t from-emerald-500/8 to-transparent blur-[100px] opacity-50 dark:opacity-20" />
      </div>
    </>
  );
};
