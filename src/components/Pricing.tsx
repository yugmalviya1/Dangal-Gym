import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealText } from './RevealText';

const plans = [
  {
    name: '1 Month',
    originalPrice: null,
    price: '1,500',
    dailyPrice: '50',
    discount: '',
    period: 'per month',
    features: ['Full Gym Access', 'CrossFit Zone Access', 'Basic Nutrition Tips', 'Free Wi-Fi'],
    popular: false
  },
  {
    name: '3 Months',
    originalPrice: '4,500',
    price: '3,500',
    dailyPrice: '39',
    discount: 'SAVE ₹1,000',
    period: 'for 3 months',
    features: ['Everything in 1 Month', '2 PT Sessions/Month', 'Nutrition Plan', 'Body Composition Test'],
    popular: true
  },
  {
    name: '6 Months',
    originalPrice: '9,000',
    price: '6,500',
    dailyPrice: '36',
    discount: 'SAVE ₹2,500',
    period: 'for 6 months',
    features: ['Everything in 3 Months', 'Advanced Body Metrics', 'Priority Booking', 'Guest Passes × 2'],
    popular: false
  },
  {
    name: '1 Year',
    originalPrice: '18,000',
    price: '11,000',
    dailyPrice: '30',
    discount: 'SAVE ₹7,000',
    period: 'per year',
    features: ['Everything in 6 Months', 'Custom Diet & Macro Plan', 'Guest Passes × 5', 'VIP Member Badge'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-black relative z-10 text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-light text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6">
            <RevealText>Membership</RevealText>
            <RevealText delay={0.2}><span className="font-bold">Plans</span></RevealText>
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed font-medium">
            Clear pricing. No hidden fees. Select a membership that fits your commitment level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="animated-border-container transition-all duration-300 ease-out flex flex-col h-full w-full hover:scale-105 hover:z-10"
            >
              <div className={`relative p-8 flex flex-col w-full h-full items-center text-center animated-border-content border ${
                plan.popular ? 'border-white/20' : 'border-white/10'
              } hover:border-white/30 transition-colors duration-300`}>
                <h3 className="font-bold text-[10px] tracking-widest uppercase text-gray-400 mb-6">{plan.name}</h3>
                
                {plan.originalPrice ? (
                  <div className="flex flex-col items-center gap-1 mb-4 justify-center h-12">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through decoration-brand-red">₹{plan.originalPrice}</span>
                      <span className="text-[9px] font-bold bg-brand-red/10 text-brand-red px-1.5 py-0.5 rounded uppercase tracking-wider">{plan.discount}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1 mb-4 justify-center h-12">
                    <span className="text-xs text-gray-500">Standard Rate</span>
                  </div>
                )}

                <div className="font-display text-4xl md:text-5xl text-brand-red mb-2 tracking-tighter flex items-start justify-center">
                  <span className="text-lg text-brand-red/70 mt-1 mr-1">₹</span>
                  {plan.price}
                </div>
                <div className="mb-8 pb-8 border-b border-white/10 w-full">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">{plan.period}</p>
                  <p className="text-xs text-brand-red font-bold uppercase tracking-wider">Just ₹{plan.dailyPrice} / day</p>
                </div>
                
                <ul className="flex-1 w-full space-y-4 mb-12">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center justify-center gap-3 text-sm text-gray-300 font-medium">
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/register" 
                  state={{ selectedPlan: plan.name }}
                  className="w-full py-4 text-xs font-bold uppercase tracking-widest transition-all z-10 rounded-full border border-white/20 hover:bg-brand-red hover:border-brand-red hover:text-white flex items-center justify-center bg-transparent text-white"
                >
                  Select This Plan
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
