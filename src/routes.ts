import { Router } from 'express';
import AuthController from './controllers/AuthController';
import ParticipantsController from './controllers/ParticipantsController';
import SubscriptionsController from './controllers/SubscriptionsController';

const routes = Router();

const authController = new AuthController();
const participantsController = new ParticipantsController();
const subscriptionsController = new SubscriptionsController();

routes.post('/api/authenticate', authController.authenticate);
routes.post('/api/authenticate-share', authController.authenticateShare);

routes.patch('/api/participants', participantsController.update);
routes.patch(
  '/api/participants/update-email',
  participantsController.updateEmail
);
routes.patch(
  '/api/participants/update-password',
  participantsController.updatePassword
);

routes.post('/api/subscriptions', subscriptionsController.subscribe);

export default routes;
