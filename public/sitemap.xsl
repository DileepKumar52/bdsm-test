<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap — Free BDSM Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          :root {
            --bg: #09090b;
            --surface: #121215;
            --surface-raised: #18181b;
            --border: #27272a;
            --ink: #f4f4f5;
            --body: #a1a1aa;
            --mute: #71717a;
            --link: #3b82f6;
          }
          @media (prefers-color-scheme: light) {
            :root {
              --bg: #ffffff;
              --surface: #fbfbfb;
              --surface-raised: #f4f4f5;
              --border: #e4e4e7;
              --ink: #09090b;
              --body: #52525b;
              --mute: #71717a;
              --link: #0070f3;
            }
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
            background: var(--bg);
            color: var(--ink);
            padding: 32px 20px;
            font-size: 13px;
            line-height: 1.5;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
          }
          header {
            margin-bottom: 28px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--border);
          }
          h1 {
            font-size: 22px;
            font-weight: 600;
            color: var(--ink);
            letter-spacing: -0.5px;
          }
          p.lead {
            margin-top: 6px;
            color: var(--body);
            font-size: 13px;
          }
          .stats {
            display: inline-flex;
            gap: 16px;
            margin-top: 14px;
            padding: 8px 14px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 9999px;
            font-family: monospace;
            font-size: 11px;
            color: var(--body);
          }
          .stats strong { color: var(--ink); }
          table {
            width: 100%;
            border-collapse: collapse;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
          }
          th {
            background: var(--surface-raised);
            color: var(--mute);
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-align: left;
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 10px 14px;
            border-bottom: 1px solid var(--border);
            color: var(--body);
            font-size: 12px;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: var(--surface-raised); }
          a {
            color: var(--link);
            text-decoration: none;
            word-break: break-all;
          }
          a:hover { text-decoration: underline; }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            background: var(--surface-raised);
            border: 1px solid var(--border);
            font-family: monospace;
            font-size: 11px;
            color: var(--ink);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap</h1>
            <p class="lead">Generated for search engines (Google, Bing, Yandex). Contains canonical indexable URLs and reciprocal multilingual hreflang relationships.</p>
            <div class="stats">
              <span>Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></span>
              <span>•</span>
              <span>Format: <strong>sitemaps.org 0.9</strong></span>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th style="width: 55%;">URL</th>
                <th style="width: 15%;">Last Modified</th>
                <th style="width: 15%;">Change Frequency</th>
                <th style="width: 15%;">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td>
                    <span class="badge"><xsl:value-of select="sitemap:lastmod"/></span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <span class="badge"><xsl:value-of select="sitemap:priority"/></span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
