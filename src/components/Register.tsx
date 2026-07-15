import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, User, Phone, CheckCircle2, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PLAN_DATA: Record<string, { name: string, fakePrice: number, realPrice: number, originalValue: number, image: string }> = {
  '1 Month': { name: '1 Month Membership', fakePrice: 1500, realPrice: 1500, originalValue: 1500, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' },
  '3 Months': { name: '3 Months Membership', fakePrice: 3500, realPrice: 3000, originalValue: 4500, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300&auto=format&fit=crop' },
  '6 Months': { name: '6 Months Membership', fakePrice: 6000, realPrice: 5000, originalValue: 9000, image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=300&auto=format&fit=crop' },
  '1 Year': { name: '1 Year Membership', fakePrice: 9000, realPrice: 7500, originalValue: 18000, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' }
};

const COUPONS_BY_PLAN: Record<string, { code: string, description: string }[]> = {
  '1 Month': [],
  '3 Months': [{ code: 'SAVE500', description: 'Flat ₹500 Off' }],
  '6 Months': [{ code: 'SAVE1000', description: 'Flat ₹1,000 Off' }],
  '1 Year': [{ code: 'SAVE1500', description: 'Flat ₹1,500 Off' }]
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isApplyingCode, setIsApplyingCode] = useState(false);
  const [codeApplied, setCodeApplied] = useState(false);

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
  
  const basePrice = currentPlanData.fakePrice;
  const finalPrice = codeApplied ? currentPlanData.realPrice : currentPlanData.fakePrice;
  const savings = basePrice - finalPrice;
  const potentialSavings = currentPlanData.fakePrice - currentPlanData.realPrice;
  const discountPercent = basePrice > 0 && savings > 0 ? Math.round((savings / basePrice) * 100) : 0;
  
  const availableCoupons = COUPONS_BY_PLAN[formData.plan] || [];

  const handleRemoveCode = () => {
    setCodeApplied(false);
    setFormData(prev => ({ ...prev, referralCode: '' }));
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, plan: e.target.value });
    setCodeApplied(false);
    setFormData(prev => ({ ...prev, referralCode: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      if (scriptUrl) {
        // Create FormData to send as POST request
        const data = new FormData();
        data.append('Name', formData.name);
        data.append('Phone', formData.phone);
        data.append('Plan', PLAN_DATA[formData.plan as keyof typeof PLAN_DATA]?.name || formData.plan);
        data.append('ReferralCode', codeApplied ? formData.referralCode : 'None');
        data.append('FinalPrice', finalPrice.toString());
        data.append('Date', new Date().toISOString());

        await fetch(scriptUrl, {
          method: 'POST',
          body: data,
          mode: 'no-cors' // Google Apps Script requires no-cors mode for cross-origin POST
        });
      } else {
        // Simulate a network request if the URL is not set yet
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.warn('VITE_GOOGLE_SHEETS_URL is not set. Simulating form submission.');
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitError('Failed to submit the form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="font-display text-3xl font-bold mb-2 uppercase tracking-tighter">Registration Successful!</h2>
          <p className="text-gray-400 mb-8 text-sm">Welcome to the Dangal family, <span className="text-white font-bold">{formData.name}</span>.</p>
          
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl mb-8 shadow-lg">
            <h3 className="font-display text-xl font-bold uppercase tracking-tighter mb-4 text-white">
              Next <span className="text-brand-red">Steps</span>
            </h3>
            <div className="text-left">
              <div className="flex gap-4 items-center bg-zinc-950/50 p-4 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-red" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">Please visit the gym within the next 48 hours to complete your physical verification and start training!</p>
              </div>
            </div>
          </div>

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
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Secure Registration</span>
        </div>
      </header>

      <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <ShoppingBag className="w-8 h-8 text-brand-red" />
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">Your Plan</h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form Details */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-1">
            
            {/* Step 1: Select Plan */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-sm relative">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold">1</span>
                Choose Membership Plan
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: '1 Month', label: 'Monthly', period: '1 Month', price: 1500, orig: 1500, note: 'Basic training access' },
                  { key: '3 Months', label: 'Quarterly', period: '3 Months', price: 3500, orig: 4500, note: 'Flat ₹500 off available', badge: 'Popular' },
                  { key: '6 Months', label: 'Half-Yearly', period: '6 Months', price: 6000, orig: 9000, note: 'Flat ₹1000 off available' },
                  { key: '1 Year', label: 'Annual', period: '1 Year', price: 9000, orig: 18000, note: 'Flat ₹1500 off available', badge: 'Best Deal' }
                ].map((plan) => {
                  const isSelected = formData.plan === plan.key;
                  return (
                    <motion.div
                      key={plan.key}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, plan: plan.key }));
                        setCodeApplied(false);
                        setFormData(prev => ({ ...prev, referralCode: '' }));
                      }}
                      className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 select-none flex flex-col justify-between h-[130px] sm:h-[140px] ${
                        isSelected 
                          ? 'border-brand-red bg-brand-red/10 shadow-[0_0_25px_rgba(255,51,51,0.15)]' 
                          : 'border-white/10 bg-zinc-950 hover:border-white/20'
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded bg-brand-red text-[8px] uppercase tracking-widest font-black text-white shadow-md">
                          {plan.badge}
                        </div>
                      )}
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold block mb-1">
                          {plan.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white block">
                          {plan.period}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-display font-extrabold text-base sm:text-lg text-brand-red">
                            ₹{plan.price.toLocaleString()}
                          </span>
                          {plan.orig > plan.price && (
                            <span className="text-[10px] text-gray-500 line-through">
                              ₹{plan.orig.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] text-gray-400 block truncate mt-0.5">
                          {plan.note}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold">2</span>
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
                        pattern="[0-9]{10}"
                        maxLength={10}
                        minLength={10}
                        title="Please enter a valid 10-digit phone number"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full bg-zinc-950 border border-white/10 p-4 pl-14 rounded-2xl focus:outline-none focus:border-brand-red transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Step 3: Selected Plan */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold">3</span>
                Selected Plan
              </h2>
              
              <div className="flex gap-4 items-center bg-zinc-950 p-4 rounded-2xl border border-white/5">
                <img src={currentPlanData.image} alt={currentPlanData.name} className="w-20 h-20 rounded-xl object-cover border border-white/10" />
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1">
                    {currentPlanData.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-display font-bold text-lg text-brand-red">₹{currentPlanData.fakePrice.toLocaleString()}</span>
                    {currentPlanData.originalValue > currentPlanData.fakePrice && (
                      <span className="text-xs text-gray-500 line-through">₹{currentPlanData.originalValue.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary (Cart) */}
          <div className="lg:col-span-5 order-2 lg:order-2">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl sticky top-8">
              
              {/* Coupons Section */}
              <div className="p-6 md:p-8 bg-zinc-900/50">
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
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : (
                    <>Confirm Registration <ChevronLeft className="w-4 h-4 rotate-180" /></>
                  )}
                </button>
                {submitError && (
                  <p className="text-brand-red text-xs mt-3 text-center font-medium">{submitError}</p>
                )}
                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  <span>Elite Membership Access</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                  <span>Instant Confirmation</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
