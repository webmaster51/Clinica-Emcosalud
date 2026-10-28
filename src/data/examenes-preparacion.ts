
export type CitasDepartment = 'Imageniologia';

export type CitasDepartmentOption = {
  id: CitasDepartment;
  label: string;
  href: string;
};

export const citasDepartmentOptions: CitasDepartmentOption[] = [
  { id: 'Imageniologia', label: 'Imagenología', href: '/citas-imageniologia' }
];

export const citasDocumentTypes = [
  'CC',
  'TI',
  'RC',
  'PASAPORTE',
  'DOCUMENTO DE EXTRANJERIA',
] as const;

export function getCitasHref(department: CitasDepartment): string {
  return department === 'Imageniologia' ? '/citas-imageniologia' : '/citas-tolima';
}

export const citasDirectAccessServices: Record<CitasDepartment, string[]> = {
  Imageniologia: [
    'Imageniologia'
  ]
};
export const preparacionExamenesMeta = {
  title: 'Preparación y Recomendaciones para Exámenes | Sociedad Clínica EMCOSALUD',
  description:
    'Consulta las instrucciones y recomendaciones necesarias para la realización de exámenes de diagnóstico e imagenología en Sociedad Clínica EMCOSALUD.',
  pageTitle: 'Cita Imagenología',
};

export interface ExamenItem {
  id: string;
  title: string;
  icon: string;
  pdfHref?: string;
  department?: CitasDepartment;
}

export const examenesNotice = {
  title: 'Preparación y Recomendaciones para Exámenes',
  subtitle: 'Guía Importante para el Usuario',
  intro:
    'Querido usuario, si vas a realizarte alguno de estos exámenes, consulta las recomendaciones detalladas antes de asistir a tu cita haciendo clic en el botón correspondiente.',
  warning:
    'Sigue estrictamente las indicaciones de ayuno, preparación previa y documentación requerida para evitar reprogramaciones en tu procedimiento.',
};

export const examenesHighlights = [
  {
    icon: 'clock',
    title: 'Llegada Anticipada',
    text: 'Preséntate con 20-30 minutos de anticipación para el registro.',
  },
  {
    icon: 'document-text',
    title: 'Orden Médica',
    text: 'Trae tu documento de identidad, orden vigente y autorizaciones.',
  },
  {
    icon: 'shield-check',
    title: 'Seguridad y Salud',
    text: 'Informa si estás embarazada o posees prótesis/metales en el cuerpo.',
  },
];

export const examenesList: ExamenItem[] = [
  { id: 'rx-columna', title: 'Rx columna lumbosacra, dorso lumbar, sacro y coxis', icon: 'document', pdfHref: '/docs/preparacion/rx-columna.pdf', department: 'Imageniologia' },
  { id: 'eco-vias-urinarias', title: 'Ecografía de vías urinarias', icon: 'document', pdfHref: '/docs/preparacion/eco-vias-urinarias.pdf', department: 'Imageniologia' },
  { id: 'tomografia-contrastada', title: 'Tomografía contrastada', icon: 'document', pdfHref: '/docs/preparacion/tomografia-contrastada.pdf', department: 'Imageniologia' },
  { id: 'test-escoliosis', title: 'Test de escoliosis', icon: 'document', pdfHref: '/docs/preparacion/test-escoliosis.pdf', department: 'Imageniologia' },
  { id: 'resonancia-contrastada', title: 'Resonancia contrastada', icon: 'document', pdfHref: '/docs/preparacion/resonancia-contrastada.pdf', department: 'Imageniologia' },
  { id: 'eco-prostata-transrectal', title: 'Ecografía de próstata transrectal', icon: 'document', pdfHref: '/docs/preparacion/eco-prostata-transrectal.pdf', department: 'Imageniologia' },
  { id: 'eco-abdomen-total', title: 'Ecografía de abdomen total', icon: 'document', pdfHref: '/docs/preparacion/eco-abdomen-total.pdf', department: 'Imageniologia' },
  { id: 'eco-mamaria', title: 'Ecografía mamaria', icon: 'document', pdfHref: '/docs/preparacion/eco-mamaria.pdf', department: 'Imageniologia' },
  { id: 'biopsia-tiroides', title: 'Biopsia de tiroides', icon: 'document', pdfHref: '/docs/preparacion/biopsia-tiroides.pdf', department: 'Imageniologia' },
  { id: 'biopsia-tejidos-blandos', title: 'Biopsia de tejidos blandos o músculo', icon: 'document', pdfHref: '/docs/preparacion/biopsia-tejidos-blandos.pdf', department: 'Imageniologia' },
  { id: 'biopsia-prostata-transrectal', title: 'Biopsia de próstata transrectal', icon: 'document', pdfHref: '/docs/preparacion/biopsia-prostata-transrectal.pdf', department: 'Imageniologia' },
];

export const examenesGeneralRecommendations = [
  'Si requieres ayuno, confirma el número exacto de horas según el examen.',
  'En exámenes con contraste, trae los resultados recientes de creatinina y función renal.',
  'Si tomas medicamentos de uso diario, consulta previamente con tu médico si debes suspenderlos.',
  'Usa ropa cómoda y sin elementos metálicos para exámenes de radiología o resonancia.',
];