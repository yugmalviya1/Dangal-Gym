import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, GMB_DATA } from '@/components/StructuredData';
import { UserCheck, Target, HeartPulse, ShieldCheck, ChevronRight, CheckCircle2, Phone, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Training in Awadhpuri Bhopal | 1-on-1 Coaches | Dangal Gym',
  description: 'Accelerate your transformation with certified 1-on-1 personal training at Dangal Gym Awadhpuri, Bhopal. Custom workouts, personalized nutrition plans, and form mastery.',
  keywords: [
    'Personal Training Bhopal',
    'Personal Trainer in Awadhpuri',
    'Fitness Coach Bhopal',
    '1-on-1 Gym Trainer Awadhpuri',
    'Body Transformation Coach Bhopal',
    'Dangal Gym Personal Training'
  ],
  alternates: {
    canonical: '/personal-training',
  },
  openGraph: {
    title: 'Personal Training in Awadhpuri Bhopal - Dangal Gym',
    description: 'Transform your physique with certified 1-on-1 coaching at Dangal Gym Awadhpuri Bhopal.',
    url: 'https://dangalgym.xyz/personal-training',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const ptFaqs = [
  {
    question: 'How does personal training at Dangal Gym work?',
    answer: 'Your personal coach conducts a full body composition analysis and lifestyle assessment. They then build a tailored workout program and customized diet plan specifically for your goals (fat loss, hypertrophy, strength, or mobility).'
  },
  {
    question: 'Can beginners start with a personal trainer?',
    answer: 'Absolutely. In fact, beginners benefit most because personal training teaches correct lifting technique, builds core confidence, and prevents injuries right from day one.'
  },
  {
    question: 'Are diet and nutrition plans included with personal coaching?',
    answer: 'Yes! Certified nutrition guidance tailored to Indian dietary preferences (vegetarian, eggetarian, or non-veg) with exact macros is included with all Dangal Gym PT packages.'
  }
];

export default function PersonalTrainingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Personal Training', url: '/personal-training' }
        ]} 
      />
      <ServiceSchema 
        name="Personal Fitness Training & Coaching"
        serviceType="Personal Training"
        description="1-on-1 certified personal coaching with custom fitness programming and nutritional plans in Awadhpuri, Bhopal."
      />
      <FAQSchema faqs={ptFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Personal Training</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <UserCheck size={14} /> 1-on-1 Elite Coaching
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Personal Training in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Stop guessing your workouts. Train side-by-side with certified coaches who hold you accountable, dial in your nutrition, and push you past mental barriers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/register?plan=3%20Months" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Book 1-on-1 Consultation
              </Link>
              <a 
                href={`tel:${GMB_DATA.telephone}`}
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={16} className="text-brand-red" /> Call Trainer Desk
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">The Dangal Advantage</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Why 1-on-1 Coaching Wins
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                <Target className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-2">Custom Programming</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No copy-paste routines. Your coach develops splits tailored specifically to your body type, goals, and schedule.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                <ShieldCheck className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-2">Flawless Technique</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Learn textbook biomechanics on every lift to protect your joints, maximize muscle fiber activation, and lift heavier safely.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                <HeartPulse className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-2">Targeted Diet Plans</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Customized daily calories, macro ratios, and sustainable Indian meal recommendations matching your daily routine.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                <Sparkles className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-2">100% Accountability</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Never skip another workout. Your coach tracks your consistency, energy levels, and progressive overload every week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-center mb-16">
              Our 4-Step Coaching Roadmap
            </h2>

            <div className="space-y-6">
              {[
                { step: '01', title: 'Full InBody Assessment', desc: 'We evaluate your body fat percentage, skeletal muscle mass, mobility, and metabolic baseline.' },
                { step: '02', title: 'Blueprint Architecture', desc: 'Crafting your personalized 12-week lifting periodization and daily nutritional target.' },
                { step: '03', title: 'Guided Execution', desc: 'Intense 1-on-1 coached workout sessions focusing on progressive overload and explosive intensity.' },
                { step: '04', title: 'Weekly Progress Audits', desc: 'Weight, measurements, and photo audits with continuous program adjustments to prevent plateaus.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 items-start">
                  <span className="font-display text-3xl font-black text-brand-red">{item.step}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Personal Training FAQs
            </h2>
            <div className="space-y-4">
              {ptFaqs.map((faq, idx) => (
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
