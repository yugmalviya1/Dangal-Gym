import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ScratchCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScratchCardModal({ isOpen, onClose }: ScratchCardModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [rewardDays, setRewardDays] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Setup reward on open
  useEffect(() => {
    if (isOpen) {
      const rand = Math.random() * 100;
      if (rand < 80) {
        setRewardDays(Math.random() < 0.5 ? 2 : 3);
      } else if (rand < 99) {
        setRewardDays(4);
      } else {
        setRewardDays(15);
      }
      setIsRevealed(false);
      setCopied(false);
      initCanvas();
    }
  }, [isOpen]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Wait a bit to ensure CSS sizes are applied
    setTimeout(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Fill scratch overlay
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw pattern or text on overlay
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

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
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
    const percentTransparent = transparentPixels / totalPixels;

    if (percentTransparent > 0.4) {
      setIsRevealed(true);
      // Clear remaining canvas with an animation or just clear it
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(`DANGAL-TRIAL-${rewardDays}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative z-10 w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl"
          >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-red/20 blur-[100px] pointer-events-none"></div>

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-20"
            >
              <X size={20} />
            </button>

            <div className="text-center relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2 text-white">
                Mystery <span className="text-brand-red">Trial</span>
              </h2>
              <p className="text-gray-400 text-sm mb-8">Scratch below to reveal your free trial days!</p>

              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-zinc-800 border border-white/10 select-none touch-none">
                {/* Reward content (underneath) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-800 to-black">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red mb-2">You Won</span>
                  <div className="text-5xl font-display font-bold text-white mb-2 leading-none">
                    {rewardDays} DAYS
                  </div>
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Free Trial</span>
                </div>

                {/* Scratch Canvas (on top) */}
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

              {/* Reveal Actions */}
              <motion.div 
                className="mt-8 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isRevealed ? 1 : 0, height: isRevealed ? 'auto' : 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-black/50 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Promo Code</span>
                    <span className="font-mono font-bold text-white">DANGAL-TRIAL-{rewardDays}</span>
                  </div>
                  <button 
                    onClick={copyCode}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-brand-red transition-colors"
                  >
                    {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                
                <Link 
                  to="/register"
                  state={{ selectedPlan: 'Monthly' }}
                  onClick={onClose}
                  className="block w-full py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-red/90 transition-colors"
                >
                  Claim Now
                </Link>
                
                <p className="text-[9px] text-gray-500 uppercase tracking-widest pt-2">
                  *T&amp;C Apply. Valid for new members only.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
