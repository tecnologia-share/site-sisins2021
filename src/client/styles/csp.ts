let prod = process.env.NODE_ENV == 'production';

export let Csp = ``;
Csp += `base-uri 'self';`;
Csp += `form-action 'self';`;
Csp += `default-src 'self';`;
Csp += `script-src 'self' ${prod ? '' : "'unsafe-eval'"};`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
Csp += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline' data:;`; // NextJS requires 'unsafe-inline'
Csp += `img-src 'self' data: blob:;`;
Csp += `font-src 'self' https://fonts.gstatic.com;`; // TODO
Csp += `frame-src *;`; // TODO
Csp += `media-src *;`; // TODO
Csp += `X-Frame-Options "SAMEORIGIN"`;

// require-trusted-types-for 'script';" TODO

export let Referrer = 'strict-origin';
