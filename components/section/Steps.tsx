import React from 'react';
import { stepsData } from '../../data/steps';
import { StepCard } from '../StepCard';

export const Steps: React.FC = () => {
  return (
    <section className="bg-primary py-20 lg:py-28 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contrata en 3 Simples Pasos
          </h2>
          <p className="text-lg text-white/80">
            Sin filas, sin papeleos excesivos. Todo digital.
          </p>
        </div>

        <div className="mx-auto grid max-w-sm grid-cols-1 gap-12 sm:max-w-none sm:grid-cols-3 w-full">
          {stepsData.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
