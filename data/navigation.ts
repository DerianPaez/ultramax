export type NavLink = {
  label: string;
  href: string;
};

export type FooterNavLink = {
  label: string;
  href?: string;
};

export type FooterSection = {
  title: string;
  links: FooterNavLink[];
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
};

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Planes Hogar', href: '/#planes' },
  { label: 'Planes Empresas', href: '/empresas' },
  { label: 'Cobertura', href: '/#cobertura' },
  { label: 'Ayuda', href: '/#ayuda' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'SERVICIOS',
    links: [
      { label: 'Internet para Hogar', href: '/#planes' },
      { label: 'Internet para Negocios', href: '/empresas' },
      { label: 'Planes Gamer', href: '/#planes' },
      { label: 'Cobertura', href: '/cobertura' },
    ],
  },
  {
    title: 'SOPORTE',
    links: [
      { label: 'Soporte por WhatsApp', href: 'https://wa.me/593999113830' },
      { label: 'Preguntas Frecuentes', href: '/#ayuda' },
      { label: 'Información de Pago', href: '/#ayuda' },
      { label: 'Lun - Sáb: 8:00 AM - 6:00 PM' },
    ],
  },
];

export const contactInfo: ContactInfo = {
  phone: '(04) 500-6000',
  email: 'ventas@fibernet.ec',
  address: 'Guayaquil, Ecuador',
  whatsapp: '593900000000',
};

import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export type ContactField = {
  type: 'phone' | 'email' | 'address';
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const contactFields: ContactField[] = [
  {
    type: 'phone',
    value: contactInfo.phone,
    icon: FiPhone,
  },
  {
    type: 'email',
    value: contactInfo.email,
    icon: FiMail,
  },
  {
    type: 'address',
    value: contactInfo.address,
    icon: FiMapPin,
  },
];
