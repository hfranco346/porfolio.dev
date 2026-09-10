import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  // Dominio publico real del sitio. De aca salen las URLs absolutas de
  // canonical, og:url, og:image, hreflang y robots.txt. Antes apuntaba a
  // 'https://porfolio.dev/' (el template original de midudev), lo que rompia
  // los previews al compartir y le cedia el canonical a un dominio ajeno.
  // Va el dominio publico por el que entran los visitantes, NO la URL interna
  // de Render: si difieren, el canonical parte el SEO entre dos hostnames.
  site: 'https://henderdev.net/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      // El idioma por defecto no lleva prefijo: `/` sigue siendo inglés y las
      // URLs ya indexadas no se rompen.
      prefixDefaultLocale: false
    }
  }
})
