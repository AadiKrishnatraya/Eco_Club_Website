import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ArrowUpRight, Check } from 'lucide-react';
import { EcoLogo } from './Logo.tsx';
import { Magnetic } from './Magnetic.tsx';

const INSTAGRAM_URL = 'https://www.instagram.com/abes_ecoclub?exln=ZjFrOHRkczkxbWs=';

export const InstagramPostCard: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(248);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(INSTAGRAM_URL);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto apple-card bg-white dark:bg-stone-900/85 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 transition-all">
      {/* Post Header */}
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-stone-900/95">
        <div className="flex items-center gap-3">
          {/* Instagram gradient ring around Eco avatar */}
          <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
            <div className="p-0.5 rounded-full bg-white dark:bg-stone-900">
              <EcoLogo size="sm" showText={false} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                abes_ecoclub
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              ABES Engineering College, Ghaziabad
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Magnetic strength={0.2} maxDistance={6}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/50 transition-colors inline-block"
            >
              Follow
            </a>
          </Magnetic>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-stone-200 transition-colors"
            aria-label="View on Instagram"
          >
            <MoreHorizontal className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Post Creative Canvas */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-emerald-950 via-teal-950 to-stone-950 overflow-hidden select-none flex flex-col justify-between p-6 sm:p-8 text-white">
        {/* Ambient subtle light arcs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Vector Background Grids & Leaf Silhouette */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="insta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1" fill="#ecfdf5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#insta-grid)" />
          </svg>
        </div>

        {/* Top Tag inside Canvas */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-emerald-300">
            <span>Official Announcement</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-200/80 uppercase tracking-widest font-semibold">
            ABES EC · 2026
          </span>
        </div>

        {/* Central Graphic Element */}
        <div className="relative z-10 text-center my-auto py-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-900 p-3.5 shadow-2xl border border-emerald-500/40 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              <circle cx="24" cy="24" r="20" stroke="#34d399" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
              <path d="M24 38V20C24 14 29 11 34 10" stroke="#ecfdf5" strokeWidth="3" strokeLinecap="round" />
              <path d="M24 20C29 15 38 16 37 25C31 27 26 24 24 20Z" fill="#10b981" />
              <path d="M24 26C18 22 11 25 12 31C17 33 22 30 24 26Z" fill="#34d399" />
              <circle cx="24" cy="10" r="2.5" fill="#fef08a" />
            </svg>
          </div>

          <h4 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white mb-1">
            Small Actions. Greener Futures.
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-emerald-300 max-w-xs mx-auto">
            ECO CLUB · ABES ENGINEERING COLLEGE
          </p>

          <div className="mt-4 inline-block font-mono text-[11px] font-bold tracking-widest text-emerald-200 bg-emerald-900/70 px-3.5 py-1 rounded-md border border-emerald-600/40">
            “THINK. ACT. CODE. WORK GREENER.”
          </div>
        </div>

        {/* Bottom Graphic Footer */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-emerald-200/80 border-t border-white/10 pt-3">
          <span>Student Environmental & Innovation Wing</span>
          <span className="font-mono text-emerald-400 font-semibold">@abes_ecoclub</span>
        </div>
      </div>

      {/* Post Action Buttons in High Contrast Glass */}
      <div className="p-4 bg-white/95 dark:bg-stone-900/95">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 transition-transform active:scale-125 cursor-pointer"
              aria-label="Like post"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  isLiked
                    ? 'fill-rose-500 text-rose-500'
                    : 'text-slate-800 dark:text-stone-300 hover:text-black dark:hover:text-white'
                }`}
              />
            </button>

            {/* Comment Icon */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 dark:text-stone-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Comment on Instagram"
            >
              <MessageCircle className="w-6 h-6" />
            </a>

            {/* Share / Copy Link Icon */}
            <button
              onClick={handleShare}
              className="text-slate-800 dark:text-stone-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer relative"
              aria-label="Share post"
              title="Copy Instagram link"
            >
              {copiedLink ? (
                <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Send className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="text-slate-800 dark:text-stone-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Save post"
          >
            <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-current text-slate-900 dark:text-white' : ''}`} />
          </button>
        </div>

        {/* Likes Count */}
        <div className="text-xs font-bold text-slate-900 dark:text-white mb-2">
          {likesCount.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed space-y-1 font-normal">
          <p>
            <strong className="font-bold text-slate-900 dark:text-white mr-1.5">
              abes_ecoclub
            </strong>
            Small Actions. Greener Futures. 🌱 Welcoming all students of ABES Engineering College to our official sustainability movement! Think sustainably. Act responsibly. Build innovative solutions. Stay tuned for the Eco Treasure Hunt and Eco Hackathon!
          </p>

          <p className="text-emerald-800 dark:text-emerald-400 font-semibold pt-1">
            #ABESEC #EcoClub #Sustainability #ThinkActCodeWorkGreener #CleanTech #StudentInnovation #GreenCampus
          </p>
        </div>

        {/* View on Instagram Link */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Official Instagram Post
          </span>

          <Magnetic strength={0.2} maxDistance={6}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-700 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
            >
              <span>View on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};
