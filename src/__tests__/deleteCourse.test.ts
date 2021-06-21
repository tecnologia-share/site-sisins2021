import request from 'supertest';
import app from '../app';
import { Connection, createConnection } from 'typeorm';
import {
  createAdmin,
  createNonAdmin,
  genTokenAdmin,
  genTokenNonAdmin,
} from '../utils/tests';

let adminToken: string;
let nonAdminToken: string;
let courseId: string;
let connection: Connection;

const createCourse = async () => {
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);

  const selectionProcessResponse = await request(app)
    .post('/api/selection-process')
    .set({ authorization: `Bearer ${adminToken}` })
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
    .set({ authorization: `Bearer ${adminToken}` })
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

describe('Delete courses', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createAdmin(connection);
    await createNonAdmin(connection);
    adminToken = await genTokenAdmin();
    nonAdminToken = await genTokenNonAdmin();
    await createCourse();
  });

  it('Should be possible to delete a course.', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ authorization: `Bearer ${adminToken}` })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Course successfully deleted.');
  });

  test('Only the admin can delete a course.', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ authorization: `Bearer ${nonAdminToken}` })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      'You are not authorized to access this route'
    );
  });

  it('Should be possible to delete a course only if it exists.', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ authorization: `Bearer ${adminToken}` })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Course not found.');
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .delete('/api/courses')
      .set({ authorization: 'invalid_token' })
      .send({
        id: courseId,
      });

    expect(response.status).toBe(401);
  });
});
