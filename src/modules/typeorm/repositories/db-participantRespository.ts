import { getRepository, Repository } from 'typeorm';
import { ParticipantsRepository } from '../../repositories/participantRepository';
import { Participante } from '../models/Participante';

export class DbParticipantRepository implements ParticipantsRepository {
  private readonly ormRepository: Repository<Participante>;

  constructor() {
    this.ormRepository = getRepository(Participante);
  }

  async findOne({
    userId,
  }: ParticipantsRepository.Input): Promise<ParticipantsRepository.Output> {
    return this.ormRepository.findOne(userId, {
      select: ['id'],
      relations: ['inscricoes'],
    });
  }
}
