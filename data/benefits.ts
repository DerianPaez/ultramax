import React from 'react';
import { FiRepeat, FiTool, FiHeadphones } from 'react-icons/fi';
import { FaInfinity } from 'react-icons/fa6';

export type BenefitItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const benefitsData: BenefitItem[] = [
  {
    id: 'symmetry',
    title: 'Simetría Real',
    description: 'Misma velocidad de subida y bajada para compartir archivos y jugar online sin lag.',
    icon: FiRepeat
  },
  {
    id: 'unlimited',
    title: 'Datos Ilimitados',
    description: 'Navega sin límites ni límites de consumo, sin reducción de velocidad.',
    icon: FaInfinity
  },
  {
    id: 'installation',
    title: 'Instalación Express',
    description: 'Nuestro equipo técnico te conecta en menos de 24 horas hábiles.',
    icon: FiTool
  },
  {
    id: 'support',
    title: 'Soporte Local',
    description: 'Atención humana y rápida por WhatsApp, 24h para tus dudas.',
    icon: FiHeadphones
  }
];
