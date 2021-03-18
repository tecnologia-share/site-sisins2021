import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { Participante } from '../models/Participante';
import { Curso } from '../models/Curso';
import { ProcessoSeletivo } from '../models/ProcessoSeletivo';
import { Prova } from '../models/Prova';
import { Questao } from '../models/Questao';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

let adminToken: string;
let nonAdminToken: string;
let selectionProcessId: string;
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

const createSelectionProcess = async () => {
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);

  const response = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
    });

  selectionProcessId = response.body.selectionProcess.id;
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
    await createSelectionProcess();
  });

  it('Deve ser possível criar um curso.', async () => {
    const response = await request(app)
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

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Course successfully created.');
    expect(response.body).toHaveProperty('course');
  });

  it('Somente o admin pode criar um curso.', async () => {
    const response = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        name: 'Name',
        category: 'Category',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
        selectionProcessId,
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can create a course.'
    );
  });

  it('Precisa de uma inscrição para criar um curso.', async () => {
    const response = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Name',
        category: 'Category',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
        selectionProcessId: 'Non-existent id',
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Selection process not found.');
  });

  it('Deve retornar erro se estiver faltando alguma propriedade no corpo da requisição.', async () => {
    const responseWithoutName = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        category: 'Category',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
        selectionProcessId,
      });
    const responseWithoutCategory = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Name',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
        selectionProcessId,
      });
    const responseWithoutDescription = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Name',
        category: 'Category',
        time: 'Time',
        professor: 'Professor',
        selectionProcessId,
      });
    const responseWithoutTime = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Name',
        category: 'Category',
        description: 'Description',
        professor: 'Professor',
        selectionProcessId,
      });
    const responseWithoutProfessor = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Name',
        category: 'Category',
        description: 'Description',
        time: 'Time',
        selectionProcessId,
      });
    const responseWithoutSelectionProcessId = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Name',
        category: 'Category',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
      });

    expect(responseWithoutName.status).toBe(400);
    expect(responseWithoutName.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutCategory.status).toBe(400);
    expect(responseWithoutCategory.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutDescription.status).toBe(400);
    expect(responseWithoutDescription.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutTime.status).toBe(400);
    expect(responseWithoutTime.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutProfessor.status).toBe(400);
    expect(responseWithoutProfessor.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutSelectionProcessId.status).toBe(400);
    expect(responseWithoutSelectionProcessId.body.message).toBe(
      'Something wrong with the request.'
    );
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .post('/api/courses')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        name: 'Name',
        category: 'Category',
        description: 'Description',
        time: 'Time',
        professor: 'Professor',
        selectionProcessId,
      });

    expect(response.status).toBe(401);
  });
});
