import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import { appError } from './shared/infra/http/middlewares/appError';
import { createConnection } from './shared/infra/http/middlewares/createConnection';

const app = express();

app.use(express.json());
app.use(cors());

app.use(createConnection());
app.use(routes);
app.use(appError());

export default app;
