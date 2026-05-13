import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { VideoOff } from 'lucide-react';
import { RevealText } from './RevealText';

export default function VideoShowcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "400px" });
  const [videoError, setVideoError] = useState(false);
  const videoSrc = "/Gym Dangal 1 1 Compressed.mp4";

  return (
    <section className="relative w-full h-screen overflow-hidden z-10 border-y border-white/5" ref={containerRef}>
      
      {/* Full Screen Background Video */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        <iframe
          src="https://player.vimeo.com/video/1191307630?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-60"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          loading="lazy"
          title="GYm dangal +1 +1"
        ></iframe>
        
        {/* Simple top and bottom gradients to blend into adjacent black sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-90" />
      </div>

      {/* Simple Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <div className="flex flex-col items-center">
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-white drop-shadow-2xl">
            <RevealText delay={0} duration={1.2}>EXPERIENCE THE <span className="text-brand-red">CULTURE</span></RevealText>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-medium drop-shadow-md px-4"
          >
            Step into a high-energy environment engineered for absolute transformation. Premium machines, an elite atmosphere, and a community with zero excuses.
          </motion.p>
        </div>
      </div>

    </section>
  );
}
