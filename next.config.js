/* eslint-disable @typescript-eslint/no-var-requires */
const SriPlugin = require('webpack-subresource-integrity');
const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              styleSrc: ["'self'", "'unsafe-inline'"],
              styleSrcElem: [
                "'self'",
                "'unsafe-inline'",
                'https://fonts.googleapis.com',
              ],
              connectSrc: ["'self'", 'https://servicodados.ibge.gov.br'],
              fontSrc: [
                "'self'",
                "'unsafe-inline'",
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
              ],
              imgSrc: ["'self'"],
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true,
            },
          },
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: 'same-origin',
        }),
      },
    ];
  },
  webpack(config) {
    config.output.crossOriginLoading = 'anonymous';
    config.plugins.push(
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: process.env.NODE_ENV === 'development' ? false : true,
      })
    );

    return config;
  },
};
