import request from 'supertest';
import app from '../../shared/infra/http/app';
import { Connection, createConnection } from 'typeorm';
import {
  createAdmin,
  genTokenAdmin,
  createSelectionProcess,
  createCourse,
  getTokensOfManyParcipants,
  createManyParticipants,
  subscribeParticipants,
  getSubscribeId,
} from '../../_utils';

let connection: Connection;
let adminToken: string;
const qtySubscribes = 10;
let courseId: string;
let selectionProcessId: string;
let subscribeId: string;

describe('Show Subscribe tests', () => {
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
    subscribeId = await getSubscribeId(connection);
  });
  test('should be possible get data of subscribe', async () => {
    const response = await request(app)
      .get(`/api/subscriptions/${subscribeId}`)
      .set({ authorization: `Bearer ${adminToken}` });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('subscribe');
  });

  test('Should not be possible to get subscribe if the id does not exists.', async () => {
    const response = await request(app)
      .get('/api/subscriptions/non-existent-id')
      .set({ authorization: `Bearer ${adminToken}` });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Subscribe not found.');
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .get(`/api/subscriptions/${subscribeId}`)
      .set({ authorization: `invalid_token` });

    expect(response.status).toBe(401);
  });
});
