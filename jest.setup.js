// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
require('reflect-metadata')
jest.setTimeout(40000);
dotenv.config({ path: '.env.test' });
