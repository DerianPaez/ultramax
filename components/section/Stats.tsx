import React from 'react';
import { statsData } from '../../data/stats';

export const Stats: React.FC = () => {
  return (
    <section className="border-t border-b border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 text-center md:grid-cols-4 md:gap-x-12">
          {statsData.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold tracking-wider text-muted uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
