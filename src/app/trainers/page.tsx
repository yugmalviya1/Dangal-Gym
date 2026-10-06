import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, GMB_DATA } from '@/components/StructuredData';
import { Award, Dumbbell, ChevronRight, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certified Fitness Trainers in Awadhpuri Bhopal | Dangal Gym Team',
  description: 'Meet the certified fitness coaches and personal trainers at Dangal Gym Awadhpuri, Bhopal. Experts in strength training, powerlifting, fat burn, and nutrition counseling.',
  keywords: [
    'Gym Trainers in Awadhpuri',
    'Certified Fitness Coaches Bhopal',
    'Personal Trainers Bhopal',
    'Best Gym Coach Awadhpuri',
    'Powerlifting Trainer Bhopal',
    'Dangal Gym Trainers'
  ],
  alternates: {
    canonical: '/trainers',
  },
  openGraph: {
    title: 'Certified Fitness Trainers - Dangal Gym Awadhpuri Bhopal',
    description: 'Meet the elite coaching staff at Dangal Gym Awadhpuri Bhopal. Certified experts in strength, conditioning, and transformation.',
    url: 'https://dangalgym.xyz/trainers',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const trainers = [
  {
    name: 'Head Coach & Strength Specialist',
    specialty: 'Powerlifting, Hypertrophy & Periodization',
    exp: '8+ Years Experience',
    bio: 'Dedicated to biomechanics, heavy compound lifting, and competitive strength preparation. Guides both novices and advanced lifters safely past plateaus.',
    certifications: ['Certified Strength & Conditioning', 'CPR & First Aid', 'Olympic Lifting Specialist']
  },
  {
    name: 'Senior Transformation Coach',
    specialty: 'Metabolic Fat Loss & Body Recomposition',
    exp: '6+ Years Experience',
    bio: 'Specialist in 12-week total body transformations, nutritional macro tracking, and high-intensity metabolic resistance conditioning.',
    certifications: ['Certified Personal Trainer (CPT)', 'Sports Nutritionist', 'Functional Movement Screen']
  },
  {
    name: 'Group Fitness & Zumba Lead',
    specialty: 'Zumba, Aerobics & Cardiovascular Conditioning',
    exp: '5+ Years Experience',
    bio: 'Brings infectious rhythm and energy to our 3rd-floor studio. Specializes in female fitness, core toning, and high-calorie dance workouts.',
    certifications: ['Licensed Zumba Instructor (ZIN)', 'Aerobics Group Coach', 'Mobility & Flexibility Specialist']
  }
];

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Trainers', url: '/trainers' }
        ]} 
      />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Elite Trainers</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} /> Certified Coaching Staff
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Elite Trainers in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Behind every champion is an elite mentor. At Dangal Gym, our coaching roster is staffed with certified experts who live and breathe exercise science, form perfection, and genuine member care.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/personal-training" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Book a Trainer Session
              </Link>
              <a 
                href={`tel:${GMB_DATA.telephone}`}
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={16} className="text-brand-red" /> Speak with Head Coach
              </a>
            </div>
          </div>
        </section>

        {/* Trainer Roster */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {trainers.map((coach, index) => (
                <div key={index} className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 flex flex-col hover:border-brand-red/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
                    <Dumbbell size={32} />
                  </div>

                  <span className="text-xs font-bold text-brand-red tracking-widest uppercase mb-1">{coach.exp}</span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">{coach.name}</h3>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">{coach.specialty}</div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {coach.bio}
                  </p>

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">Certifications</span>
                    <ul className="space-y-1.5">
                      {coach.certifications.map((cert, cIdx) => (
                        <li key={cIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-brand-red flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Philosophy */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ShieldCheck className="mx-auto text-brand-red mb-4" size={40} />
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-4">
              Our Zero Bro-Science Guarantee
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              We never promote dangerous fad diets, extreme dehydration, or improper lifting egos. Every program is grounded in human anatomy, progressive overload, and joint longevity so you train injury-free for decades.
            </p>
            <Link 
              href="/register" 
              className="inline-block px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
            >
              Start Training With Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
