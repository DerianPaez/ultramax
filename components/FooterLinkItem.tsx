import React from 'react';
import Link from 'next/link';

export type FooterLinkItemProps = {
  label: string;
  href: string;
};

export const FooterLinkItem: React.FC<FooterLinkItemProps> = ({
  label,
  href,
}) => {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted hover:text-primary transition-colors duration-150"
      >
        {label}
      </Link>
    </li>
  );
};
