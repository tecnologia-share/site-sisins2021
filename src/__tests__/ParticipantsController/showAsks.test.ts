import request from 'supertest';
import app from '../../app';
import { Connection, createConnection } from 'typeorm';
import { createParticipant } from '../../utils/tests';

const URL = '/api/participants/asks';

let connection: Connection;

describe('Show Asks Test', () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
    }
    await connection.dropDatabase();
    await connection.runMigrations();

    await createParticipant(connection);
    // TODO criar createAsk para fazer os testes de verificação do retorno do objeto ask
  });

  test('should show registered asks', async () => {
    const response = await request(app).get(URL);
    expect(response.status).toBe(200);
  });
});
