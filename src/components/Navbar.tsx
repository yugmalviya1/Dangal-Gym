'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 py-4 shadow-xl backdrop-blur-md' : 'bg-transparent pt-4 pb-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between">
          
          {/* Desktop Left Navigation - Exactly 3 symmetrical pill buttons */}
          <div className="hidden md:flex items-center gap-4 flex-1">
            <Link 
              href="/#facilities" 
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5"
            >
              Facilities
            </Link>
            <Link 
              href="/#interior" 
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5"
            >
              Interior
            </Link>
            <Link 
              href="/gallery" 
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5"
            >
              Gallery
            </Link>
          </div>

          {/* Desktop Logo (perfectly centered) */}
          <Link href="/" className="flex-shrink-0 hidden md:flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <img 
              src="/dangal.png" 
              alt="Dangal" 
              className="h-7 lg:h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
            />
            <img 
              src="/dgym.png" 
              alt="Gym" 
              className="h-7 lg:h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
            />
          </Link>

          {/* Mobile Layout: Hamburger Menu on Left, Logo in Center, Cart on Right */}
          <div className="md:hidden flex items-center justify-start w-10">
            <button className="text-white cursor-pointer" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <Menu size={22} />
            </button>
          </div>

          <div className="md:hidden flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
              <img 
                src="/dangal.png" 
                alt="Dangal" 
                loading="eager"
                decoding="async"
                className="h-4 sm:h-5 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
              />
              <img 
                src="/dgym.png" 
                alt="Gym" 
                loading="eager"
                decoding="async"
                className="h-4 sm:h-5 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
              />
            </Link>
          </div>

          <div className="md:hidden flex items-center justify-end w-10">
            <Link href="/register" className="text-white hover:text-brand-red transition-colors" aria-label="Checkout">
              <ShoppingCart size={20} />
            </Link>
          </div>

          {/* Desktop Right Navigation - Exactly 3 symmetrical pill buttons + Cart */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <Link 
              href="/blog" 
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5"
            >
              Blog
            </Link>
            <Link 
              href="/#pricing" 
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5"
            >
              Memberships
            </Link>
            <Link 
              href="/reviews" 
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5"
            >
              Reviews
            </Link>
            <Link 
              href="/register" 
              className="text-white hover:text-brand-red transition-colors ml-2" 
              aria-label="Checkout"
            >
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 overflow-y-auto"
          >
            <button
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-6 py-8 w-full max-w-sm">
              <Link
                href="/gym-in-awadhpuri"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-brand-red font-bold hover:text-white transition-colors"
              >
                Gym in Awadhpuri
              </Link>
              <Link
                href="/#facilities"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Facilities
              </Link>
              <Link
                href="/#programs"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/trainers"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Trainers
              </Link>
              <Link
                href="/#interior"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Interior
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Memberships
              </Link>
              <Link
                href="/reviews"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
              >
                Blog
              </Link>

              <div className="w-full pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 bg-brand-red text-white text-center font-bold uppercase tracking-wider text-xs rounded-full shadow-lg hover:bg-red-700 transition-colors"
                >
                  Join Today (3-Day Free Trial)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
