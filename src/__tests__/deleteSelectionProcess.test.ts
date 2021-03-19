import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';
import { Curso } from '../models/Curso';

let adminToken: string;
let nonAdminToken: string;
let connection: Connection;
let selectionProcessWithCourseId: string;
let selectionProcessWithoutCourseId: string;
const futureDate = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
const pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 1);

const populateDatabase = async (connection: Connection) => {
  const usersRepository = connection.getRepository(UsuarioShare);
  const nonAdminUser = usersRepository.create({
    email: 'non_admin@example.com',
    senha: '$2b$10$c9v0imXbhfVuBgLfwaYSLubxb8.gpvr4MfX1ltmEDwIdh.x3ksj.y',
    nome: 'Non Admin',
    role: 'Non Admin',
  });
  await usersRepository.save(nonAdminUser);
  const adminUser = usersRepository.create({
    email: 'admin@example.com',
    senha: '$2b$10$c9v0imXbhfVuBgLfwaYSLubxb8.gpvr4MfX1ltmEDwIdh.x3ksj.y',
    nome: 'Admin',
    role: UserRoles.admin,
  });
  await usersRepository.save(adminUser);
};

const getToken = async () => {
  const responseNonAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'non_admin@example.com',
      password: 'correct_password',
    });
  const responseAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'admin@example.com',
      password: 'correct_password',
    });

  nonAdminToken = responseNonAdmin.body.token;
  adminToken = responseAdmin.body.token;
};

const createSelectionProcess = async () => {
  const createSelectionProcessWithCourseResponse = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
    });
  const createSelectionProcessResponse = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
    });

  selectionProcessWithCourseId =
    createSelectionProcessWithCourseResponse.body.selectionProcess.id;
  selectionProcessWithoutCourseId =
    createSelectionProcessResponse.body.selectionProcess.id;

  const coursesRepository = connection.getRepository(Curso);
  const course = coursesRepository.create({
    categoria: 'Example',
    descricao: 'Description',
    horario: 'From 8h to 9h',
    nome: 'Course Name',
    professor: 'Professor Name',
    processo_seletivo_id: selectionProcessWithCourseId,
  });
  await coursesRepository.save(course);
};

describe('Update Selection Process tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await populateDatabase(connection);
    await getToken();
    await createSelectionProcess();
  });

  it('Should not be possible to exclude a selection process that has courses.', async () => {
    const response = await request(app)
      .delete('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessWithCourseId,
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'It is necessary to exclude courses associated with this selection process in order to exclude it.'
    );
  });

  it('Should not be possible to exclude a selection process that does not exist.', async () => {
    const response = await request(app)
      .delete('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: 'Some id',
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Selection Process not found.');
  });

  test('Only the admin can delete a selection process.', async () => {
    const response = await request(app)
      .delete('/api/selection-process')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        id: selectionProcessWithoutCourseId,
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can delete a selection process.'
    );
  });

  it('Should be possible to exclude a selection process.', async () => {
    const response = await request(app)
      .delete('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessWithoutCourseId,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Selection process successfully deleted.'
    );
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .delete('/api/selection-process')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        id: selectionProcessWithoutCourseId,
      });

    expect(response.status).toBe(401);
  });
});
