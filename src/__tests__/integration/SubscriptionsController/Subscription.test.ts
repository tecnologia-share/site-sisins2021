import request from 'supertest';
import app from '../../../app';
import { Connection, createConnection } from 'typeorm';
import { Participante } from '../../../models/Participante';
import { Curso } from '../../../models/Curso';
import {
  createAdmin,
  createCourse,
  createSelectionProcess,
  createSelectionProcessInactive,
  genTokenAdmin,
  getTokenSubscribeBlocked,
} from '../../_utils';
import { Prova } from '../../../models/Prova';
import { Questao } from '../../../models/Questao';

let token: string;
let connection: Connection;
let courseId: string;
let courseWithExamId: string;
let courseInactiveId: string;
let thirdCourseId: string;
let questionId: string;
let tokenParticipantBlocked: string;

const populateDatabase = async (
  connection: Connection,
  selectiveProcessId: string
) => {
  const participantsRepository = connection.getRepository(Participante);
  const participant = participantsRepository.create({
    email: 'this_email_exists@example.com',
    senha: '$2b$10$6FD3duMwr0qUTbREF.jE7O7AidMeeZPcGRTIAUh77Ml/jbpVnUYwy',
    cidade: 'Test',
    estado: 'Test',
    cpf: '12345678912',
    nascimento: new Date(1999, 2, 27),
    nome: 'Test',
    pais: 'Test',
    telefone: '1234',
  });
  await participantsRepository.save(participant);

  const coursesRepository = connection.getRepository(Curso);
  const course = coursesRepository.create({
    categoria: 'Example',
    descricao: 'Description',
    horario: 'From 8h to 9h',
    nome: 'Course Name',
    professor: 'Professor Name',
    processo_seletivo_id: selectiveProcessId,
    tempo_duracao: '6 meses',
  });
  await coursesRepository.save(course);

  const courseWithExam = coursesRepository.create({
    categoria: 'Example',
    descricao: 'Description',
    horario: 'From 8h to 9h',
    nome: 'Course Name',
    professor: 'Professor Name',
    processo_seletivo_id: selectiveProcessId,
    tempo_duracao: '6 meses',
  });
  await coursesRepository.save(courseWithExam);

  const thirdCourse = coursesRepository.create({
    categoria: 'Example',
    descricao: 'Description',
    horario: 'From 8h to 9h',
    nome: 'Course Name',
    professor: 'Professor Name',
    processo_seletivo_id: selectiveProcessId,
    tempo_duracao: '6 meses',
  });
  await coursesRepository.save(thirdCourse);

  const examsRepository = connection.getRepository(Prova);
  const exam = examsRepository.create({
    curso_id: courseWithExam.id,
  });
  await examsRepository.save(exam);

  const questionsRepository = connection.getRepository(Questao);
  const question = questionsRepository.create({
    imagem: '',
    alternativa1: 'Alternative 1',
    alternativa2: 'Alternative 2',
    alternativa3: 'Alternative 3',
    alternativa4: 'Alternative 4',
    alternativa5: 'Alternative 5',
    gabarito: 2,
    pergunta: 'Question Title',
    pontos: 10,
    prova_id: exam.id,
  });
  await questionsRepository.save(question);

  courseId = course.id;
  courseWithExamId = courseWithExam.id;
  questionId = question.id;
  thirdCourseId = thirdCourse.id;
};

const getToken = async () => {
  const response = await request(app).post('/api/authenticate').send({
    email: 'this_email_exists@example.com',
    password: 'correct_password',
  });

  token = response.body.token;
};

describe('Subscriptions tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();
    await createAdmin(connection);
    const adminToken = await genTokenAdmin();
    const selectionProcessInactiveId = await createSelectionProcessInactive(
      connection
    );
    await populateDatabase(
      connection,
      await createSelectionProcess(adminToken)
    );
    courseInactiveId = await createCourse(
      selectionProcessInactiveId,
      adminToken
    );
    await getToken();

    tokenParticipantBlocked = await getTokenSubscribeBlocked(
      connection,
      courseInactiveId,
      adminToken
    );
  });

  it('Should be possible to enroll for a course that does not have an exam.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId,
        reason: 'My Reason',
        videoLink: 'link',
      });

    expect(response.body.message).toBe('Successful subscription.');
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('subscription');
  });

  it('Should not be possible to enroll for a course that is not open for subscriptions.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId: courseInactiveId,
        reason: 'My Reason',
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'This course is not open for subscriptions.'
    );
  });

  it('Should return 400 BAD REQUEST if the request body is in the wrong format.', async () => {
    const responseWithoutCourseId = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        reason: 'My Reason',
      });

    const responseWithouReason = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId,
      });

    const responseWithExamAnswersMalformed = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId,
        reason: 'My Reason',
        examAnswers: [
          {
            questionId: 'questionId',
          },
        ],
      });

    expect(responseWithoutCourseId.status).toBe(400);
    expect(responseWithoutCourseId.body.message).toBe(
      'courseId is a required field'
    );
    expect(responseWithouReason.status).toBe(400);
    expect(responseWithoutCourseId.body.message).toBe(
      'courseId is a required field'
    );
    expect(responseWithExamAnswersMalformed.status).toBe(400);
    expect(responseWithExamAnswersMalformed.body.message).toBe(
      'examAnswers[0].response is a required field'
    );
  });

  it('Should not be able to enroll in a course that does not exist.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId: 'nonexistent_id',
        reason: 'My Reason',
      });

    expect(response.body.message).toBe('Course not found.');
    expect(response.status).toBe(404);
  });

  it('Should return 400 BAD REQUEST if the answer to any question in the test is missing.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId: courseWithExamId,
        reason: 'My Reason',
        examAnswers: [],
      });

    expect(response.body.message).toBe('Some answer is missing.');
    expect(response.status).toBe(400);
  });

  it('Should be possible to enroll for a course that has exam.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId: courseWithExamId,
        reason: 'My Reason',
        examAnswers: [
          {
            questionId,
            response: 2,
          },
        ],
      });

    expect(response.body.message).toBe('Successful subscription.');
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('subscription');
  });

  it('Should not be possible to enroll in more than two courses.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId: thirdCourseId,
        reason: 'My Reason',
      });

    expect(response.body.message).toBe(
      'Participant already has two subscriptions.'
    );
    expect(response.status).toBe(400);
  });

  it('Should not be possible to enroll in the same course twice.', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId,
        reason: 'My Reason',
        examAnswers: [
          {
            questionId,
            response: 1,
          },
        ],
      });

    expect(response.body.message).toBe(
      'Participant already subscribed in this course.'
    );
    expect(response.status).toBe(400);
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: 'invalid_token' })
      .send({
        courseId,
        reason: 'My Reason',
        examAnswers: [
          {
            questionId,
            response: 2,
          },
        ],
      });

    expect(response.status).toBe(401);
  });

  it('Should return 403 FORBIDDEN if participant is blocked', async () => {
    const response = await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${tokenParticipantBlocked}` })
      .send({
        courseId,
        reason: 'My Reason',
        videoLink: 'link',
      });

    expect(response.body.message).toBe('Participant is blocked');
    expect(response.status).toBe(403);
  });
});
