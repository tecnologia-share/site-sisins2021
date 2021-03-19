import request from 'supertest';
import app from '../app';
import { Connection, createConnection, getRepository } from 'typeorm';
import { UsuarioShare } from '../models/UsuarioShare';
import { UserRoles } from '../typings/UserRoles';
import { Questao } from '../models/Questao';

let adminToken: string;
let nonAdminToken: string;
let connection: Connection;
let courseId: string;
let examId: string;
let questionId: string;

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

const getTokens = async () => {
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

  const responseExam = await request(app)
    .post('/api/exams')
    .set({ 'x-access-token': adminToken })
    .send({
      courseId,
      questions: [
        {
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

  examId = responseExam.body.exam.id;

  const questionsRepository = getRepository(Questao);

  const question = await questionsRepository.findOne();

  questionId = (question as Questao).id;
};

describe('Update Exam tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await populateDatabase(connection);
    await getTokens();
    await createCourse();
  });

  it('Should be possible to update an exam.', async () => {
    const responseWithQuestionId = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
        questions: [
          {
            id: questionId,
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
    const responseWithoutQuestionId = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
        questions: [
          {
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

    expect(responseWithQuestionId.status).toBe(200);
    expect(responseWithQuestionId.body.message).toBe(
      'Exam successfully updated.'
    );
    expect(responseWithQuestionId.body).toHaveProperty('exam');
    expect(responseWithoutQuestionId.status).toBe(200);
    expect(responseWithoutQuestionId.body.message).toBe(
      'Exam successfully updated.'
    );
    expect(responseWithoutQuestionId.body).toHaveProperty('exam');
  });

  it('Should not be possible to update an exam if the user is not an admin.', async () => {
    const response = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': nonAdminToken })
      .send({
        id: examId,
        questions: [
          {
            id: questionId,
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

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'Only the administrator can update an exam.'
    );
  });

  it('Should not be possible to update a question if the question does not exists.', async () => {
    const response = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
        questions: [
          {
            id: 'Non-existent-id',
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

    expect(response.status).toBe(404);
    expect(response.body.message).toBe(`Question Non-existent-id not found.`);
  });

  it('Should return 400 BAD REQUEST if any information is missing from the request.', async () => {
    const responseWithoutExamId = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        questions: [
          {
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
    const responseWithoutQuestions = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
      });
    const responseWithoutQuestionsProps = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
        questions: [
          {
            question: 'Correct Alternative is the 2.',
            image: 'Image Path',
            alternative1: 'Alternative 1',
            alternative2: 'Alternative 2',
            alternative3: 'Alternative 3',
            points: 10,
          },
        ],
      });

    expect(responseWithoutExamId.status).toBe(400);
    expect(responseWithoutExamId.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutQuestions.status).toBe(400);
    expect(responseWithoutQuestions.body.message).toBe(
      'Something wrong with the request.'
    );
    expect(responseWithoutQuestionsProps.status).toBe(400);
    expect(responseWithoutQuestionsProps.body.message).toBe(
      'Something wrong with the request.'
    );
  });

  it('Should not be possible to update an exam if the exam does not exists.', async () => {
    const response = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: 'Non-existent id',
        questions: [
          {
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

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Exam not found.');
  });

  it('Should not be possible to update an exam if the correct alternative not exists.', async () => {
    const response1 = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
        questions: [
          {
            question: 'Correct Alternative is the 2.',
            image: 'Image Path',
            alternative1: 'Alternative 1',
            alternative2: 'Alternative 2',
            alternative3: 'Alternative 3',
            alternative4: 'Alternative 4',
            alternative5: 'Alternative 5',
            correctAlternative: 7,
            points: 10,
          },
        ],
      });
    const response2 = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': adminToken })
      .send({
        id: examId,
        questions: [
          {
            question: 'Correct Alternative is the 2.',
            image: 'Image Path',
            alternative1: 'Alternative 1',
            alternative2: 'Alternative 2',
            alternative3: 'Alternative 3',
            alternative4: 'Alternative 4',
            alternative5: 'Alternative 5',
            correctAlternative: 0,
            points: 10,
          },
        ],
      });

    expect(response1.status).toBe(400);
    expect(response1.body.message).toBe('Something wrong with the request.');
    expect(response2.status).toBe(400);
    expect(response2.body.message).toBe('Something wrong with the request.');
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .patch('/api/exams')
      .set({ 'x-access-token': 'invalid_token' })
      .send({
        id: examId,
        questions: [
          {
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

    expect(response.status).toBe(401);
  });
});
