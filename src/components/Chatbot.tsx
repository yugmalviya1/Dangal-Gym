import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey warrior! Ready to crush some goals? How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    const userMsg = input.toLowerCase();
    setInput('');

    setTimeout(() => {
      let reply = "Stay strong! Let me get a trainer to answer that for you.";
      if (userMsg.includes('price') || userMsg.includes('plan') || userMsg.includes('cost')) {
        reply = "Our plans start at ₹1,500/month. We also offer 3 months at ₹3,500, 6 months at ₹6,000, and 1 year at ₹9,000 (just ₹25/day!). Check our Memberships section for details.";
      } else if (userMsg.includes('time') || userMsg.includes('hour') || userMsg.includes('open') || userMsg.includes('timing')) {
        reply = "Our timings are Monday to Saturday: Morning 5:30 AM – 11:00 AM, Evening 5:00 PM – 10:00 PM (Sunday Closed).";
      } else if (userMsg.includes('location') || userMsg.includes('where') || userMsg.includes('address')) {
        reply = "We are located at 2 B, near SBI Bank, Samanvay Nagar, Awadhpuri, Bhopal, Madhya Pradesh 462022. Come visit us!";
      }

      setMessages(prev => [...prev, { text: reply, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 bg-brand-red btn-clip flex items-center justify-center text-white shadow-[0_4px_20px_rgba(255,0,60,0.4)] hover:scale-110 transition-transform"
            >
              <MessageSquare className="w-8 h-8" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-brand-surface border border-white/10 rounded-sm shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: 'calc(100vh - 48px)' }}
          >
            {/* Header */}
            <div className="p-4 bg-brand-red flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="font-bold tracking-widest uppercase text-xs">Dangal Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-black transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-sm text-sm ${
                    msg.isBot ? 'bg-brand-surface text-gray-200 border border-white/5' : 'bg-brand-red text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-brand-surface border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about plans, timings..."
                className="flex-1 bg-brand-dark border border-zinc-800 rounded-sm px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-red"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center text-white hover:bg-white hover:text-brand-red transition-colors shrink-0"
              >
                <Send className="w-4 h-4 ml-[-2px]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
