import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

const exampleMiddleware = () => {
  return (
    request: NextApiRequest,
    response: NextApiResponse,
    next: NextHandler
  ) => {
    console.log('Passou pelo middleware :D');

    next();
  };
};

export { exampleMiddleware };
