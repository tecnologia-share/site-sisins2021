import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { Participante } from '../models/Participante';
import bcrypt from 'bcrypt';

class ParticipantsController {
  async update(request: Request, response: Response, _next: NextFunction) {
    const { cidade, estado, nascimento, nome, pais, telefone } = request.body;
    const { userId } = request;

    const participantesRepository = getRepository(Participante);
    const participante = await participantesRepository.findOne(userId);
    if (!participante) {
      return _next(new Error('Participant not found.'));
    }

    if (cidade) participante.cidade = cidade;
    if (estado) participante.estado = estado;
    if (nascimento) participante.nascimento = nascimento;
    if (nome) participante.nome = nome;
    if (pais) participante.pais = pais;
    if (telefone) participante.telefone = telefone;

    await participantesRepository.save(participante);

    return response.status(200).json({ message: 'Participant updated.' });
  }

  async updateEmail(request: Request, response: Response, _next: NextFunction) {
    const { password, email } = request.body;
    const { userId } = request;

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      return _next(new AppError('Email and password are required.'));
    }

    const participantesRepository = getRepository(Participante);
    const participante = await participantesRepository.findOne(userId);
    if (!participante) {
      return _next(new Error('Participant not found.'));
    }

    const senhaEstaCorreta = await bcrypt.compare(password, participante.senha);
    if (!senhaEstaCorreta) {
      return _next(new AppError('Invalid password.', 401));
    }

    /** @TODO Lógica para enviar email de confirmação */
    response
      .status(200)
      .json({ message: `Confirmation email sent to ${email}.` });
  }

  async updatePassword(
    request: Request,
    response: Response,
    _next: NextFunction
  ) {
    const { currentPassword, newPassword } = request.body;
    const { userId } = request;

    const schema = yup.object().shape({
      currentPassword: yup.string().required(),
      newPassword: yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      return _next(
        new AppError('currentPassword and newPassword are required.')
      );
    }

    const participantesRepository = getRepository(Participante);
    const participante = await participantesRepository.findOne(userId);
    if (!participante) {
      return _next(new Error('Participant not found.'));
    }

    const passwordIsCorrect = await bcrypt.compare(
      currentPassword,
      participante.senha
    );
    if (!passwordIsCorrect) {
      return _next(new AppError('Invalid password.', 401));
    }

    participante.senha = newPassword;
    await participantesRepository.save(participante);

    return response.status(200).json({ message: 'Password updated.' });
  }
}

export default ParticipantsController;
