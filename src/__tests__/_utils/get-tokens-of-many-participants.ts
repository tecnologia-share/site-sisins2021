import request from 'supertest';
import app from '../../app';

export const getTokensOfManyParcipants = async (
  qty: number
): Promise<Array<string>> => {
  const responses = [];
  for (let i = 0; i < qty; i++) {
    responses.push(
      await request(app)
        .post('/api/authenticate')
        .send({
          email: `participant_${i}_@example.com`,
          password: 'correct_password',
        })
    );
  }
  const tokens = new Array<string>();
  responses.forEach(({ body }) => {
    tokens.push(body.token);
  });

  return tokens;
};
