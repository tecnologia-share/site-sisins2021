import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { Participante } from '../models/Participante';
import bcrypt from 'bcrypt';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';
import jwt from 'jsonwebtoken';
import { Pergunta } from '../models/Pergunta';
import { PerguntaParticipante } from '../models/PerguntaParticipante';

interface PayloadEmail {
  id: string;
  email: string;
}

interface IParticipant {
  name: string;
  email: string;
  password: string;
  phone: string;
  birth_date: Date;
  country: string;
  state: string;
  city: string;
  asksAnswers: [
    {
      asksId: string;
      response: string;
    }
  ];
}

class ParticipantsController {
  async create(request: Request, response: Response, _next: NextFunction) {
    const {
      name,
      email,
      password,
      phone,
      birth_date,
      country,
      state,
      city,
      asksAnswers,
    }: IParticipant = request.body;

    const schema = yup.object().shape({
      name: yup.string().required('Nome obrigatório'),
      email: yup.string().email().required('Email obrigatório'),
      password: yup.string().required('Senha obrigatório'),
      phone: yup.string().required('Telefone obrigatório'),
      birth_date: yup.date().required('Data de nascimento obrigatório'),
      country: yup.string().required('País obrigatório'),
      state: yup.string().required('Estado obrigatório'),
      city: yup.string().required('Cidade obrigatório'),
      asksAnswers: yup
        .array()
        .of(
          yup.object().shape({
            asksId: yup.string().required(),
            response: yup.number().required(),
          })
        )
        .optional(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return _next(new AppError('Something wrong with the request.'));
    }
    const participantsRepository = getRepository(Participante);
    const emailAlreadyExists = await participantsRepository.findOne({
      email,
    });

    if (emailAlreadyExists) {
      return _next(new AppError('Email already exists!'));
    }

    const participant = participantsRepository.create({
      nome: name,
      email: 'inactive',
      senha: password,
      telefone: phone,
      nascimento: birth_date,
      pais: country,
      estado: state,
      cidade: city,
      perguntasParticipantes: [],
    });

    const asksRepository = getRepository(Pergunta);

    const asksParticipantsRepository = getRepository(PerguntaParticipante);
    for (let i = 0; i < asksAnswers.length; i++) {
      const isExist = await asksRepository.findOne(asksAnswers[i].asksId, {
        select: ['id'],
      });
      if (!isExist) {
        return _next(new AppError('Ask not found.', 400));
      }

      const newAsk = asksParticipantsRepository.create({
        pergunta_id: asksAnswers[i].asksId,
        resposta: asksAnswers[i].response,
        participante_id: participant.id,
      });

      participant.perguntasParticipantes.push(newAsk);
    }

    // START sending email
    const npsPath = resolve(__dirname, '../views/emails/verificationEmail.hbs');

    const token = jwt.sign(
      {
        email,
        id: participant.id,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '5h' }
    );

    const variables = {
      name,
      link: `${process.env.URL_MAIL}${token}`,
    };

    await SendMailService.execute(email, 'Cadastro', variables, npsPath);
    // END sending email

    await participantsRepository.save(participant);

    return response
      .status(201)
      .json({ message: `Confirmation email sent to ${email}.` });
  }
  async verifyEmail(request: Request, response: Response, _next: NextFunction) {
    const { token } = request.params;

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      async (err, decoded) => {
        if (err) {
          return _next(new AppError('Invalid token!', 401));
        }
        const { id, email } = decoded as PayloadEmail;
        const participantesRepository = getRepository(Participante);

        const participante = await participantesRepository.findOne({
          id,
        });

        if (!participante) {
          return _next(new AppError('Participant not found.', 400));
        }

        const emailAlreadyExists = await participantesRepository.findOne({
          email,
        });

        if (emailAlreadyExists) {
          return _next(new AppError('Email already confirmed!'));
        }

        participante.email = email;

        participantesRepository.save(participante);

        /** @TODO substituir URL para o login */
        response.redirect('https://associacaoshare.com.br/');
      }
    );
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
