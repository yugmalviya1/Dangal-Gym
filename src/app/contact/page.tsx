import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import { BreadcrumbSchema, FAQSchema, GMB_DATA } from '@/components/StructuredData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Dangal Gym Awadhpuri Bhopal | Map, Phone & Timings',
  description: 'Visit Dangal Gym in Awadhpuri Bhopal. Located near SBI Bank, House No 2 B. Call +91 9977437487 or WhatsApp for membership queries, gym timings, and 3-day free passes.',
  keywords: [
    'Contact Dangal Gym',
    'Dangal Gym Address Bhopal',
    'Dangal Gym Phone Number',
    'Gym near SBI Bank Awadhpuri',
    'Dangal Gym Timings Awadhpuri'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Dangal Gym Awadhpuri Bhopal',
    description: 'Get directions, call +91 9977437487, or visit Dangal Gym near SBI Bank Awadhpuri Bhopal.',
    url: 'https://dangalgym.xyz/contact',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const contactFaqs = [
  {
    question: 'How do I reach Dangal Gym in Awadhpuri?',
    answer: 'Dangal Gym is situated at House No 2 B, right next to the State Bank of India (SBI) branch on the Awadhpuri main corridor. Easily reachable via public or private transport with available member parking.'
  },
  {
    question: 'Can I visit the gym directly without booking an appointment?',
    answer: 'Yes! Walk-ins are always welcomed during our working hours: 5:00 AM – 11:00 AM in the morning and 5:00 PM – 10:00 PM in the evening from Monday to Saturday.'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]} 
      />
      <FAQSchema faqs={contactFaqs} />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Contact & Directions</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative pb-16 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={14} /> Awadhpuri, Bhopal
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Contact <span className="text-brand-red">Dangal Gym</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed">
              Have questions about memberships, personal training, or our 3-Day Free Trial? Reach out to our team or visit us near SBI Bank Awadhpuri.
            </p>
          </div>
        </section>

        {/* Contact Details & Interactive Map */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-brand-red/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-white mb-2">Our Address</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    House No 2 B, near SBI Bank, Awadhpuri, Bhopal, Madhya Pradesh 462022
                  </p>
                  <a 
                    href={GMB_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-white transition-colors"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-brand-red/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-white mb-2">Direct Phone & WhatsApp</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    +91 9977437487
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href={`tel:${GMB_DATA.telephone}`}
                      className="text-xs font-bold uppercase tracking-wider text-brand-red hover:text-white transition-colors"
                    >
                      Call Now
                    </a>
                    <span className="text-gray-600">•</span>
                    <a 
                      href="https://wa.me/919977437487?text=Hi%20Dangal%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20your%20plans"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-[#25D366] hover:text-white transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-brand-red/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-white mb-2">Gym Working Hours</h3>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p><strong className="text-white">Morning:</strong> 5:00 AM – 11:00 AM</p>
                    <p><strong className="text-white">Evening:</strong> 5:00 PM – 10:00 PM</p>
                    <p className="text-xs text-gray-500 pt-1">Monday through Saturday (Sunday Closed)</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Column */}
              <div className="lg:col-span-2 bg-zinc-900 p-2 rounded-3xl border border-white/10 h-[550px] overflow-hidden shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3881475713437!2d77.4878235750953!3d23.23805997902444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c419145788ce9%3A0x45f1f6b503db134b!2sDangal%20Gym%20-%20Family%20Fitness%20Club%20%7C%20Aerobic%20%7C%20Cardio%20%7C%20Gym!5e0!3m2!1sen!2sin!4v1778161303156!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dangal Gym Location Awadhpuri Bhopal"
                  className="rounded-2xl w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-12">
              Contact FAQs
            </h2>
            <div className="space-y-4">
              {contactFaqs.map((faq, idx) => (
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
