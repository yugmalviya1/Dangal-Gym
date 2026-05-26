import React from 'react';
import { motion } from 'motion/react';
import { RevealText } from './RevealText';
import { Maximize2 } from 'lucide-react';

const galleryItems = [
  {
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_1200,q_auto,f_auto/v1779780776/gym22_nagqtv.png',
    title: 'The Arena',
    subtitle: '3-Floor Elite Fitness Landmark (Exterior)',
    size: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1779780759/gym26_kri48e.png',
    title: 'Strength Zone',
    subtitle: 'Hammer Strength & Being Strong Equipments',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1779780790/gym27_rpmtj5.png',
    title: 'Cardio Deck',
    subtitle: 'Premium Treadmills & HIIT Stations',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1779780780/gym24.jpg_jxuwwv.jpg',
    title: 'CrossFit Arena',
    subtitle: 'Functional Training & Turf Area',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1779780769/gym25.jpg_so0awg.jpg',
    title: 'Free Weights',
    subtitle: 'Heavy Dumbbells & Custom Benches',
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1779780774/gym26.jpg_m3fbct.jpg',
    title: 'Lifting Platform',
    subtitle: 'Olympic Platforms & Squat Racks',
    size: 'md:col-span-1 md:row-span-1',
  },
];

export default function GymGallery() {
  return (
    <section id="gallery" className="py-32 bg-brand-surface relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start leading-[0.9]">
            <RevealText className="text-white font-semibold sm:font-normal">The Dangal</RevealText>
            <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Campus</RevealText>
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
            <strong className="text-white font-bold md:font-semibold">Explore our temple of strength.</strong> Modern, premium aesthetics paired with the finest international training equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[300px] max-w-[1400px] mx-auto">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 ${item.size} cursor-pointer`}
            >
              {/* Image Container with Custom Zoom & Ease */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-out-gentle group-hover:scale-105"
                />
              </div>

              {/* Ambient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Glassmorphic Overlay Details on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out-gentle z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-brand-red hover:border-brand-red">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>

              {/* Red Accent Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-red/40 transition-colors duration-500 pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
