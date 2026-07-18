'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiX, FiCheck, FiArrowRight } from 'react-icons/fi';
import { contactInfo } from '../../data/navigation';

export const Differences: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <div
            className={`lg:col-span-5 flex justify-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-xl bg-white p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-50">
                <Image
                  src="/images/differences.png"
                  alt="Soporte técnico real de UltraMax en Las Peñas"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  sizes="(max-w-1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-7 flex flex-col gap-10 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                ¿Por qué somos diferentes?
              </h2>
              <p className="text-lg text-muted max-w-2xl">
                En Las Peñas no solo necesitas un internet rápido. Necesitas una empresa que realmente responda cuando la necesites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="flex flex-col gap-5 rounded-3xl bg-slate-50/50 p-6 sm:p-8 border border-slate-200/50 hover:shadow-md transition-all duration-300">
                <h3 className="text-md font-bold text-slate-700 tracking-tight">
                  Lo que muchos usuarios viven hoy
                </h3>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <FiX className="h-3.5 w-3.5" />
                    </span>
                    <span>El internet falla constantemente.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <FiX className="h-3.5 w-3.5" />
                    </span>
                    <span>Pasan días esperando un técnico.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <FiX className="h-3.5 w-3.5" />
                    </span>
                    <span>Nadie responde cuando hay un problema.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <FiX className="h-3.5 w-3.5" />
                    </span>
                    <span>Interrupciones que afectan el trabajo, las clases y el entretenimiento.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-5 rounded-3xl bg-white p-6 sm:p-8 border-2 border-primary shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-md font-bold text-dark tracking-tight">
                  Con UltraMax es diferente
                </h3>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>Soporte técnico local.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>Atención rápida por WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>Instalaciones ágiles.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>Técnicos que realmente llegan.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>Internet estable para toda la familia.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>Atención cercana antes y después de la instalación.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-4 border-t border-slate-100">
              <p className="text-md font-semibold italic text-slate-600 leading-relaxed border-l-4 border-primary pl-4">
                "Nuestro compromiso no termina cuando instalamos tu servicio. Empieza ahí."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:max-w-md">
                <Link
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20hablar%20con%20un%20asesor%20de%20UltraMax.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary text-white hover:bg-primary-hover px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-bold text-base cursor-pointer"
                >
                  Hablar con un Asesor
                </Link>
                <Link
                  href="#planes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base shadow-sm cursor-pointer"
                >
                  Ver Planes
                  <FiArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
