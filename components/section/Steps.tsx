import { stepsData } from '../../data/steps';
import { AnimateOnScroll } from '../AnimateOnScroll';
import { StepCard } from '../StepCard';

export const Steps = () => {
  return (
    <section className="bg-primary py-20 lg:py-28 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <AnimateOnScroll variant="fade-up" className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Obtener tu internet en Las Peñas es muy fácil
          </h2>
          <p className="text-lg text-white/80">
            En solo 3 sencillos pasos estarás navegando a la velocidad de la fibra
            óptica.
          </p>
        </AnimateOnScroll>

        <div className="mx-auto grid max-w-sm grid-cols-1 gap-12 sm:max-w-none sm:grid-cols-3">
          {stepsData.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              variant="fade-up"
              delay={index * 0.12}
            >
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
