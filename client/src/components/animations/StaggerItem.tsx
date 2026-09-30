"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
}

export default function StaggerItem({ children, className = "", y = 20 }: StaggerItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: y },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
