import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Members', value: '500+' },
  { label: 'Transformations', value: '50+' },
  { label: 'Trainers', value: '10+' },
  { label: 'Years Experience', value: '5+' },
];

export default function Stats() {
  return (
    <section className="py-8 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-3xl sm:text-4xl md:text-[28px] font-display font-black text-brand-red text-glow">
                {stat.value}
              </span>
              <span className="mt-1 text-[10px] text-gray-400 font-bold uppercase tracking-[2px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
