import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { RevealText } from './RevealText';
import { GripVertical } from 'lucide-react';

const transformations = [
  { 
    id: 1, 
    name: 'Person 1',
    beforeImage: 'https://res.cloudinary.com/df5q9ujfh/image/upload/q_auto/f_auto/v1778706996/WhatsApp_Image_2026-05-09_at_8.45.02_PM_vb5usg.jpg',
    afterImage: 'https://res.cloudinary.com/df5q9ujfh/image/upload/q_auto/f_auto/v1778706997/WhatsApp_Image_2026-05-09_at_8.45.01_PM_ymzmmu.jpg'
  },
  { 
    id: 2,  
    name: 'Person 2',
    beforeImage: 'https://res.cloudinary.com/df5q9ujfh/image/upload/q_auto/f_auto/v1778706974/WhatsApp_Image_2026-05-07_at_9.43.43_PM_dfnzcw.jpg',
    afterImage: 'https://res.cloudinary.com/df5q9ujfh/image/upload/q_auto/f_auto/v1778706974/WhatsApp_Image_2026-05-07_at_9.43.43_PM_1_holdnw.jpg'
  }
];

function TransformationCard({ item }: { item: any }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    
    if ('touches' in e) {
      clientX = (e as React.TouchEvent).touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const hasImages = item.beforeImage || item.afterImage;
  const isSlider = item.beforeImage && item.afterImage;
  const fitClass = item.objectFit === 'contain' ? 'object-contain' : 'object-cover object-top';

  if (!hasImages) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <span className="text-2xl font-display font-bold text-white opacity-20">#0{item.id}</span>
        </div>
        <h3 className="font-display font-bold text-2xl uppercase text-white tracking-widest">{item.name}</h3>
        <div className="bg-brand-red/10 px-4 py-1.5 rounded-full border border-brand-red/20">
          <span className="text-[10px] font-bold text-brand-red uppercase tracking-[0.2em]">Transformation</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${isSlider ? 'cursor-ew-resize select-none' : ''}`}
      onMouseMove={(e) => {
        if (isSlider && e.buttons === 1) handleDrag(e);
      }}
      onMouseDown={(e) => {
        if (isSlider) handleDrag(e);
      }}
      onTouchMove={isSlider ? handleDrag : undefined}
      onClick={isSlider ? handleDrag : undefined}
    >
      {/* After Image (Background) */}
      {item.afterImage && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img 
            src={item.afterImage} 
            alt={`${item.name} After`} 
            draggable={false}
            className={`w-full h-full ${fitClass} bg-zinc-900`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <div className="absolute top-6 left-6 px-4 py-2 bg-brand-red text-[10px] btn-clip border border-white/10 z-10">
            <span className="text-white font-bold tracking-widest uppercase">After</span>
          </div>
        </div>
      )}

      {/* Before Image (Clipped if slider) */}
      {item.beforeImage && (
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={isSlider ? { clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` } : {}}
        >
          <img 
            src={item.beforeImage} 
            alt={`${item.name} Before`} 
            draggable={false}
            className={`w-full h-full ${fitClass} bg-zinc-900`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <div className={`absolute top-6 ${isSlider ? 'right-6' : 'left-6'} px-4 py-2 bg-black text-[10px] btn-clip border border-white/10 z-10`}>
            <span className="text-white font-bold tracking-widest uppercase">Before</span>
          </div>
        </div>
      )}

      {/* Slider Handle */}
      {isSlider && (
        <div 
          className="absolute top-0 bottom-0 bg-brand-red flex items-center justify-center pointer-events-none z-20"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)', width: '3px' }}
        >
          <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,51,51,0.5)] shrink-0">
            <GripVertical className="text-white w-5 h-5" />
          </div>
        </div>
      )}

      {/* Name Label */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-20 pointer-events-none">
        <h3 className="font-display font-bold text-2xl uppercase text-white tracking-widest">{item.name}</h3>
      </div>
    </div>
  );
}

export default function Transformation() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="transformations" className="py-32 bg-black relative z-10 border-b border-white/5" style={{ contentVisibility: 'visible' }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-start mb-20" ref={headingRef}>
          <h2 className="font-display font-light text-[8vw] sm:text-5xl md:text-7xl tracking-tighter uppercase leading-none text-white mb-6">
            <RevealText delay={0} duration={1.2}>Real</RevealText>
            <RevealText delay={0.15} duration={1.2} className="font-bold text-brand-red">Transformations</RevealText>
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed font-medium">
            Proof that dedication and the right environment deliver results. Our members are the living testimony of our training philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {transformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="group relative bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-500 flex flex-col items-center justify-center min-h-[350px] md:min-h-[450px]"
            >
              <TransformationCard item={item} />
              
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
