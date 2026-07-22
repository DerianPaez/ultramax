import { Navigation } from '../../components/section/Navigation';
import { BusinessHero } from '../../components/section/BusinessHero';
import { BusinessPlans } from '../../components/section/BusinessPlans';
import { BusinessBenefits } from '../../components/section/BusinessBenefits';
import { Footer } from '../../components/section/Footer';

export default function EmpresasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <BusinessHero />
        <BusinessPlans />
        <BusinessBenefits />
      </main>
      <Footer />
    </div>
  );
}
