import React from 'react';
import Image from 'next/image';
import { coverageData } from '../../data/coverage';
import { CoverageZoneItem } from '../CoverageZoneItem';

export const Coverage: React.FC = () => {
  return (
    <section id="cobertura" className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Ya estamos conectando Las Peñas
              </h2>
              <p className="text-lg text-muted">
                Ofrecemos internet de fibra óptica de alta velocidad y soporte técnico local que realmente responde.
              </p>
            </div>

            <ul className="grid gap-6">
              {coverageData.map((zone) => (
                <CoverageZoneItem
                  key={zone.name}
                  name={zone.name}
                  sectors={zone.sectors}
                />
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden border border-border shadow-xl bg-white p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-light">
                <Image
                  src="/images/coverage-las-penas.png"
                  alt="Mapa interactivo de cobertura de fibra óptica en Las Peñas"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 backdrop-blur-sm px-3.5 py-2 shadow-md border border-border/50">
                  <span className="text-xs font-bold text-dark">
                    Las Peñas, Esmeraldas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
