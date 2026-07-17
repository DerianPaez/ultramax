import React from 'react';

export type FooterContactItemProps = {
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const FooterContactItem: React.FC<FooterContactItemProps> = ({
  value,
  icon: Icon,
}) => {
  return (
    <li className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-sm text-muted">{value}</span>
    </li>
  );
};
