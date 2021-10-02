import request from 'supertest';
import app from '../../app';
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
} from '../../utils/tests';
import { SubscriptionStatus } from '../../typings/SubscriptionStatus';

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
  test('should be possible get data of subscribe', async () => {
    const response = await request(app)
      .patch(`/api/subscribe`)
      .set({ authorization: `Bearer ${adminToken}` })
      .send({ id: subscribeId, status: SubscriptionStatus.droppedOut });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Subscribe blocked.' });
  });

  it('Should return 401 UNAUTHORIZED if the token sent is invalid', async () => {
    const response = await request(app)
      .get(`/api/subscribe/${subscribeId}`)
      .set({ authorization: `invalid_token` });

    expect(response.status).toBe(401);
  });
});
