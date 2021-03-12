import { Request, Response, Router } from 'express';
import ParticipantesController from './controllers/ParticipantesController';
import { sum } from './sum';

const routes = Router();

const participantesController = new ParticipantesController();

// max-age especifica quanto tempo o browser deve manter o valor em cache, em segundos.
// s-maxage é uma header lida pelo servidor proxy (neste caso, Vercel).
// stale-while-revalidate indica que o conteúdo da cache pode ser servido como "stale" e revalidado no background
const CACHE_CONTROL_HEADER_VALUE =
  'max-age=0, s-maxage=86400, stale-while-revalidate, public';

routes.post('/participantes', participantesController.create);

routes.get('/api/sum/:num1/:num2', (request: Request, response: Response) => {
  const { num1, num2 } = request.params;

  const result = sum(Number(num1), Number(num2));

  response.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE);

  response.json({
    'Numero 1': num1,
    'Numero 2': num2,
    'Resultado da Soma': result,
  });
});

export default routes;
