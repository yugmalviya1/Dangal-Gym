import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { RevealText } from './RevealText';

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offer" className="py-32 bg-white relative overflow-hidden z-10 text-center">
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-4">Limited Time</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase text-black mb-6 flex flex-col items-center leading-[0.9]">
            <RevealText className="text-black font-semibold sm:font-normal">Exclusive</RevealText>
            <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Offer</RevealText>
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 text-sm md:text-lg leading-tight md:leading-snug mb-12 font-semibold md:font-medium font-['Inter']">
            <strong className="text-black font-bold md:font-semibold">Lock in our lowest ever rate before it expires.</strong> 40% OFF Annual Membership + Free PT Onboarding Session.
          </p>

          <div className="flex justify-center gap-4 md:gap-8 mb-16">
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-3xl text-gray-300 font-display font-light self-start mt-2 md:mt-4">:</div>
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <div className="text-3xl text-gray-300 font-display font-light self-start mt-2 md:mt-4">:</div>
            <TimeUnit value={timeLeft.seconds} label="Secs" />
          </div>

          <a href="#pricing" className="inline-block px-12 py-5 bg-black text-white font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-brand-red rounded-full">
            Claim Offer Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-5xl md:text-7xl text-black font-light tracking-tighter">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="mt-4 text-[10px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
  );
}
