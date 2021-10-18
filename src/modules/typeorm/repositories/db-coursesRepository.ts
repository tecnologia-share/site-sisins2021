import { getRepository, Repository } from 'typeorm';
import { CoursesRepository } from '../../repositories/coursesRepository';
import { ParticipantsRepository } from '../../repositories/participantRepository';
import { Curso } from '../models/Curso';
import { Participante } from '../models/Participante';

export class DbCoursesRepository implements CoursesRepository {
  private readonly ormRepository: Repository<Curso>;

  constructor() {
    this.ormRepository = getRepository(Curso);
  }

  async findOne({
    courseId,
  }: CoursesRepository.Input): Promise<CoursesRepository.Output> {
    return this.ormRepository.findOne(courseId, {
      relations: ['processoSeletivo'],
    });
  }
}
