import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../../errors/AppError';
import bcrypt from 'bcrypt';
import { UsuarioShare as UserShare } from '../../models/UsuarioShare';
import { Pergunta } from '../../models/Pergunta';
import { AsksDTO } from './dto/CreateAsksDTO';
import { AsksTypes } from '../../typings/AsksTypes';

class SuperAdminController {
  async create(request: Request, response: Response, _next: NextFunction) {
    const {
      name,
      email,
      password,
      cpf,
      role,
      phone,
      birth_date,
      country,
      state,
      city,
    } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      cpf: yup.string().required(),
      role: yup.string().required(),
      phone: yup.string().required(),
      birth_date: yup.date().required(),
      country: yup.string().required(),
      state: yup.string().required(),
      city: yup.string().required(),
    });
    try {
      await schema.validate(request.body);
    } catch (err) {
      return _next(new AppError('Something wrong with the request.'));
    }

    const userShareRepository = getRepository(UserShare);

    const emailAlreadyExists = await userShareRepository.findOne({
      email,
    });

    if (emailAlreadyExists) {
      return _next(new AppError('Email already exists!'));
    }

    const cpfAlreadyExists = await userShareRepository.findOne({
      cpf,
    });

    if (cpfAlreadyExists) {
      return _next(new AppError('CPF already exists!'));
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userShare = userShareRepository.create({
      nome: name,
      email,
      senha: passwordHash,
      telefone: phone,
      nascimento: birth_date,
      cpf,
      role,
      pais: country,
      estado: state,
      cidade: city,
    });

    await userShareRepository.save(userShare);

    return response
      .status(201)
      .json({ message: `User Share successfully created.` });
  }

  async createAsks(request: Request, response: Response, _next: NextFunction) {
    const { type, ask, alternatives }: AsksDTO = request.body;

    const schema = yup.object().shape({
      type: yup.string().required(),
      ask: yup.string().required(),
      alternatives: yup
        .object()
        .shape({
          one: yup.string().optional(),
          two: yup.string().optional(),
          tree: yup.string().optional(),
          four: yup.string().optional(),
          five: yup.string().optional(),
        })
        .optional(),
    });

    try {
      await schema.validate(request.body);
    } catch (err) {
      return _next(new AppError('Something wrong with the request.'));
    }

    const haveAlternatives = alternatives !== undefined;
    if (type === AsksTypes.discursive) {
      if (haveAlternatives)
        return _next(
          new AppError('Question of type discursive do not have alternatives')
        );
    } else if (type === AsksTypes.alternative) {
      if (!haveAlternatives)
        return _next(
          new AppError('Question of type alternative have alternatives')
        );
    } else {
      const typeExist = Object.values(AsksTypes).includes(type);
      if (!typeExist) return _next(new AppError('Invalid type'));
    }

    const askRepository = await getRepository(Pergunta);
    const question = askRepository.create({
      pergunta: ask,
      tipo: type,
      alternativa1: alternatives?.one,
      alternativa2: alternatives?.two,
      alternativa3: alternatives?.tree,
      alternativa4: alternatives?.four,
      alternativa5: alternatives?.five,
    });

    await askRepository.save(question);

    const questionCreated: AsksDTO = {
      ask: question.pergunta,
      type: question.tipo,
      alternatives: {
        one: question?.alternativa1,
        two: question?.alternativa2,
        tree: question?.alternativa3,
        four: question?.alternativa4,
        five: question?.alternativa5,
      },
    };

    return response
      .status(201)
      .json({ message: 'Question successfully created', questionCreated });
  }
}

export default SuperAdminController;
