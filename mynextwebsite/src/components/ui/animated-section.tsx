'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.95
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
        opacity: {
          duration: 0.9,
          ease: "easeOut"
        },
        y: {
          duration: 0.9,
          ease: [0.34, 1.56, 0.64, 1]
        },
        scale: {
          duration: 0.9,
          ease: [0.34, 1.56, 0.64, 1]
        }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
} 