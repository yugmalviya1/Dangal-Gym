import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import ScratchCardModal from './ScratchCardModal';

export default function Marquee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = Array.from({ length: 8 }).map((_, i) => (
    <React.Fragment key={i}>
      <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mx-8 whitespace-nowrap cursor-pointer hover:text-black transition-colors" onClick={() => setIsModalOpen(true)}>
        GET EXTRA DISCOUNT UPTO ₹3,500 DURING CHECKOUT
      </span>
      <Flame size={18} className="text-white opacity-80 flex-shrink-0" />
    </React.Fragment>
  ));

  return (
    <>
      <div className="w-full bg-brand-red text-white py-4 overflow-hidden border-y border-white/10 relative z-20 flex cursor-pointer group" onClick={() => setIsModalOpen(true)}>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-10 pointer-events-none"></div>
        {/* Wrapper to hold repeating content */}
        <div className="flex shrink-0 items-center min-w-full animate-[marquee_50s_linear_infinite]">
          {content}
          {content}
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div className="flex shrink-0 items-center min-w-full animate-[marquee_50s_linear_infinite]" aria-hidden="true">
          {content}
          {content}
        </div>
      </div>
      
      <ScratchCardModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
