import { PlanItem } from './plans';

export const plansEmpresasData: PlanItem[] = [
  {
    title: 'Negocio Básico',
    price: '$45',
    period: '/mes + IVA',
    description: 'Ideal para pequeños comercios y oficinas locales.',
    features: [
      '50 Mbps Simétricos FTTH',
      'Soporte Técnico Standard 8/5',
      'Router WiFi de alta gama',
      '1 IP Dinámica'
    ],
    details: [
      'Garantía de velocidad del 80%',
      'Tiempo de respuesta de soporte < 8 horas',
      'Dirección IP fija opcional'
    ],
    featured: false,
    buttonLabel: 'Elegir Plan'
  },
  {
    title: 'Oficina Pro',
    price: '$80',
    period: '/mes + IVA',
    description: 'Perfecto para oficinas con más de 10 usuarios.',
    features: [
      '100 Mbps Simétricos FTTH',
      'Soporte Técnico Prioritario 24/7',
      'Router WiFi para múltiples conexiones',
      '1 IP Pública Fija Incluida'
    ],
    details: [
      'Garantía de velocidad del 90%',
      'SLA de disponibilidad del 99.5%',
      'Tiempo de respuesta de soporte < 4 horas'
    ],
    featured: true,
    buttonLabel: 'Contratar Ahora'
  },
  {
    title: 'Corporativo Dedicado',
    price: '$150',
    period: '/mes + IVA',
    description: 'Para empresas que requieren enlace dedicado 1:1.',
    features: [
      'Enlace 100% Dedicado y Simétrico',
      'SLA Garantizado de 99.9%',
      'Redundancia de Fibra Directa',
      'Bloque de 4 IP Públicas'
    ],
    details: [
      'Ancho de banda garantizado 1:1',
      'Direccionamiento IP /30 público',
      'Monitoreo activo del enlace 24/7'
    ],
    featured: false,
    buttonLabel: 'Cotizar Solución'
  }
];
