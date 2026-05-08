import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';

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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent pt-4 pb-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between">
          
          <div className="hidden md:flex items-center gap-4 flex-1">
            <a href="#facilities" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Facilities</a>
            <a href="#programs" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Programs</a>
          </div>

          {/* Desktop logo (visible on md and up) */}
          <a href="#" className="flex-shrink-0 hidden md:inline-block hover:scale-105 transition-transform duration-300">
            <img 
              src="/dangal gym led board.png" 
              alt="Dangal Gym" 
              className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
            />
          </a>

          {/* Mobile logo (visible on small screens) */}
          <a href="#" className="md:hidden flex-shrink-0">
            <img 
              src="/dangal gym led board.png" 
              alt="Dangal Gym Logo" 
              className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
            />
          </a>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <a href="#pricing" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Memberships</a>
            <a href="#reviews" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Reviews</a>
          </div>

          <button className="md:hidden text-white ml-auto" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center p-6"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                href="#facilities" onClick={() => setMobileOpen(false)}
                className="font-display text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Facilities
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                href="#programs" onClick={() => setMobileOpen(false)}
                className="font-display text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Programs
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                href="#pricing" onClick={() => setMobileOpen(false)}
                className="font-display text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Memberships
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                href="#reviews" onClick={() => setMobileOpen(false)}
                className="font-display text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Reviews
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
