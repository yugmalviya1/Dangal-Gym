import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden group w-full aspect-[4/3] sm:aspect-video border border-white/10 bg-zinc-950 shadow-2xl"
        >
          {isPlaying ? (
            <iframe
              src="https://player.vimeo.com/video/1195536044?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=1"
              className="w-full h-full absolute inset-0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dangal_Gym 4k"
            ></iframe>
          ) : (
            <div 
              className="w-full h-full absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Static Cover Image */}
              <img
                src="https://i.vimeocdn.com/video/2161426831-1d68bf66aae34c60a55a5191cfd28a78c72be45043b3e464751d910dc33487ab-d_1280"
                alt="Dangal Gym Video Cover"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/35" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 sm:w-24 sm:h-24 bg-brand-red btn-clip flex items-center justify-center cursor-pointer box-glow transition-all border-none outline-none z-20"
                  aria-label="Play Video"
                >
                  <Play className="w-6 h-6 sm:w-10 sm:h-10 text-white ml-1.5 sm:ml-2 animate-pulse" fill="white" />
                </motion.button>
                <h2 className="mt-6 sm:mt-8 text-2xl sm:text-5xl font-display font-black skew-headline italic text-white tracking-widest uppercase pointer-events-none text-center z-10">
                  Experience the Power
                </h2>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
