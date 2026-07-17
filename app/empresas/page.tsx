import { Navigation } from '../../components/section/Navigation';
import { HeroEmpresas } from '../../components/section/HeroEmpresas';
import { BenefitsEmpresas } from '../../components/section/BenefitsEmpresas';
import { PlansEmpresas } from '../../components/section/PlansEmpresas';
import { Footer } from '../../components/section/Footer';

export default function EmpresasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <HeroEmpresas />
        <PlansEmpresas />
        <BenefitsEmpresas />
      </main>
      <Footer />
    </div>
  );
}
