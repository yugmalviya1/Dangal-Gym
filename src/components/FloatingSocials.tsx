import React, { useState, useRef, useEffect } from 'react';
import { Instagram, X, MessageCircle, MapPin } from 'lucide-react';

export default function FloatingSocials() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string, time: string}[]>([
    { sender: 'bot', text: 'Hi! Welcome to Dangal Gym. How can I assist you today?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatOpen, isTyping]);

  const faqOptions = [
    { id: 'location', text: '📍 Location', answer: 'Dangal Gym is located at 2 B, near SBI Bank, Awadhpuri, Bhopal, MP 462022. You can click the Map pin icon below for direct Google Maps navigation!' },
    { id: 'timings', text: '🕒 Gym Timings', answer: 'Monday to Saturday: Morning (6:00 AM - 11:00 AM) & Evening (5:00 PM - 10:00 PM). Sunday: Closed.' },
    { id: 'pricing', text: '💰 Memberships', answer: 'Our standard 1-Month plan is ₹1,500. Our most popular 3-Month plan is ₹3,500 (just ₹39/day!), and the 1-Year plan is ₹11,000. You can also get massive discounts during checkout.' },
    { id: 'trial', text: '🎁 Free Trial', answer: 'Yes! Click the "WIN UP TO 3 DAYS FREE" button at the top of our website to scratch a card and win up to 3 days of free premium access!' },
    { id: 'pt', text: '💪 Personal Training', answer: 'Absolutely. We offer 1-on-1 elite coaching where a certified trainer designs a custom diet and workout split specifically for your body type.' },
    { id: 'facilities', text: '🔥 Facilities', answer: 'We feature premium international-grade equipment, a dedicated CrossFit zone, massive free-weights section, and a safe, hygienic environment.' }
  ];

  const handleQuestionClick = (questionText: string, answerText: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: 'user', text: questionText, time }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: answerText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1200);
  };

  return (
    <>
      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 w-[calc(100vw-32px)] sm:w-[380px] bg-[#0b141a] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Dangal Support</h3>
                <p className="text-green-500 text-[10px] font-medium tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Background with WhatsApp-like pattern */}
          <div className="relative p-4 h-[350px] overflow-y-auto flex flex-col gap-3 bg-[#0b141a]" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm relative ${
                  msg.sender === 'user' 
                    ? 'bg-[#005c4b] text-white rounded-tr-none' 
                    : 'bg-[#202c33] text-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                  <span className="text-[9px] text-white/50 block text-right mt-1 ml-4 float-right">{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-[#202c33] rounded-2xl rounded-tl-none px-4 py-3 max-w-[80px] flex items-center justify-center gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-1" />
          </div>

          {/* Options */}
          <div className="p-4 bg-[#202c33] border-t border-white/5 shadow-[0_-10px_20px_rgba(0,0,0,0.2)] z-10">
            <p className="text-[10px] text-brand-red uppercase tracking-widest font-bold mb-3 text-center">Ask a Question</p>
            <div className="flex flex-wrap gap-2 justify-center max-h-[120px] overflow-y-auto scrollbar-hide pr-1">
              {faqOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleQuestionClick(option.text, option.answer)}
                  disabled={isTyping}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-4">
        <a
          href="https://maps.google.com/?q=Connaught+Place,+New+Delhi,+Delhi+110001"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-brand-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-brand-red/50 hover:shadow-2xl"
          aria-label="Location"
        >
          <MapPin size={24} />
        </a>

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${isChatOpen ? 'bg-zinc-800 text-white hover:shadow-xl border border-white/10' : 'bg-[#25D366] text-white hover:shadow-[#25D366]/50 hover:shadow-2xl'}`}
          aria-label="FAQ Bot"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          )}
        </button>
        
        <a
          href="#"
          className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-pink-500/50 hover:shadow-2xl"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
      </div>
    </>
  );
}
