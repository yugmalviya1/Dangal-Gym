import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import GymGallery from '@/components/GymGallery';
import GymInterior from '@/components/GymInterior';
import VideoIntro from '@/components/VideoIntro';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { Camera, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gym Gallery & Facility Tour | Dangal Gym Awadhpuri Bhopal',
  description: 'Take a virtual tour of Dangal Gym Awadhpuri, Bhopal. Photos of our 3-floor facility, 2-floor heavy strength zone, Olympic barbells, and Zumba studio.',
  keywords: [
    'Dangal Gym Photos',
    'Gym Interior Awadhpuri',
    'Gym Photos Bhopal',
    'Dangal Gym Gallery',
    'Best Gym Infrastructure Bhopal'
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Dangal Gym Gallery & Virtual Tour - Awadhpuri Bhopal',
    description: 'Explore the 3-floor facility, Olympic equipment, and interior photos of Dangal Gym Bhopal.',
    url: 'https://dangalgym.xyz/gallery',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' }
        ]} 
      />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Facility Gallery</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-16 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <Camera size={14} /> Visual Showcase
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Dangal Gym <span className="text-brand-red">Gallery</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed">
              Experience the atmosphere, equipment, and high-energy culture of Awadhpuri Bhopal&apos;s most elite 3-floor fitness landmark.
            </p>
          </div>
        </section>

        {/* 4K Virtual Tour Video */}
        <VideoIntro />

        {/* Interior Interactive Grid */}
        <GymInterior />

        {/* Community & Motivation Showcase */}
        <GymGallery />

        {/* CTA */}
        <section className="py-20 bg-zinc-950 border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase mb-4">
              See It In Person
            </h2>
            <p className="text-gray-400 text-base mb-8">
              Photos can only capture so much. Come feel the iron, the vibe, and the energy in Awadhpuri near SBI Bank with our 3-Day Free Trial.
            </p>
            <Link 
              href="/register" 
              className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
            >
              Get Your 3-Day Pass
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
