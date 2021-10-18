import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

export const validationMiddleware =
  (schema: yup.SchemaOf<any>, checkParams = false) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body, params } = req;

    try {
      if (checkParams) {
        await schema.validate({ ...body, ...params });
      } else {
        await schema.validate(body);
      }

      return next();
    } catch (error) {
      return res.status(400).send({ validationError: error });
    }
  };
