import request from 'supertest';
import app from '../../shared/infra/http/app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../../../src/modules/typeorm/models/UsuarioShare';
import { UserRoles } from '../../shared/typings/UserRoles';

let superAdminToken: string;
let nonSuperAdminToken: string;
let connection: Connection;

const createUsers = async (connection: Connection) => {
  const usersRepository = connection.getRepository(UsuarioShare);
  const nonSuperAdminUser = usersRepository.create({
    email: 'non_superAdmin@example.com',
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
  await usersRepository.save(nonSuperAdminUser);
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
  const responseNonSuperAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'non_superAdmin@example.com',
      password: 'correct_password',
    });
  const responseSuperAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'super-admin@example.com',
      password: 'correct_password',
    });

  nonSuperAdminToken = responseNonSuperAdmin.body.token;
  superAdminToken = responseSuperAdmin.body.token;
};

describe('Create users share test', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createUsers(connection);
    await getToken();
  });

  it('Should be possible to create a users-share.', async () => {
    const response = await request(app)
      .post('/api/super-admin')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send({
        name: 'Teacher',
        email: 'teacher@email.com',
        password: 'password',
        cpf: '44444444460',
        role: UserRoles.teacher,
        phone: '11612341234',
        birth_date: '04/04/2000',
        country: 'Brasil',
        state: 'SP',
        city: 'São Paulo',
      });

    expect(response.body.message).toBe('User Share successfully created.');
    expect(response.status).toBe(201);
  });

  test('Only the super admin can create a user share.', async () => {
    const response = await request(app)
      .post('/api/super-admin')
      .set({ authorization: `Bearer ${nonSuperAdminToken}` })
      .send({
        name: 'Teacher',
        email: 'teacher@email.com',
        password: 'password',
        cpf: '44444444460',
        role: UserRoles.teacher,
        phone: '11612341234',
        birth_date: '04/04/2000',
        country: 'Brasil',
        state: 'SP',
        city: 'São Paulo',
      });

    expect(response.body.message).toBe(
      'You are not authorized to access this route'
    );
    expect(response.status).toBe(401);
  });

  it('Should not be possible to create a user share if email already exist', async () => {
    const response = await request(app)
      .post('/api/super-admin')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send({
        name: 'User already exist',
        email: 'non_superAdmin@example.com',
        password: 'password',
        cpf: '44444444460',
        role: UserRoles.admin,
        phone: '11612341234',
        birth_date: '04/04/2000',
        country: 'Brasil',
        state: 'SP',
        city: 'São Paulo',
      });

    expect(response.body.message).toBe('Email already exists!');
    expect(response.status).toBe(400);
  });

  it('Should not be possible to create a user share if CPF already exist', async () => {
    const response = await request(app)
      .post('/api/super-admin')
      .set({ authorization: `Bearer ${superAdminToken}` })
      .send({
        name: 'CPF already exist',
        email: 'non_superAdmin@example.com',
        password: 'password',
        cpf: '12345678912',
        role: UserRoles.admin,
        phone: '11612341234',
        birth_date: '04/04/2000',
        country: 'Brasil',
        state: 'SP',
        city: 'São Paulo',
      });

    expect(response.body.message).toBe('Email already exists!');
    expect(response.status).toBe(400);
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .post('/api/super-admin')
      .set({ authorization: `Bearer ${'invalid_token'}` })
      .send({
        name: 'Teacher',
        email: 'teacher@email.com',
        password: 'password',
        cpf: '44444444460',
        role: UserRoles.admin,
        phone: '11612341234',
        birth_date: '04/04/2000',
        country: 'Brasil',
        state: 'SP',
        city: 'São Paulo',
      });

    expect(response.status).toBe(401);
  });
});
