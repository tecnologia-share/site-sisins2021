import { EntityRepository, Repository } from 'typeorm';
import { Participante } from '../models/Participante';

@EntityRepository(Participante)
class ParticipantesRepository extends Repository<Participante> {}

export default ParticipantesRepository;
