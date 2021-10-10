import request from 'supertest';
import app from '../../../src/app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../../../src/models/UsuarioShare';
import { AsksTypes } from '../../../src/typings/AsksTypes';
import { UserRoles } from '../../../src/typings/UserRoles';

let superAdminToken: string;
let connection: Connection;

const createUsers = async (connection: Connection) => {
  const usersRepository = connection.getRepository(UsuarioShare);
  const superAdminUser = usersRepository.create({
    email: 'super-admin@example.com',
    senha: '$2b$10$c9v0imXbhfVuBgLfwaYSLubxb8.gpvr4MfX1ltmEDwIdh.x3ksj.y',
    nome: 'Super Admin',
    role: UserRoles.superAdmin,
    cpf: '12345678912',
    cidade: 'Capela do Alto',
    estado: 'São Paulo',
    pais: 'Brasil',
    nascimento: new Date(),
    telefone: '15997965485',
  });
  await usersRepository.save(superAdminUser);
};

const getToken = async () => {
  const responseSuperAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'super-admin@example.com',
      password: 'correct_password',
    });
  superAdminToken = responseSuperAdmin.body.token;
};

describe('Create Ask test', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createUsers(connection);
    await getToken();
  });

  it('Should be possible to create asks of type discursive', async () => {
    const httpRequest = {
      type: AsksTypes.discursive,
      ask: 'any_ask',
    };
    const response = await request(app)
      .post('/api/ask')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send(httpRequest);

    expect(response.body.message).toBe('Question successfully created');
    expect(response.status).toBe(201);
  });

  it('Should be possible to create asks of type alternative', async () => {
    const httpRequest = {
      type: AsksTypes.alternative,
      ask: 'any_ask',
      alternatives: {
        one: 'any_alternative',
        two: 'any_alternative',
        tree: 'any_alternative',
        four: 'any_alternative',
        five: 'any_alternative',
      },
    };
    const response = await request(app)
      .post('/api/ask')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send(httpRequest);
    expect(response.body.message).toBe('Question successfully created');
    expect(response.body.questionCreated).toEqual(httpRequest);
    expect(response.status).toBe(201);
  });

  it('Should not be possible to create asks without ask', async () => {
    const httpRequest = {
      type: AsksTypes.alternative,
      alternatives: {
        one: 'any_alternative',
        two: 'any_alternative',
        tree: 'any_alternative',
        four: 'any_alternative',
        five: 'any_alternative',
      },
    };
    const response = await request(app)
      .post('/api/ask')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send(httpRequest);

    expect(response.body.message).toBe('Something wrong with the request.');
    expect(response.status).toBe(400);
  });

  it('Should not be possible to create asks without type', async () => {
    const httpRequest = {
      ask: 'any_type',
      alternatives: {
        one: 'any_alternative',
        two: 'any_alternative',
        tree: 'any_alternative',
        four: 'any_alternative',
        five: 'any_alternative',
      },
    };
    const response = await request(app)
      .post('/api/ask')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send(httpRequest);

    expect(response.body.message).toBe('Something wrong with the request.');
    expect(response.status).toBe(400);
  });

  it('Should not be possible to create asks with invalid type', async () => {
    const httpRequest = {
      ask: 'any_ask',
      type: 'invalid_type',
      alternatives: {
        one: 'any_alternative',
        two: 'any_alternative',
        tree: 'any_alternative',
        four: 'any_alternative',
        five: 'any_alternative',
      },
    };
    const response = await request(app)
      .post('/api/ask')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send(httpRequest);

    expect(response.body.message).toBe('Invalid type');
    expect(response.status).toBe(400);
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .post('/api/ask')
      .set({ authorization: `Bearer ${'invalid_token'}` })
      .send({
        type: 'any_type',
        ask: 'any_ask',
      });

    expect(response.status).toBe(401);
  });
});
