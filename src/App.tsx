import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import GymGallery from './components/GymGallery';
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

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Facilities />
        <Transformation />
        <VideoShowcase />
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
