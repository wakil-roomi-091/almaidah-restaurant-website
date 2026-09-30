"use client";

import SlideUp from "@/components/animations/SlideUp";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <SlideUp delay={0.1} inView={false} className="sticky top-0 z-50 w-full"><header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          
          {/* Logo & Brand */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <img 
                alt="Al Maidah Logo" 
                className="h-8 w-auto object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQDu7sGBAePI7lETEgGmdo-Vt9IXf6Meg6uDxusuCiDn8hTbMgKSZeM9XL51SuKLPq9fkGww6Wdo822eE4XSrIOyuvFO46LkBq4vdTaIjUdrVdh5qxFyC7edSpey4_0WyLhLYWYBwNOb8L86mP82LhIvoDKZW82mvrgfXHjVIVWcHba17mNdojLMlYj7KVoBhQvcGCBBq9bS8L6WPrGHpHB3JYbniRiqqaywEpsY-m3sN1SIWuEM"
              />
              {/* Restaurant Name - Hidden on Mobile (<768px), Visible on Tablet and Desktop */}
              <div className="hidden md:flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none group-hover:text-primary-container transition-colors whitespace-nowrap">
                  Al Maidah
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-0.5 whitespace-nowrap">
                  Warsak Road • Peshawar
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${isActive ? 'text-primary font-title-md border-b-2 border-primary' : 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTAs & Mobile Toggle */}
          <div className="flex items-center gap-space-md shrink-0">
            {/* Direct Line (Hidden on Mobile & Tablet, Visible on Desktop >= 1280px) */}
            <a 
              className="hidden xl:flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors btn-interaction" 
              href="tel:+923009016815"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]">call</span>
              <div className="flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[10px] leading-3">Direct Line</span>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">+92 300 9016815</span>
              </div>
            </a>
            
            {/* Order Online CTA (Hidden on Mobile <768px, Visible on Tablet & Desktop >= 768px) */}
            <div className="hidden md:flex relative items-center gap-space-xs">
              <Link 
                href="/menu" 
                className="relative inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg tracking-wide shadow-[0_4px_20px_-2px_rgba(128,19,35,0.25)] hover:bg-primary-container hover:text-on-primary transition-all duration-200 active:scale-[0.98] btn-interaction"
              >
                <span className="whitespace-nowrap">ORDER ONLINE</span>
                <span className="inline-block px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-wider uppercase ml-1">
                  Foodpanda
                </span>
              </Link>
              {/* Profile Button - Visible on Desktop only */}
              <button 
                type="button" 
                className="hidden xl:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 ml-1 cursor-pointer hover:brightness-110 transition-all focus:outline-none"
              >
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </button>
            </div>

            {/* Mobile/Tablet Menu Toggle Button (Visible <1280px) */}
            <button 
              aria-label="Toggle Mobile Menu" 
              className="xl:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container-high focus:outline-none transition-colors" 
              onClick={toggleMenu}
              type="button"
            >
              <span className="material-symbols-outlined text-[26px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header></SlideUp>

      {/* Mobile/Tablet Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-surface/95 backdrop-blur-md pt-24 pb-6 px-gutter flex flex-col overflow-y-auto transition-opacity duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-primary/10 text-primary font-title-md' : 'text-on-surface font-label-lg text-label-lg hover:bg-surface-container'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-outline-variant/30 flex flex-col gap-4">
            <Link 
              href="/menu" 
              className="flex items-center justify-center w-full gap-2 px-4 py-4 rounded-xl bg-primary text-on-primary font-title-md text-title-md shadow-lg transition-transform active:scale-[0.98] hover:bg-primary-container hover:text-on-primary btn-interaction"
            >
              <span>ORDER ONLINE</span>
            </Link>
            
            <button 
              type="button"
              className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors focus:outline-none btn-interaction" 
            >
              <span className="material-symbols-outlined text-[24px]">person</span>
              <span>PROFILE</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

