import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { RevealText } from './RevealText';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            <RevealText>Find <span className="text-brand-red">Us</span></RevealText>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Where champions are made</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-zinc-900/50 p-2 rounded-2xl border border-white/5 h-[400px] overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3881475713437!2d77.4878235750953!3d23.23805997902444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c419145788ce9%3A0x45f1f6b503db134b!2sDangal%20Gym%20-%20Family%20Fitness%20Club%20%7C%20Aerobic%20%7C%20Cardio%20%7C%20Gym!5e0!3m2!1sen!2sin!4v1778161303156!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
              className="transition-all duration-700"
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
                  <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                    <p><span className="text-white font-bold">Mon–Sat:</span> 6AM – 11AM</p>
                    <p><span className="text-white font-bold">Mon–Sat:</span> 5PM – 10PM</p>
                    <p><span className="text-zinc-600 italic">Sunday: Closed</span></p>
                  </div>
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
