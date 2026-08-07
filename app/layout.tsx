import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ultramax-beta.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0530b1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UltraMax | Internet de Fibra Óptica en Las Peñas",
    template: "%s | UltraMax",
  },
  description:
    "Internet de fibra óptica de alta velocidad en Las Peñas. Conexión estable, soporte técnico local y atención rápida por WhatsApp para tu hogar o empresa.",
  keywords: [
    "internet fibra optica",
    "internet las peñas",
    "ultramax internet",
    "proveedor internet ecuador",
    "internet de alta velocidad",
    "wifi residencial",
    "internet empresarial",
  ],
  authors: [{ name: "UltraMax" }],
  creator: "UltraMax",
  publisher: "UltraMax",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    title: "UltraMax | Internet de Fibra Óptica en Las Peñas",
    description:
      "Internet de fibra óptica de alta velocidad en Las Peñas. Conexión estable, soporte técnico local y atención rápida por WhatsApp para tu hogar o empresa.",
    siteName: "UltraMax",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UltraMax Internet de Fibra Óptica en Las Peñas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UltraMax | Internet de Fibra Óptica en Las Peñas",
    description:
      "Internet de fibra óptica de alta velocidad en Las Peñas. Conexión estable, soporte técnico local y atención rápida por WhatsApp.",
    site: "@ultramaxec",
    creator: "@ultramaxec",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InternetServiceProvider",
      "@id": `${siteUrl}/#organization`,
      name: "UltraMax",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/images/og-image.jpg`,
      description:
        "Proveedor de servicios de internet de fibra óptica en Las Peñas, Ecuador.",
      telephone: "+593963680853",
      email: "info@ultramaxec.net",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Peñas",
        addressRegion: "Esmeraldas",
        addressCountry: "EC",
      },
      areaServed: {
        "@type": "Place",
        name: "Las Peñas",
      },
      sameAs: [
        "https://wa.me/593963680853",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "UltraMax",
      description: "Internet de fibra óptica de alta velocidad en Las Peñas.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "es-EC",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
