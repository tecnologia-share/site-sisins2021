import { Router } from 'express';
import AuthController from './controllers/AuthController';
import ExamsController from './controllers/ExamsController';
import CoursesController from './controllers/coursesController';
import ParticipantsController from './controllers/ParticipantsController';
import SelectionProcessController from './controllers/selectionProcessController';
import SubscriptionsController from './controllers/SubscriptionsController';

const routes = Router();

const authController = new AuthController();
const participantsController = new ParticipantsController();
const subscriptionsController = new SubscriptionsController();
const selectionProcessController = new SelectionProcessController();
const examsController = new ExamsController();
const coursesController = new CoursesController();

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

routes.post('/api/courses', coursesController.create);
routes.patch('/api/courses', coursesController.update);
routes.delete('/api/courses', coursesController.delete);

routes.post('/api/exams', examsController.create);
routes.patch('/api/exams', examsController.update);

export default routes;
