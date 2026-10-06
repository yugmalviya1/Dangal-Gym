import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GMB_DATA } from './StructuredData';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-flex items-center gap-1.5 hover:scale-105 transition-transform duration-300">
              <img 
                src="/dangal.png" 
                alt="Dangal" 
                className="h-5 lg:h-6 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" 
              />
              <img 
                src="/dgym.png" 
                alt="Gym" 
                className="h-5 lg:h-6 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium max-w-sm">
              Awadhpuri Bhopal's top-rated 3-floor fitness landmark. 3500 sqft facility engineered for strength training, fat loss, powerlifting, Zumba, and women's wellness.
            </p>
            <div className="flex gap-3 mb-6">
              <SocialLink icon={Instagram} href={GMB_DATA.sameAs[0]} label="Instagram" />
              <SocialLink icon={Facebook} href={GMB_DATA.sameAs[1]} label="Facebook" />
              <SocialLink icon={Youtube} href={GMB_DATA.sameAs[2]} label="YouTube" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-gray-300">
              <span className="text-yellow-400 font-bold">★ 4.9 / 5</span>
              <span>•</span>
              <span>180+ Google Reviews</span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-widest text-brand-red mb-5">Programs</h4>
            <ul className="space-y-3">
              <li><Link href="/personal-training" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Personal Training</Link></li>
              <li><Link href="/weight-training" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Weight Training</Link></li>
              <li><Link href="/weight-loss" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Weight Loss & Fat Burn</Link></li>
              <li><Link href="/zumba" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Zumba Dance Classes</Link></li>
              <li><Link href="/yoga" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Yoga & Mobility</Link></li>
              <li><Link href="/womens-fitness" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Women's Fitness</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-widest text-brand-red mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/gym-in-awadhpuri" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Gym in Awadhpuri</Link></li>
              <li><Link href="/trainers" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Certified Trainers</Link></li>
              <li><Link href="/gallery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Facility Gallery</Link></li>
              <li><Link href="/reviews" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Member Reviews</Link></li>
              <li><Link href="/#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Membership Fees</Link></li>
              <li><Link href="/blog" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Fitness Blog</Link></li>
            </ul>
          </div>

          {/* Contact & NAP for Local SEO */}
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-widest text-brand-red mb-5">Location & Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                <a 
                  href={GMB_DATA.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors text-xs leading-relaxed"
                >
                  {GMB_DATA.streetAddress}, {GMB_DATA.addressLocality}, {GMB_DATA.addressRegion} {GMB_DATA.postalCode}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-red flex-shrink-0" />
                <a href={`tel:${GMB_DATA.telephone}`} className="hover:text-brand-red transition-colors text-white font-semibold text-xs">
                  {GMB_DATA.telephone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-red flex-shrink-0" />
                <a href={`mailto:${GMB_DATA.email}`} className="hover:text-brand-red transition-colors text-xs">
                  {GMB_DATA.email}
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-white font-semibold mb-1">
                  <Clock size={14} className="text-brand-red" />
                  <span>Timings (Mon–Sat)</span>
                </div>
                <div className="text-xs text-gray-400 pl-6 space-y-0.5">
                  <p>Morning: 5:00 AM – 11:00 AM</p>
                  <p>Evening: 5:00 PM – 10:00 PM</p>
                  <p className="text-zinc-500 italic">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[11px] uppercase tracking-wider font-semibold text-gray-500">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Dangal Gym Awadhpuri Bhopal. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Find Us on Maps</Link>
            <Link href="/register" className="hover:text-white transition-colors">Join Online</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: any, href?: string, label: string }) {
  return (
    <a 
      href={href || "#"} 
      target={href ? "_blank" : undefined} 
      rel={href ? "noopener noreferrer" : undefined} 
      aria-label={label}
      className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all rounded-full"
    >
      <Icon size={16} />
    </a>
  );
}
