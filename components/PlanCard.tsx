'use client';

import React from 'react';
import Link from 'next/link';
import { PlanItem } from '../data/plans';
import { Button } from './Button';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../data/navigation';
import { PlanFeatureItem } from './PlanFeatureItem';

export type PlanCardProps = {
  plan: PlanItem;
  expandedPlanTitle: string | null;
  onToggle: () => void;
};

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  expandedPlanTitle,
  onToggle,
}) => {
  const isExpanded = expandedPlanTitle === plan.title;

  return (
    <article
      className={`relative flex flex-col gap-8 justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl self-start w-full ${
        plan.featured
          ? 'ring-2 ring-primary border-transparent'
          : 'border border-border'
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-dark">{plan.title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black tracking-tight text-dark">
              {plan.price}
            </span>
            <span className="text-sm font-semibold text-muted">
              {plan.period}
            </span>
          </div>
          <p className="text-sm leading-6 text-muted">{plan.description}</p>
        </div>

        <ul className="grid gap-4 border-t border-border pt-6 text-sm leading-6 text-dark">
          {plan.features.map((feature) => (
            <PlanFeatureItem key={feature} label={feature} variant="primary" />
          ))}
        </ul>

        <div
          style={{
            maxHeight: isExpanded ? '300px' : '0px',
            opacity: isExpanded ? 1 : 0,
          }}
          className="transition-all duration-300 overflow-hidden"
        >
          <div className="pt-6">
            <ul className="grid gap-4 border-t border-border pt-6 text-sm leading-6 text-slate-600">
              {plan.details.map((detail) => (
                <PlanFeatureItem key={detail} label={detail} variant="success" />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Button
          variant="outline"
          fullWidth
          className="rounded-2xl text-primary border-primary/20 hover:border-primary hover:bg-primary/5 py-2.5 flex items-center justify-center gap-1.5"
          onClick={onToggle}
        >
          {isExpanded ? 'Ocultar detalles' : 'Ver detalles'}
          {isExpanded ? (
            <FiChevronUp className="h-4.5 w-4.5" />
          ) : (
            <FiChevronDown className="h-4.5 w-4.5" />
          )}
        </Button>
        <Link
          href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20contratar%20el%20servicio%20de%20internet%20de%20fibra%20óptica%20con%20el%20${encodeURIComponent(plan.title)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl shadow-md py-3 px-4 text-sm sm:text-base font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
            plan.featured
              ? 'bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-primary/20 hover:shadow-primary/30'
              : 'bg-success text-white hover:bg-success-hover focus:ring-success shadow-success/20 hover:shadow-success/30'
          }`}
        >
          <FaWhatsapp className="h-5 w-5" />
          <span>
            {plan.buttonLabel === 'Contratar por WhatsApp' ? (
              <>
                Contratar
                <span className="hidden sm:inline"> por WhatsApp</span>
              </>
            ) : (
              plan.buttonLabel
            )}
          </span>
        </Link>
      </div>
    </article>
  );
};
