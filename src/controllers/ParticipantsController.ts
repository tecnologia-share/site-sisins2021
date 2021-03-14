import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { Participante } from '../models/Participante';
import bcrypt from 'bcrypt';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';
import jwt from 'jsonwebtoken';

interface PayloadEmail {
  id: string;
  email: string;
}

class ParticipantsController {
  async create(request: Request, response: Response) {
    const {
      nome,
      email,
      senha,
      telefone,
      nascimento,
      pais,
      estado,
      cidade,
    } = request.body;

    const schema = yup.object().shape({
      nome: yup.string().required('Nome obrigatório'),
      email: yup.string().email().required('Email obrigatório'),
      senha: yup.string().required('Senha obrigatório'),
      telefone: yup.string().required('Telefone obrigatório'),
      nascimento: yup.date().required('Data de nascimento obrigatório'),
      pais: yup.string().required('País obrigatório'),
      estado: yup.string().required('Estado obrigatório'),
      cidade: yup.string().required('Cidade obrigatório'),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const participantesRepository = getRepository(Participante);

    const participante = participantesRepository.create({
      nome,
      email: 'inactive',
      senha,
      telefone,
      nascimento,
      pais,
      estado,
      cidade,
    });

    const npsPath = resolve(__dirname, '../views/emails/verificationEmail.hbs');

    const token = jwt.sign(
      {
        email,
        id: participante.id,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '5h' }
    );

    const variables = {
      name: participante.nome,
      link: `${process.env.URL_MAIL}${token}`,
    };

    // Enviar email para o usuário
    await SendMailService.execute(email, 'Cadastro', variables, npsPath);

    await participantesRepository.save(participante);

    return response.status(201).json(participante);
  }
  async verifyEmail(request: Request, response: Response, _next: NextFunction) {
    const { token } = request.params;

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) {
        throw new AppError('Invalid token!');
      }
      const { id, email } = decoded as PayloadEmail;
      const participantesRepository = getRepository(Participante);

      const participante = participantesRepository.findOne({
        id,
      });

      if (!participante) {
        return _next(new Error('Participant not found.'));
      }

      const emailAlreadyExists = participantesRepository.findOne({
        email,
      });

      if (emailAlreadyExists) {
        throw new AppError('Email already exists!');
      }

      participante.email = email;

      participantesRepository.save(participante);

      response.status(200).json({ participante });
    });
  }
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

    schema.validate(request.body, { abortEarly: false }).catch(() => {
      return _next(new AppError('Email and password are required.'));
    });

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

    schema.validate(request.body, { abortEarly: false }).catch(() => {
      return _next(
        new AppError('currentPassword and newPassword are required.')
      );
    });

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
