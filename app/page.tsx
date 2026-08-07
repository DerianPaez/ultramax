import { Navigation } from '../components/section/Navigation';
import { Hero } from '../components/section/Hero';
import { Differences } from '../components/section/Differences';
import { Plans } from '../components/section/Plans';
import { Benefits } from '../components/section/Benefits';
import { Steps } from '../components/section/Steps';
import { Promo } from '../components/section/Promo';
import { Coverage } from '../components/section/Coverage';
import { Faq } from '../components/section/Faq';
import { Cta } from '../components/section/Cta';
import { Footer } from '../components/section/Footer';
import { faqData } from '../data/faq';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Differences />
        <Plans />
        <Benefits />
        <Steps />
        <Promo />
        <Coverage />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
