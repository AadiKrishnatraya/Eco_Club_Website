import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnnouncementBanner } from './components/AnnouncementBanner.tsx';
import { Navbar } from './components/Navbar.tsx';
import { EtherealCanvas } from './components/EtherealCanvas.tsx';
import { ScrollProgressNav } from './components/ScrollProgressNav.tsx';
import { Hero } from './sections/Hero.tsx';
import { About } from './sections/About.tsx';
import { Team } from './sections/Team.tsx';
import { Gallery } from './sections/Gallery.tsx';
import { Events } from './sections/Events.tsx';
import { SustainabilityTips } from './components/SustainabilityTips.tsx';
import { EcoImpactCounter } from './components/EcoImpactCounter.tsx';
import { JoinUs } from './sections/JoinUs.tsx';
import { Contact } from './sections/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { EcoBotWidget } from './components/EcoBotWidget.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ArrowUp } from 'lucide-react';

function AppContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToJoin = () => {
    const el = document.getElementById('join');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f7] dark:bg-[#070a08] text-stone-900 dark:text-stone-100 selection:bg-emerald-500/30 selection:text-emerald-950 dark:selection:text-emerald-200 transition-colors duration-400 relative">
      {/* Ethereal Ambient Canvas & Scroll Progress Bar */}
      <EtherealCanvas />

      {/* Floating Apple-Style Scroll Dot Tracker */}
      <ScrollProgressNav />

      {/* Top Announcement Bulletin */}
      <AnnouncementBanner />

      {/* Main Sticky Navigation with Apple Frosted Glass & Theme Switcher */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero onJoinClick={scrollToJoin} onEventsClick={scrollToEvents} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Our Team Section */}
        <Team />

        {/* 4. Gallery Section with the Single Official Instagram Post & Chronicle */}
        <Gallery />

        {/* 5. Events Section (Upcoming, Ongoing, Past + Details Modal) */}
        <Events />

        {/* 6. Sustainability Tips: Small Habits. Big Impact. */}
        <SustainabilityTips />

        {/* 7. Eco Impact Counter: Every Action Counts */}
        <div className="py-6 px-4">
          <EcoImpactCounter />
        </div>

        {/* 8. Join Us: Student Membership Interest Form */}
        <JoinUs />

        {/* 9. Contact Us: Official Instagram Channel */}
        <Contact />
      </main>

      {/* Refined Footer */}
      <Footer />

      {/* EcoBot AI Chatbot Widget */}
      <EcoBotWidget />

      {/* Floating Apple-Glass Back to Top Button with Spring Entry */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-22 right-6 z-40 p-3 rounded-full apple-glass text-stone-800 dark:text-stone-200 hover:text-emerald-700 dark:hover:text-emerald-400 shadow-xl cursor-pointer border border-black/[0.08] dark:border-white/[0.1]"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
