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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
