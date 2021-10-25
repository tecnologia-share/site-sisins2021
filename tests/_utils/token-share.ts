import request from 'supertest';
import app from '@/shared/infra/http/app';

/**
 * pega o token admin fazendo uma requisição, portanto, é necessário criar o Admin no banco com a função de createAdmin antes
 */
export const genTokenAdmin = async () => {
  const responseAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'admin@example.com',
      password: 'correct_password',
    });
  return responseAdmin.body.token;
};

export const genTokenNonAdmin = async () => {
  const responseNonAdmin = await request(app)
    .post('/api/authenticate-share')
    .send({
      email: 'non_admin@example.com',
      password: 'correct_password',
    });

  return responseNonAdmin.body.token;
};
