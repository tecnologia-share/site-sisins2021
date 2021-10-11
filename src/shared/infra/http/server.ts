import dotenv from 'dotenv';
import { env } from '../../../config/env';
import app from './app';
dotenv.config({ path: '.env' });

app.listen(env.port, () => {
  console.log(`Listening at ${env.hostBack}`);
});
