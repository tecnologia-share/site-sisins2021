import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

let adminToken: string;
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
  const responseAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'admin@example.com',
      password: 'correct_password',
    });

  adminToken = responseAdmin.body.token;
};

const createSelectionProcess = async () => {
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);

  const responseSelectionProcess = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
    });

  const responseInactiveSelectionProcess = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: new Date().toJSON(),
    });

  const selectionProcessId = responseSelectionProcess.body.selectionProcess.id;
  const InactiveSelectionProcessId =
    responseInactiveSelectionProcess.body.selectionProcess.id;

  await request(app)
    .post('/api/courses')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Active Course',
      category: 'Category',
      description: 'Description',
      time: 'Time',
      professor: 'Professor',
      selectionProcessId,
    });

  await request(app)
    .post('/api/courses')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Inactive Course',
      category: 'Category',
      description: 'Description',
      time: 'Time',
      professor: 'Professor',
      selectionProcessId: InactiveSelectionProcessId,
    });
};

describe('Show Courses tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createUsers(connection);
    await getToken();
    await createSelectionProcess();
  });

  it('Should be possible get all courses.', async () => {
    const response = await request(app).get('/api/courses');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('courses');
    expect(response.body.courses).toHaveLength(2);
  });

  it('Should be possible get only active courses.', async () => {
    const response = await request(app).get('/api/courses?state=active');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('courses');
    expect(response.body.courses).toHaveLength(1);
    expect(response.body.courses[0].name).toBe('Active Course');
  });

  it('Should be possible get only inactive courses.', async () => {
    const response = await request(app).get('/api/courses?state=inactive');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('courses');
    expect(response.body.courses).toHaveLength(1);
    expect(response.body.courses[0].name).toBe('Inactive Course');
  });

  it('Should return error if the state does not exists.', async () => {
    const response = await request(app).get(
      '/api/courses?state=non-existent-state'
    );

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid state.');
  });
});
