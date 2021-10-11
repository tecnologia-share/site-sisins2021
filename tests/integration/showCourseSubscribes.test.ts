import request from 'supertest';
import app from '../../src/shared/infra/http/app';
import { Connection, createConnection } from 'typeorm';
import {
  createAdmin,
  createCourse,
  createManyParticipants,
  createSelectionProcess,
  genTokenAdmin,
  getTokensOfManyParcipants,
  subscribeParticipants,
} from '../_utils';

let connection: Connection;
let adminToken: string;
const qtySubscribes = 10;
let courseId: string;
let selectionProcessId: string;

describe('Show Course Subscribes tests', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createAdmin(connection);
    adminToken = await genTokenAdmin();

    selectionProcessId = await createSelectionProcess(adminToken);
    courseId = await createCourse(selectionProcessId, adminToken);

    await createManyParticipants(connection, qtySubscribes);
    const arrayTokens = await getTokensOfManyParcipants(qtySubscribes);
    await subscribeParticipants(courseId, arrayTokens);
  });
  test('should be possible get all subscribes in the course', async () => {
    const response = await request(app)
      .get(`/api/courses/${courseId}/subscribes`)
      .set({ authorization: `Bearer ${adminToken}` });

    expect(response.body.subscribes).toHaveLength(qtySubscribes);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('subscribes');
  });

  test('Should not be possible to get subscribes if the course does not exists.', async () => {
    const response = await request(app)
      .get('/api/courses/non-existent-id/subscribes')
      .set({ authorization: `Bearer ${adminToken}` });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Course not found.');
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .get(`/api/courses/${courseId}/subscribes`)
      .set({ authorization: `invalid_token` });

    expect(response.status).toBe(401);
  });
});
