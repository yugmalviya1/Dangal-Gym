import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { RevealText } from './RevealText';

const transformations = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1780576682/WhatsApp_Image_2026-06-02_at_9.11.59_PM_qb4r6n.jpg',
    alt: 'Transformation 1'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1780576682/WhatsApp_Image_2026-06-02_at_9.11.59_PM_1_jxp20v.jpg',
    alt: 'Transformation 2'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_600,q_auto,f_auto/v1780576682/WhatsApp_Image_2026-06-02_at_9.12.00_PM_d5kp2d.jpg',
    alt: 'Transformation 3'
  }
];

export default function Transformation() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="transformations" className="py-32 bg-black relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20" ref={headingRef}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start leading-[0.9]">
            <RevealText delay={0} duration={1.2} className="text-white font-semibold sm:font-normal">Real</RevealText>
            <RevealText delay={0.1} duration={1.2} className="text-brand-red font-bold sm:font-medium">Transformations</RevealText>
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
            <strong className="text-white font-bold md:font-semibold">Proof that dedication and the right environment deliver results.</strong> Our members are the living testimony of our training philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {transformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="group relative bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-500"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
