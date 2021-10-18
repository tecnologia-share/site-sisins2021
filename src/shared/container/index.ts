import { container } from 'tsyringe';
import {
  CoursesRepository,
  ParticipantsRepository,
} from '../../modules/subscriptions/repositories';
import {
  DbCoursesRepository,
  DbParticipantRepository,
} from '../infra/typeorm/repositories';

export { container };

container.registerSingleton<ParticipantsRepository>(
  'ParticipantsRepository',
  DbParticipantRepository
);

container.registerSingleton<CoursesRepository>(
  'CoursesRepository',
  DbCoursesRepository
);
