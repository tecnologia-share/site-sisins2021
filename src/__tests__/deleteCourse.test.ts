import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

let adminToken: string;
let nonAdminToken: string;
let courseId: string;
let connection: Connection;

const createUsers = async (connection: Connection) => {
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

const createCourse = async () => {
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);

  const selectionProcessResponse = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
    });

  const selectionProcessId = selectionProcessResponse.body.selectionProcess.id;

  const courseResponse = await request(app)
    .post('/api/courses')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Name',
      category: 'Category',
      description: 'Description',
      time: 'Time',
      professor: 'Professor',
      selectionProcessId,
    });

  courseId = courseResponse.body.course.id;
};

describe('Create Selection Process tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createUsers(connection);
    await getToken();
    await createCourse();
  });

  it('Should be possible to delete a course.', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Course successfully deleted.');
  });

  test('Only the admin can delete a course.', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can delete a course.'
    );
  });

  it('Should be possible to delete a course only if it exists.', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Course not found.');
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(401);
  });
});
