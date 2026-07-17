import React from 'react';
import Link from 'next/link';
import { contactInfo } from '../../data/navigation';

export const Cta: React.FC = () => {
  return (
    <section className="bg-primary py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              ¿Listo para volar en internet?
            </h2>
            <p className="text-lg text-white/80">
              Únete a los más de 50,000 ecuatorianos que ya disfrutan de la velocidad y estabilidad de FiberNet.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20contratar%20el%20servicio%20de%20internet%20de%20fibra%20óptica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary border-none hover:bg-neutral-100 font-semibold rounded-2xl shadow-xl shadow-black/10 px-8 py-4 cursor-pointer transition-all duration-200"
            >
              Contratar Ahora
            </Link>
            <Link
              href="#cobertura"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-semibold rounded-2xl px-8 py-4 transition-all duration-200 cursor-pointer"
            >
              Ver Cobertura
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
