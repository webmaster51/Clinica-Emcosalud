import type { IconName, QuickAccessItem } from './icons';
import { buildAtencionUsuarioNavChildren } from './atencion-usuario';

export type NavLink = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: IconName;
  /** Submenú (p. ej. Huila → municipios bajo Sedes). */
  children?: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

/** Servicios → sedes, medicamentos, trámites y citas (). */
export function buildServiciosNavChildren(): NavLink[] {
  return [
    { label: 'Quiénes somos', 
      href: '/nosotros' 
    },
    {
      label: 'Transparencia a Nuestro Deber',
      children: buildTransparenciaNavChildren(),
    },
    { label: 'Directivos', 
      href: '/directivos' 
    },
    { label: 'Nuestra Historia', 
      href: '/nuestra-historia' 
    },
    
  ];
}

export function buildTransparenciaNavChildren(): NavLink[] {
  return [
    {
      label: 'Descargar tu Certificado de Retenciones',
      href: '/documentos' 
    },
    {
      label: 'Estados financieros',
      href: '/estados-financieros'
    },
    { label: 'Seguridad y Salud del Trabajo', 
      href: '/seguridad-salud-del-trabajo' 
    },
    { label: 'Mecanismos de Contacto', 
      href: '/mecanismos-contacto' 
    },
    { label: 'SARLAFT', 
      href: '/sarlaft' 
    },
    { label: 'SICOF', 
      href: '/sicof' 
    },
    
  ];
}

export function buildServicioNavChildren(): NavLink[] {
  return [
    {
      label: 'Cirugía',
      href: '/servicios/cirugia' 
    },
    {
      label: 'Sala de Partos',
      href: '/servicios/sala-de-partos' 
    },
    {
      label: 'Urgencias',
      href: '/servicios/urgencias' 
    },
    {
      label: 'Hospitalización',
      href: '/servicios/hospitalizacion' 
    },
    {
      label: 'Unidad de cuidados intensivos neonatal',
      href: '/servicios/uci-neonatal' 
    },
    {
      label: 'Unidad de cuidados intensivos',
      href: '/servicios/uci' 
    },
    {
      label: 'Radiologías e imágenes diagnósticas',
      href: '/servicios/diagnostico-por-imagenes' 
    },
    {
      label: 'Servicio Farmacéutico',
      href: '/servicios/servicio-farmaceutico' 
    },
    {
      label: 'Laboratorio Clínico',
      href: '/servicios/laboratorio-clinico' 
    },
    {
      label: 'Transporte Asistencial',
      href: '/servicios/transporte-asistencial' 
    },
    {
      label: 'Vacunación',
      href: '/servicios/vacunacion' 
    },
    {
      label: 'Consulta Eterna',
      href: '/servicios/consulta-externa' 
    },  
    
  ];
}

export function buildCasoNavChildren(): NavLink[] {
  return [
    {
      label: 'Caso de Investigación',
      href: '/caso-de-investigacion' 
    },
        
  ];
}
export function buildConvenioNavChildren(): NavLink[] {
  return [
    {
      label: 'Magisterio',
      href: 'http://emcosalud.com.co' 
    },
    {
      label: 'Ferrocarriles',
      href: '/ferrocarriles' 
    },    
  ];
}



/** Estructura base alineada con emcosalud.com.co (expandible con secciones de clínica). */
export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Nosotros',
    children: buildServiciosNavChildren (),
  },
  {
    label: 'Servicios',
    href: '/servicios',
    children: buildServicioNavChildren(),
  },
  {
    label: 'Atención al Usuario',
    children: buildAtencionUsuarioNavChildren(),
  },
  { 
    label: 'Clínica', 
    children: buildCasoNavChildren(), 
  },
  { label: 'Contacto', href: '/contacto' },
  {
    label: 'Convenio',
    children: buildConvenioNavChildren(),
  },
  { label: 'Blog', href: '/blog' },
  
];

export const quickAccessLinks: QuickAccessItem[] = [
  {
    label: 'Usuarios Ferrocarriles',
    href: '/ferrocarriles',
    external: true,
    icon: 'hospital',
    description: 'Información, sedes, servicios Usuarios Ferrocarriles',
  },
  {
    label: 'Portafolio de servicios',
    href: '/documents/PORTAFOLIO-DE-SERVICIOS-SOCIEDAD-CLINICA-EMCOSALUD.pdf',
    external: true,
    icon: 'stethoscope',
    description: 'Conoce todos nuestros servicios y más',
  },
  {
    label: 'Consulta de documentos',
    href: '/documentos',
    icon: 'document',
    description: 'Descarga tu Certificado de Retenciones',
  },
  {
    label: 'Consulta de resultados',
    href: 'http://emcolab.vpls.emcosalud.net:38080/EclipseWeb/login',
    external: true,
    icon: 'lab',
    description: 'Portal de resultados de laboratorio clínico',
  },
  {
    label: 'Estados financieros',
    href: '/estados-financieros',
    icon: 'chart',
    description: 'Transparencia institucional',
  },
  {
    label: 'Resultados de Imágenes Diagnósticas',
    href: 'https://lumierdigital.com:8443/paciente/login.lu?ipsId=144&token=mnIC8Si9mp',
    external: true,
    icon: 'external',
    description: 'Portal de resultados de Imágenes',
  },
  {
    label: 'Instructivo Preparación Examenes ',
    href: '/servicios/diagnostico-por-imagenes',
    icon: 'document',
    description: 'Preparación para Examanes',
  },
  
];

export const footerNavigation = {
  institucional: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Estados financieros', href: '/estados-financieros' },
    { label: 'SARLAFT', href: '/sarlaft' },
    { label: 'SICOF', href: '/sicof' },
  ],
  servicios: [
    { label: 'Servicios médicos', href: '/servicios' },
    { label: 'Cirugía', href: '/cirugia' },
    { label: 'PQR', href: '/pqrsf' },
    { label: 'Blog', href: '/blog' },
  ],
  enlaces: [
    { label: 'Ferrocarriles', href: '/ferrocarriles', external: true },
    { label: 'Emcosalud', href: 'https://emcosalud.com.co', external: true },
    { label: 'Emcofarma', href: 'https://emcofarma.com', external: true },
    { label: 'Escuela Emcosalud', href: 'https://escuelaemcosalud.com', external: true },
  ],
} as const;
