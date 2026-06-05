import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RevealText } from './RevealText';
import { Maximize2, ZoomIn, ZoomOut, RotateCcw, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1000,q_auto,f_auto/v1779780776/gym22_nagqtv.png',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1779780776/gym22_nagqtv.png',
    title: 'The Arena',
    subtitle: '3-Floor Elite Fitness Landmark (Exterior)',
    size: 'md:col-span-2 md:row-span-2',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1779780759/gym26_kri48e.png',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1779780759/gym26_kri48e.png',
    title: 'Strength Zone',
    subtitle: 'Hammer Strength & Being Strong Equipments',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1779780790/gym27_rpmtj5.png',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1779780790/gym27_rpmtj5.png',
    title: 'Cardio Deck',
    subtitle: 'Premium Treadmills & HIIT Stations',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1779780780/gym24.jpg_jxuwwv.jpg',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1779780780/gym24.jpg_jxuwwv.jpg',
    title: 'CrossFit Arena',
    subtitle: 'Functional Training & Turf Area',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1780627983/gym13_fg4zyk.png',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780627983/gym13_fg4zyk.png',
    title: 'Free Weights',
    subtitle: 'Heavy Dumbbells & Custom Benches',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    thumbnailUrl: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1780627982/WhatsApp_Image_2026-06-03_at_8.57.25_PM_2_ah57gb.jpg',
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1600,q_auto,f_auto/v1780627982/WhatsApp_Image_2026-06-03_at_8.57.25_PM_2_ah57gb.jpg',
    title: 'Lifting Platform',
    subtitle: 'Olympic Platforms & Squat Racks',
    size: 'md:col-span-1 md:row-span-1',
  },
];

export default function GymInterior() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
    setScale(1);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
    setScale(1);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 1.0));
  };

  const handleReset = () => {
    setScale(1.0);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    // Lock body scroll and prevent Lenis from scrolling the background
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lenis-stopped');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
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
    <section id="interior" className="py-32 bg-brand-surface relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start leading-[0.9]">
            <RevealText className="text-white font-semibold sm:font-normal">Gym</RevealText>
            <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Interior</RevealText>
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
            <strong className="text-white font-bold md:font-semibold">Explore our high-performance design.</strong> Three floors of premium engineering, elite zones, and international training spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[300px] max-w-[1400px] mx-auto">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => {
                setLightboxIndex(i);
                setScale(1);
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 ${item.size} cursor-pointer`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out-gentle group-hover:scale-105"
                />
              </div>

              {/* Ambient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Overlay Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out-gentle z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-brand-red hover:border-brand-red">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>

              {/* Red Accent Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-red/40 transition-colors duration-500 pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Lightbox Modal with Zoom */}
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
                <h4 className="text-white font-display font-bold text-lg md:text-2xl uppercase tracking-wider">
                  {activeItem.title}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm">{activeItem.subtitle}</p>
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

            {/* Interactive Image Container */}
            <div
              ref={containerRef}
              className="w-full max-w-[1200px] h-[60vh] md:h-[70vh] flex items-center justify-center relative overflow-hidden select-none"
            >
              <motion.img
                key={lightboxIndex}
                src={activeItem.url}
                alt={activeItem.title}
                animate={{ scale }}
                transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                drag={scale > 1}
                dragConstraints={containerRef}
                dragElastic={0.15}
                className={`max-w-full max-h-full object-contain rounded-2xl ${
                  scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''
                }`}
              />
            </div>

            {/* Premium Zoom & Cycle Controls */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4 z-50">
              {/* Zoom Panel */}
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 p-2 rounded-full shadow-2xl">
                <button
                  onClick={handleZoomOut}
                  disabled={scale <= 1}
                  className="p-3 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-white font-mono text-xs font-semibold px-3 min-w-[50px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={scale >= 3}
                  className="p-3 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn size={18} />
                </button>
                <div className="w-[1px] h-6 bg-white/10 mx-1" />
                <button
                  onClick={handleReset}
                  className="p-3 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              {/* Mobile Navigation Panel */}
              <div className="flex md:hidden items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 p-2 rounded-full shadow-2xl">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-white text-xs font-semibold px-2 font-mono">
                  {lightboxIndex + 1} / {galleryItems.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Instruction tooltip when zoomed */}
            {scale > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 text-gray-400 text-xs font-medium bg-black/60 px-4 py-2 rounded-full border border-white/5 pointer-events-none"
              >
                Drag / Pan the image to explore details
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
