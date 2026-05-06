import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Copy, Check } from 'lucide-react';

export default function CouponReferral() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === 'WARRIOR25') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const myReferralCode = 'DANGAL10X';

  const copyCode = () => {
    navigator.clipboard.writeText(myReferralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-brand-surface border-l-4 border-l-brand-red border border-y-white/5 border-r-white/5 relative overflow-hidden flex flex-col justify-center"
          >
            <h3 className="text-3xl font-display font-black skew-headline italic uppercase mb-2">Have a Promo Code?</h3>
            <p className="text-gray-400 mb-8">Enter your code below to claim your discount on any membership plan.</p>
            
            <form onSubmit={handleApply} className="flex flex-col sm:flex-row gap-4 relative z-10">
              <input 
                type="text" 
                placeholder="Enter Code (e.g., WARRIOR25)" 
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setStatus('idle');
                }}
                className="flex-1 bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-sm text-white focus:outline-none focus:border-brand-red uppercase transition-colors"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-brand-red text-white text-[10px] md:text-xs font-bold tracking-widest uppercase btn-clip hover:-translate-y-1 transition-transform whitespace-nowrap"
              >
                Apply
              </button>
            </form>
            {status === 'success' && <p className="mt-4 text-green-500 font-medium tracking-wide">Valid code! 25% discount applied.</p>}
            {status === 'error' && <p className="mt-4 text-brand-red font-medium tracking-wide">Invalid or expired code. Try again.</p>}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-surface-gradient border border-brand-red flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-red rounded-sm">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-display uppercase">Refer & Earn</h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-md">
              Bring a friend to the battlefield. They get 10% off, you get a free month added to your current plan!
            </p>
            
            <div className="bg-brand-dark border border-white/10 p-4 rounded-sm flex items-center justify-between">
              <span className="text-xl font-mono text-brand-red font-bold tracking-widest">{myReferralCode}</span>
              <button 
                onClick={copyCode}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-white"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
