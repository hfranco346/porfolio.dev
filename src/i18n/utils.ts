import { defaultLang, ui, type Lang, type UIKey } from "./ui";

/**
 * Deriva el idioma del primer segmento de la URL.
 * `/`      -> defaultLang
 * `/es/`   -> "es"
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return segment in ui ? (segment as Lang) : defaultLang;
}

/**
 * Devuelve la función `t` para el idioma dado.
 * Si falta una clave en el idioma, cae al idioma por defecto en lugar de
 * renderizar `undefined`.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Quita el prefijo de idioma de un pathname.
 * `/es/#projects` -> `/#projects`
 */
export function stripLangFromPath(pathname: string): string {
  const [, segment, ...rest] = pathname.split("/");
  if (!(segment in ui)) return pathname;
  const remainder = rest.join("/");
  return remainder ? `/${remainder}` : "/";
}

/**
 * Prefija un path con el idioma. El idioma por defecto no lleva prefijo,
 * de modo que las URLs actuales (`/`, `/#projects`) siguen siendo válidas.
 */
export function localizePath(path: string, lang: Lang): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? normalized : `/${lang}${normalized}`;
}

/**
 * Rutas que existen en TODOS los idiomas.
 * `/components` (catálogo del design system) queda fuera a propósito: es una
 * página interna, no cuelga del nav y sólo existe en inglés.
 * Al traducir una página nueva, agregá su path acá.
 */
const LOCALIZED_ROUTES = new Set<string>(["/"]);

/**
 * Path al que debe apuntar el selector de idioma desde la página actual.
 * Si la ruta actual no está traducida, cae a la home del idioma destino en
 * lugar de generar un 404.
 */
export function getLocaleSwitchPath(url: URL, target: Lang): string {
  const base = stripLangFromPath(url.pathname);
  const normalized =
    base.length > 1 && base.endsWith("/") ? base.slice(0, -1) : base;

  return localizePath(LOCALIZED_ROUTES.has(normalized) ? normalized : "/", target);
}
