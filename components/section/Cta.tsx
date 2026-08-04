import Link from 'next/link';
import { contactInfo } from '../../data/navigation';
import { AnimateOnScroll } from '../AnimateOnScroll';

export const Cta = () => {
  return (
    <section className="bg-primary py-16 lg:py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll
          variant="fade-up"
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-xl flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Cambia a un internet que sí responde.
            </h2>
            <p className="text-lg text-white/80">
              Únete a las familias y negocios de Las Peñas que quieren una
              conexión estable y un soporte técnico de verdad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola!%20Quiero%20contratar%20el%20servicio%20de%20internet%20de%20fibra%20óptica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary border-none hover:bg-neutral-100 font-semibold rounded-2xl shadow-xl shadow-black/10 px-8 py-4 cursor-pointer transition-all duration-200"
            >
              Hablar por WhatsApp
            </Link>
            <Link
              href="#planes"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-semibold rounded-2xl px-8 py-4 transition-all duration-200 cursor-pointer"
            >
              Ver Planes
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
