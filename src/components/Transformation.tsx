import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const transformations = [
  { id: 1, name: 'Person 1' },
  { id: 2, name: 'Person 2' },
  { id: 3, name: 'Person 3' },
];

export default function Transformation() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="transformations" className="py-32 bg-black relative z-10 border-b border-white/5" style={{ contentVisibility: 'visible' }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20" ref={headingRef}>
          <h2 className="font-display font-light text-[8vw] sm:text-5xl md:text-7xl tracking-tighter uppercase leading-none text-white mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : { y: '100%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block transform-gpu will-change-transform"
              >
                Real
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : { y: '100%' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block font-bold text-brand-red transform-gpu will-change-transform"
              >
                Transformations
              </motion.span>
            </span>
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed font-medium">
            Proof that dedication and the right environment deliver results. Our members are the living testimony of our training philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-500 flex flex-col items-center justify-center h-[300px]"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl font-display font-bold text-white opacity-20">#0{item.id}</span>
                </div>
                <h3 className="font-display font-bold text-2xl uppercase text-white tracking-widest">{item.name}</h3>
                <div className="bg-brand-red/10 px-4 py-1.5 rounded-full border border-brand-red/20">
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-[0.2em]">Transformation</span>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
