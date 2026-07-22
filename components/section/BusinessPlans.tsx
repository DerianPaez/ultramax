'use client';

import React, { useState } from 'react';
import { businessPlansData } from '../../data/businessPlans';
import { PlanCard } from '../PlanCard';

export const BusinessPlans: React.FC = () => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Soluciones para cada tipo de empresa
          </h2>
          <p className="text-lg text-muted">
            Desde pequeños negocios hasta empresas que requieren enlaces
            dedicados y máxima disponibilidad.
          </p>
        </div>

        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-3 w-full">
          {businessPlansData.map((plan) => (
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
