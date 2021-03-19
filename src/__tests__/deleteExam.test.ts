import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';

let adminToken: string;
let nonAdminToken: string;
let examId: string;
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

  const courseId = courseResponse.body.course.id;

  const examResponse = await request(app)
    .post('/api/exams')
    .set({ 'x-access-token': adminToken })
    .send({
      courseId,
      questions: [
        {
          title: 'Question 1',
          question: 'Correct Alternative is the 2.',
          image: 'Image Path',
          alternative1: 'Alternative 1',
          alternative2: 'Alternative 2',
          alternative3: 'Alternative 3',
          alternative4: 'Alternative 4',
          alternative5: 'Alternative 5',
          correctAlternative: 2,
          points: 10,
        },
      ],
    });

  examId = examResponse.body.exam.id;
};

describe('Delete Exam tests', () => {
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

  it('Should be possible to delete an exam.', async () => {
    const response = await request(app)
      .delete('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Exam successfully deleted.');
  });

  it('Should not be possible to delete an exam if the user is not an admin.', async () => {
    const response = await request(app)
      .delete('/api/exams')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        id: examId,
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can delete an exam.'
    );
  });

  it('Should return 400 BAD REQUEST id is missing.', async () => {
    const response = await request(app)
      .delete('/api/exams')
      .set({ 'x-access-token': adminToken });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Something wrong with the request.');
  });

  it('Should not be possible to delete an exam if the exam does not exists.', async () => {
    const response = await request(app)
      .delete('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Exam not found.');
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .delete('/api/exams')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        id: examId,
      });

    expect(response.status).toBe(401);
  });
});
