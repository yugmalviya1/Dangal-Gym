import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Program {
  img: string;
  title: string;
  desc: string;
  tag: string;
}

interface ProgramCardProps {
  prog: Program;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ prog, index }) => {
  return (
    <motion.div
      key={prog.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[400px] lg:h-full overflow-hidden flex flex-col justify-end rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] transform-gpu"
    >
      {/* Optimized Image Loading */}
      <img
        src={prog.img}
        alt={prog.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 transform-gpu will-change-transform"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 p-6 sm:p-8">
        <div className="text-white/80 font-bold text-[10px] uppercase tracking-widest mb-3">
          {prog.tag}
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white uppercase tracking-wider">
          {prog.title}
        </h3>
        <div className="h-0 group-hover:h-[80px] lg:group-hover:h-[60px] transition-all duration-500 overflow-hidden">
          <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {prog.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
