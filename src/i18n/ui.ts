export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

/**
 * Textos de chrome de la UI (navegación, botones, etiquetas, metadatos).
 * El contenido editorial largo vive en `content.ts`.
 */
export const ui = {
  en: {
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.aboutMe": "About me",
    "nav.contact": "Contact",

    "section.experience": "Work experience",
    "section.projects": "Projects",
    "section.aboutMe": "About me",

    "project.preview": "Preview",
    "experience.readMore": "Read more",

    // Solo los tags DESCRIPTIVOS se traducen. Los nombres de producto
    // (Flutter, Swift, NodeJS...) son nombres propios y nunca se tocan.
    "tag.localAi": "Local AI (Gemma)",
    "tag.icloudSync": "iCloud Sync",

    "theme.label": "Choose the theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    "lang.label": "Choose the language",

    "lightbox.label": "Image preview",
    "lightbox.viewLarger": "View larger",
    "lightbox.close": "Close",

    "footer.aboutMe": "About me",
    "footer.contact": "Contact",

    "meta.title":
      "Henderson's Portfolio - +8 years full stack developer and AI enthusiast",
    "meta.description":
      "Analysis and development of software solutions. I love to create software that solve my personal needs.",
  },
  es: {
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.aboutMe": "Sobre mí",
    "nav.contact": "Contacto",

    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos",
    "section.aboutMe": "Sobre mí",

    "project.preview": "Ver proyecto",
    "experience.readMore": "Saber más",

    "tag.localAi": "IA local (Gemma)",
    "tag.icloudSync": "Sincronización con iCloud",

    "theme.label": "Elige el tema",
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",

    "lang.label": "Elige el idioma",

    "lightbox.label": "Vista previa de la imagen",
    "lightbox.viewLarger": "Ver más grande",
    "lightbox.close": "Cerrar",

    "footer.aboutMe": "Sobre mí",
    "footer.contact": "Contacto",

    "meta.title":
      "Portafolio de Henderson - +8 años como desarrollador full stack y entusiasta de la IA",
    "meta.description":
      "Análisis y desarrollo de soluciones de software. Me encanta crear software que resuelva mis propias necesidades.",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
