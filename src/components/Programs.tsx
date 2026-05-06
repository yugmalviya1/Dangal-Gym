import React from 'react';
import { motion } from 'motion/react';

const programs = [
  { img: '/pic1.JPG', title: 'Weight Loss', desc: 'HIIT circuits, cardio ladders, and metabolic conditioning designed to torch fat fast.', tag: '12-Week' },
  { img: '/pic2.JPG', title: 'Muscle Gain', desc: 'Progressive overload, hypertrophy splits, and targeted recovery protocols.', tag: '16-Week' },
  { img: '/pic3.JPG', title: 'Strength', desc: 'Powerlifting fundamentals, compound movements, and raw functional strength.', tag: 'Ongoing' },
  { img: '/pic 4 (1).jpg', title: 'Coaching', desc: 'Full dedicated attention from our elite coaches with custom programming.', tag: '1-on-1' },
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 relative z-10 border-y border-white/5 bg-brand-surface">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20">
          <h2 className="font-display font-light text-5xl md:text-7xl tracking-tighter uppercase leading-none text-white mb-6">
            Training <br /><span className="font-bold">Programs</span>
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed font-medium">
            We don't do generic workouts. Pick a specialized path explicitly designed to deliver targeted results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[600px] w-full">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[400px] lg:h-full bg-black overflow-hidden flex flex-col justify-end rounded-2xl cursor-pointer"
            >
              <img 
                src={prog.img} 
                alt={prog.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 p-6 sm:p-8 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                <div className="text-white/80 font-bold text-[10px] uppercase tracking-widest mb-3">
                  {prog.tag}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white uppercase tracking-wider">
                  {prog.title}
                </h3>
                <div className="h-0 group-hover:h-[80px] lg:group-hover:h-[60px] transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {prog.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
