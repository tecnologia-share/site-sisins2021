import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { UserRoles } from '../typings/UserRoles';
import { ValidDate } from '../utils/ValidDate';
import { ProcessoSeletivo } from '../models/ProcessoSeletivo';
import { UsuarioShare } from '../models/UsuarioShare';

class selectionProcessController {
  async create(request: Request, response: Response, _next: NextFunction) {
    const { name, startDate, endDate } = request.body;
    const { userId } = request;

    const schema = yup.object().shape({
      name: yup.string().required(),
      startDate: yup.string().required(),
      endDate: yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      return _next(new AppError('Something wrong with the request.'));
    }

    if (!ValidDate(startDate) || !ValidDate(endDate)) {
      return _next(new AppError('Invalid Date.'));
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return _next(new AppError('endDate must be greater than startDate.'));
    }

    const usersRepository = getRepository(UsuarioShare);
    const user = await usersRepository.findOne(userId);

    if (!user) {
      return _next(new Error('User not found.'));
    }

    if (user.role !== UserRoles.admin) {
      return _next(
        new AppError(
          'Only the administrator can create a selection process.',
          401
        )
      );
    }

    const selectionProcessRepository = getRepository(ProcessoSeletivo);
    const selectionProcess = selectionProcessRepository.create({
      nome: name,
      data_inicio: startDate,
      data_final: endDate,
    });
    await selectionProcessRepository.save(selectionProcess);

    return response.status(201).json({
      message: 'Selection process successfully created.',
      selectionProcess: {
        id: selectionProcess.id,
        startDate: selectionProcess.data_inicio,
        endDate: selectionProcess.data_final,
        name: selectionProcess.nome,
        created_at: selectionProcess.created_at,
      },
    });
  }
}

export default selectionProcessController;
