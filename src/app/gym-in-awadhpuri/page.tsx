import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, GMB_DATA } from '@/components/StructuredData';
import { MapPin, Phone, Star, ShieldCheck, Dumbbell, Clock, CheckCircle2, ChevronRight, Navigation, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Gym in Awadhpuri Bhopal | 3-Floor Fitness Club | Dangal Gym',
  description: 'Looking for the best gym in Awadhpuri Bhopal? Dangal Gym is a premier 3-floor, 3500 sqft fitness facility near SBI Bank. Strength training, personal coaching, Zumba, and yoga. Call +91 9977437487.',
  keywords: [
    'Gym in Awadhpuri',
    'Best Gym in Awadhpuri Bhopal',
    'Fitness Centre Awadhpuri',
    'Gym near SBI Bank Awadhpuri',
    'Top Gym in Bhopal',
    'Ladies Gym Awadhpuri',
    'Weight Training Gym Awadhpuri',
    'Zumba in Awadhpuri Bhopal',
    'Dangal Gym Awadhpuri'
  ],
  alternates: {
    canonical: '/gym-in-awadhpuri',
  },
  openGraph: {
    title: 'Best Gym in Awadhpuri Bhopal - Dangal Gym',
    description: 'Awadhpuri\'s top-rated 3-floor gym. 3500 sq ft training area, Olympic strength gear, certified trainers, and full cardio deck.',
    url: 'https://dangalgym.xyz/gym-in-awadhpuri',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const faqs = [
  {
    question: 'Where is Dangal Gym located in Awadhpuri, Bhopal?',
    answer: 'Dangal Gym is located at House No 2 B, near SBI Bank, Awadhpuri, Bhopal, MP 462022. It is conveniently situated on the main road, making it easily accessible for residents of Awadhpuri, BDA Colony, and Khajuri Kalan.'
  },
  {
    question: 'What are the opening timings of Dangal Gym Awadhpuri?',
    answer: 'We operate Monday through Saturday with two slots: Morning from 5:00 AM to 11:00 AM and Evening from 5:00 PM to 10:00 PM. We are closed on Sundays for routine maintenance.'
  },
  {
    question: 'What makes Dangal Gym the best gym in Awadhpuri?',
    answer: 'Dangal Gym spans 3 full floors (3500 sqft), featuring 2 dedicated floors for heavy strength training and powerlifting, an elite cardio deck, certified 1-on-1 personal coaches, a Zumba & Aerobics studio, and 100% air-conditioned comfort.'
  },
  {
    question: 'Is Dangal Gym safe and welcoming for women in Awadhpuri?',
    answer: 'Absolutely. We take women\'s comfort and safety very seriously, with 24/7 CCTV surveillance, a strictly professional atmosphere, certified trainers, and dedicated group fitness sessions in Zumba and Yoga.'
  },
  {
    question: 'Does Dangal Gym offer a free trial for new members?',
    answer: 'Yes! We offer an exclusive 3-Day Free Trial so you can experience our machines, atmosphere, and trainers before making a membership commitment.'
  }
];

export default function GymInAwadhpuriPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Gym in Awadhpuri', url: '/gym-in-awadhpuri' }
        ]} 
      />
      <FAQSchema faqs={faqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Gym in Awadhpuri</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={14} /> Awadhpuri, Bhopal Landmark
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Best Gym in <span className="text-brand-red">Awadhpuri</span> Bhopal
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-8">
              Welcome to <strong className="text-white">Dangal Gym</strong>, Awadhpuri&apos;s premier 3-floor fitness powerhouse. Engineered for serious athletes, beginners, and fitness lovers seeking raw strength, sustainable weight loss, and an uplifting community near SBI Bank.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Claim 3-Day Free Trial
              </Link>
              <a 
                href={GMB_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Navigation size={16} /> Open in Google Maps
              </a>
              <a 
                href={`tel:${GMB_DATA.telephone}`}
                className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={16} className="text-brand-red" /> Call +91 9977437487
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-zinc-900/60 rounded-2xl border border-white/5">
              <div className="border-r border-white/5 pr-4">
                <div className="text-3xl font-display font-black text-brand-red">3 FLOORS</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">3,500 Sq.Ft Space</div>
              </div>
              <div className="md:border-r border-white/5 pr-4">
                <div className="text-3xl font-display font-black text-brand-red">2 FLOORS</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Dedicated Strength Area</div>
              </div>
              <div className="border-r border-white/5 pr-4">
                <div className="text-3xl font-display font-black text-yellow-400 flex items-center gap-1">
                  4.9 <Star size={20} fill="currentColor" />
                </div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">180+ Google Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-display font-black text-white">100% AC</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Climate Controlled</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Floor Breakdown Section */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Unmatched Infrastructure</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Why Awadhpuri Trains At Dangal Gym
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-4">
                Unlike crowded single-room neighborhood gyms, Dangal Gym gives you space to breathe, focus, and push your limits across three specialized levels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-brand-red/40 transition-all duration-300 flex flex-col">
                <span className="text-xs font-bold text-brand-red tracking-widest uppercase mb-2">Floor 1</span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">Powerlifting & Heavy Iron</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  Olympic barbell platforms, heavy squat racks, bumper plates, and dumbbells extending up to 50kg+. Built for deadlifts, squats, bench presses, and maximum progressive overload.
                </p>
                <div className="text-xs text-gray-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> Zero Equipment Queues
                </div>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-brand-red/40 transition-all duration-300 flex flex-col">
                <span className="text-xs font-bold text-brand-red tracking-widest uppercase mb-2">Floor 2</span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">Hypertrophy & Machines</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  Full array of pin-loaded and plate-loaded machines from Hammer Strength and Being Strong. Target chest, back, shoulders, arms, and legs with optimal biomechanical resistance curves.
                </p>
                <div className="text-xs text-gray-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> Form-Targeted Isolations
                </div>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-brand-red/40 transition-all duration-300 flex flex-col">
                <span className="text-xs font-bold text-brand-red tracking-widest uppercase mb-2">Floor 3</span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">Cardio & Studio Arena</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  High-energy group fitness studio for Zumba and Aerobics classes, commercial treadmills, cross-trainers, spin cycles, and functional CrossFit turf for high calorie burn.
                </p>
                <div className="text-xs text-gray-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red" /> Clean & Sanitized Facilities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Map & GMB Integration Section */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Prime Bhopal Location</span>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">
                  Find Us Near SBI Bank, Awadhpuri
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Centrally located in Awadhpuri with ample parking space, convenient road connectivity, and high visibility right next to the State Bank of India branch.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-white block text-sm">Exact Address:</strong>
                      <span className="text-gray-400 text-sm">House No 2 B, near SBI Bank, Awadhpuri, Bhopal, MP 462022</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-white block text-sm">Operating Timings:</strong>
                      <span className="text-gray-400 text-sm">Morning: 5:00 AM – 11:00 AM | Evening: 5:00 PM – 10:00 PM (Mon–Sat)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-white block text-sm">Direct Phone & WhatsApp:</strong>
                      <span className="text-gray-400 text-sm">+91 9977437487</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={GMB_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
                  >
                    <Navigation size={16} /> Get Driving Directions
                  </a>
                  <a 
                    href="https://wa.me/919977437487?text=Hi%20Dangal%20Gym%2C%20I%20want%20to%20inquire%20about%20membership%20in%20Awadhpuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Embed Container */}
              <div 
                className="bg-zinc-900 p-2 rounded-3xl border border-white/10 h-[420px] overflow-hidden shadow-2xl relative"
                suppressHydrationWarning
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3881475713437!2d77.4878235750953!3d23.23805997902444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c419145788ce9%3A0x45f1f6b503db134b!2sDangal%20Gym%20-%20Family%20Fitness%20Club%20%7C%20Aerobic%20%7C%20Cardio%20%7C%20Gym!5e0!3m2!1sen!2sin!4v1778161303156!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dangal Gym Location Awadhpuri Bhopal"
                  className="rounded-2xl"
                  suppressHydrationWarning
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Awadhpuri FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Frequently Asked Questions</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Awadhpuri Gym FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
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
