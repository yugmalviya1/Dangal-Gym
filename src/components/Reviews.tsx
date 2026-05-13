import React from 'react';
import { Star } from 'lucide-react';
import { RevealText } from './RevealText';

const googleReviews = [
  { name: 'Priya S.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', text: "Amazing environment and completely safe for women. Highly recommend for female fitness enthusiasts!", highlight: "Women Safety & Environment", stars: 5 },
  { name: 'Rahul V.', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop', text: "The equipments are top-notch and international grade. Never have to wait for machines.", highlight: "Premium Equipments", stars: 5 },
  { name: 'Neha K.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', text: "Joined 6 months ago and had an unbelievable transformation. The trainers are highly supportive.", highlight: "Great Transformation", stars: 5 },
  { name: 'Amit T.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop', text: "Best gym in Awadhpuri! The hygiene and overall vibe is just perfect for serious workouts.", highlight: "Great Environment", stars: 5 },
  { name: 'Sneha M.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop', text: "Felt very secure and comfortable working out here. Very professional staff and great crowd.", highlight: "Women Safety", stars: 5 },
  { name: 'Vikas J.', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop', text: "Lost 15kgs in 4 months. The personalized diet plans and equipment variety made it possible.", highlight: "Body Transformation", stars: 5 }
];

export default function Reviews() {
  const content = googleReviews.map((review, i) => (
    <div key={i} className="w-[300px] sm:w-[350px] flex-shrink-0 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 mx-3 hover:border-brand-red/30 transition-all duration-300">
       <div className="flex justify-between items-start mb-6">
         <div className="flex items-center gap-3">
           <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
           <div>
             <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">{review.name}</h4>
             <div className="flex gap-1 text-yellow-400">
               {[...Array(review.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
             </div>
           </div>
         </div>
       </div>
       <p className="text-gray-400 text-sm leading-relaxed mb-8 h-[60px]">"{review.text}"</p>
       <div className="text-[10px] text-brand-red font-bold uppercase tracking-widest bg-brand-red/10 inline-block px-3 py-1.5 rounded-full">
         {review.highlight}
       </div>
    </div>
  ));

  return (
    <section id="reviews" className="py-32 bg-black border-y border-white/5 relative z-10 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-20 text-center relative z-20">
        <h2 className="font-display font-light text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6">
          <RevealText>Member</RevealText>
          <RevealText delay={0.2}><span className="font-bold text-brand-red">Reviews</span></RevealText>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed font-medium">
          Real feedback from real members. See why Dangal Gym is the highest-rated fitness facility in Bhopal.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group py-4">
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
        
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] marquee-inner">
          {content}
        </div>
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] marquee-inner" aria-hidden="true">
          {content}
        </div>
      </div>
    </section>
  );
}
