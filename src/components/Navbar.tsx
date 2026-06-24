import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          scrolled ? 'bg-black/95 py-4 shadow-xl' : 'bg-transparent pt-4 pb-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex items-center justify-between">
          
          <div className="hidden md:flex items-center gap-4 flex-1">
            <a href="/#facilities" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Facilities</a>
            <a href="/#interior" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Interior</a>
            <a href="/#gallery" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Gallery</a>
          </div>

          {/* Desktop logo (visible on md and up) */}
          <a href="#" className="flex-shrink-0 hidden md:flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
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
          </a>

          {/* Mobile Layout: Hamburger Menu on Left, Logo in Center, Cart on Right */}
          <div className="md:hidden flex items-center justify-start w-10">
            <button className="text-white cursor-pointer" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <Menu size={22} />
            </button>
          </div>

          <div className="md:hidden flex-1 flex justify-center">
            <a href="#" className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
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
            </a>
          </div>

          <div className="md:hidden flex items-center justify-end w-10">
            <Link to="/register" className="text-white hover:text-brand-red transition-colors" aria-label="Checkout">
              <ShoppingCart size={20} />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <Link to="/blog" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Blog</Link>
            <a href="/#pricing" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Memberships</a>
            <a href="/#reviews" className="text-[12px] font-bold tracking-[0.2em] uppercase text-white hover:text-black transition-all duration-300 bg-white/5 hover:bg-white px-5 py-2.5 rounded-full border border-white/5">Reviews</a>
            <Link to="/register" className="text-white hover:text-brand-red transition-colors ml-2" aria-label="Checkout">
              <ShoppingCart size={20} />
            </Link>
          </div>
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
                href="/#facilities" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Facilities
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                href="/#programs" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Programs
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22 }}
                href="/#transformations" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Transformations
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.26 }}
                href="/#interior" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Interior
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                href="/#gallery" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Gallery
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.34 }}
                href="/#pricing" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Memberships
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.38 }}
                href="/#reviews" onClick={() => setMobileOpen(false)}
                className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
              >
                Reviews
              </motion.a>
              <motion.div
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.42 }}
              >
                <Link
                  to="/blog" onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl sm:text-4xl tracking-widest uppercase text-white hover:text-gray-400"
                >
                  Blog
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
