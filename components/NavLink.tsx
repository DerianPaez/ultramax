import React from 'react';
import Link from 'next/link';

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`text-sm font-semibold text-muted hover:text-primary transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};
