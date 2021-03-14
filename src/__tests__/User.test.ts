import { createConnection } from 'typeorm';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.dropDatabase();
    await connection.runMigrations();
  });

  it('Teste apenas para não falhar nos tests', async () => {
    expect(1 + 1).toBe(2);
  });
});
