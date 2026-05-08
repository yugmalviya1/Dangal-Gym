import React from 'react';
import ProgramCard from './ProgramCard';
import { RevealText } from './RevealText';

const programs = [
  { img: '/pic1.webp', title: 'Weight Loss', desc: 'HIIT circuits, cardio ladders, and metabolic conditioning designed to torch fat fast.', tag: '12-Week' },
  { img: '/pic2.webp', title: 'Muscle Gain', desc: 'Progressive overload, hypertrophy splits, and targeted recovery protocols.', tag: '16-Week' },
  { img: '/pic3 (1).webp', title: 'Strength', desc: 'Powerlifting fundamentals, compound movements, and raw functional strength.', tag: 'Ongoing' },
  { img: '/pic4.webp', title: 'Coaching', desc: 'Full dedicated attention from our elite coaches with custom programming.', tag: '1-on-1' },
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 relative z-10 border-y border-white/5 bg-brand-surface">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20">
          <h2 className="font-display font-light text-5xl md:text-7xl tracking-tighter uppercase leading-none text-white mb-6">
            <RevealText>Training</RevealText>
            <RevealText delay={0.2}><span className="font-bold">Programs</span></RevealText>
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed font-medium">
            We don't do generic workouts. Pick a specialized path explicitly designed to deliver targeted results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 h-[400px] lg:h-[600px] w-full overflow-hidden group/container">
          {programs.map((prog, i) => (
            <ProgramCard key={prog.title} prog={prog} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-medium text-lg md:text-xl tracking-tight">
            It's about identity. Progress. <span className="text-white font-bold">Getting unstuck.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

