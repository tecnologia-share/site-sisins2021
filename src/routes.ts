import { Router } from 'express';

import { verifyJWT } from './middlewares/verifyJWT';
import { verifySuperAdminJWT } from './middlewares/verifySuperAdminJWT';
import AuthController from './controllers/AuthController';
import ExamsController from './controllers/ExamsController';
import CoursesController from './controllers/coursesController';
import ParticipantsController from './controllers/ParticipantsController';
import SelectionProcessController from './controllers/selectionProcessController';
import SubscriptionsController from './controllers/SubscriptionsController';
import SuperAdminController from './controllers/SuperAdminController';
import { accessOnlyFor } from './middlewares/accessOnlyFor';
import { UserRoles } from './typings/UserRoles';
const routes = Router();

const authController = new AuthController();
const participantsController = new ParticipantsController();
const subscriptionsController = new SubscriptionsController();
const selectionProcessController = new SelectionProcessController();
const examsController = new ExamsController();
const coursesController = new CoursesController();
const superAdminController = new SuperAdminController();

const { admin, superAdmin } = UserRoles;

routes.post('/api/authenticate', authController.authenticate);
routes.post('/api/authenticate-share', authController.authenticateShare);
routes.post(
  '/api/authenticate-super-admin',
  authController.authenticateSuperAdmin
);

routes.post('/api/register', participantsController.create);
routes.get(
  '/api/register/verify-email/:token',
  participantsController.verifyEmail
);

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

routes.get(
  '/api/selection-process/:id/courses',
  coursesController.showSelectionProcessCourses
);

routes.post(
  '/api/selection-process',
  verifyJWT(),
  accessOnlyFor([admin]),
  selectionProcessController.create
);
routes.patch(
  '/api/selection-process',
  verifyJWT(),
  accessOnlyFor([admin]),
  selectionProcessController.update
);
routes.delete(
  '/api/selection-process',
  verifyJWT(),
  accessOnlyFor([admin]),
  selectionProcessController.delete
);

routes.get('/api/courses', coursesController.show);
routes.post(
  '/api/courses',
  verifyJWT(),
  accessOnlyFor([admin]),
  coursesController.create
);
routes.patch(
  '/api/courses',
  verifyJWT(),
  accessOnlyFor([admin]),
  coursesController.update
);
routes.delete(
  '/api/courses',
  verifyJWT(),
  accessOnlyFor([admin]),
  coursesController.delete
);
routes.get('/api/courses/:id/exam', coursesController.showExam);

routes.post(
  '/api/exams',
  verifyJWT(),
  accessOnlyFor([admin]),
  examsController.create
);
routes.patch(
  '/api/exams',
  verifyJWT(),
  accessOnlyFor([admin]),
  examsController.update
);
routes.delete(
  '/api/exams',
  verifyJWT(),
  accessOnlyFor([admin]),
  examsController.delete
);

routes.post(
  '/api/super-admin',
  verifySuperAdminJWT(),
  accessOnlyFor([superAdmin]),
  superAdminController.create
);

export default routes;
