// ============================================================================
//  ÚNICO ARCHIVO DE CONTENIDO  —  edita aquí para cambiar la web
//  ----------------------------------------------------------------------------
//  - Datos de contacto, oficina y redes: bloque `config`.
//  - Todos los textos en inglés y español: bloque `content` (en / es).
//  No necesitas tocar los componentes para cambiar copys, correo o WhatsApp.
// ============================================================================

export type Lang = "en" | "es";

export const config = {
  brand: "Unroasted Green Coffee",
  // URL canónica del sitio (sin barra final). Fuente única para metadata, robots y sitemap.
  siteUrl: "https://www.unroastedgreencoffee.com",
  email: "josealbarran@unroastedgreencoffee.com",
  whatsapp: {
    display: "+1 407 483 6794",
    // Solo dígitos, para el enlace wa.me
    number: "14074836794",
  },
  office: {
    street: "Calle Preciados",
    city: "Madrid",
    postalCode: "28004",
    country: "Spain",
  },
} as const;

type SectionContent = {
  nav: { about: string; offer: string; locations: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: { title: string; body: string };
  offer: {
    title: string;
    specialty: { title: string; body: string };
    commercial: { title: string; body: string };
  };
  origins: {
    title: string;
    intro: string;
    disclaimer: string;
    specLabels: {
      variety: string;
      process: string;
      screen: string;
      score: string;
      price: string;
      availability: string;
    };
    // Filas de ejemplo — sustituir por lotes reales.
    lots: {
      origin: string;
      variety: string;
      process: string;
      screen: string;
      score: string;
      price: string;
      availability: string;
    }[];
  };
  terms: {
    title: string;
    intro: string;
    // MOQ, política de muestras, lead time, empaque, incoterms…
    items: { label: string; value: string }[];
  };
  locations: { title: string; intro: string; officeLabel: string };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    whatsappLabel: string;
  };
  footer: { rights: string };
};

export const content: Record<Lang, SectionContent> = {
  en: {
    nav: {
      about: "About",
      offer: "Coffee",
      locations: "Locations",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Green coffee supplier",
      title: "Specialty & commercial green coffee, sourced with care",
      subtitle:
        "We supply unroasted green coffee beans to roasters and buyers — clean lots, reliable quality and direct, honest communication.",
      ctaPrimary: "Contact us",
      ctaSecondary: "WhatsApp",
    },
    about: {
      title: "About us",
      body: "Unroasted Green Coffee is a green coffee supplier. We work with specialty and commercial coffee, connecting origin with roasters and buyers who care about consistency, traceability and a straightforward relationship.",
    },
    offer: {
      title: "What we offer",
      specialty: {
        title: "Specialty coffee",
        body: "Selected lots with cup quality and traceability, chosen for roasters looking for distinctive, high-scoring profiles.",
      },
      commercial: {
        title: "Commercial coffee",
        body: "Reliable, consistent volume for everyday blends and larger operations, with dependable supply and fair pricing.",
      },
    },
    origins: {
      title: "Available lots",
      intro:
        "A snapshot of origins and specs we typically offer. Ask us for the current spot list and fresh samples.",
      disclaimer:
        "Example data — replace with your real lots, scores and prices before publishing.",
      specLabels: {
        variety: "Variety",
        process: "Process",
        screen: "Screen",
        score: "Cup score",
        price: "Price (FOB)",
        availability: "Availability",
      },
      lots: [
        {
          origin: "Colombia · Huila",
          variety: "Caturra / Castillo",
          process: "Washed",
          screen: "15/16",
          score: "86",
          price: "On request",
          availability: "In stock",
        },
        {
          origin: "Brazil · Cerrado",
          variety: "Mundo Novo",
          process: "Natural",
          screen: "17/18",
          score: "83",
          price: "On request",
          availability: "Spot",
        },
        {
          origin: "Ethiopia · Guji",
          variety: "Heirloom",
          process: "Washed",
          screen: "14/15",
          score: "87",
          price: "On request",
          availability: "Pre-order",
        },
      ],
    },
    terms: {
      title: "How to buy",
      intro: "Simple, transparent terms. Tell us your volume and we'll tailor an offer.",
      items: [
        { label: "Samples", value: "100 g samples on request (placeholder policy)" },
        { label: "Minimum order", value: "1 bag / 1 pallet — to be defined" },
        { label: "Lead time", value: "X–Y days from confirmation — to be defined" },
        { label: "Packaging", value: "GrainPro / jute 30–69 kg — to be defined" },
        { label: "Terms", value: "FOB / FCA — Incoterms to be defined" },
      ],
    },
    locations: {
      title: "Where we are",
      intro: "Reach us at our office.",
      officeLabel: "Office",
    },
    contact: {
      title: "Let's talk coffee",
      body: "Tell us what you're looking for and we'll get back to you.",
      emailLabel: "Email us",
      whatsappLabel: "Chat on WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      offer: "Café",
      locations: "Ubicación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Proveedor de café verde",
      title: "Café verde de especialidad y comercial, con trazabilidad",
      subtitle:
        "Proveemos café verde en grano sin tostar a tostadores y compradores — lotes limpios, calidad confiable y comunicación directa y honesta.",
      ctaPrimary: "Contáctanos",
      ctaSecondary: "WhatsApp",
    },
    about: {
      title: "Quiénes somos",
      body: "Unroasted Green Coffee es un proveedor de café verde en grano. Trabajamos café de especialidad y comercial, conectando el origen con tostadores y compradores que valoran la consistencia, la trazabilidad y una relación sencilla.",
    },
    offer: {
      title: "Qué ofrecemos",
      specialty: {
        title: "Café de especialidad",
        body: "Lotes seleccionados con calidad de taza y trazabilidad, pensados para tostadores que buscan perfiles distintivos y de alta puntuación.",
      },
      commercial: {
        title: "Café comercial",
        body: "Volumen confiable y consistente para mezclas del día a día y operaciones más grandes, con suministro estable y precios justos.",
      },
    },
    origins: {
      title: "Lotes disponibles",
      intro:
        "Una muestra de orígenes y especificaciones que solemos ofrecer. Pídenos la lista spot actual y muestras frescas.",
      disclaimer:
        "Datos de ejemplo — sustituye por tus lotes, puntuaciones y precios reales antes de publicar.",
      specLabels: {
        variety: "Variedad",
        process: "Proceso",
        screen: "Criba",
        score: "Puntuación",
        price: "Precio (FOB)",
        availability: "Disponibilidad",
      },
      lots: [
        {
          origin: "Colombia · Huila",
          variety: "Caturra / Castillo",
          process: "Lavado",
          screen: "15/16",
          score: "86",
          price: "A consultar",
          availability: "En stock",
        },
        {
          origin: "Brasil · Cerrado",
          variety: "Mundo Novo",
          process: "Natural",
          screen: "17/18",
          score: "83",
          price: "A consultar",
          availability: "Spot",
        },
        {
          origin: "Etiopía · Guji",
          variety: "Heirloom",
          process: "Lavado",
          screen: "14/15",
          score: "87",
          price: "A consultar",
          availability: "Bajo pedido",
        },
      ],
    },
    terms: {
      title: "Cómo comprar",
      intro: "Condiciones sencillas y transparentes. Dinos tu volumen y ajustamos una oferta.",
      items: [
        { label: "Muestras", value: "Muestras de 100 g a petición (política placeholder)" },
        { label: "Pedido mínimo", value: "1 saco / 1 palé — por definir" },
        { label: "Plazo de entrega", value: "X–Y días desde la confirmación — por definir" },
        { label: "Empaque", value: "GrainPro / yute 30–69 kg — por definir" },
        { label: "Condiciones", value: "FOB / FCA — Incoterms por definir" },
      ],
    },
    locations: {
      title: "Dónde estamos",
      intro: "Contáctanos en nuestra oficina.",
      officeLabel: "Oficina",
    },
    contact: {
      title: "Hablemos de café",
      body: "Cuéntanos qué buscas y te respondemos.",
      emailLabel: "Escríbenos",
      whatsappLabel: "Escríbenos por WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};
