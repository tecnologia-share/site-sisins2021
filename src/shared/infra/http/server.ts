import dotenv from 'dotenv';
import { env } from '../../env';
import app from './app';
dotenv.config({ path: '.env' });

app.listen(env.port, () => {
  console.log(`Listening at ${env.hostBack}:${env.port}`);
});
