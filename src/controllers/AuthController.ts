import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { Participante } from '../models/Participante';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  async authenticate(
    request: Request,
    response: Response,
    _next: NextFunction
  ) {
    const { email, password } = request.body;

    const schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required(),
    });

    schema.validate(request.body, { abortEarly: false }).catch(() => {
      return _next(new AppError('Email and password are required.'));
    });

    const participantesRepository = getRepository(Participante);

    const participante = await participantesRepository.findOne({
      email,
    });

    if (!participante) {
      return _next(new AppError('Invalid email or password.', 401));
    }

    const passwordIsCorrect = await bcrypt.compare(
      password,
      participante.senha
    );
    if (!passwordIsCorrect) {
      return _next(new AppError('Invalid email or password.', 401));
    }

    const token = jwt.sign(
      {
        id: participante.id,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    return response.status(200).json({ token });
  }
}

export default AuthController;
