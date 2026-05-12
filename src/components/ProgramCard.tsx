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
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="program-card group cursor-pointer"
    >
      {/* Inner wrapper counter-skews so content stays straight */}
      <div className="program-card-inner">
        {/* Background Image — no scale on hover, just opacity shift */}
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

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 transition-transform duration-700 group-hover:translate-x-4 transform-gpu will-change-transform">
          <div className="mb-4">
            <span className="text-brand-red font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {prog.tag}
            </span>
            <h3 className="text-white font-['Oswald'] font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-none transition-colors duration-700 group-hover:text-brand-red">
              {prog.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
          </div>

          <div className="max-w-[280px] overflow-hidden">
            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 delay-200 transform-gpu will-change-[transform,opacity]">
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
