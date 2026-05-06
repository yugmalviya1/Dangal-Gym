import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Send, User, Phone, CheckCircle2, Ticket, Gift, Copy, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PLAN_DATA: Record<string, { name: string, fakePrice: number, realPrice: number, originalValue: number, image: string }> = {
  '1 Month': { name: '1 Month Membership', fakePrice: 1500, realPrice: 1500, originalValue: 1500, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' },
  '3 Months': { name: '3 Months Membership', fakePrice: 3500, realPrice: 3000, originalValue: 4500, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300&auto=format&fit=crop' },
  '6 Months': { name: '6 Months Membership', fakePrice: 6500, realPrice: 5000, originalValue: 9000, image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=300&auto=format&fit=crop' },
  '1 Year': { name: '1 Year Membership', fakePrice: 11000, realPrice: 7500, originalValue: 18000, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' }
};

const COUPONS_BY_PLAN: Record<string, { code: string, description: string }[]> = {
  '1 Month': [],
  '3 Months': [{ code: 'SAVE500', description: 'Flat ₹500 Off' }],
  '6 Months': [{ code: 'SAVE1500', description: 'Flat ₹1,500 Off' }],
  '1 Year': [{ code: 'SAVE3500', description: 'Flat ₹3,500 Off' }]
};

export default function Register() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: '3 Months',
    referralCode: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trialDays, setTrialDays] = useState(0);
  const [isApplyingCode, setIsApplyingCode] = useState(false);
  const [codeApplied, setCodeApplied] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let initialPlan = '3 Months';
    if (location.state?.selectedPlan) {
      if (location.state.selectedPlan === 'Monthly') initialPlan = '1 Month';
      else if (location.state.selectedPlan === 'Yearly') initialPlan = '1 Year';
      else initialPlan = location.state.selectedPlan;
    }
    setFormData(prev => ({ ...prev, plan: initialPlan }));
    window.scrollTo(0, 0);
  }, [location.state]);

  const currentPlanData = PLAN_DATA[formData.plan as keyof typeof PLAN_DATA] || PLAN_DATA['3 Months'];
  
  // Calculate pricing based on coupon
  const basePrice = currentPlanData.fakePrice;
  const finalPrice = codeApplied ? currentPlanData.realPrice : currentPlanData.fakePrice;
  const savings = basePrice - finalPrice;
  const potentialSavings = currentPlanData.fakePrice - currentPlanData.realPrice;
  const discountPercent = basePrice > 0 && savings > 0 ? Math.round((savings / basePrice) * 100) : 0;
  
  const availableCoupons = COUPONS_BY_PLAN[formData.plan] || [];

  const handleApplyCode = () => {
    if (!formData.referralCode) return;
    setIsApplyingCode(true);
    
    setTimeout(() => {
      setIsApplyingCode(false);
      setCodeApplied(true);
    }, 800);
  };

  const handleRemoveCode = () => {
    setCodeApplied(false);
    setFormData(prev => ({ ...prev, referralCode: '' }));
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, plan: e.target.value });
    setCodeApplied(false);
    setFormData(prev => ({ ...prev, referralCode: '' }));
  };

  // Setup scratch card when submitted
  useEffect(() => {
    if (isSubmitted) {
      const rand = Math.random() * 100;
      if (rand < 80) {
        setTrialDays(Math.random() < 0.5 ? 2 : 3);
      } else if (rand < 99) {
        setTrialDays(4);
      } else {
        setTrialDays(15);
      }
      setIsRevealed(false);
      setCopied(false);
      initCanvas();
    }
  }, [isSubmitted]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    setTimeout(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SCRATCH HERE', canvas.width / 2, canvas.height / 2);
      
      ctx.globalCompositeOperation = 'destination-out';
    }, 50);
  };

  const getPointerPos = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRevealed) return;
    setIsDrawing(true);
    scratch(e);
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDrawing || isRevealed) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    checkReveal();
  };

  useEffect(() => {
    const handleGlobalUp = () => {
      setIsDrawing(false);
      checkReveal();
    };
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDrawing]);

  const scratch = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const { x, y } = getPointerPos(e);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkReveal = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }
    const totalPixels = pixels.length / 4;
    if (transparentPixels / totalPixels > 0.4) {
      setIsRevealed(true);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(`DANGAL-TRIAL-${trialDays}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
        <div className="fixed inset-0 noise opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center max-w-md w-full glass p-8 border border-white/10 rounded-3xl shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="font-display text-3xl font-bold mb-2 uppercase tracking-tighter">Order Confirmed!</h2>
          <p className="text-gray-400 mb-6 text-sm">Welcome to the Dangal family, <span className="text-white font-bold">{formData.name}</span>.</p>
          
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl mb-8 relative overflow-hidden shadow-lg">
            <h3 className="font-display text-xl font-bold uppercase tracking-tighter mb-2 text-white">
              Mystery <span className="text-brand-red">Trial</span>
            </h3>
            <p className="text-gray-400 text-xs mb-4">Scratch below to reveal your free trial days!</p>

            <div className="relative w-full h-32 rounded-xl overflow-hidden bg-zinc-800 border border-white/10 select-none touch-none shadow-inner">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-zinc-800 to-black">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red mb-1">You Won</span>
                <div className="text-4xl font-display font-bold text-white mb-1 leading-none drop-shadow-md">
                  {trialDays} DAYS
                </div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Free Trial</span>
              </div>

              <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full cursor-crosshair transition-opacity duration-500 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
              />
            </div>

            <AnimatePresence>
              {isRevealed && (
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="bg-black/50 border border-white/10 p-3 rounded-xl flex items-center justify-between">
                    <div className="text-left">
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Promo Code</span>
                      <span className="font-mono font-bold text-white text-sm">DANGAL-TRIAL-{trialDays}</span>
                    </div>
                    <button 
                      onClick={copyCode}
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-brand-red transition-colors"
                    >
                      {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-gray-400 mb-6 text-sm">Please visit the gym to finalize your setup. Your registered phone is <span className="text-white font-bold">{formData.phone}</span>.</p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 noise opacity-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3"></div>

      <header className="relative z-10 p-6 md:p-8 flex items-center justify-between w-full max-w-7xl mx-auto border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:block text-gray-400 group-hover:text-white transition-colors">Return</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-red" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Secure Checkout</span>
        </div>
      </header>

      <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <ShoppingBag className="w-8 h-8 text-brand-red" />
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">Your Cart</h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form Details */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs">1</span>
                Contact Details
              </h2>
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-red transition-colors" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-950 border border-white/10 p-4 pl-14 rounded-2xl focus:outline-none focus:border-brand-red transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-2">Phone Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-red transition-colors" />
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-950 border border-white/10 p-4 pl-14 rounded-2xl focus:outline-none focus:border-brand-red transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary (Cart) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl sticky top-8">
              
              {/* Cart Item */}
              <div className="p-6 md:p-8 bg-zinc-800/30">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center justify-between">
                  Order Summary
                  <span className="bg-white/10 text-xs px-2 py-1 rounded-md">1 Item</span>
                </h2>
                
                <div className="flex gap-4 items-center bg-zinc-950 p-4 rounded-2xl border border-white/5">
                  <img src={currentPlanData.image} alt={currentPlanData.name} className="w-20 h-20 rounded-xl object-cover border border-white/10" />
                  <div className="flex-1">
                    <select
                      value={formData.plan}
                      onChange={handlePlanChange}
                      className="bg-transparent text-sm font-bold text-white focus:outline-none uppercase tracking-wide cursor-pointer w-full mb-1"
                    >
                      {Object.keys(PLAN_DATA).map(planKey => (
                        <option key={planKey} value={planKey} className="bg-zinc-900 text-sm">{PLAN_DATA[planKey].name}</option>
                      ))}
                    </select>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-display font-bold text-lg text-brand-red">₹{currentPlanData.fakePrice.toLocaleString()}</span>
                      {currentPlanData.originalValue > currentPlanData.fakePrice && (
                        <span className="text-xs text-gray-500 line-through">₹{currentPlanData.originalValue.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupons Section */}
              <div className="p-6 md:p-8 border-t border-white/5 bg-zinc-900/50">
                {!codeApplied ? (
                  <div className="space-y-4">
                    {potentialSavings > 0 ? (
                      <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-4 mb-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                          <Tag className="w-16 h-16 text-brand-red -rotate-12" />
                        </div>
                        <div className="relative z-10">
                          <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">Special Offer</span>
                          <p className="text-sm font-bold text-white mb-4">Get Flat ₹{potentialSavings.toLocaleString()} Off on this plan.</p>
                          
                          <div className="space-y-2">
                            {availableCoupons.map(c => (
                              <div key={c.code} className="bg-black/40 border border-brand-red/20 rounded-lg p-3 flex items-center justify-between group hover:border-brand-red/50 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="border border-brand-red/30 border-dashed rounded px-2 py-1 bg-brand-red/5">
                                    <span className="font-mono text-xs font-bold text-brand-red">{c.code}</span>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, referralCode: c.code }));
                                    setIsApplyingCode(true);
                                    setTimeout(() => {
                                      setIsApplyingCode(false);
                                      setCodeApplied(true);
                                    }, 800);
                                  }}
                                  disabled={isApplyingCode}
                                  className="px-4 py-2 bg-white/5 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-brand-red transition-all group-hover:bg-brand-red"
                                >
                                  {isApplyingCode ? '...' : 'APPLY'}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-4 border border-white/5 rounded-xl bg-white/5">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">No offers available for this plan</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-brand-red/10 border border-brand-red/30 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-red uppercase tracking-widest">'{formData.referralCode}' Applied</p>
                        {savings > 0 && <p className="text-[10px] text-gray-400">You saved ₹{savings.toLocaleString()}</p>}
                      </div>
                    </div>
                    <button onClick={handleRemoveCode} className="text-gray-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest transition-colors">
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Totals Section */}
              <div className="p-6 md:p-8 border-t border-white/5 bg-zinc-950">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{basePrice.toLocaleString()}</span>
                  </div>
                  {codeApplied && savings > 0 && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between text-brand-red font-bold">
                      <span>Discount</span>
                      <span>-₹{savings.toLocaleString()}</span>
                    </motion.div>
                  )}
                  <div className="flex justify-between text-gray-400">
                    <span>Taxes & Fees</span>
                    <span className="text-[10px] uppercase tracking-widest">Included</span>
                  </div>
                </div>

                {codeApplied && savings > 0 && (
                  <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-brand-red text-white p-3 rounded-xl text-center mb-6 shadow-[0_0_15px_rgba(230,57,70,0.3)]">
                    <p className="font-bold text-sm tracking-wide">₹{savings.toLocaleString()} Saved so far!</p>
                  </motion.div>
                )}

                <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Estimated Total</p>
                    {codeApplied && savings > 0 && (
                      <p className="text-xs text-gray-500 line-through decoration-brand-red mb-1">₹{basePrice.toLocaleString()}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-display text-4xl font-bold text-white flex items-end gap-2">
                      <span>₹{finalPrice.toLocaleString()}</span>
                      {codeApplied && discountPercent > 0 && (
                        <span className="text-sm font-bold text-brand-red mb-1">({discountPercent}% OFF)</span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  form="checkout-form"
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl"
                >
                  Proceed to Checkout <ChevronLeft className="w-4 h-4 rotate-180" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  <span>7 Days Risk Free Returns</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                  <span>Instant Activation</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
