import { Navigation } from '../../components/section/Navigation';
import { Footer } from '../../components/section/Footer';

export const metadata = {
  title: 'Políticas de Privacidad | UltraMax',
  description: 'Políticas de privacidad y protección de información de UltraMax.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="text-sm text-muted">
              Última actualización: Agosto de 2026 — UltraMax
            </p>
          </div>

          <div className="flex flex-col gap-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              En UltraMax, respetamos la privacidad de nuestros visitantes y estamos comprometidos con proteger la información que puedan compartir con nosotros.
            </p>
            <p>
              Esta Política de Privacidad describe cómo tratamos la información relacionada con el uso de este sitio web.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-dark">1. Información que recopilamos</h2>
              <p>
                Actualmente, nuestro sitio web tiene únicamente fines informativos.
              </p>
              <p>
                No solicitamos el registro de usuarios ni recopilamos información personal directamente a través del sitio web.
              </p>
              <p>
                Si decides comunicarte con nosotros mediante WhatsApp u otro medio de contacto, la información que compartas será proporcionada voluntariamente por ti.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-dark">2. Uso de la información</h2>
              <p>
                La información que decidas compartir con nosotros podrá utilizarse únicamente para:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Responder tus consultas.</li>
                <li>Brindarte información sobre nuestros servicios.</li>
                <li>Verificar la cobertura en tu ubicación.</li>
                <li>Coordinar una posible instalación.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-dark">3. Compartición de información</h2>
              <p>
                UltraMax no vende, alquila ni comercializa la información personal que los usuarios compartan con nosotros.
              </p>
              <p>
                Solo podremos divulgar información cuando exista una obligación legal.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-dark">4. Enlaces a terceros</h2>
              <p>
                Este sitio puede contener enlaces a servicios externos, como WhatsApp o Google Maps.
              </p>
              <p>
                El uso de estos servicios se encuentra sujeto a las políticas de privacidad de sus respectivos proveedores.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-dark">5. Cambios en esta política</h2>
              <p>
                Podremos actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios en nuestros servicios o en la legislación aplicable.
              </p>
              <p>
                La versión más reciente estará siempre disponible en esta página.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-dark">6. Contacto</h2>
              <p>
                Si tienes alguna consulta relacionada con esta Política de Privacidad, puedes comunicarte con nosotros a través de nuestros canales oficiales de atención.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
