'use client';

import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import { contactInfo } from '../../data/navigation';
import { FeatureCheck } from '../FeatureCheck';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-20 lg:py-32 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-white to-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-40">
        <Image
          src="/images/hero-bg.png"
          alt="Fondo de fibra óptica"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-10">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl leading-[1.15] flex flex-col gap-2">
              <span>Internet Fibra Óptica</span>
              <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Ultrarrápido y Estable
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Olvídate del lag y las desconexiones. La mejor conexión de fibra
              óptica para tu hogar en Ecuador desde{' '}
              <strong className="text-dark font-semibold">$22/mes</strong>. Te
              instalamos{' '}
              <span className="text-success font-bold border-b border-success/35 pb-0.5">
                GRATIS
              </span>{' '}
              esta semana.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <Link
              href="#planes"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-white hover:bg-primary-hover px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-bold text-base cursor-pointer"
            >
              Ver Planes y Precios
              <FiArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20contratar%20el%20servicio%20de%20internet%20de%20fibra%20óptica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base shadow-sm cursor-pointer"
            >
              <FaWhatsapp className="h-5.5 w-5.5 text-success" />
              Contratar por WhatsApp
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-sm text-slate-500 font-semibold">
            <FeatureCheck label="Instalación GRATIS" />
            <FeatureCheck label="Soporte 24/7 sin esperas" />
            <FeatureCheck label="Sin Contratos Forzosos" />
          </div>

          <div className="relative w-full max-w-5xl aspect-video md:aspect-21/9 mt-6">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50">
                <Image
                  src="/images/hero-new.png"
                  alt="Familia feliz disfrutando de internet de fibra óptica de FiberNet"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  sizes="(max-w-1280px) 100vw, 80vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
