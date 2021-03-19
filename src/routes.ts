import { Router } from 'express';

import { verifyJWT } from './middlewares/verifyJWT';
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

routes.patch('/api/participants', verifyJWT(), participantsController.update);
routes.patch(
  '/api/participants/update-email',
  verifyJWT(),
  participantsController.updateEmail
);
routes.patch(
  '/api/participants/update-password',
  verifyJWT(),
  participantsController.updatePassword
);

routes.post(
  '/api/subscriptions',
  verifyJWT(),
  subscriptionsController.subscribe
);
routes.delete(
  '/api/subscriptions',
  verifyJWT(),
  subscriptionsController.unsubscribe
);

routes.post(
  '/api/selection-process',
  verifyJWT(),
  selectionProcessController.create
);
routes.patch(
  '/api/selection-process',
  verifyJWT(),
  selectionProcessController.update
);
routes.delete(
  '/api/selection-process',
  verifyJWT(),
  selectionProcessController.delete
);

routes.post('/api/courses', verifyJWT(), coursesController.create);
routes.patch('/api/courses', verifyJWT(), coursesController.update);
routes.delete('/api/courses', verifyJWT(), coursesController.delete);
routes.get('/api/courses/:id/exam', coursesController.showExam);

routes.post('/api/exams', verifyJWT(), examsController.create);
routes.patch('/api/exams', verifyJWT(), examsController.update);
routes.delete('/api/exams', verifyJWT(), examsController.delete);

export default routes;
