import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import { Sparkles, Heart, Activity, Wind, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yoga Classes in Awadhpuri Bhopal | Flexibility & Mind | Dangal Gym',
  description: 'Restore balance, improve spinal mobility, and release mental tension with certified Yoga classes at Dangal Gym Awadhpuri, Bhopal. Gentle, vinyasa, and core restorative flows.',
  keywords: [
    'Yoga in Awadhpuri',
    'Yoga Classes Bhopal',
    'Yoga Studio Awadhpuri',
    'Flexibility and Meditation Bhopal',
    'Morning Yoga Classes Bhopal',
    'Dangal Gym Yoga'
  ],
  alternates: {
    canonical: '/yoga',
  },
  openGraph: {
    title: 'Yoga Classes in Awadhpuri Bhopal - Dangal Gym',
    description: 'Restore balance, flexibility, and core strength with certified Yoga instruction at Dangal Gym Awadhpuri.',
    url: 'https://dangalgym.xyz/yoga',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const yogaFaqs = [
  {
    question: 'Are Dangal Gym yoga classes suitable for individuals with stiff joints?',
    answer: 'Yes! Our yoga sessions emphasize progressive mobility, gentle joint decompressions, and guided modifications tailored specifically for beginners or those experiencing stiffness from desk jobs or heavy gym training.'
  },
  {
    question: 'What should I bring to a yoga session at Dangal Gym?',
    answer: 'Wear comfortable, breathable athletic clothing. We provide sanitized studio space, yoga mats, and air-conditioned ventilation. Bringing your personal water bottle and hand towel is recommended.'
  },
  {
    question: 'Can yoga help alongside weight training?',
    answer: 'Absolutely. Yoga dramatically improves flexibility, hip mobility, and thoracic extension, which directly translates to deeper squats, better bench press arch, and faster muscle recovery between heavy lifting days.'
  }
];

export default function YogaPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Yoga', url: '/yoga' }
        ]} 
      />
      <ServiceSchema 
        name="Yoga & Mobility Classes"
        serviceType="Yoga & Wellness"
        description="Certified yoga, breathwork, and mobility sessions in a peaceful climate-controlled studio in Awadhpuri, Bhopal."
      />
      <FAQSchema faqs={yogaFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Yoga</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <Wind size={14} /> Mind, Body & Mobility
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Yoga Classes in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Cultivate lasting inner calm, unlock tight hips and hamstrings, and fortify your deep core. Our guided yoga sessions bridge physical strength with mental resilience right in Awadhpuri Bhopal.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Join a Yoga Session
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300"
              >
                Inquire Batch Timings
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Holistic Conditioning</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Pillars of Our Practice
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Activity className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Spinal Decompression & Posture</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Combat desk hunch and lower back fatigue with restorative backbends, twists, and deliberate spine lengthening asanas.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Wind className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Pranayama Breathwork</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Master conscious diaphragmatic breathing to downregulate the nervous system, lower cortisol, and boost VO2 max lung volume.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Heart className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Joint Mobility & Balance</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deep fascial opening for tight hips, ankles, and shoulders to prevent lifting injuries and increase daily movement freedom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Yoga FAQs
            </h2>
            <div className="space-y-4">
              {yogaFaqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                  <h3 className="font-display text-lg font-bold uppercase mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
