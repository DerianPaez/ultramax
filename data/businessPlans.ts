import { PlanItem } from './plans';

export const businessPlansData: PlanItem[] = [
  {
    title: 'Negocio Básico',
    price: '$45',
    period: '/mes + IVA',
    description:
      'Perfecto para locales comerciales, consultorios y oficinas que necesitan una conexión estable para operar todos los días.',
    features: [
      '50 Mbps Simétricos',
      'Soporte Técnico Standard 8/5',
      'Router Empresarial',
      'IP Pública disponible',
    ],
    details: [
      'Ideal para pequeñas empresas',
      'Fibra óptica estable',
      'Soporte técnico local',
    ],
    featured: false,
    buttonLabel: 'Elegir Plan',
  },
  {
    title: 'Oficina Pro',
    price: '$80',
    period: '/mes + IVA',
    description:
      'Diseñado para empresas con varios colaboradores que utilizan videollamadas, sistemas en la nube y múltiples dispositivos simultáneamente.',
    features: [
      '100 Mbps Simétricos',
      'Soporte Técnico Prioritario 24/7',
      'Router WiFi para múltiples conexiones',
      '1 IP Pública Fija Incluida',
    ],
    details: [
      'Excelente rendimiento para múltiples usuarios',
      'Ideal para videollamadas y sistemas en la nube',
      'Soporte técnico prioritario',
    ],
    featured: true,
    buttonLabel: 'Contratar Ahora',
  },
  {
    title: 'Corporativo Dedicado',
    price: '$150',
    period: '/mes + IVA',
    description:
      'La mejor opción para empresas con operaciones críticas que necesitan máxima estabilidad, disponibilidad y rendimiento.',
    features: [
      'Enlace 100% Dedicado y Simétrico',
      'SLA Garantizado de 99.9%',
      'Redundancia de Fibra Directa',
      'Bloque de 4 IP Públicas',
    ],
    details: ['Enlace dedicado 1:1', 'SLA 99.9%', 'IP Pública'],
    featured: false,
    buttonLabel: 'Cotizar Solución',
  },
];
