import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { RevealText } from './RevealText';

interface HeroProps {
  isAppLoaded?: boolean;
}

export default function Hero({ isAppLoaded = true }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const manParallax = useTransform(scrollY, [0, 1000], [0, 400]);

  const springConfig = { damping: 25, stiffness: 150 };

  const bgX = useSpring(useTransform(mouseX, (v) => v * -0.2), springConfig);
  const bgY = useSpring(useTransform(mouseY, (v) => v * -0.2), springConfig);

  const manX = useSpring(useTransform(mouseX, (v) => v * -0.5), springConfig);
  const manY = useSpring(useTransform(mouseY, (v) => v * -0.5), springConfig);

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

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black perspective-[1000px]"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <iframe
          src="https://player.vimeo.com/video/1195536044?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
          className={`absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 grayscale opacity-40`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Dangal_Gym 4k"
          fetchPriority="high"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      {/* BACKGROUND TEXT */}
      <motion.div 
        style={isMobile ? {} : {
          x: bgX,
          y: bgY,
        }}
        className={`${isMobile ? 'fixed' : 'absolute'} inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-40 ${isMobile ? '' : 'will-change-transform'}`}
      >
         <motion.h1 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isAppLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="text-[20vw] sm:text-[10vw] leading-[0.9] font-bold text-white text-center tracking-normal w-full max-w-[100vw] px-4"
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
              x: isMobile ? 0 : manX,
              y: isMobile ? manParallax : manY,
              scale: 1.05
            }}
            initial={{ opacity: 0 }}
            animate={isAppLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            src="/muscle-man-no-bg.png"
            alt="Muscular Man"
            className="w-full h-[120%] object-contain filter contrast-125 drop-shadow-2xl transform-gpu will-change-transform"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAppLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 pointer-events-auto mt-0 md:mt-4 mb-8"
        >
          <a
            href="/register"
            className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-red to-red-700 hover:from-red-600 hover:to-brand-red text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-500 hover:scale-[1.05] shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:shadow-[0_0_50px_rgba(230,57,70,0.7)] cursor-pointer overflow-hidden border border-brand-red/50 hover:border-white/50 uppercase tracking-wider font-display"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-[150%] -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

            <span className="relative z-10 whitespace-nowrap flex items-center justify-center">
              <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.4)] font-bold mr-1.5">3 DAYS</span>
              <span className="font-medium tracking-widest">FREE TRIAL</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Elements */}
      <div className="relative z-10 w-full px-8 md:px-12 pb-12 flex justify-center md:justify-between items-end mt-auto max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAppLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase leading-loose"
        >
          Embrace the power within
        </motion.div>

      </div>
    </section>
  );
}
