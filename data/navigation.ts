import { FiHeadphones, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export type NavLink = {
  label: string;
  href: string;
};

export type FooterNavLink = {
  label: string;
  href?: string;
  target?: string;
  rel?: string;
};

export type FooterSection = {
  title: string;
  links: FooterNavLink[];
};

export type ContactInfo = {
  phone: string;
  email: string;
  supportEmail: string;
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

export const contactInfo: ContactInfo = {
  phone: '+593 96 368 0853',
  email: 'info@ultramaxec.net',
  supportEmail: 'soporte@ultramaxec.net',
  address: 'Las Peñas, Esmeraldas, Ecuador',
  whatsapp: '593963680853',
};

export const footerSections: FooterSection[] = [
  {
    title: 'SERVICIOS',
    links: [
      { label: 'Internet para Hogar', href: '/#planes' },
      { label: 'Internet para Negocios', href: '/empresas' },
      { label: 'Planes Gamer', href: '/#planes' },
      { label: 'Cobertura', href: '#cobertura' },
    ],
  },
  {
    title: 'SOPORTE',
    links: [
      {
        label: 'Soporte por WhatsApp',
        href: `https://wa.me/${contactInfo.whatsapp}`,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      { label: 'Preguntas Frecuentes', href: '/#ayuda' },
      { label: 'Información de Pago', href: '/#ayuda' },
      { label: 'Lun - Sáb: 8:00 AM - 6:00 PM' },
    ],
  },
];

export type ContactField = {
  type: 'phone' | 'email' | 'supportEmail' | 'address';
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
    type: 'supportEmail',
    value: contactInfo.supportEmail,
    icon: FiHeadphones,
  },
  {
    type: 'address',
    value: contactInfo.address,
    icon: FiMapPin,
  },
];
