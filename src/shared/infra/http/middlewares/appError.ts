/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../errors/AppError';

export const appError = () => {
  return (
    err: any,
    request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    const errors = {
      status: 'error',
      message: err.message,
    };

    return response.status(err?.statusCode || 500).json(errors);
  };
};
