import { container } from 'tsyringe';
import {
  CoursesRepository,
  ParticipantsRepository,
} from '../../modules/repositories';
import {
  DbCoursesRepository,
  DbParticipantRepository,
} from '../../modules/typeorm/repositories';

export { container };

container.registerSingleton<ParticipantsRepository>(
  'ParticipantsRepository',
  DbParticipantRepository
);

container.registerSingleton<CoursesRepository>(
  'CoursesRepository',
  DbCoursesRepository
);
