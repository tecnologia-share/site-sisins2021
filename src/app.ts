import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '../src/routes';
import { appError } from './middlewares/appError';
import { verifyJWT } from './middlewares/verifyJWT';

const app = express();

app.use(express.json());
app.use(cors());

app.use(verifyJWT());

app.use(routes);

app.use(appError());

export default app;
