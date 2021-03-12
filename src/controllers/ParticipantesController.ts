import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import ParticipantesRepository from '../repositories/ParticipantesRepository';

class ParticipantesController {
  async create(request: Request, response: Response) {
    const { nome, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required('Nome obrigatório'),
      email: yup.string().email().required('Email obrigatório'),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const participantesRepository = getCustomRepository(
      ParticipantesRepository
    );

    const userAlreadyExists = await participantesRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const participante = participantesRepository.create({
      nome,
      email,
    });

    await participantesRepository.save(participante);

    return response.status(201).json(participante);
  }
}

export default ParticipantesController;
