import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { contactInfo } from '../../data/navigation';

export const Promo: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-12 shadow-2xl sm:px-12 sm:py-16 md:px-16 lg:flex lg:items-center lg:justify-between lg:gap-x-12">
          <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-30">
            <Image
              src="/images/promo-bg.png"
              alt="Fondo de promoción"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl flex flex-col gap-1.5">
              <span className="text-white">¡Promoción del Mes!</span>
              <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Instalación 100% GRATIS
              </span>
            </h2>
            <p className="text-base leading-7 text-slate-300 max-w-xl">
              Contrata hoy UltraMax y disfruta de instalación GRATIS, internet
              estable y un soporte técnico que realmente responde.
            </p>
          </div>

          <div className="relative z-10 mt-10 flex lg:mt-0 shrink-0">
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20aprovechar%20la%20promoción%20de%20instalación%20gratis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 border-none font-bold hover:bg-slate-50 px-8 py-4 rounded-2xl flex items-center gap-2 group transition-all duration-200 shadow-xl shadow-black/10 cursor-pointer text-sm"
            >
              Aprovechar Oferta
              <FiArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
