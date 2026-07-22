import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/navigation';

export const BusinessHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-neutral-950 text-white">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-30">
        <Image
          src="/images/hero-office.png"
          alt="Oficina corporativa de fibra óptica"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">
              Internet empresarial que
              <span className="block mt-2 bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                mantiene tu negocio conectado.
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
              Conectividad de fibra óptica con atención prioritaria, soporte
              técnico local y soluciones diseñadas para empresas que no pueden
              detenerse.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20hablar%20con%20un%20asesor.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-primary text-white hover:bg-primary-hover px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-bold text-base cursor-pointer"
            >
              Hablar con un Asesor
            </Link>

            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20solicitar%20un%20plan%20de%20internet%20a%20medida%20para%20mi%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base shadow-sm cursor-pointer backdrop-blur-xs"
            >
              <FaWhatsapp className="h-5.5 w-5.5 text-success" />
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
