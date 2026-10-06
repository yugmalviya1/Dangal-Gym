import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import { Dumbbell, Shield, Flame, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Weight Training & Powerlifting Gym in Awadhpuri Bhopal | Dangal Gym',
  description: 'Awadhpuri\'s premier 2-floor weight training facility. Olympic barbells, heavy dumbbell racks (up to 50kg+), squat cages, and Hammer Strength machinery at Dangal Gym Bhopal.',
  keywords: [
    'Weight Training Gym Awadhpuri',
    'Powerlifting Gym Bhopal',
    'Strength Training Bhopal',
    'Heavy Lifting Gym Awadhpuri',
    'Gym with Olympic Weights Bhopal',
    'Dangal Gym Strength'
  ],
  alternates: {
    canonical: '/weight-training',
  },
  openGraph: {
    title: 'Weight Training & Powerlifting Gym - Dangal Gym Awadhpuri',
    description: 'Awadhpuri\'s premier 2-floor weight training facility with Olympic platforms and heavy iron.',
    url: 'https://dangalgym.xyz/weight-training',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const strengthFaqs = [
  {
    question: 'What weight training equipment does Dangal Gym provide?',
    answer: 'We feature 2 dedicated strength training floors equipped with Olympic barbells, power cages, deadlift platforms, custom flat & incline benches, cable crossover towers, and heavy dumbbell racks ranging from 2.5kg to 50kg+.'
  },
  {
    question: 'Is Dangal Gym suitable for serious powerlifters in Bhopal?',
    answer: 'Yes! Our first floor is engineered specifically for heavy compound lifts (squats, deadlifts, bench press) with bumper plates, Olympic knurled bars, and zero noise restrictions on dropping controlled weight.'
  },
  {
    question: 'How do trainers assist with weight training safety?',
    answer: 'Our certified floor trainers continuously spot members on heavy lifts, review spinal alignment, and teach proper breathing techniques (Valsalva maneuver) to ensure zero injury risks.'
  }
];

export default function WeightTrainingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Weight Training', url: '/weight-training' }
        ]} 
      />
      <ServiceSchema 
        name="Weight Training & Powerlifting"
        serviceType="Strength Training"
        description="2-floor comprehensive weight training arena equipped with Olympic barbells, heavy dumbbells, and Hammer Strength machinery."
      />
      <FAQSchema faqs={strengthFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Weight Training</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <Dumbbell size={14} /> 2-Floor Strength Arena
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Weight Training in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Two full floors dedicated purely to iron, muscle hypertrophy, and raw power. From heavy squats to isolated machine contractions, build your strongest physique at Dangal Gym Bhopal.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Join Weight Training
              </Link>
              <Link 
                href="/gallery" 
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300"
              >
                View Strength Floor Photos
              </Link>
            </div>
          </div>
        </section>

        {/* Equipment & Features */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Heavy Hardware</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Engineered For Real Gains
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Dumbbell className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Free Weights & Barbells</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Full rack of urethane dumbbells up to 50kg+, calibrated Olympic plates, 28mm Olympic power bars, and specialty EZ bars.
                </p>
                <span className="text-xs text-brand-red font-semibold uppercase tracking-wider">Floor 1 Arena</span>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Shield className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Olympic Squat Cages</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Commercial power racks with safety spotter arms, band pegs, and dedicated deadlift rubber platform zones.
                </p>
                <span className="text-xs text-brand-red font-semibold uppercase tracking-wider">Heavy Lifting Zone</span>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Flame className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Plate-Loaded Machinery</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Hammer Strength chest press, Being Strong hack squat, 45-degree leg press, seated row, and multi-angle cable towers.
                </p>
                <span className="text-xs text-brand-red font-semibold uppercase tracking-wider">Floor 2 Hypertrophy</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Weight Training FAQs
            </h2>
            <div className="space-y-4">
              {strengthFaqs.map((faq, idx) => (
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
