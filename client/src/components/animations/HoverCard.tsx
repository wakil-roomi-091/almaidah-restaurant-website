"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HoverCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
