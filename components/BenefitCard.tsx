import React from 'react';

export type BenefitCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <article className="flex flex-col gap-6 items-start rounded-3xl bg-light p-8 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-border/50">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-dark">{title}</h3>
        <p className="text-sm leading-6 text-muted">{description}</p>
      </div>
    </article>
  );
};
