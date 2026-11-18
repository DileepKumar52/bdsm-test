import type { APIRoute } from 'astro';
import { SUPPORTED_LANGUAGES, getLocalizedPath, getHreflangLinks, type SupportedLanguage } from '../i18n/languages';

const INDEXABLE_ROUTES = [
  '/',
  '/test/quick',
  '/test/comprehensive',
  '/dimensions',
  '/compare',
  '/results',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer'
];

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = (site ? site.toString() : 'https://freebdsmtest.com').replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const urlEntries: string[] = [];

  for (const route of INDEXABLE_ROUTES) {
    for (const lang of SUPPORTED_LANGUAGES) {
      const locPath = getLocalizedPath(lang.code as SupportedLanguage, route);
      const locUrl = locPath === '/' ? `${siteUrl}/` : `${siteUrl}${locPath}`;
      const hreflangs = getHreflangLinks(route, siteUrl);

      const alternateLinksXml = hreflangs
        .map((hRef) => `    <xhtml:link rel="alternate" hreflang="${hRef.lang}" href="${hRef.url}" />`)
        .join('\n');

      urlEntries.push(`  <url>
    <loc>${locUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : (route.startsWith('/test') ? '0.9' : '0.8')}</priority>
${alternateLinksXml}
  </url>`);
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
