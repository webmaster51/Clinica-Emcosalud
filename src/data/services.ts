export interface ClinicService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // Espacio reservado para la imagen
  video: string;
  features?: string[];
  details?: Record<string, string>;
  extraContent?: {
    title: string;
    description: string;
    items?: string[];
  }[];
  specialNote?: string;
  examList?: { // <--- Actualizado aquí para aceptar objetos con nombre y url
    name: string;
    url: string;
  }[];
}

export const clinicServices: ClinicService[] = [
  {
    id: "cirugia",
    title: "Servicio de Cirugía Integral",
    subtitle: "Atención oportuna, tecnología avanzada y equipo humano excepcional",
    description: "Atención quirúrgica oportuna, segura y de calidad, respaldada por un equipo especializado y tecnología al servicio de nuestros pacientes.",
    image: "/images/servicios/cirugia-2.jpg", // Asigna aquí la ruta de la imagen
    features: [
      "Cirugía General y Especializada (Procedimientos programados y de urgencia)",
      "Servicio 24/7 disponible todos los días del año"
    ],
    details: {
      "Cobertura Integral": "Desde urgencias hasta cirugías complejas, sin interrupciones.",
      "Equipo Médico": "Cirujanos e intensivistas altamente capacitados y comprometidos con tu bienestar.",
      "Tecnología Avanzada": "3 quirófanos de última generación modernamente equipados.",
      "Disponibilidad 24/7": "Atención confiable y continua, a cualquier hora del día o de la noche."
    },
    specialNote: "Si eres usuario de la población docente del Magisterio y necesitas programar tu cirugía en la Sociedad Clínica Emcosalud, te orientamos paso a paso para que puedas acceder a nuestro servicio quirúrgico con la atención y el acompañamiento que mereces.",
    video: "https://www.youtube.com/embed/mUug_LQQAh8",
  },
  {
    id: "sala-de-partos",
    title: "Sala de Partos y Atención Obstétrica de Alto Riesgo",
    subtitle: "Cuidado integral para la madre y el bebé, 24/7",
    description: "Cuidamos a mamá y bebé con atención especializada, integral y segura, las 24 horas del día.",
    image: "/images/servicios/Sala-de-partos-2.webp", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Entorno cálido y seguro para una experiencia de parto memorable y tranquila.",
      "Atención humanizada con profesionales expertos en obstetricia y neonatología.",
      "Vigilancia y manejo especializado de embarazos de alto riesgo antes, durante y después del parto."
    ],
    extraContent: [
      {
        title: "Sala de Partos Principal",
        description: "Totalmente equipada para manejar partos de manera segura y humanizada, brindando el ambiente ideal para recibir al recién nacido."
      },
      {
        title: "6 áreas especializadas para Alto Riesgo Obstétrico",
        description: "Preparadas para monitorear y manejar con precisión a las pacientes con condiciones especiales durante el embarazo, parto y postparto con vigilancia constante."
      }
    ]
  },
  {
    id: "urgencias",
    title: "Servicio de Urgencias",
    subtitle: "Atención Integral y Especializada 24/7 — Atendemos todas las Urgencias de todas las EPS",
    description: "Cuando más lo necesitas, estamos aquí. Atención de Urgencias rápida, integral y especializada, las 24 horas.📞 863 2041 Ext. 1103",
    image: "/images/servicios/hospi.webp", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Triage de 20 minutos.",
      "Equipo multidisciplinario altamente capacitado (Médicos de urgencias, enfermeras jefes, auxiliares y personal de apoyo).",
      "Atención humanizada pensando en el bienestar físico y emocional del paciente y su familia.",
      "Protocolos científicos y técnicos para garantizar la mejor calidad."
    ]
  },
  {
    id: "hospitalizacion",
    title: "Servicios de Hospitalización",
    subtitle: "Un Ambiente Cálido y Profesional, 24/7",
    description: "Tu recuperación también merece bienestar. Disfruta de espacios cómodos y seguros, con Kit de Aseo Personal durante tu estancia.",
    image: "/images/servicios/hospitalizacion.JPG", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Habitaciones pensadas para tu confort y tranquilidad.",
      "Atención profesional permanente en cada piso.",
      "Médico General y Especialista Tratante para seguimiento clínico oportuno.",
      "Enfermera Jefe y auxiliares de enfermería para un cuidado directo y cercano."
    ]
  },
  {
    id: "uci-neonatal",
    title: "Unidad Neonatal",
    subtitle: "Cuidado Óptimo para Recién Nacidos, 24/7",
    description: "Cuidado especializado para los recién nacidos, en un entorno seguro y cálido, con atención de calidad las 24 horas del día.",
    image: "/images/servicios/neo.png", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Atención integral, personalizada y humanizada para cada recién nacido.",
      "Tecnología avanzada para el manejo de condiciones complejas y soporte vital.",
      "Neonatólogos, pediatras, enfermeras especializadas en cuidado neonatal y terapeutas respiratorios.",
      "Vigilancia constante y soporte vital avanzado."
    ]
  },
  {
    id: "uci",
    title: "Unidad de Cuidado Crítico (UCI)",
    subtitle: "Soporte Vital y Atención Especializada 24/7",
    description: "Atención integral y especializada para situaciones de alta complejidad, con tecnología avanzada y un equipo humano altamente calificado.",
    image: "/images/servicios/uci.JPG", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Soporte vital avanzado y continuo (Ventilación mecánica avanzada, monitoreo hemodinámico permanente).",
      "Intensivistas y médicos especialistas expertos en pacientes críticos.",
      "Enfermeras jefes y auxiliares con amplia experiencia.",
      "Terapias especializadas para condiciones complejas en un entorno controlado y seguro."
    ]
  },
  {
    id: "diagnostico-por-imagenes",
    title: "Diagnóstico por Imágenes",
    subtitle: "Precisión Tecnológica y Calidez Humana",
    description: "Unimos lo mejor de la tecnología de vanguardia con un trato cálido y humano para ofrecerte resultados claros, precisos y oportunos en cada estudio.",
    image: "/images/servicios/imagenes.png", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Radiología Convencional y Mamografía.",
      "Tomografía Computarizada (TC).",
      "Resonancia Magnética (RM) sin radiación ionizante.",
      "Intervencionismo Guiado por Imagen."
    ],
    examList: [
      { name: "Rx columna lumbosacra, dorso lumbar, sacro y coxis", url: "/documents/pexamenes/rx-columna.pdf" },
      { name: "Ecografía de vías urinarias", url: "/documents/pexamenes/ECOGRAFIA-DE-VIAS-URINARIAS-V2.pdf" },
      { name: "Tomografía contrastada", url: "/documents/pexamenes/TOMOGRAFIA-CONTRASTADA.pdf" },
      { name: "Test de escoliosis", url: "/documents/pexamenes/TEST-DE-ESCOLIOSIS.pdf" },
      { name: "Resonancia contrastada", url: "/documents/pexamenes/TOMOGRAFIA-CONTRASTADA.pdf" },
      { name: "Ecografía de próstata transrectal", url: "/documents/pexamenes/ECOGRAFIA-DE-PROSTATA-TRANSRECTAL-V2.pdf" },
      { name: "Ecografía de abdomen total", url: "/documents/pexamenes/ECOGRAFIA-DE-ABDOMEN-TOTAL-V2.pdf" },
      { name: "Ecografía mamaria", url: "/documents/pexamenes/ECOGRAFIA-DE-MAMARIA-V2.pdf" },
      { name: "Biopsia de tiroides", url: "/documents/pexamenes/BIOPSIA-DE-TIROIDES-V2.pdf" },
      { name: "Biopsia de tejidos blandos o músculo", url: "/documents/pexamenes/BIOPSIA-DE-TEJIDOS-BLANDOS-O-MUSCULO.pdf" },
      { name: "Biopsia de próstata transrectal", url: "/documents/pexamenes/BIOPSIA-DE-PROSTATA-TRANSRECTAL-V2.pdf" }
    ]
  },
  {
    id: "servicio-farmaceutico",
    title: "Servicio Farmacéutico",
    subtitle: "Dispensación Oportuna y Gestión del Riesgo",
    description: "Medicamentos seguros y oportunos, con procesos confiables que cuidan de ti en cada detalle.",
    image: "/images/servicios/farmacia.jpg", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Optimización del inventario para disponibilidad constante.",
      "Minimización de errores mediante estrictos procesos de verificación y control.",
      "Garantía de la seguridad del paciente monitorizando reacciones adversas.",
      "Trazabilidad completa desde la adquisición hasta la entrega final."
    ]
  },
  {
    id: "laboratorio-clinico",
    title: "Laboratorio Clínico Especializado",
    subtitle: "Precisión y Confiabilidad para tu Diagnóstico",
    description: "Equipado con tecnología de vanguardia y procesos de calidad que garantizan resultados confiables y oportunos para que tu médico tome las mejores decisiones.",
    image: "/images/servicios/laboratorio.JPG", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Resultados precisos y rápidos.",
      "Procesos automatizados para mayor eficiencia y menor margen de error.",
      "Evaluaciones de calidad externas para mantener estándares inquebrantables.",
      "Sistema automatizado que agiliza el procesamiento de muestras."
    ]
  },
  {
    id: "transporte-asistencial",
    title: "Transporte Asistencial",
    subtitle: "Ambulancias Básicas y Medicalizadas, 24/7 (Tel: 3114934631 - 3115318396)",
    description: "Servicio de transporte asistencial equipado con ambulancias básicas y medicalizadas, diseñado para ofrecer un traslado seguro, eficiente y especializado en cualquier situación.",
    image: "/images/servicios/transporte.png", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Disponibilidad las 24 horas, los 7 días de la semana.",
      "Flota moderna con 7 ambulancias operativas para traslados programados y emergencias.",
      "Cobertura en todo el territorio nacional.",
      "Personal de salud a bordo con monitoreo permanente y soporte asistencial."
    ]
  },
  {
    id: "vacunacion",
    title: "Vacunación",
    subtitle: "Protegiendo tu salud en cada etapa de la vida",
    description: "Contamos con dos áreas de vacunación especializadas, preparadas para brindar una atención segura y oportuna, de acuerdo con las necesidades de nuestros usuarios.",
    image: "/images/servicios/vacuna.png", // Asigna aquí la ruta de la imagen
    video:'',
    extraContent: [
      {
        title: "Área del Programa Ampliado de Inmunizaciones (PAI)",
        description: "Dedicada a la vacunación sistemática según ciclos de vida (desde la infancia hasta la adultez) para prevenir múltiples enfermedades."
      },
      {
        title: "Área de Vacunación contra la Fiebre Amarilla",
        description: "Espacio exclusivo para responder a la alta demanda y campañas de inmunización con acceso rápido y seguro."
      }
    ]
  },
  {
    id: "consulta-externa",
    title: "Consulta Externa",
    subtitle: "Confort y privacidad para tu atención",
    description: "Unidad de Consulta Externa diseñada pensando en tu comodidad, privacidad y en la calidad de tu atención con un ambiente profesional y acogedor.",
    image: "/images/servicios/consulta-externa-1.png", // Asigna aquí la ruta de la imagen
    video:'',
    features: [
      "Consultorios modernos con área mínima de 10 m², lavamanos y aire acondicionado.",
      "Espacios de privacidad especial para Urología, Ginecobstetricia y Salud Sexual y Reproductiva con baños privados integrados.",
      "Salas de espera amplias, iluminadas y ventiladas naturalmente."
    ]
  }
];