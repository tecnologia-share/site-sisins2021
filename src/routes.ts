import { Router } from 'express';
import AuthController from './controllers/AuthController';
import ParticipantsController from './controllers/ParticipantsController';

const routes = Router();

const authController = new AuthController();
const participantsController = new ParticipantsController();

routes.post('/api/authenticate', authController.authenticate);

routes.patch('/api/participants', participantsController.update);
routes.patch(
  '/api/participants/update-email',
  participantsController.updateEmail
);
routes.patch(
  '/api/participants/update-password',
  participantsController.updatePassword
);

export default routes;
