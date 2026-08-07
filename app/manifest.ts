import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UltraMax | Internet de Fibra Óptica',
    short_name: 'UltraMax',
    description:
      'Internet de fibra óptica de alta velocidad en Las Peñas. Conexión estable, soporte técnico local y atención rápida por WhatsApp.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0530b1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
