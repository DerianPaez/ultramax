import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { contactInfo } from '../../data/navigation';

export const Promo: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-12 shadow-2xl sm:px-12 sm:py-16 md:px-16 lg:flex lg:items-center lg:justify-between lg:gap-x-12">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative z-10 max-w-xl flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold tracking-wider text-rose-500 uppercase">
                ¡Promoción del Mes!
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Instalación <span className="text-primary">100% GRATIS</span>
              </h2>
            </div>
            <p className="text-base leading-7 text-neutral-300">
              Contrata cualquier plan Hogar o Gamer en esta promoción y ahórrate los $60 de costo de instalación.
            </p>
          </div>
          
          <div className="relative z-10 mt-10 flex lg:mt-0">
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20aprovechar%20la%20promoción%20de%20instalación%20gratis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-900 border-none font-semibold hover:bg-neutral-100 px-8 py-4 rounded-2xl flex items-center gap-2 group transition-all duration-200 shadow-xl shadow-black/10 cursor-pointer"
            >
              Aprovechar Oferta
              <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
