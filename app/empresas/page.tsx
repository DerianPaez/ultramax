import type { Metadata } from 'next';
import { BusinessHero } from '../../components/section/BusinessHero';
import { BusinessPlans } from '../../components/section/BusinessPlans';
import { BusinessBenefits } from '../../components/section/BusinessBenefits';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ultramax-beta.vercel.app';

export const metadata: Metadata = {
  title: 'Internet Empresarial | Soluciones de Conectividad para Empresas',
  description:
    'Internet empresarial de fibra óptica en Las Peñas. Enlaces dedicados, velocidad simétrica, atención prioritaria y soporte técnico local para tu negocio.',
  alternates: {
    canonical: `${siteUrl}/empresas`,
  },
  openGraph: {
    title: 'Internet Empresarial | UltraMax Las Peñas',
    description:
      'Soluciones de conectividad por fibra óptica diseñadas para empresas que no pueden detenerse.',
    url: `${siteUrl}/empresas`,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Empresas',
      item: `${siteUrl}/empresas`,
    },
  ],
};

export default function EmpresasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BusinessHero />
      <BusinessPlans />
      <BusinessBenefits />
    </>
  );
}
