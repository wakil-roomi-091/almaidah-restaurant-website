"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  inView?: boolean;
}

export default function StaggerContainer({ children, delay = 0, staggerChildren = 0.1, className = "", inView = true }: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      {...(inView ? { whileInView: "visible", viewport: { once: true, margin: "-50px" } } : { animate: "visible" })}
      className={className}
    >
      {children}
    </motion.div>
  );
}
