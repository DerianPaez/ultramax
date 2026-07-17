export type NavLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: NavLink[];
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
};

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Planes Hogar', href: '#planes' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Ayuda', href: '#ayuda' }
];

export const footerSections: FooterSection[] = [
  {
    title: 'SERVICIOS',
    links: [
      { label: 'Internet Hogar', href: '#planes' },
      { label: 'Internet Pymes', href: '#planes' },
      { label: 'Internet Dedicado', href: '#planes' },
      { label: 'Streaming TV', href: '#planes' }
    ]
  },
  {
    title: 'SOPORTE',
    links: [
      { label: 'Centro de Ayuda', href: '#ayuda' },
      { label: 'Test de Velocidad', href: '#ayuda' },
      { label: 'Reportar Falla', href: '#ayuda' },
      { label: 'Facturación', href: '#ayuda' }
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '(04) 500-6000',
  email: 'ventas@fibernet.ec',
  address: 'Guayaquil, Ecuador',
  whatsapp: '593900000000'
};

import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export type ContactField = {
  type: 'phone' | 'email' | 'address';
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const contactFields: ContactField[] = [
  {
    type: 'phone',
    value: contactInfo.phone,
    icon: FiPhone
  },
  {
    type: 'email',
    value: contactInfo.email,
    icon: FiMail
  },
  {
    type: 'address',
    value: contactInfo.address,
    icon: FiMapPin
  }
];
