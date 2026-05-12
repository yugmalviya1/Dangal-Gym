import React from 'react';
import { Flame } from 'lucide-react';

export default function Marquee() {
  const content = Array.from({ length: 8 }).map((_, i) => (
    <React.Fragment key={i}>
      <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mx-8 whitespace-nowrap">
        GET EXTRA DISCOUNT UPTO ₹3,500 DURING CHECKOUT
      </span>
      <Flame size={18} className="text-white opacity-80 flex-shrink-0" />
    </React.Fragment>
  ));

  return (
    <div className="w-full bg-brand-red text-white py-4 overflow-hidden border-y border-white/10 relative z-20 flex">
      {/* Wrapper to hold repeating content */}
      <div className="flex shrink-0 items-center min-w-full animate-[marquee_50s_linear_infinite] marquee-inner">
        {content}
        {content}
      </div>
      {/* Duplicate for seamless infinite loop */}
      <div className="flex shrink-0 items-center min-w-full animate-[marquee_50s_linear_infinite] marquee-inner" aria-hidden="true">
        {content}
        {content}
      </div>
    </div>
  );
}
