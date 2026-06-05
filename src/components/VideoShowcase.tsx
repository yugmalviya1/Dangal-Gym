import React, { useRef } from 'react';

export default function VideoShowcase() {
  const containerRef = useRef(null);

  return (
    <section className="relative w-full h-screen overflow-hidden z-10 border-y border-white/5" ref={containerRef}>
      
      {/* Full Screen Background Video */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        <iframe
          src="https://player.vimeo.com/video/1195547947?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[75vw] min-h-[100vh] min-w-[133.33vh] -translate-x-1/2 -translate-y-1/2 opacity-60"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          loading="lazy"
          title="WhatsApp Video"
        ></iframe>
        
        {/* Simple top and bottom gradients to blend into adjacent black sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-90" />
      </div>

    </section>
  );
}
