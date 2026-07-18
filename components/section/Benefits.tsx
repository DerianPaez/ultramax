import React from 'react';
import { benefitsData } from '../../data/benefits';
import { BenefitCard } from '../BenefitCard';

export const Benefits: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            ¿Por qué cada vez más familias nos eligen?
          </h2>
          <p className="text-lg text-muted">
            Tecnología de punta diseñada para que navegues, juegues y trabajes
            sin interrupciones.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-sm grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={<Icon className="h-6 w-6 text-primary" />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
