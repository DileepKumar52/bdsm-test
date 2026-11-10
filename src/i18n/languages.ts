export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  ogLocale: string;
  flag?: string;
}

export const DEFAULT_LANGUAGE = 'en';

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', ogLocale: 'en_US' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', ogLocale: 'es_ES' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', ogLocale: 'ja_JP' },
  { code: 'fr', name: 'French', nativeName: 'Français', ogLocale: 'fr_FR' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', ogLocale: 'de_DE' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', ogLocale: 'pt_PT' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', ogLocale: 'ko_KR' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', ogLocale: 'it_IT' }
];

export const NON_DEFAULT_LANGUAGES = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'] as const;

export type SupportedLanguage = 'en' | 'es' | 'ja' | 'fr' | 'de' | 'pt' | 'ko' | 'it';

/**
 * Checks if a code is a valid supported language
 */
export function isSupportedLanguage(code: string): code is SupportedLanguage {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === code);
}

/**
 * Extracts language code from a given pathname
 * /es/test/quick -> 'es'
 * /test/quick -> 'en'
 */
export function getLanguageFromPath(pathname: string): SupportedLanguage {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && NON_DEFAULT_LANGUAGES.includes(segments[0] as any)) {
    return segments[0] as SupportedLanguage;
  }
  return DEFAULT_LANGUAGE;
}

/**
 * Strips the language prefix from a pathname
 * /es/test/quick -> '/test/quick'
 * /es -> '/'
 * /test/quick -> '/test/quick'
 */
export function getCanonicalPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && NON_DEFAULT_LANGUAGES.includes(segments[0] as any)) {
    const remaining = segments.slice(1).join('/');
    return remaining ? `/${remaining}` : '/';
  }
  return pathname === '' ? '/' : (pathname.startsWith('/') ? pathname : `/${pathname}`);
}

/**
 * Builds the localized path for a given language
 * getLocalizedPath('es', '/test/quick') -> '/es/test/quick'
 * getLocalizedPath('en', '/es/test/quick') -> '/test/quick'
 * getLocalizedPath('es', '/') -> '/es'
 * getLocalizedPath('en', '/') -> '/'
 */
export function getLocalizedPath(targetLang: SupportedLanguage, currentPath: string): string {
  const basePath = getCanonicalPath(currentPath);
  if (targetLang === DEFAULT_LANGUAGE) {
    return basePath;
  }
  if (basePath === '/') {
    return `/${targetLang}`;
  }
  return `/${targetLang}${basePath}`;
}

export interface HreflangLink {
  lang: string;
  url: string;
}

/**
 * Generates reciprocal hreflang links and x-default for a given path
 */
export function getHreflangLinks(currentPath: string, siteUrl: string = 'https://bdsmtest.org'): HreflangLink[] {
  const cleanSiteUrl = siteUrl.replace(/\/$/, '');
  const basePath = getCanonicalPath(currentPath);

  const links: HreflangLink[] = SUPPORTED_LANGUAGES.map((lang) => {
    const locPath = getLocalizedPath(lang.code as SupportedLanguage, basePath);
    // Standardize URL: homepages end with /, subpaths without trailing slash
    const fullUrl = locPath === '/' ? `${cleanSiteUrl}/` : `${cleanSiteUrl}${locPath}`;
    return {
      lang: lang.code,
      url: fullUrl
    };
  });

  // x-default points to the default English URL
  const defaultUrl = basePath === '/' ? `${cleanSiteUrl}/` : `${cleanSiteUrl}${basePath}`;
  links.push({
    lang: 'x-default',
    url: defaultUrl
  });

  return links;
}

