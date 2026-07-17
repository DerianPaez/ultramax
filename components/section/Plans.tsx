'use client';

import React, { useState } from 'react';
import { plansData } from '../../data/plans';
import { PlanCard } from '../PlanCard';

export const Plans: React.FC = () => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <section id="planes" className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Elige el plan perfecto para ti
          </h2>
          <p className="text-lg text-muted">
            Precios transparentes, sin contratos forzosos ni letras pequeñas.
          </p>
        </div>

        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-3">
          {plansData.map((plan) => (
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
