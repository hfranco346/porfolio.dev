import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
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
