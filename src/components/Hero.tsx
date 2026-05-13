import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { RevealText } from './RevealText';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 25, stiffness: 150 };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black perspective-[1000px]"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://player.vimeo.com/video/1191307630?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 grayscale"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          title="GYm dangal +1 +1"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      {/* BACKGROUND TEXT */}
      <motion.div 
        style={{ 
          x: useSpring(useTransform(mouseX, (v) => v * -0.2), springConfig),
          y: useSpring(useTransform(mouseY, (v) => v * -0.2), springConfig),
        }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-40 will-change-transform" 
      >
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="text-[20vw] sm:text-[10vw] leading-[0.9] font-bold text-white text-center tracking-tighter w-full max-w-[100vw] px-4"
         >
            Sculpt <span className="text-brand-red">Your</span> Body<br/>
            Elevate <span className="text-brand-red">Your</span> Spirit
         </motion.h1>
      </motion.div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center flex-1 px-4 mt-24">
        <motion.div
          className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] flex justify-center items-center pointer-events-none"
        >
          <motion.img
            style={{
              x: useSpring(useTransform(mouseX, (v) => v * -0.5), springConfig),
              y: useSpring(useTransform(mouseY, (v) => v * -0.5), springConfig),
              scale: 1.05
            }}
            src="/muscle-man-no-bg.png"
            alt="Muscular Man"
            className="w-full h-[120%] object-contain filter contrast-125 drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-20 pointer-events-auto mt-0 md:mt-4 mb-8"
        >
          <a
            href="/register"
            className="group relative inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-brand-red to-red-700 hover:from-red-600 hover:to-brand-red text-white font-black text-[11px] sm:text-xs rounded-full transition-all duration-500 hover:scale-[1.05] shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:shadow-[0_0_50px_rgba(230,57,70,0.7)] cursor-pointer overflow-hidden border border-brand-red/50 hover:border-white/50 uppercase tracking-widest font-['Source_Sans_Pro',sans-serif]"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-[150%] -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

            <span className="relative z-10 whitespace-nowrap flex items-center justify-center">
              <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)] font-extrabold tracking-tighter text-xs sm:text-sm mr-1">3 DAYS</span>
              <span>FREE TRIAL</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Elements */}
      <div className="relative z-10 w-full px-8 md:px-12 pb-12 flex justify-between items-end mt-auto max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase leading-loose"
        >
          Embrace the power within
        </motion.div>

      </div>
    </section>
  );
}
