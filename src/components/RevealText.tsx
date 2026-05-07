import React from 'react';
import { motion } from 'motion/react';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div className={`reveal-text-container ${className}`}>
      <motion.span
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="reveal-text-content"
      >
        {children}
      </motion.span>
    </div>
  );
};
