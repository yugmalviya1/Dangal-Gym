import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GymGallery from '@/components/GymGallery';
import GymInterior from '@/components/GymInterior';
import Marquee from '@/components/Marquee';
import Facilities from '@/components/Facilities';
import Transformation from '@/components/Transformation';
import Programs from '@/components/Programs';
import Pricing from '@/components/Pricing';
import VideoTestimonials from '@/components/VideoTestimonials';
import Reviews from '@/components/Reviews';
import Offer from '@/components/Offer';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import VideoIntro from '@/components/VideoIntro';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-dark">
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
        <VideoTestimonials />
        <Reviews />
        <Offer />
        <Location />
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
}
