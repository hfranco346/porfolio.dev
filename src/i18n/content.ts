import type { Lang } from "./ui";

/**
 * Un párrafo se modela como una lista de segmentos en vez de un string con
 * HTML embebido: así el traductor sólo toca texto y nunca puede romper el
 * marcado.
 */
export interface Segment {
  text: string;
  strong?: boolean;
}

export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectText {
  title: string;
  description: string;
}

/** Ids de proyecto. Los datos no traducibles (imagen, link, tags) viven en `Projects.astro`. */
export type ProjectId =
  | "mealmixer"
  | "aiPrReviewer"
  | "todoodle"
  | "nearGps"
  | "nearVgps"
  | "youfibre"
  | "typeIt";

interface LocaleContent {
  hero: {
    badge: string;
    greeting: string;
    intro: Segment[];
    getInTouch: string;
    profileAlt: string;
  };
  experience: ExperienceEntry[];
  projects: Record<ProjectId, ProjectText>;
  aboutMe: {
    profileAlt: string;
    paragraphs: Segment[][];
  };
}

export const content: Record<Lang, LocaleContent> = {
  en: {
    hero: {
      badge: "Working at BairesDev",
      greeting: "Hey, I'm Hender",
      intro: [
        { text: "+8 years of experience. " },
        { text: "Software engineer and AI enthusiast", strong: true },
        {
          text: " From Siguatepeque, Honduras 🇭🇳. I love to create software that solve my personal needs.",
        },
      ],
      getInTouch: "Get in touch",
      profileAlt: "Henderson Franco",
    },
    experience: [
      {
        date: "2022 - Nowadays...",
        title: "Senior Mobile Developer at BairesDev",
        company: "BairesDev",
        description:
          "Developing mobile applications at BairesDev with Flutter. Currently part of the team building the internal app for DutchBros Coffee, the second largest coffee chain in the United States, used to manage processes, content and events across both company-owned stores and franchises. Implemented push notifications, deep links and light/dark theming, along with a chatbot backed by a RAG system that answers from the company's own internal documentation. Previously led development of a customer-facing broadband app for a UK-based company, where I implemented a real-time customer support chat over WebSockets, focused on intuitive user experiences with responsive design and seamless functionality.",
      },
      {
        date: "2018 - 2022",
        title: "Tech Lead",
        company: "TiviTrace Honduras",
        description:
          "Led a team of five engineers in developing a cross-platform mobile app for TiviTrace using Flutter and Dart, delivering a user-friendly solution for real-time vehicle tracking. Additionally, developed a standalone FaceID recognition app used in the field to verify worker attendance and GPS location, ensuring presence at the correct site. Also contributed to the main web platform built with Angular 12.",
      },
    ],
    projects: {
      mealmixer: {
        title: "MealMixer - MealPlanning App powered by AI",
        description:
          "Meal planning app powered by AI. Built with Flutter, Supabase, and OpenAI. Users can create meal plans and shopping lists based on their preferences.",
      },
      aiPrReviewer: {
        title:
          "AI PR Reviewer - A developer tool to review pull requests with AI, based on prompt engineering",
        description:
          "A developer tool to review pull requests with AI, based on prompt engineering",
      },
      todoodle: {
        title: "ToDoodle - Handwritten style todo app",
        description:
          "A mobile APP to manage your tasks with a handwritten style. Built with Flutter, In App Purchases, and iCloud Sync.",
      },
      nearGps: {
        title: "Near GPS - Real-time fleet tracking",
        description:
          "Official Near GPS app to monitor every tracked device in real time on the map, with detailed trip history: stops, duration, travel time, speeding events and route playback.",
      },
      nearVgps: {
        title: "Near VGPS - GPS Tracker for Your Fleet",
        description:
          "Turns any smartphone into a GPS tracker for the NearGPS fleet platform, with no extra hardware. Background position reporting, offline buffering when connectivity drops, Active/Eco modes to save battery, QR code activation and bilingual EN/ES support.",
      },
      youfibre: {
        title: "YouFibre - Broadband account app for a UK ISP",
        description:
          "Customer-facing mobile app for YouFibre, a UK broadband provider. Subscribers track their installation in real time, chat with support over a real-time WebSocket connection, manage bills and payments, troubleshoot their own connection, divert calls and earn cashback by referring friends, with biometric login.",
      },
      typeIt: {
        title: "Type It - Keyboard-first notes for macOS with on-device AI",
        description:
          "macOS menu bar app that unites markdown notes with live preview, a searchable universal clipboard history, and on-device AI to translate, fix spelling and rewrite tone from any text selection. It runs a local Gemma model, so nothing is ever uploaded: it works fully offline and needs no account.",
      },
    },
    aboutMe: {
      profileAlt: "Henderson Franco",
      paragraphs: [
        [
          {
            text: "Hi, I'm Henderson Franco. I started my journey in software development just before finishing university, and I've been passionate about building great digital experiences ever since. Currently, I work with BairesDev, a global outsourcing company that connects top-tier developers with clients around the world. ",
          },
          {
            text: "Right now, I'm part of the team building the internal app for DutchBros Coffee, the second largest coffee chain in the United States, where I implemented a chatbot backed by a RAG system over the company's internal documentation.",
            strong: true,
          },
        ],
        [
          { text: "Some of my success stories include " },
          {
            text: "reducing payroll-related financial losses by over 25% through the implementation of a facial recognition system that verified employee attendance and proof of life.",
            strong: true,
          },
          {
            text: " This solution was deployed in a mobile application capable of working offline, tailored for rural areas with limited internet access. Additionally, ",
          },
          {
            text: "I developed a new mobile application from scratch as an alternative to the existing vehicle tracking app, which suffered from performance and usability issues.",
            strong: true,
          },
          {
            text: " This initiative, which I undertook independently and outside of my regular working hours, led to a 50% improvement in tracking accuracy and user satisfaction, adding significant value to the company.",
          },
        ],
      ],
    },
  },

  es: {
    hero: {
      badge: "Trabajando en BairesDev",
      greeting: "Hola, soy Hender",
      intro: [
        { text: "+8 años de experiencia. " },
        {
          text: "Ingeniero de software y entusiasta de la IA",
          strong: true,
        },
        {
          text: " De Siguatepeque, Honduras 🇭🇳. Me encanta crear software que resuelva mis propias necesidades.",
        },
      ],
      getInTouch: "Contáctame",
      profileAlt: "Henderson Franco",
    },
    experience: [
      {
        date: "2022 - Actualidad",
        title: "Desarrollador Móvil Senior en BairesDev",
        company: "BairesDev",
        description:
          "Desarrollo aplicaciones móviles en BairesDev con Flutter. Actualmente formo parte del equipo que construye la aplicación interna de DutchBros Coffee, la segunda cadena de cafeterías más grande de Estados Unidos, destinada a la gestión de procesos, contenidos y eventos tanto en tiendas propias como en franquicias. Implementé notificaciones push, deeplinks y temas claro/oscuro, además de un chatbot respaldado por un sistema RAG que responde a partir de la documentación interna de la empresa. Anteriormente lideré el desarrollo de una aplicación de banda ancha de cara al cliente para una empresa del Reino Unido, donde implementé un chat de soporte al cliente en tiempo real sobre WebSockets, con foco en experiencias de usuario intuitivas, diseño responsivo y un funcionamiento fluido.",
      },
      {
        date: "2018 - 2022",
        title: "Tech Lead",
        company: "TiviTrace Honduras",
        description:
          "Lideré un equipo de cinco ingenieros en el desarrollo de una aplicación móvil multiplataforma para TiviTrace con Flutter y Dart, entregando una solución sencilla de usar para el rastreo vehicular en tiempo real. Además, desarrollé una aplicación independiente de reconocimiento facial usada en campo para verificar la asistencia de los trabajadores y su ubicación GPS, garantizando su presencia en el sitio correcto. También contribuí a la plataforma web principal construida con Angular 12.",
      },
    ],
    projects: {
      mealmixer: {
        title: "MealMixer - App de planificación de comidas con IA",
        description:
          "Aplicación de planificación de comidas impulsada por IA. Construida con Flutter, Supabase y OpenAI. Permite crear planes de comida y listas de compra a partir de las preferencias de cada persona.",
      },
      aiPrReviewer: {
        title:
          "AI PR Reviewer - Herramienta para revisar pull requests con IA, basada en prompt engineering",
        description:
          "Una herramienta para desarrolladores que revisa pull requests con IA, basada en prompt engineering.",
      },
      todoodle: {
        title: "ToDoodle - App de tareas con estilo manuscrito",
        description:
          "Aplicación móvil para gestionar tus tareas con un estilo manuscrito. Construida con Flutter, compras dentro de la app y sincronización con iCloud.",
      },
      nearGps: {
        title: "Near GPS - Rastreo de flotas en tiempo real",
        description:
          "Aplicación oficial de Near GPS para monitorear en el mapa todos los dispositivos en tiempo real, con historial detallado de recorridos: paros, duración, tiempo de trayecto, excesos de velocidad y reproducción de la ruta.",
      },
      nearVgps: {
        title: "Near VGPS - Rastreador GPS para tu flota",
        description:
          "Convierte cualquier teléfono en un rastreador GPS para la plataforma de flotas NearGPS, sin hardware adicional. Envío de posiciones en segundo plano, almacenamiento local cuando se pierde la conexión, modos Activo/Eco para ahorrar batería, activación por código QR y soporte bilingüe ES/EN.",
      },
      youfibre: {
        title: "YouFibre - App de banda ancha para un ISP del Reino Unido",
        description:
          "Aplicación de cara al cliente para YouFibre, un proveedor de banda ancha del Reino Unido. Permite seguir la instalación en tiempo real, chatear con soporte mediante una conexión WebSocket en tiempo real, gestionar facturas y pagos, resolver problemas de conexión sin llamar, desviar llamadas y ganar dinero refiriendo amigos, con inicio de sesión biométrico.",
      },
      typeIt: {
        title: "Type It - Notas Keyboard First para macOS con IA local",
        description:
          "App de barra de menú para macOS que une notas en markdown con vista previa en vivo, un historial de portapapeles universal y buscable, e IA local para traducir, corregir ortografía y reescribir el tono desde cualquier selección de texto. Corre un modelo Gemma en el propio equipo, así que nada se sube a ningún lado: funciona sin conexión y sin necesidad de cuenta.",
      },
    },
    aboutMe: {
      profileAlt: "Henderson Franco",
      paragraphs: [
        [
          {
            text: "Hola, soy Henderson Franco. Empecé en el desarrollo de software poco antes de terminar la universidad, y desde entonces me apasiona construir buenas experiencias digitales. Actualmente trabajo con BairesDev, una empresa global de outsourcing que conecta desarrolladores de primer nivel con clientes de todo el mundo. ",
          },
          {
            text: "Hoy formo parte del equipo que desarrolla la aplicación interna de DutchBros Coffee, la segunda cadena de cafeterías más grande de Estados Unidos, donde implementé un chatbot con RAG sobre la documentación interna de la empresa.",
            strong: true,
          },
        ],
        [
          { text: "Entre mis logros destaco haber " },
          {
            text: "reducido en más de un 25% las pérdidas económicas asociadas a la nómina, mediante un sistema de reconocimiento facial que verificaba la asistencia y la prueba de vida de los empleados.",
            strong: true,
          },
          {
            text: " La solución se desplegó en una aplicación móvil capaz de funcionar sin conexión, pensada para zonas rurales con acceso limitado a internet. Además, ",
          },
          {
            text: "desarrollé desde cero una nueva aplicación móvil como alternativa a la app de rastreo vehicular existente, que arrastraba problemas de rendimiento y usabilidad.",
            strong: true,
          },
          {
            text: " Esta iniciativa, que asumí por cuenta propia y fuera de mi horario laboral, se tradujo en una mejora del 50% en la precisión del rastreo y en la satisfacción de los usuarios, aportando un valor significativo a la empresa.",
          },
        ],
      ],
    },
  },
};
