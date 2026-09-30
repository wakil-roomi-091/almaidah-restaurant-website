"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}

export default function SlideUp({ children, delay = 0, className = "", inView = true }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      {...(inView ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" } } : { animate: { opacity: 1, y: 0 } })}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
