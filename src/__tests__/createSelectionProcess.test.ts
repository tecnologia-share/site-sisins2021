import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

let adminToken: string;
let nonAdminToken: string;
let connection: Connection;
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

describe('Create Selection Process tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await populateDatabase(connection);
    await getToken();
  });

  it('Deve ser possível cadastrar um processo seletivo.', async () => {
    const response = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe(
      'Selection process successfully created.'
    );
    expect(response.body).toHaveProperty('selectionProcess');
  });

  it('Não deve ser possível cadastrar um processo seletivo se o usuário não for admin.', async () => {
    const response = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can create a selection process.'
    );
  });

  it('Deve retornar 400 BAD REQUEST se estiver faltando alguma informação na requisição.', async () => {
    const responseWithoutName = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });
    const responseWithoutStartDate = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Selection Process Name',
        endDate: futureDate.toJSON(),
      });
    const responseWithoutEndDate = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
      });

    expect(responseWithoutName.status).toBe(400);
    expect(responseWithoutName.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutStartDate.status).toBe(400);
    expect(responseWithoutStartDate.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutEndDate.status).toBe(400);
    expect(responseWithoutEndDate.body.message).toBe(
      'Something wrong with the request.'
    );
  });

  it('Deve retornar 400 BAD REQUEST se uma das datas estiver em formato errado.', async () => {
    const responseStartDateError = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Selection Process Name',
        startDate: '2020-03-17',
        endDate: futureDate.toJSON(),
      });
    const responseEndDateError = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: '123456789',
      });

    expect(responseStartDateError.status).toBe(400);
    expect(responseStartDateError.body.message).toBe('Invalid Date.');
    expect(responseEndDateError.status).toBe(400);
    expect(responseEndDateError.body.message).toBe('Invalid Date.');
  });

  it('endDate must be greater than startDate.', async () => {
    const response = await request(app)
      .post('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        name: 'Selection Process Name',
        startDate: futureDate.toJSON(),
        endDate: pastDate.toJSON(),
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'endDate must be greater than startDate.'
    );
  });
});
