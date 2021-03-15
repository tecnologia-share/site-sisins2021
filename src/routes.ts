import { Router } from 'express';
import AuthController from './controllers/AuthController';

const routes = Router();

const authController = new AuthController();

routes.post('/api/authenticate', authController.authenticate);

export default routes;
