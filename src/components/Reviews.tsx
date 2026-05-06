import React from 'react';
import { Star } from 'lucide-react';

const googleReviews = [
  { name: 'Priya S.', text: "Amazing environment and completely safe for women. Highly recommend for female fitness enthusiasts!", highlight: "Women Safety & Environment", stars: 5 },
  { name: 'Rahul V.', text: "The equipments are top-notch and international grade. Never have to wait for machines.", highlight: "Premium Equipments", stars: 5 },
  { name: 'Neha K.', text: "Joined 6 months ago and had an unbelievable transformation. The trainers are highly supportive.", highlight: "Great Transformation", stars: 5 },
  { name: 'Amit T.', text: "Best gym in Awadhpuri! The hygiene and overall vibe is just perfect for serious workouts.", highlight: "Great Environment", stars: 5 },
  { name: 'Sneha M.', text: "Felt very secure and comfortable working out here. Very professional staff and great crowd.", highlight: "Women Safety", stars: 5 },
  { name: 'Vikas J.', text: "Lost 15kgs in 4 months. The personalized diet plans and equipment variety made it possible.", highlight: "Body Transformation", stars: 5 }
];

export default function Reviews() {
  const content = googleReviews.map((review, i) => (
    <div key={i} className="w-[300px] sm:w-[350px] flex-shrink-0 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 mx-3 hover:border-brand-red/30 transition-all duration-300">
       <div className="flex justify-between items-start mb-6">
         <div>
           <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">{review.name}</h4>
           <div className="flex gap-1 text-yellow-400">
             {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
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
          Member <br /><span className="font-bold text-brand-red">Reviews</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed font-medium">
          Real feedback from real members. See why Dangal Gym is the highest-rated fitness facility in Bhopal.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group py-4">
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
        
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
          {content}
        </div>
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
          {content}
        </div>
      </div>
    </section>
  );
}
