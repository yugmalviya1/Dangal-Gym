import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import { Flame, Scale, TrendingDown, HeartPulse, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Weight Loss & Fat Burn Programs in Awadhpuri Bhopal | Dangal Gym',
  description: 'Burn fat and keep it off sustainably at Dangal Gym Awadhpuri, Bhopal. 12-week HIIT and metabolic conditioning, customized Indian diet plans, and InBody tracking.',
  keywords: [
    'Weight Loss Gym Awadhpuri',
    'Fat Loss Program Bhopal',
    'Gym for Weight Loss Bhopal',
    'HIIT Workouts Awadhpuri',
    'Diet Plan for Fat Loss Bhopal',
    'Dangal Gym Weight Loss'
  ],
  alternates: {
    canonical: '/weight-loss',
  },
  openGraph: {
    title: 'Weight Loss Programs in Awadhpuri Bhopal - Dangal Gym',
    description: 'Transform your body with sustainable fat burn protocols and custom nutrition plans at Dangal Gym.',
    url: 'https://dangalgym.xyz/weight-loss',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const weightLossFaqs = [
  {
    question: 'How fast can I lose weight at Dangal Gym?',
    answer: 'A healthy and sustainable rate of fat loss is between 2 to 4 kilograms per month. Our programs prioritize losing body fat while preserving lean muscle mass so your metabolism remains high and the weight stays off permanently.'
  },
  {
    question: 'Do I have to starve myself on a crash diet?',
    answer: 'Never. Crash diets destroy muscle and slow thyroid function. We create calorie-deficit nutrition plans built around whole Indian foods—paneer, dal, soya, chicken, eggs, roti, and vegetables—ensuring you feel satisfied, full, and energized.'
  },
  {
    question: 'Why is resistance training better than cardio alone for fat loss?',
    answer: 'Cardio burns calories while you are moving, but lifting weights builds muscle tissue which burns calories 24 hours a day, even while you sleep. Combining strength training with HIIT cardio yields the fastest body recomposition.'
  }
];

export default function WeightLossPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Weight Loss', url: '/weight-loss' }
        ]} 
      />
      <ServiceSchema 
        name="Weight Loss & Metabolic Transformation"
        serviceType="Weight Loss Program"
        description="Comprehensive 12-week fat loss and body recomposition protocol with InBody progress monitoring in Awadhpuri, Bhopal."
      />
      <FAQSchema faqs={weightLossFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Weight Loss</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <TrendingDown size={14} /> 12-Week Fat Loss Blueprint
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Weight Loss in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Escape the cycle of yo-yo dieting. Our evidence-based weight loss system combines metabolic resistance training, high-efficiency cardio intervals, and tailored nutrition coaching to torch fat and reveal athletic muscle definition.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/register?plan=3%20Months" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Start Weight Loss Program
              </Link>
              <Link 
                href="/#transformations" 
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300"
              >
                View Member Results
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Scientific Methodology</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                How We Burn Fat Permanently
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Flame className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Metabolic Conditioning</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  High-intensity functional circuits, kettlebell swings, battle ropes, and incline sprints that elevate your metabolic rate for up to 36 hours post-exercise (EPOC effect).
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Scale className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Muscle-Preserving Strength</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Compound barbell and dumbbell lifts signal your body to burn stored body fat for fuel while keeping your hard-earned muscle intact and tightening loose skin.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <HeartPulse className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">InBody Composition Tracking</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don&apos;t rely on bathroom scales. Advanced body composition metrics measure visceral fat, water retention, and lean skeletal mass so you see exact progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Weight Loss FAQs
            </h2>
            <div className="space-y-4">
              {weightLossFaqs.map((faq, idx) => (
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
