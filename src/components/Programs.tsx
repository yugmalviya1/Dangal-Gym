import React from 'react';
import ProgramCard from './ProgramCard';
import { RevealText } from './RevealText';

const programs = [
  { img: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,f_auto,q_auto/pic1_b1nzfl', title: 'Weight Loss', desc: 'HIIT circuits, cardio ladders, and metabolic conditioning designed to torch fat fast.', tag: '12-Week' },
  { img: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1778532483/pic2_dcmlbe.jpg', title: 'Muscle Gain', desc: 'Progressive overload, hypertrophy splits, and targeted recovery protocols.', tag: '16-Week' },
  { img: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1778532523/pic3_1_vvjwkl.jpg', title: 'Strength', desc: 'Powerlifting fundamentals, compound movements, and raw functional strength.', tag: 'Ongoing' },
  { img: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_800,q_auto,f_auto/v1778532566/pic4_etozh4.jpg', title: 'Coaching', desc: 'Full dedicated attention from our elite coaches with custom programming.', tag: '1-on-1' },
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 relative z-10 border-y border-white/5 bg-brand-surface">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start leading-[0.9]">
            <RevealText className="text-white font-semibold sm:font-normal">Training</RevealText>
            <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Programs</RevealText>
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
            <strong className="text-white font-bold md:font-semibold">We don't do generic workouts.</strong> Pick a specialized path explicitly designed to deliver targeted results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 h-[800px] lg:h-[600px] w-full overflow-hidden group/container">
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

