'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if we are in browser
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global interceptor for relative anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target?.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        if (anchor.hash === '#' || anchor.hash === '#home') {
          e.preventDefault();
          lenis.scrollTo(0, {
            duration: 1.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 4),
          });
          return;
        }
        try {
          const targetElement = document.querySelector(anchor.hash) as HTMLElement;
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement, {
              offset: -80,
              duration: 1.5,
              easing: (t: number) => 1 - Math.pow(1 - t, 4),
            });
          }
        } catch (_) {
          // ignore selector errors
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
