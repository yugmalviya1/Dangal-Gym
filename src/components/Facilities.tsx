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
          <div>
            <h2 className="font-display font-light text-5xl md:text-7xl tracking-tighter uppercase leading-none">
              <RevealText>Modern</RevealText>
              <RevealText delay={0.2}><span className="font-bold">Facilities</span></RevealText>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-2 font-medium">
            Elevate your training within an environment engineered for peak performance and relentless focus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-start w-full animated-border-container h-full"
              >
                <div className="animated-border-content p-8 flex flex-col items-start w-full flex-1">
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
