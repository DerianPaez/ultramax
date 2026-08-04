'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import { contactInfo } from '../../data/navigation';
import { AnimateOnScroll } from '../AnimateOnScroll';
import { FeatureCheck } from '../FeatureCheck';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-24 lg:py-36 bg-neutral-950 text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-neutral-950/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <AnimateOnScroll variant="fade-up" className="flex flex-col items-center text-center gap-10">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] flex flex-col gap-2">
              <span>Internet que sí responde</span>
              <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                cuando lo necesitas.
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
              En <strong className="text-white font-semibold">Las Peñas</strong>{' '}
              sabemos lo frustrante que es quedarse sin internet y no recibir
              ayuda. Por eso combinamos fibra óptica con un soporte técnico que
              realmente responde.
            </p>
          </div>

          <AnimateOnScroll variant="fade-up" delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
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
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base shadow-sm cursor-pointer backdrop-blur-xs"
            >
              <FaWhatsapp className="h-5.5 w-5.5 text-success" />
              Contratar por WhatsApp
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.25} className="flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-sm text-neutral-400 font-semibold">
            <FeatureCheck label="Instalación GRATIS" />
            <FeatureCheck label="Soporte técnico local" />
            <FeatureCheck label="Sin Contratos Forzosos" />
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
