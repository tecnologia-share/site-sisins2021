import { Router } from 'express';
import AuthController from './controllers/AuthController';
import ParticipantsController from './controllers/ParticipantsController';
import SelectionProcessController from './controllers/selectionProcessController';
import SubscriptionsController from './controllers/SubscriptionsController';

const routes = Router();

const authController = new AuthController();
const participantsController = new ParticipantsController();
const subscriptionsController = new SubscriptionsController();
const selectionProcessController = new SelectionProcessController();

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
routes.delete('/api/subscriptions', subscriptionsController.unsubscribe);

routes.post('/api/selection-process', selectionProcessController.create);
routes.patch('/api/selection-process', selectionProcessController.update);

export default routes;
