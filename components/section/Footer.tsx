import React from 'react';
import Link from 'next/link';
import { footerSections, contactFields } from '../../data/navigation';
import { FiZap } from 'react-icons/fi';
import { FooterLinkItem } from '../FooterLinkItem';
import { FooterContactItem } from '../FooterContactItem';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
                <FiZap className="h-5.5 w-5.5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-dark">
                FiberNet<span className="text-primary font-black">EC</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted max-w-xs">
              Proveedor de internet de alta velocidad en Ecuador. Comprometidos
              con la velocidad y estabilidad de tu conexión.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-bold tracking-wider text-dark uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <FooterLinkItem
                    key={link.label}
                    label={link.label}
                    href={link.href}
                  />
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-dark uppercase">
              Contacto
            </h3>
            <ul className="space-y-4">
              {contactFields.map((field) => (
                <FooterContactItem
                  key={field.value}
                  value={field.value}
                  icon={field.icon}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} FiberNet Ecuador S.A. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
