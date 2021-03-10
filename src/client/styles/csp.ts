let prod = process.env.NODE_ENV == 'production';

export let Csp = ``;
csp += `base-uri 'self';`;
csp += `form-action 'self';`;
csp += `default-src 'self';`;
csp += `script-src 'self' ${prod ? '' : "'unsafe-eval'"};`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
csp += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline' data:;`; // NextJS requires 'unsafe-inline'
csp += `img-src 'self' data: blob:;`;
csp += `font-src 'self' https://fonts.gstatic.com;`; // TODO
csp += `frame-src *;`; // TODO
csp += `media-src *;`; // TODO
csp += `X-Frame-Options "SAMEORIGIN"`;

// require-trusted-types-for 'script';" TODO

export let Referrer = 'strict-origin';
