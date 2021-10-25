/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppError } from '../../../errors/AppError';
import { UsuarioShare } from '../../typeorm/models/UsuarioShare';

interface StringArray {
  includes(role: string | undefined): boolean;
  [index: number]: string;
}

export const accessOnlyFor = (roles: StringArray) => {
  return async (request: Request, response: Response, _next: NextFunction) => {
    const { userId } = request;
    const userShareRepository = getRepository(UsuarioShare);
    const user = await userShareRepository.findOne(userId);

    if (roles.includes(user?.role)) return _next();

    return _next(
      new AppError('You are not authorized to access this route', 401)
    );
  };
};
