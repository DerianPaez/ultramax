import React from 'react';
import { FiCheck } from 'react-icons/fi';

export type PlanFeatureItemProps = {
  label: string;
  variant?: 'primary' | 'success';
};

export const PlanFeatureItem: React.FC<PlanFeatureItemProps> = ({
  label,
  variant = 'primary',
}) => {
  const iconClass = variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success';
  const textClass = variant === 'primary' ? 'font-medium text-dark' : 'text-slate-600';

  return (
    <li className="flex gap-x-3 items-center">
      <div className={`flex h-5 w-5 items-center justify-center rounded-full ${iconClass}`}>
        <FiCheck className="h-3.5 w-3.5" />
      </div>
      <span className={textClass}>{label}</span>
    </li>
  );
};
