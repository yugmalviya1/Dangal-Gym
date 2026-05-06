import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GripVertical } from 'lucide-react';

export default function Transformations() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-black skew-headline italic uppercase tracking-wider"
          >
            Real <span className="text-brand-red text-glow">Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto font-medium"
          >
            See the transformation. Words are cheap, results speak.
          </motion.p>
        </div>

        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto aspect-[4/3] sm:aspect-video rounded-none overflow-hidden cursor-ew-resize select-none border border-white/10"
          onMouseMove={(e) => {
            if (e.buttons === 1) handleDrag(e);
          }}
          onTouchMove={handleDrag}
          onClick={handleDrag}
        >
          {/* After Image (Background) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1500&auto=format&fit=crop")' }}
          >
            <div className="absolute top-6 left-6 px-4 py-2 bg-brand-red text-[10px] btn-clip border border-white/10">
              <span className="text-white font-bold tracking-widest uppercase">After</span>
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 bg-cover bg-center border-r-[3px] border-brand-red"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1599058917212-97d14a7905ce?q=80&w=1500&auto=format&fit=crop")', // Softer body image placeholder
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
            }}
          >
            <div className="absolute top-6 right-6 px-4 py-2 bg-black text-[10px] btn-clip border border-white/10">
              <span className="text-white font-bold tracking-widest uppercase">Before</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-transparent flex items-center justify-center"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,51,51,0.5)]">
              <GripVertical className="text-white w-5 h-5" />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
