import React from 'react';
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="program-card group cursor-pointer"
    >
      {/* Inner wrapper counter-skews so content stays straight */}
      <div className="program-card-inner">
        {/* Background Image */}
        <img
          src={prog.img}
          alt={prog.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

        {/* Content — always visible on mobile, hover-reveal on desktop */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12 transition-transform duration-700 group-hover:translate-x-4 transform-gpu will-change-transform">
          <div className="mb-2 lg:mb-4">
            {/* Tag: always visible on mobile, hover-reveal on desktop */}
            <span className="text-brand-red font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {prog.tag}
            </span>
            <h3 className="text-white font-['Oswald'] font-black text-2xl sm:text-3xl lg:text-5xl uppercase tracking-tighter leading-none transition-colors duration-700 group-hover:text-brand-red">
              {prog.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
          </div>

          {/* Description: always visible on mobile, hover-reveal on desktop */}
          <div className="w-full lg:w-[280px] overflow-hidden">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 delay-200 transform-gpu will-change-[transform,opacity] pb-1">
              {prog.desc}
            </p>
          </div>
        </div>

        {/* Border accent */}
        <div className="absolute inset-0 border-r border-white/10 group-hover:border-brand-red/50 transition-colors duration-700" />
      </div>
    </motion.div>
  );
};

export default ProgramCard;
