export type StepItem = {
  number: number;
  title: string;
  description: string;
};

export const stepsData: StepItem[] = [
  {
    number: 1,
    title: 'Elige tu Plan',
    description: 'Revisa nuestras opciones y selecciona la que mejor se adapte a tu hogar.'
  },
  {
    number: 2,
    title: 'Escríbenos',
    description: 'Envíanos tu ubicación por WhatsApp para confirmar cobertura inmediata.'
  },
  {
    number: 3,
    title: 'Instalamos',
    description: 'Agendamos tu visita y en menos de 24 horas estarás navegando a máxima velocidad.'
  }
];
