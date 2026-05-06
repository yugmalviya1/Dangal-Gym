import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function ExclusiveOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-brand-red">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black uppercase tracking-wider text-white skew-headline italic"
          >
            Limited Time <span className="text-black">Offer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-white/90 font-medium"
          >
            Get 30% off on all Yearly Plans. Don't wait for tomorrow.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 glass p-8"
        >
          <div className="flex gap-4">
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <span className="text-4xl font-display text-white self-start mt-2">:</span>
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <span className="text-4xl font-display text-white self-start mt-2">:</span>
            <TimeUnit value={timeLeft.seconds} label="Secs" />
          </div>
          <button className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest btn-clip transition-transform hover:scale-[1.02]">
            Claim Offer Now
          </button>
        </motion.div>

      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-dark flex items-center justify-center border border-white/10 shadow-inner">
        <span className="text-3xl sm:text-4xl font-display text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-widest text-white/80 font-semibold">{label}</span>
    </div>
  );
}
