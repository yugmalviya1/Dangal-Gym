import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RevealText } from './RevealText';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_500,q_auto,f_auto/v1780625489/Your_future_self_is_watching_Don_t_stop_.............._gymm_gymmotivation_gymrat_fitnessmoti_wnwqlo.jpg',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780625489/Your_future_self_is_watching_Don_t_stop_.............._gymm_gymmotivation_gymrat_fitnessmoti_wnwqlo.jpg',
    title: 'Relentless Drive',
    tag: 'Motivation',
    desc: "Your future self is watching. Don't stop.",
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_500,q_auto,f_auto/v1780625489/Push_harder_than_yesterday.....if_you_want_a_different_tomorrow_%EF%B8%8F_DANGAL_GYM_%EF%B8%8F_Join_us_to_uzjxvn.webp',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780625489/Push_harder_than_yesterday.....if_you_want_a_different_tomorrow_%EF%B8%8F_DANGAL_GYM_%EF%B8%8F_Join_us_to_uzjxvn.webp',
    title: 'Break Limits',
    tag: 'Focus',
    desc: 'Push harder than yesterday... for a different tomorrow.',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_500,q_auto,f_auto/v1780625489/1_better_every_day....__GymMotivation_FitnessGoals_WorkoutRoutine_BodyTransformation___Cabl_x8x9bs.jpg',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780625489/1_better_every_day....__GymMotivation_FitnessGoals_WorkoutRoutine_BodyTransformation___Cabl_x8x9bs.jpg',
    title: 'Daily Progress',
    tag: 'Consistency',
    desc: '1% better every single day.',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_500,q_auto,f_auto/v1780625489/625042575_18139118380488472_5109039207719911252_n_g65ckc.jpg',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780625489/625042575_18139118380488472_5109039207719911252_n_g65ckc.jpg',
    title: 'The Squad',
    tag: 'Community',
    desc: 'Dangal Gym core fitness squad.',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_500,q_auto,f_auto/v1780625489/Breaking_my_own_records_because_i_can_%EF%B8%8FJoin_us_Today_%EF%B8%8F_Dangal_Gym_Near_SBI_Bank_Awadhpu_wcewzy.webp',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780625489/Breaking_my_own_records_because_i_can_%EF%B8%8FJoin_us_Today_%EF%B8%8F_Dangal_Gym_Near_SBI_Bank_Awadhpu_wcewzy.webp',
    title: 'Victory Mindset',
    tag: 'Determination',
    desc: 'Breaking my own records because I can.',
  },
];

// Triplicating the list to guarantee infinite scroll width is far wider than any screen resolution
const marqueeItems = [...galleryItems, ...galleryItems, ...galleryItems];

export default function GymGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    // Lock body scroll and prevent Lenis from scrolling the background page
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lenis-stopped');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <>
    <section id="gallery" className="py-32 bg-black relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start leading-[0.9]">
            <RevealText className="text-white font-semibold sm:font-normal">Gym</RevealText>
            <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Gallery</RevealText>
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
            <strong className="text-white font-bold md:font-semibold">Join the movement.</strong> Fuel your dedication with motivation, community milestones, and elite training highlights.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="w-full overflow-hidden relative py-12 flex group">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />

        {/* First Loop Track */}
        <div className="flex shrink-0 items-center animate-[marquee_45s_linear_infinite] gap-6 group-hover:[animation-play-state:paused] pr-6">
          {marqueeItems.map((item, index) => {
            const originalIndex = index % galleryItems.length;
            return (
              <div
                key={`track1-${index}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="w-[240px] sm:w-[300px] md:w-[360px] h-[300px] sm:h-[375px] md:h-[450px] flex-shrink-0 group/card relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 cursor-pointer"
              >
                {/* Image Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out-gentle group-hover/card:scale-105"
                  />
                </div>

                {/* Gradient Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent opacity-85 group-hover/card:opacity-90 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Details Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out-gentle z-20">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed max-w-[180px] md:max-w-[260px] truncate">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 hover:bg-brand-red hover:border-brand-red flex-shrink-0">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>

                {/* Red Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover/card:border-brand-red/40 transition-colors duration-500 pointer-events-none z-30" />
              </div>
            );
          })}
        </div>

        {/* Second Loop Track (Duplicated for seamless transition) */}
        <div className="flex shrink-0 items-center animate-[marquee_45s_linear_infinite] gap-6 group-hover:[animation-play-state:paused] pr-6" aria-hidden="true">
          {marqueeItems.map((item, index) => {
            const originalIndex = index % galleryItems.length;
            return (
              <div
                key={`track2-${index}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="w-[240px] sm:w-[300px] md:w-[360px] h-[300px] sm:h-[375px] md:h-[450px] flex-shrink-0 group/card relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 cursor-pointer"
              >
                {/* Image Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out-gentle group-hover/card:scale-105"
                  />
                </div>

                {/* Gradient Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent opacity-85 group-hover/card:opacity-90 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Details Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 ease-out-gentle z-20">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed max-w-[180px] md:max-w-[260px] truncate">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 hover:bg-brand-red hover:border-brand-red flex-shrink-0">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>

                {/* Red Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover/card:border-brand-red/40 transition-colors duration-500 pointer-events-none z-30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-lenis-prevent
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col items-center justify-start py-16 px-4 md:px-8 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
          >
            {/* Header controls */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-none">
              <div className="text-left">
                <span className="px-2.5 py-1 rounded bg-brand-red text-white font-mono text-[9px] uppercase tracking-widest font-bold">
                  {activeItem.tag}
                </span>
                <h4 className="text-white font-display font-bold text-lg md:text-2xl uppercase tracking-wider mt-2">
                  {activeItem.title}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm">{activeItem.desc}</p>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-brand-red text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-brand-red text-white border border-white/10 transition-colors cursor-pointer hidden md:flex items-center justify-center"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-brand-red text-white border border-white/10 transition-colors cursor-pointer hidden md:flex items-center justify-center"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Showcase Image Container */}
            <div className="w-full max-w-[1000px] h-[60vh] md:h-[70vh] flex items-center justify-center relative overflow-hidden select-none">
              <motion.img
                key={lightboxIndex}
                src={activeItem.url}
                alt={activeItem.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </div>

            {/* Mobile / Screen Counter */}
            <div className="mt-6 text-gray-400 font-mono text-sm font-semibold bg-white/5 px-4 py-2 rounded-full border border-white/10 z-50">
              {lightboxIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
