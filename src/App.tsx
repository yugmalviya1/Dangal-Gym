import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GymGallery from './components/GymGallery';
import GymInterior from './components/GymInterior';
import Marquee from './components/Marquee';
import Facilities from './components/Facilities';
import Transformation from './components/Transformation';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Offer from './components/Offer';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import Register from './components/Register';
import VideoIntro from './components/VideoIntro';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function Home() {
  const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Dangal Gym",
    "image": "https://dangalgym.xyz/dangal.png",
    "@id": "",
    "url": "https://dangalgym.xyz",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Awadhpuri",
      "addressLocality": "Bhopal",
      "addressRegion": "MP",
      "addressCountry": "IN"
    }
  });

  return (
    <>
      <SEO schema={localBusinessSchema} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Facilities />
        <Transformation />
        <VideoIntro />
        <GymInterior />
        <GymGallery />
        <Programs />
        <Pricing />
        <Reviews />
        <Offer />
        <Location />
      </main>
      <Footer />
      <FloatingSocials />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out, Apple-like deceleration
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

    // Global interceptor for relative anchor link clicks to enable smooth scrolling via Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        // Handle bare '#' links — scroll to top smoothly
        if (anchor.hash === '#') {
          e.preventDefault();
          lenis.scrollTo(0, {
            duration: 1.5,
            easing: (t) => 1 - Math.pow(1 - t, 4),
          });
          return;
        }
        try {
          const targetElement = document.querySelector(anchor.hash) as HTMLElement;
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement, {
              offset: -80, // Adjust scroll offset to clear the fixed navbar
              duration: 1.5,
              easing: (t) => 1 - Math.pow(1 - t, 4),
            });
          }
        } catch (_) {
          // Invalid selector — let browser handle it
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<><SEO title="Register - Dangal Gym | Join the Best Gym in Awadhpuri" description="Register at Dangal Gym today. Join the best fitness centre in Bhopal and start your fitness journey." /><Register /></>} />
          <Route path="/blog" element={<><SEO title="Fitness Blog - Dangal Gym | Gym Near Me" description="Read the latest fitness tips, workout routines, and diet plans from Dangal Gym experts." /><BlogList /></>} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

