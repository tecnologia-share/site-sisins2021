import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { defaultConfig } from '../../../server/config/nextConnectConfig';
import { exampleMiddleware } from '../../../server/middlewares/exampleMiddleware';

const app = nextConnect<NextApiRequest, NextApiResponse>(defaultConfig);

app.use(exampleMiddleware());

app.get((request, response) => {
  response.status(200).json({
    users: [{ name: 'Rodrigo' }, { name: 'Binário' }, { name: 'Matheus' }],
    method: 'GET',
  });
});

app.post((request, response) => {
  response.status(200).json({
    users: [{ name: 'Rodrigo' }, { name: 'Binário' }, { name: 'Matheus' }],
    method: 'POST',
  });
});

export default app;
