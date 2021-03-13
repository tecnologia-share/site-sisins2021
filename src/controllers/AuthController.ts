import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { Participante } from '../models/Participante';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const schema = yup.object().shape({
      email: yup.string().required('Email required'),
      password: yup.string().required('Password required'),
    });

    schema.validate(request.body, { abortEarly: false }).catch((error) => {
      throw new AppError(error);
    });

    const participantesRepository = getRepository(Participante);

    const participante = await participantesRepository.findOne({
      email,
    });

    if (!participante) {
      throw new AppError('Email ou senha inválidos.');
    }

    bcrypt.compare(password, participante.senha).then((correctPassword) => {
      if (!correctPassword) {
        throw new AppError('Email ou senha inválidos.');
      }
    });

    const token = jwt.sign(
      {
        id: participante.id,
      },
      'secret',
      { expiresIn: 30 }
    );

    return response.status(200).json({ token });
  }
}

export default AuthController;
