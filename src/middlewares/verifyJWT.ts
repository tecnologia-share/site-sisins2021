/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verifyJWT = () => {
  return (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers['x-access-token'] as string;
    if (!token)
      return response
        .status(401)
        .json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, 'secret', function (error, decoded) {
      if (error)
        return response
          .status(500)
          .json({ auth: false, message: 'Failed to authenticate token.' });

      // se tudo estiver ok, salva no request para uso posterior
      // request.userId = decoded?.id;
      next();
    });
  };
};
