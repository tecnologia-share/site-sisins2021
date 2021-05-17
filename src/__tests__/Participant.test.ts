import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { Participante } from '../models/Participante';

let token = '';
let connection: Connection;

const populateDatabase = async (connection: Connection) => {
  const participantRepository = connection.getRepository(Participante);
  const participant = participantRepository.create({
    email: 'this_email_exists@example.com',
    senha: '$2b$10$c9v0imXbhfVuBgLfwaYSLubxb8.gpvr4MfX1ltmEDwIdh.x3ksj.y',
    cidade: 'Test',
    estado: 'Test',
    nascimento: new Date(1999, 2, 27),
    cpf: '12345678912',
    nome: 'Test',
    pais: 'Test',
    telefone: '1234',
  });
  await participantRepository.save(participant);
};

const getToken = async () => {
  const response = await request(app).post('/api/authenticate').send({
    email: 'this_email_exists@example.com',
    password: 'correct_password',
  });

  token = response.body.token;
};

describe('Participant update email', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await populateDatabase(connection);
    await getToken();
  });

  it('Should update the email successfully if the correct password and valid token are sent', async () => {
    const response = await request(app)
      .patch('/api/participants/update-email')
      .set({ 'x-access-token': token })
      .send({
        email: 'another_email@example.com',
        password: 'correct_password',
      });

    expect(response.status).toBe(200);
  });

  it('Should return 400 BAD REQUEST if the password or email is not sent', async () => {
    const responseWithoutPassword = await request(app)
      .patch('/api/participants/update-email')
      .set({ 'x-access-token': token })
      .send({
        email: 'another_email@example.com',
      });
    const responseWithoutEmail = await request(app)
      .patch('/api/participants/update-email')
      .set({ 'x-access-token': token })
      .send({
        password: 'correct_password',
      });

    expect(responseWithoutPassword.status).toBe(400);
    expect(responseWithoutEmail.status).toBe(400);
  });

  it('Should return 401 UNAUTHORIZED if the password or token sent is invalid', async () => {
    const responseWithInvalidPassword = await request(app)
      .patch('/api/participants/update-email')
      .set({ 'x-access-token': token })
      .send({
        email: 'another_email@example.com',
        password: 'incorrect_password',
      });
    const responseWithInvalidToken = await request(app)
      .patch('/api/participants/update-email')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        email: 'another_email@example.com',
        password: 'correct_password',
      });

    expect(responseWithInvalidPassword.status).toBe(401);
    expect(responseWithInvalidToken.status).toBe(401);
  });
});

describe('Participant update password', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await populateDatabase(connection);
    await getToken();
  });

  it('Should return 400 BAD REQUEST if the currentPassword or newPassword is not sent', async () => {
    const responseWithoutCurrentPassword = await request(app)
      .patch('/api/participants/update-password')
      .set({ 'x-access-token': token })
      .send({
        newPassword: 'new_password',
      });
    const responseWithoutNewPassword = await request(app)
      .patch('/api/participants/update-password')
      .set({ 'x-access-token': token })
      .send({
        currentPassword: 'correct_password',
      });

    expect(responseWithoutCurrentPassword.status).toBe(400);
    expect(responseWithoutNewPassword.status).toBe(400);
  });

  it('Should return 401 UNAUTHORIZED if the password or token sent is invalid', async () => {
    const responseWithInvalidPassword = await request(app)
      .patch('/api/participants/update-password')
      .set({ 'x-access-token': token })
      .send({
        currentPassword: 'incorrect_password',
        newPassword: 'new_password',
      });
    const responseWithInvalidToken = await request(app)
      .patch('/api/participants/update-password')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        currentPassword: 'correct_password',
        newPassword: 'new_password',
      });

    expect(responseWithInvalidPassword.status).toBe(401);
    expect(responseWithInvalidToken.status).toBe(401);
  });

  it('Should update the password successfully if the correct password and valid token are sent', async () => {
    const response = await request(app)
      .patch('/api/participants/update-password')
      .set({ 'x-access-token': token })
      .send({
        currentPassword: 'correct_password',
        newPassword: 'new_password',
      });

    expect(response.status).toBe(200);
  });
});

describe('Participant update personal data', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await populateDatabase(connection);
    await getToken();
  });

  it('Should successfully update personal data if an valid token are sent', async () => {
    const responseWithAllUpdates = await request(app)
      .patch('/api/participants')
      .set({ 'x-access-token': token })
      .send({
        nome: 'new nome',
        telefone: '1234',
        nascimento: new Date(2021, 3, 14),
        pais: 'new pais',
        estado: 'new estado',
        cidade: 'new cidade',
      });

    const responseWithFewUpdates = await request(app)
      .patch('/api/participants')
      .set({ 'x-access-token': token })
      .send({
        nome: 'new nome 2',
        cidade: 'new cidade 2',
      });

    expect(responseWithAllUpdates.status).toBe(200);
    expect(responseWithFewUpdates.status).toBe(200);
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .patch('/api/participants')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        nome: 'new nome',
        telefone: '1234',
        nascimento: new Date(2021, 3, 14),
        pais: 'new pais',
        estado: 'new estado',
        cidade: 'new cidade',
      });

    expect(response.status).toBe(401);
  });
});
