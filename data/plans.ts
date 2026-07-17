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
      'Ideal para navegación básica, redes sociales y WhatsApp ligero.',
    features: [
      '150 Mbps Simétricos',
      'Instalación gratis (Promo)',
      'Router WiFi de Doble Banda',
      'Sin Límite de Consumo',
    ],
    details: [
      'Soporte técnico estándar 8/5',
      'Garantía de velocidad del 80%',
      'Conexión estable para hasta 4 dispositivos',
      'Tecnología FTTH directa',
    ],
    featured: false,
    buttonLabel: 'Contratar por WhatsApp',
    secondaryButtonLabel: 'Más información',
  },
  {
    title: 'Plan Streaming',
    price: '$30',
    period: '/mes',
    description: 'Perfecto para familias, Netflix 4K y múltiples dispositivos.',
    features: [
      '200 Mbps Simétricos',
      'Optimizado para Streaming',
      'IP Pública Dinámica',
      'Soporte Prioritario',
    ],
    details: [
      'Soporte técnico prioritario 24/7',
      'Garantía de velocidad del 90%',
      'Optimización de tráfico de video 4K/UHD',
      'Seguridad de red perimetral',
    ],
    featured: true,
    buttonLabel: 'Contratar Ahora',
  },
  {
    title: 'Plan Gamer Pro',
    price: '$45',
    period: '/mes',
    description:
      'Diseñado para gamers y usuarios pro, ofrecen un Uptime y descarga máxima.',
    features: [
      '300 Mbps Simétricos',
      'Latencia Optimizada',
      'IP Pública Directa',
      'Soporte Técnico Senior',
    ],
    details: [
      'Soporte de canal prioritario Senior 24/7',
      'Uptime garantizado del 99.9%',
      'Priorización de paquetes (QoS) para juegos',
      'Dirección IP pública fija disponible',
    ],
    featured: false,
    buttonLabel: 'Contratar por WhatsApp',
    secondaryButtonLabel: 'Más información',
  },
];
