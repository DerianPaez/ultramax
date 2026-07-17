export type FaqItem = {
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    question: '¿Cuánto tiempo toma la instalación?',
    answer: 'La instalación se realiza en un plazo máximo de 24 horas hábiles después de validar tu cobertura y agendar la cita con nuestro equipo técnico.'
  },
  {
    question: '¿Hay plazos forzosos o permanencia mínima?',
    answer: 'No, en FiberNet no tenemos contratos de permanencia mínima o forzosa. Puedes cancelar tu servicio o cambiar de plan cuando lo desees sin penalizaciones.'
  },
  {
    question: '¿Cómo puedo pagar mi mensualidad?',
    answer: 'Puedes pagar de forma cómoda a través de transferencia bancaria, depósito, tarjetas de crédito/débito en nuestro portal web, o en puntos de pago autorizados en todo el país.'
  }
];
