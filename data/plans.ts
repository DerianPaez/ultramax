export type PlanItem = {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  details: string[];
  featured: boolean;
  buttonLabel: string;
  secondaryButtonLabel?: string;
};

export const plansData: PlanItem[] = [
  {
    title: 'Plan Hogar',
    price: '$22',
    period: '/mes',
    description:
      'Ideal para navegar, estudiar y disfrutar de un internet estable en casa.',
    features: [
      '150 Mbps Simétricos',
      'Instalación GRATIS (Promoción)',
      'Router WiFi incluido',
      'Internet ilimitado',
    ],
    details: [
      'Ideal para redes sociales, streaming y videollamadas',
      'Conecta varios dispositivos al mismo tiempo',
      'Fibra óptica de alta velocidad',
      'Soporte técnico local y atención por WhatsApp',
    ],
    featured: false,
    buttonLabel: 'Contratar por WhatsApp',
    secondaryButtonLabel: 'Ver detalles',
  },
  {
    title: 'Plan Streaming',
    price: '$30',
    period: '/mes',
    description:
      'Perfecto para familias que disfrutan de streaming en alta calidad y varios dispositivos conectados.',
    features: [
      '200 Mbps Simétricos',
      'Optimizado para Streaming',
      'Router WiFi de Alto Rendimiento',
      'Soporte Prioritario',
    ],
    details: [
      'Ideal para streaming en 4K',
      'Excelente rendimiento con múltiples dispositivos',
      'Conexión estable para trabajo remoto y videollamadas',
      'Atención técnica prioritaria',
    ],
    featured: true,
    buttonLabel: 'Contratar Ahora',
  },
  {
    title: 'Plan Gamer Pro',
    price: '$45',
    period: '/mes',
    description:
      'La máxima velocidad y estabilidad para gamers, streamers y profesionales.',
    features: [
      '300 Mbps Simétricos',
      'Latencia optimizada',
      'IP Pública',
      'Soporte Técnico Premium',
    ],
    details: [
      'Ideal para gaming competitivo y streaming',
      'Menor latencia para juegos online',
      'Máximo rendimiento para múltiples dispositivos',
      'Soporte técnico prioritario 24/7',
    ],
    featured: false,
    buttonLabel: 'Contratar por WhatsApp',
    secondaryButtonLabel: 'Ver detalles',
  },
];
