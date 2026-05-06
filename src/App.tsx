import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Facilities from './components/Facilities';
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
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    <div className="relative min-h-screen">
      <div className="fixed inset-0 noise"></div>
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
