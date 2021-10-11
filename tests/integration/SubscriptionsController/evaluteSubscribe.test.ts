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
import { SubscriptionStatus } from '../../shared/typings/SubscriptionStatus';

let connection: Connection;
let adminToken: string;
const qtySubscribes = 10;
let courseId: string;
let selectionProcessId: string;
let subscribeId: string;

describe('Evalute Subscribe tests', () => {
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

  test('should return 200 and status property on success', async () => {
    const response = await request(app)
      .patch(`/api/subscriptions`)
      .set({ authorization: `Bearer ${adminToken}` })
      .send({ id: subscribeId, status: SubscriptionStatus.approved });
    expect(response.status).toBe(200);

    expect(response.body).not.toHaveProperty('blocked_date');
    expect(response.body).toHaveProperty('status');
  });

  test('should return 200 and blocked_date property if status change to droppedOut', async () => {
    const response = await request(app)
      .patch(`/api/subscriptions`)
      .set({ authorization: `Bearer ${adminToken}` })
      .send({ id: subscribeId, status: SubscriptionStatus.droppedOut });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('blocked_date');
    expect(response.body).toHaveProperty('status');
  });

  test('should return 400 if received invalid status', async () => {
    const response = await request(app)
      .patch(`/api/subscriptions`)
      .set({ authorization: `Bearer ${adminToken}` })
      .send({ id: subscribeId, status: 'invalid_status' });

    expect(response.status).toBe(400);
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .get(`/api/subscriptions/${subscribeId}`)
      .set({ authorization: `invalid_token` });

    expect(response.status).toBe(401);
  });
});
