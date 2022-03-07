module.exports = {
  distDir: "build",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["www.valpo.edu", "images.prismic.io"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],
};

const CLOUDFLARE_WEB_ANALTICS_CSP =
  "static.cloudflareinsights.com; connect-src cloudflareinsights.co";

// const CLOUDFLARE_APPS_SCRAPE_SHIELD_CSP = ""

const SCRIPT_SRC = `script-src 'self' ${CLOUDFLARE_WEB_ANALTICS_CSP} www.google-analytics.com googletagmanager.com`;

const ContentSecurityPolicy = `
  default-src 'self' 'unsafe-inline';
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // {
  //   key: "Content-Security-Policy",
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  // },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];
