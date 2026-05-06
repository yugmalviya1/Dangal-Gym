import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoIntro() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-none overflow-hidden group w-full aspect-video border border-white/10"
        >
          {/* Fallback image if video fails or before interaction */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym Video Thumbnail" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-red btn-clip flex items-center justify-center cursor-pointer pointer-events-auto box-glow transition-all"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" fill="white" />
            </motion.div>
            <h2 className="mt-8 text-3xl sm:text-5xl font-display font-black skew-headline italic text-white tracking-widest uppercase">
              Experience the Power
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
