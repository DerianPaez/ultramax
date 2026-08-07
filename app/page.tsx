import { Hero } from '../components/section/Hero';
import { Differences } from '../components/section/Differences';
import { Plans } from '../components/section/Plans';
import { Benefits } from '../components/section/Benefits';
import { Steps } from '../components/section/Steps';
import { Promo } from '../components/section/Promo';
import { Coverage } from '../components/section/Coverage';
import { Faq } from '../components/section/Faq';
import { Cta } from '../components/section/Cta';
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Differences />
      <Plans />
      <Benefits />
      <Steps />
      <Promo />
      <Coverage />
      <Faq />
      <Cta />
    </>
  );
}
