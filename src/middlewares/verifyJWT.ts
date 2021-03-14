/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface tokenPayload {
  id: string;
}

export const verifyJWT = () => {
  return (request: Request, response: Response, _next: NextFunction) => {
    if (
      request.path === '/api/authenticate' ||
      request.path === '/api/register' ||
      request.path.includes('/api/register/verify-email/')
    ) {
      return _next();
    }
    console.log(request.path);

    const token = request.headers['x-access-token'] as string;

    if (!token) throw new AppError('Token inválido.', 401);

    jwt.verify(token, process.env.JWT_SECRET as string, (error, decoded) => {
      if (error) throw new AppError('Token inválido.', 401);

      if (decoded) {
        request.userId = (decoded as tokenPayload).id;
      }

      return _next();
    });
  };
};
