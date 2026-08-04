import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/terminos-y-condiciones', '/politicas-de-privacidad'],
      },
    ],
  };
}
