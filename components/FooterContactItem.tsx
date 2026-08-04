import type { ComponentType } from 'react';

export type FooterContactItemProps = {
  value: string;
  icon: ComponentType<{ className?: string }>;
};

export const FooterContactItem = ({
  value,
  icon: Icon,
}: FooterContactItemProps) => {
  return (
    <li className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-sm text-muted">{value}</span>
    </li>
  );
};
