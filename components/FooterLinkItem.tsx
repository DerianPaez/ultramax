import Link from 'next/link';

export type FooterLinkItemProps = {
  label: string;
  href?: string;
  target?: string;
  rel?: string;
};

export const FooterLinkItem = ({
  label,
  href,
  target,
  rel,
}: FooterLinkItemProps) => {
  if (!href) {
    return (
      <li>
        <span className="text-sm text-muted">
          {label}
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="text-sm text-muted hover:text-primary transition-colors duration-150"
      >
        {label}
      </Link>
    </li>
  );
};
