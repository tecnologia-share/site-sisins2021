/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import {
  createConnection as createTypeormConnection,
  getConnection,
} from 'typeorm';

export const createConnection = () => {
  return async (request: Request, response: Response, _next: NextFunction) => {
    try {
      getConnection();
    } catch (err) {
      await createTypeormConnection();
    }

    return _next();
  };
};
