import { FiHeadphones, FiWifi, FiZap, FiMapPin } from 'react-icons/fi';

export type BenefitItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const benefitsData: BenefitItem[] = [
  {
    id: 'support',
    title: 'Soporte Técnico Real',
    description: 'No hablas con bots ni esperas días. Nuestro equipo está listo para ayudarte cuando lo necesites.',
    icon: FiHeadphones
  },
  {
    id: 'stable',
    title: 'Internet Estable',
    description: 'Fibra óptica diseñada para mantener una conexión rápida durante todo el día.',
    icon: FiWifi
  },
  {
    id: 'installation',
    title: 'Instalación Rápida',
    description: 'Instalamos tu servicio en el menor tiempo posible para que empieces a navegar cuanto antes.',
    icon: FiZap
  },
  {
    id: 'proximity',
    title: 'Atención Cercana',
    description: 'Somos una empresa que conoce Las Peñas y responde cuando sus clientes la necesitan.',
    icon: FiMapPin
  }
];
