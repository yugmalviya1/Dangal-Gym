import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';

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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=2000" 
          alt="Athlete training background"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      {/* BACKGROUND TEXT */}
      <motion.div 
        style={{ 
          x: useSpring(useTransform(mouseX, (v) => v * -0.2), springConfig),
          y: useSpring(useTransform(mouseY, (v) => v * -0.2), springConfig),
          top: '-5%'
        }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-30" 
      >
         <h1 className="text-[12vw] sm:text-[10vw] leading-[1.1] font-bold text-white text-center tracking-tighter w-full whitespace-nowrap">
           Sculpt <span className="text-brand-red">Your</span> Body,<br />
           Elevate <span className="text-brand-red">Your</span> Spirit
         </h1>
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
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-red to-red-700 hover:from-red-600 hover:to-brand-red text-white font-black text-sm sm:text-base rounded-full transition-all duration-500 hover:scale-[1.05] shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:shadow-[0_0_50px_rgba(230,57,70,0.7)] cursor-pointer overflow-hidden border border-brand-red/50 hover:border-white/50 uppercase tracking-widest"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
            
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            
            <span className="relative z-10 whitespace-nowrap flex items-center justify-center">
              <span>WIN UP TO</span>
              <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)] font-extrabold tracking-tighter text-base sm:text-lg mx-1.5 translate-y-[1px]">15 DAYS</span>
              <span>FREE</span>
            </span>

            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
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
          Embrace the<br/>power within
        </motion.div>

      </div>
    </section>
  );
}
