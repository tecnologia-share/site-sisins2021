import { NextApiRequest, NextApiResponse } from 'next';

const Users = (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({
    TEST: process.env.TEST,
  });
};

export default Users;
