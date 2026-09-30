"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}

export default function FadeIn({ children, delay = 0, className = "", inView = true }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      {...(inView ? { whileInView: { opacity: 1 }, viewport: { once: true, margin: "-50px" } } : { animate: { opacity: 1 } })}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
