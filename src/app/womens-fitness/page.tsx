import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import { ShieldCheck, Heart, Star, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Women's Fitness & Gym in Awadhpuri Bhopal | Dangal Gym",
  description: 'Empowering, safe, and supportive fitness centre for women in Awadhpuri, Bhopal. Female-friendly training, Zumba, glute sculpting, certified trainers, and steam bath.',
  keywords: [
    'Ladies Gym in Awadhpuri',
    'Womens Gym Bhopal',
    'Safe Gym for Girls Awadhpuri',
    'Female Fitness Trainer Bhopal',
    'Zumba for Women Bhopal',
    'Dangal Gym Ladies'
  ],
  alternates: {
    canonical: '/womens-fitness',
  },
  openGraph: {
    title: "Women's Fitness & Gym in Awadhpuri Bhopal - Dangal Gym",
    description: 'Safe, empowering, and top-rated fitness facility for women in Awadhpuri Bhopal.',
    url: 'https://dangalgym.xyz/womens-fitness',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const womenFaqs = [
  {
    question: 'Is Dangal Gym in Awadhpuri safe and comfortable for women?',
    answer: 'Yes! We maintain an exceptionally respectful, zero-tolerance policy for misbehavior, complete 24/7 CCTV surveillance across all floors, and an inclusive culture where dozens of female members train with total comfort daily.'
  },
  {
    question: 'Will lifting weights make women bulky?',
    answer: 'Not at all! Women produce significantly lower levels of testosterone than men. Strength training burns body fat, sculpts toned curves, boosts resting metabolism, and dramatically enhances bone mineral density.'
  },
  {
    question: 'Are there customized workout programs for PCOS / PCOD and postpartum recovery?',
    answer: 'Yes. Our certified coaches understand how resistance training and low-GI nutritional splits help regulate insulin sensitivity and hormone balance to assist with PCOS, thyroid, and postpartum weight management.'
  }
];

export default function WomensFitnessPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: "Women's Fitness", url: '/womens-fitness' }
        ]} 
      />
      <ServiceSchema 
        name="Women's Fitness Programs"
        serviceType="Women's Fitness"
        description="Comprehensive and safe women's fitness, strength sculpting, and dance conditioning programs in Awadhpuri, Bhopal."
      />
      <FAQSchema faqs={womenFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Women's Fitness</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-20 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} /> Safe & Empowering Environment
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Women&apos;s Fitness in <span className="text-brand-red">Awadhpuri</span>
            </h1>

            <p className="max-w-3xl text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-10">
              Step into a space where your fitness journey is celebrated. Whether your goal is body fat reduction, building functional strength, toning glutes and core, or relieving stress through Zumba, Dangal Gym provides the premier women-friendly hub in Bhopal.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,51,51,0.4)]"
              >
                Claim 3-Day Free Trial
              </Link>
              <Link 
                href="/reviews" 
                className="px-8 py-4 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all duration-300"
              >
                Read Female Member Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-2">Designed For You</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Why Women Choose Dangal Gym
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <ShieldCheck className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Uncompromising Safety & Respect</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  24/7 CCTV surveillance, strictly vetted professional crowd, and staff committed to ensuring you never feel uncomfortable or intimidated.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Sparkles className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Glute & Core Sculpting</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Targeted machines including hip thrust benches, glute kickbacks, cable abductors, and pelvic floor strengthening for athletic posture.
                </p>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <Heart className="text-brand-red mb-4" size={32} />
                <h3 className="font-display text-xl font-bold uppercase mb-3">Hormonal & PCOS Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Diet plans and resistance protocols specifically tailored to regulate menstrual cycles, boost thyroid efficiency, and reduce stubborn abdominal fat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Member Quotes */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Words From Our Female Athletes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  &ldquo;Amazing environment and completely safe for women. The trainers make sure you know exactly what to do and never judge. Highly recommend!&rdquo;
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Priya S. — Awadhpuri Member</div>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  &ldquo;Felt very secure and comfortable working out here. Very professional staff and great crowd. The steam bath and Zumba classes are fantastic!&rdquo;
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Sneha M. — Bhopal Member</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Women&apos;s Fitness FAQs
            </h2>
            <div className="space-y-4">
              {womenFaqs.map((faq, idx) => (
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
