import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import { Music, Flame, Users, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zumba & Dance Fitness in Awadhpuri Bhopal | Dangal Gym',
  description: 'Burn calories with electrifying Zumba dance workouts at Dangal Gym Awadhpuri, Bhopal. Energetic certified instructors, dedicated 3rd-floor studio, and female-friendly batches.',
  keywords: [
    'Zumba in Awadhpuri',
    'Zumba Classes Bhopal',
    'Dance Fitness Awadhpuri',
    'Aerobics and Zumba Bhopal',
    'Ladies Zumba Class Awadhpuri',
    'Dangal Gym Zumba'
  ],
  alternates: {
    canonical: '/zumba',
  },
  openGraph: {
    title: 'Zumba & Dance Fitness Classes - Dangal Gym Awadhpuri Bhopal',
    description: 'High-energy Zumba dance workouts in Awadhpuri Bhopal. Burn fat while having fun with certified instructors.',
    url: 'https://dangalgym.xyz/zumba',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const zumbaFaqs = [
  {
    question: 'Do I need previous dance experience to join Zumba?',
    answer: 'Not at all! Zumba is designed for everyone regardless of rhythm or dancing background. The choreography is fun, easy-to-follow, and focuses on movement and calorie burn rather than perfection.'
  },
  {
    question: 'How many calories can I burn in a Dangal Gym Zumba class?',
    answer: 'A single 50-minute Zumba session burns between 500 to 800 calories depending on your intensity, while toning your core, legs, and improving cardiovascular stamina.'
  },
  {
    question: 'Are there separate or female-friendly batches for Zumba in Awadhpuri?',
    answer: 'Yes! Our Zumba studio on the 3rd floor hosts welcoming, vibrant batches that are extremely popular with women in Awadhpuri looking for fun, community-driven cardio workouts.'
  }
];

export default function ZumbaPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Zumba', url: '/zumba' }
        ]} 
      />
      <ServiceSchema 
        name="Zumba & Dance Fitness Classes"
        serviceType="Zumba Fitness"
        description="High-energy group Zumba dance classes with certified instructors in a spacious, climate-controlled studio in Awadhpuri, Bhopal."
      />
      <FAQSchema faqs={zumbaFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Zumba</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <Music size={14} /> Dance & Aerobics Studio
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Zumba Classes in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Ditch the boring workout and join the party. Our high-energy Zumba sessions combine Latin beats, chart-topping hits, and athletic intervals to melt away body fat with a smile on your face.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Join a Zumba Session
              </Link>
              <Link 
                href="/gym-in-awadhpuri" 
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300"
              >
                Check Studio Timings
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">High-Energy Health</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Why Zumba at Dangal Gym?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Flame className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Up to 800 Calories</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Fast-paced interval choreography shifts between high and low intensity, maximizing metabolic burn long after class ends.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Users className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Empowering Community</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Workout alongside friends in an uplifting, positive space where judgment is left at the door and energy is infectious.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Sparkles className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Stress Relief & Mood Boost</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Trigger endorphins with heart-pumping rhythms. Shake off work fatigue and walk out feeling refreshed and energized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Zumba FAQs
            </h2>
            <div className="space-y-4">
              {zumbaFaqs.map((faq, idx) => (
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
