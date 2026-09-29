export const site = {
  name: 'Clínica Emcosalud',
  tagline: 'Sociedad Clínica Emcosalud',
  description:
    '',
  assets: {
    logo: '/images/logo-27.png',
    logofooter: '/images/logo-27-blanco.png',
    logoAlt: 'Clínica Emcosalud — Sociedad Clínica Emcosalud',
  },
  phones: {
    neiva: {
      label: '(608) 863- 0566',
      tel: '+576088630566',
    },
    bogota: {
      label: '350 214 2363',
      tel: '+573502142363',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100042840743577',
    instagram: 'https://www.instagram.com/clinicaemcosalud/',
    youtube: 'https://www.youtube.com/@grupoempresarialemcosalud8869',
  },
  legal: {
    privacyHub: '/politica-privacidad',
    dataTreatmentPolicyPdf:
      '/documents/POLITICA-TRATRAMIENTO-DE-DATOS-SCE-V1.pdf',
    authorizationFormPdf:
      '/documents/FORMULARIO-AUTORIZACION-TRATAMIENTO-DE-DATOS-CLINICA-EMCOSALUD (1).pdf',
    cookiesPolicyPdf:
      '/documents/POLITICA-USO-DE-COOKIES-Y-SITIO-WEB-INSTITUCIONAL.pdf',
  },
  regulators: [
    {
      name: 'Vigilado Supersalud',
      href: 'https://www.supersalud.gov.co/es-co/Paginas/Home.aspx',
      logo: '/images/footer/supersalud.png',
      width: 160,
      height: 48,
    },
    {
      name: 'Contraloría General de la República',
      href: 'https://www.contraloria.gov.co',
      logo: '/images/footer/contraloria.png',
      width: 200,
      height: 64,
    },
    {
      name: 'Fiduprevisora',
      href: 'https://www.fiduprevisora.com.co',
      logo: '/images/footer/fiduprevisora.png',
      width: 180,
      height: 60,
    },
  ],
} as const;

export const brand = {
  blue: '#0f8bd8',
  green: '#45c900',
} as const;
