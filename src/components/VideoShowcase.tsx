import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { VideoOff } from 'lucide-react';

export default function VideoShowcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "400px" });
  const [videoError, setVideoError] = useState(false);
  const videoSrc = "/Gym Dangal 1 1 Compressed.mp4";

  return (
    <section className="relative w-full h-screen overflow-hidden z-10 border-y border-white/5" ref={containerRef}>
      
      {/* Full Screen Background Video */}
      <div className="absolute inset-0 z-0 bg-black will-change-transform">
        {isInView && !videoError ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/pic1.webp"
            preload="metadata"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover opacity-60 transform-gpu will-change-transform"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : videoError ? (
           <div className="w-full h-full bg-black flex items-center justify-center">
             <VideoOff className="w-12 h-12 text-white/20" />
           </div>
        ) : (
           <div className="w-full h-full bg-black animate-pulse" />
        )}
        
        {/* Simple top and bottom gradients to blend into adjacent black sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-90" />
      </div>

      {/* Simple Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-white drop-shadow-2xl">
            EXPERIENCE THE <span className="text-brand-red">CULTURE</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-medium drop-shadow-md px-4">
            Step into a high-energy environment engineered for absolute transformation. Premium machines, an elite atmosphere, and a community with zero excuses.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
