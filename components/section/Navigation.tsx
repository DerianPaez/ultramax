'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, contactInfo } from '../../data/navigation';
import { FiZap, FiMessageCircle, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { NavLink } from '../NavLink';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-border bg-white/95 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
            <FiZap className="h-5.5 w-5.5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-dark">
            FiberNet<span className="text-primary font-black">EC</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20hablar%20con%20un%20asesor%20de%20FiberNet.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-xl px-5 py-2.5 shadow-md shadow-primary/15 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <FiMessageCircle className="h-4.5 w-4.5" />
            Hablar con un Asesor
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <Link
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20hablar%20con%20un%20asesor%20de%20FiberNet.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-success text-white shadow-md shadow-success/15 hover:scale-105 transition-transform duration-200 cursor-pointer"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className="h-5.5 w-5.5" />
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-dark shadow-sm hover:bg-light transition-colors duration-200 cursor-pointer focus:outline-none"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-5.5 w-5.5" />
            ) : (
              <FiMenu className="h-5.5 w-5.5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-primary transition-colors duration-200 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
