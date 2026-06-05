import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Users, Activity, Flame, Salad, Droplet, Wind, Droplets, Layers, LineChart } from 'lucide-react';
import { RevealText } from './RevealText';

const facilities = [
  { icon: Layers, title: '3-Floor Gym (3500 sqft)', desc: 'Massive training space spanning three dedicated floors.' },
  { icon: Dumbbell, title: '2-Floor Strength Area', desc: 'Extensive zones engineered purely for strength and lifting.' },
  { icon: Activity, title: 'Cardio Section', desc: 'Dedicated machines to boost your endurance and stamina.' },
  { icon: Users, title: 'Aerobics, Zumba & CrossFit', desc: 'High-energy group classes to keep your workouts dynamic.' },
  { icon: LineChart, title: 'Body Analysis', desc: 'Track your progress with advanced body composition testing.' },
  { icon: Salad, title: 'Diet Counseling', desc: 'Expert nutrition guidance tailored to your fitness goals.' },
  { icon: Droplet, title: 'Steam Bath', desc: 'Recover faster and relax your muscles post-workout.' },
  { icon: Wind, title: 'Fully Air Conditioned', desc: 'Train in comfort with 100% climate-controlled environments.' },
  { icon: Droplets, title: 'Mineral RO Water', desc: 'Stay hydrated with purified, safe drinking water.' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-black relative z-10 text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start leading-[0.9]">
              <RevealText className="text-white font-semibold sm:font-normal">Modern</RevealText>
              <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Facilities</RevealText>
            </h2>
            <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
              <strong className="text-white font-bold md:font-semibold">Engineered for peak performance.</strong> An environment built for relentless focus.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="group relative flex flex-col items-start w-full h-full rounded-lg overflow-hidden bg-zinc-900/50"
              >
                {/* Static subtle border */}
                <div className="absolute inset-0 rounded-lg border border-white/10 transition-colors duration-500 z-10 pointer-events-none" />
                
                {/* Animated running glow border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-[-2px] rounded-lg group-hover:animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,51,51,0.6)_25%,transparent_50%)]" />
                  <div className="absolute inset-[1px] rounded-[7px] bg-black" />
                </div>
                
                {/* Glow shadow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(255,51,51,0.2)] pointer-events-none" />

                <div className="relative z-20 p-8 flex flex-col items-start w-full flex-1">
                  <div className="mb-6 flex gap-4">
                    <Icon className="text-white opacity-40 group-hover:opacity-100 transition-opacity duration-500" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wider mb-3">{fac.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">{fac.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
