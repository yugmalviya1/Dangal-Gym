import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Find <span className="text-brand-red">Us</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Where champions are made</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-zinc-900/50 p-2 rounded-2xl border border-white/5 h-[400px]">
            <iframe 
              src="https://maps.google.com/maps?q=Dangal%20Gym,%20Awadhpuri,%20Bhopal&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
            ></iframe>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Address</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Dangal Gym - Family Fitness Club<br/>
                    2 B, near SBI Bank<br/>
                    Awadhpuri, Bhopal, MP 462022
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Hours</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Mon–Sat: 5:00 AM – 10:00 PM<br/>Sun: 6:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Contact</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">+91 98765 43210<br/>info@dangalgym.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
