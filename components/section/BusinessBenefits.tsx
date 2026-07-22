import React from 'react';
import { businessBenefitsData } from '../../data/businessBenefits';
import { BenefitCard } from '../BenefitCard';

export const BusinessBenefits: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Soluciones diseñadas para empresas exigentes
          </h2>
          <p className="text-lg text-muted">
            Mantén tu empresa siempre conectada con una solución confiable para
            videollamadas, sistemas empresariales, cámaras de seguridad y
            trabajo en la nube.
          </p>
        </div>

        <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 w-full">
          {businessBenefitsData.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <BenefitCard
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                icon={<IconComponent className="h-6 w-6 text-primary" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
