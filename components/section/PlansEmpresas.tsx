'use client';

import React, { useState } from 'react';
import { plansEmpresasData } from '../../data/plansEmpresas';
import { PlanCard } from '../PlanCard';

export const PlansEmpresas: React.FC = () => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Planes Corporativos
          </h2>
          <p className="text-lg text-muted">
            Selecciona la velocidad que impulsará la productividad de tu negocio.
          </p>
        </div>

        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-3 w-full">
          {plansEmpresasData.map((plan) => (
            <PlanCard
              key={plan.title}
              plan={plan}
              expandedPlanTitle={expandedPlan}
              onToggle={() =>
                setExpandedPlan(expandedPlan === plan.title ? null : plan.title)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
