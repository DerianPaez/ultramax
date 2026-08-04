import type { ReactNode } from 'react';
import Link from 'next/link';

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export const NavLink = ({
  href,
  children,
  className = '',
  target,
  rel,
}: NavLinkProps) => {
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
