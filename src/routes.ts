import { Router } from 'express';
import ParticipantsController from './controllers/ParticipantsController';

const routes = Router();

const participantsController = new ParticipantsController();

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
