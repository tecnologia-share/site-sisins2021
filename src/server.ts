import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import app from './app';
import { env } from './shared/env';

app.listen(env.port, () => {
  console.log(`Listening at ${env.hostBack}:${env.port}`);
});
