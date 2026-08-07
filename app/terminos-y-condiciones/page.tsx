export const metadata = {
  title: 'Términos y Condiciones | UltraMax',
  description: 'Términos y condiciones de uso del sitio web de UltraMax.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-muted">
            Última actualización: Agosto de 2026 — UltraMax
          </p>
        </div>

        <div className="flex flex-col gap-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>Bienvenido al sitio web de UltraMax.</p>
          <p>
            Al acceder y utilizar este sitio web, aceptas los presentes Términos
            y Condiciones. Si no estás de acuerdo con ellos, te recomendamos no
            utilizar este sitio.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">1. Objeto del sitio</h2>
            <p>
              Este sitio web tiene como finalidad brindar información sobre los
              servicios de internet ofrecidos por UltraMax, así como facilitar
              el contacto con personas interesadas en contratar nuestros
              servicios.
            </p>
            <p>
              La información publicada es de carácter informativo y podrá ser
              modificada sin previo aviso.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">2. Uso del sitio</h2>
            <p>
              El usuario se compromete a utilizar este sitio de manera
              responsable y conforme a la legislación aplicable.
            </p>
            <p>Queda prohibido:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Utilizar el sitio con fines ilícitos.</li>
              <li>Intentar afectar el funcionamiento del sitio web.</li>
              <li>Copiar o reproducir el contenido sin autorización.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">
              3. Solicitudes de información
            </h2>
            <p>
              Los formularios de contacto y los enlaces a WhatsApp tienen como
              único propósito facilitar la comunicación entre el usuario y
              UltraMax.
            </p>
            <p>
              El envío de una solicitud de contacto no constituye la
              contratación automática de ningún servicio.
            </p>
            <p>
              Toda solicitud estará sujeta a disponibilidad de cobertura y
              validación por parte de nuestro equipo.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">
              4. Cobertura del servicio
            </h2>
            <p>
              Nuestros servicios están disponibles únicamente en las zonas
              donde exista cobertura de nuestra red.
            </p>
            <p>
              La disponibilidad será confirmada antes de cualquier proceso de
              contratación.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">
              5. Información publicada
            </h2>
            <p>
              Nos esforzamos por mantener la información de este sitio
              actualizada y precisa. Sin embargo, UltraMax no garantiza que toda
              la información permanezca libre de errores o que esté disponible de
              forma permanente.
            </p>
            <p>
              Las características, planes, promociones y precios publicados
              podrán modificarse sin previo aviso.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">
              6. Propiedad intelectual
            </h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, imágenes,
              logotipos, diseño e identidad visual, pertenece a UltraMax o se
              utiliza con la autorización correspondiente.
            </p>
            <p>
              Queda prohibida su reproducción o utilización sin autorización
              previa.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">
              7. Enlaces externos
            </h2>
            <p>
              Este sitio puede contener enlaces a servicios de terceros, como
              WhatsApp o Google Maps.
            </p>
            <p>
              UltraMax no es responsable del contenido ni de las políticas de
              privacidad de dichos servicios externos.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">8. Modificaciones</h2>
            <p>
              UltraMax podrá actualizar estos Términos y Condiciones cuando sea
              necesario.
            </p>
            <p>La versión vigente estará siempre disponible en esta página.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-dark">9. Contacto</h2>
            <p>
              Si tienes alguna consulta relacionada con estos Términos y
              Condiciones, puedes comunicarte con nosotros a través de nuestros
              canales oficiales de atención.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
