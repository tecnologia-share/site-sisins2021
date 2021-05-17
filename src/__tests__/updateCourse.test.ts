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
    cpf: '12345678912',
    cidade: 'Capela do Alto',
    estado: 'São Paulo',
    pais: 'Brasil',
    nascimento: new Date(),
    telefone: '15997965485',
  });
  await usersRepository.save(nonAdminUser);
  const adminUser = usersRepository.create({
    email: 'admin@example.com',
    senha: '$2b$10$c9v0imXbhfVuBgLfwaYSLubxb8.gpvr4MfX1ltmEDwIdh.x3ksj.y',
    nome: 'Admin',
    role: UserRoles.admin,
    cpf: '12345678912',
    cidade: 'Capela do Alto',
    estado: 'São Paulo',
    pais: 'Brasil',
    nascimento: new Date(),
    telefone: '15997965485',
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
      editalLink: 'link edital',
      manualLink: 'link manual',
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
      duration: '6 meses',
    });

  courseId = courseResponse.body.course.id;
};

describe('Update Course', () => {
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

  it('Should be possible to edit a course.', async () => {
    const response = await request(app)
      .patch('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        id: courseId,
        name: 'Another Name',
        category: 'Another Category',
        description: 'Another Description',
        time: 'Another Time',
        professor: 'Another Professor',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Course successfully updated.');
    expect(response.body).toHaveProperty('course');
  });

  it('Should be possible to edit a course only if that course exists.', async () => {
    const response = await request(app)
      .patch('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        id: 'Non-existent id',
        name: 'Another Name',
        category: 'Another Category',
        description: 'Another Description',
        time: 'Another Time',
        professor: 'Another Professor',
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Course not found.');
  });

  test('Only the admin can edit a course.', async () => {
    const response = await request(app)
      .patch('/api/courses')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        id: courseId,
        name: 'Name',
        category: 'Category',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can update a course.'
    );
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .patch('/api/courses')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        id: courseId,
        name: 'Another Name',
        category: 'Another Category',
        description: 'Another Description',
        time: 'Another Time',
        professor: 'Another Professor',
      });

    expect(response.status).toBe(401);
  });
});
