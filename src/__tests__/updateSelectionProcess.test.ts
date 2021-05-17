import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

let adminToken: string;
let nonAdminToken: string;
let connection: Connection;
let selectionProcessId: string;
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

const createSelectionProcess = async () => {
  const createSelectionProcessResponse = await request(app)
    .post('/api/selection-process')
    .set({ 'x-access-token': adminToken })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
      editalLink: 'link edital',
      manualLink: 'link manual',
    });

  selectionProcessId = createSelectionProcessResponse.body.selectionProcess.id;
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

  it('Should be possible to update a selection process.', async () => {
    const response = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      'Selection process successfully updated.'
    );
    expect(response.body).toHaveProperty('selectionProcess');
  });

  test('Only the admin should be able to update a selection process.', async () => {
    const response = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can update a selection process.'
    );
  });

  it('Should not be possible to update a selection process that does not exist.', async () => {
    const response = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: 'Non-existent id',
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Selection Process not found.');
  });

  it('Should not be possible to update with an invalid date format.', async () => {
    const response1 = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        startDate: '123/a',
        endDate: futureDate.toJSON(),
      });
    const response2 = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: '12/03/2020',
      });
    const response3 = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        endDate: '12/03/2020',
      });
    const response4 = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        endDate: '12/03/2020',
      });

    expect(response1.status).toBe(400);
    expect(response1.body.message).toBe('Invalid Date.');
    expect(response2.status).toBe(400);
    expect(response2.body.message).toBe('Invalid Date.');
    expect(response3.status).toBe(400);
    expect(response3.body.message).toBe('Invalid Date.');
    expect(response4.status).toBe(400);
    expect(response4.body.message).toBe('Invalid Date.');
  });

  test('Start date cannot be greater than end date.', async () => {
    const newFutureDate = new Date();
    newFutureDate.setFullYear(newFutureDate.getFullYear() + 10);
    const newPastDate = new Date();
    newPastDate.setFullYear(newPastDate.getFullYear() - 10);

    const responseStartDate = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        startDate: newFutureDate.toJSON(),
      });
    const responseEndDate = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        endDate: newPastDate.toJSON(),
      });

    expect(responseStartDate.status).toBe(400);
    expect(responseStartDate.body.message).toBe(
      'endDate must be greater than startDate.'
    );
    expect(responseEndDate.status).toBe(400);
    expect(responseEndDate.body.message).toBe(
      'endDate must be greater than startDate.'
    );
  });

  it('Should be possible to update only a few properties.', async () => {
    const responseStartDate = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        startDate: pastDate.toJSON(),
      });
    const responseEndDate = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        endDate: futureDate.toJSON(),
      });
    const responseName = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': adminToken })
      .send({
        id: selectionProcessId,
        name: 'New Selection Process Name',
      });

    expect(responseStartDate.body.message).toBe(
      'Selection process successfully updated.'
    );
    expect(responseStartDate.status).toBe(200);
    expect(responseStartDate.body.message).toBe(
      'Selection process successfully updated.'
    );
    expect(responseEndDate.status).toBe(200);
    expect(responseEndDate.body.message).toBe(
      'Selection process successfully updated.'
    );
    expect(responseName.status).toBe(200);
    expect(responseName.body.message).toBe(
      'Selection process successfully updated.'
    );
    expect(responseName.body.selectionProcess.name).toBe(
      'New Selection Process Name'
    );
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .patch('/api/selection-process')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        id: selectionProcessId,
        name: 'Selection Process Name',
        startDate: pastDate.toJSON(),
        endDate: futureDate.toJSON(),
      });

    expect(response.status).toBe(401);
  });
});
