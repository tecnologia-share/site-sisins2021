import AsksController from '@/modules/asks/controllers/asksController';
import { accessOnlyFor } from '@/shared/infra/http/middlewares/accessOnlyFor';
import { verifyShareJWT } from '@/shared/infra/http/middlewares/verifyShareJWT';
import { UserRoles } from '@/shared/typings/UserRoles';

import { Router } from 'express';

const { superAdmin } = UserRoles;
const asksController = new AsksController();

export default (router: Router): void => {
  router.get('/ask', asksController.show);
  router.post(
    '/ask',
    verifyShareJWT(),
    accessOnlyFor([superAdmin]),
    asksController.create
  );
};
