import React from 'react';
import { motion } from 'motion/react';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  show?: boolean;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 1.2,
  show = false
}) => {
  return (
    <span className={`reveal-text-container inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: '100%', opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : undefined}
        whileInView={!show ? { y: 0, opacity: 1 } : undefined}
        viewport={{ once: true, margin: "0px" }}
        transition={{
          duration,
          delay,
          ease: [0.32, 0.72, 0, 1] // Matches --ease-out-gentle
        }}
        className="reveal-text-content inline-block transform-gpu will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
};
