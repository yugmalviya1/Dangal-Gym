import React, { useRef, useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { RevealText } from './RevealText';

const videoReviews = [
  {
    id: 1,
    name: "Member Review",
    poster: "https://i.vimeocdn.com/video/2193756931-0cfb5de67ca98854b85db05df96d2a95ac914c11595625a6b787bfbec5149b7d-d_640?region=us",
    videoId: "1221133447"
  },
  {
    id: 2,
    name: "Real Results",
    poster: "https://i.vimeocdn.com/video/2193756939-7bd20b3207294b49da57f7e30cc71343737768e94066d5104da9d5be0bd7b884-d_640?region=us",
    videoId: "1221133446"
  },
  {
    id: 3,
    name: "Transformation",
    poster: "https://i.vimeocdn.com/video/2193759530-f0a873ee8d6ce21d5bc5724f9f7aefdb7fe86cf83951bc4e5c24d65b865e6700-d_640?region=us",
    videoId: "1221135569"
  },
  {
    id: 4,
    name: "Discipline",
    poster: "https://i.vimeocdn.com/video/2193759551-0d100896eb24c16c7d76ef9a0f61a4f3511aad4569b1f3f5c1d76bc29915cf91-d_640?region=us",
    videoId: "1221135568"
  }
];

export default function VideoTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="stories" className="py-20 bg-black relative z-10 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal sm:tracking-[0.8px] uppercase mb-4 flex flex-col items-start gap-0 leading-[0.9]">
              <RevealText className="text-white font-semibold sm:font-normal">Member</RevealText>
              <RevealText delay={0.1} className="text-brand-red font-bold sm:font-medium">Stories</RevealText>
            </h2>
            <p className="max-w-2xl text-gray-400 text-sm md:text-lg leading-tight md:leading-snug font-semibold md:font-medium font-['Inter']">
              Watch our members share their incredible journeys and experiences at Dangal Gym.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors duration-300 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-colors duration-300 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Video Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
        >
          {videoReviews.map((video) => (
            <div 
              key={video.id} 
              className="relative group w-[280px] md:w-[320px] shrink-0 aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/50 transition-all duration-500 snap-center"
            >
              {activeVideo === video.id ? (
                <iframe
                  src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  title={video.name}
                />
              ) : (
                <div 
                  className="absolute inset-0 w-full h-full cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img 
                    src={video.poster} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                    alt={video.name} 
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand-red/90 backdrop-blur-md flex items-center justify-center text-white scale-95 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,51,51,0.4)]">
                      <Play className="ml-1 w-6 h-6 fill-current" />
                    </div>
                  </div>
                  
                  {/* Title overlay - only visible before play */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none transition-opacity duration-300 z-10">
                    <h3 className="text-white font-bold text-lg">{video.name}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
