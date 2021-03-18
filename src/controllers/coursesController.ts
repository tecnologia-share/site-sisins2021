import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { Curso } from '../models/Curso';
import { ProcessoSeletivo } from '../models/ProcessoSeletivo';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

class CoursesController {
  async create(request: Request, response: Response, _next: NextFunction) {
    const {
      name,
      category,
      description,
      time,
      professor,
      selectionProcessId,
    } = request.body;
    const { userId } = request;

    const schema = yup.object().shape({
      name: yup.string().required(),
      category: yup.string().required(),
      description: yup.string().required(),
      time: yup.string().required(),
      professor: yup.string().required(),
      selectionProcessId: yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      return _next(new AppError('Something wrong with the request.'));
    }

    const usersRepository = getRepository(UsuarioShare);
    const user = await usersRepository.findOne(userId);

    if (!user) {
      return _next(new Error('User not found.'));
    }

    if (user.role !== UserRoles.admin) {
      return _next(
        new AppError('Only the administrator can create a course.', 401)
      );
    }

    const selecrionProcessRepository = getRepository(ProcessoSeletivo);
    const selectionProcess = await selecrionProcessRepository.findOne(
      selectionProcessId,
      { select: ['id'] }
    );

    if (!selectionProcess) {
      return _next(new AppError('Selection process not found.', 404));
    }

    const coursesRepository = getRepository(Curso);
    const course = coursesRepository.create({
      descricao: description,
      categoria: category,
      horario: time,
      nome: name,
      professor: professor,
      processo_seletivo_id: selectionProcessId,
    });

    await coursesRepository.save(course);

    return response.status(201).json({
      message: 'Course successfully created.',
      course: {
        id: course.id,
        name: course.nome,
        category: course.categoria,
        description: course.descricao,
        time: course.horario,
        professor: course.professor,
        selectionProcessId: course.processo_seletivo_id,
      },
    });
  }

  async update(request: Request, response: Response, _next: NextFunction) {
    const { id, name, category, description, time, professor } = request.body;
    const { userId } = request;

    const usersRepository = getRepository(UsuarioShare);
    const user = await usersRepository.findOne(userId);

    if (!user) {
      return _next(new Error('User not found.'));
    }

    if (user.role !== UserRoles.admin) {
      return _next(
        new AppError('Only the administrator can update a course.', 401)
      );
    }

    const coursesRepository = getRepository(Curso);
    const course = await coursesRepository.findOne(id);

    if (!course) {
      return _next(new AppError('Course not found.', 404));
    }

    if (name) course.nome = name;
    if (category) course.categoria = category;
    if (description) course.descricao = description;
    if (time) course.horario = time;
    if (professor) course.professor = professor;

    await coursesRepository.save(course);

    return response.status(200).json({
      message: 'Course successfully updated.',
      course: {
        id: course.id,
        category: course.categoria,
        description: course.descricao,
        time: course.horario,
        name: course.nome,
        professor: course.professor,
        selectionProcessId: course.processo_seletivo_id,
      },
    });
  }

  async delete(request: Request, response: Response, _next: NextFunction) {
    const { id } = request.body;
    const { userId } = request;

    const usersRepository = getRepository(UsuarioShare);
    const user = await usersRepository.findOne(userId);

    if (!user) {
      return _next(new Error('User not found.'));
    }

    if (user.role !== UserRoles.admin) {
      return _next(
        new AppError('Only the administrator can delete a course.', 401)
      );
    }

    const coursesRepository = getRepository(Curso);
    const course = await coursesRepository.findOne(id);

    if (!course) {
      return _next(new AppError('Course not found.', 404));
    }

    await coursesRepository.remove(course);

    return response.status(200).json({
      message: 'Course successfully deleted.',
    });
  }
}

export default CoursesController;
