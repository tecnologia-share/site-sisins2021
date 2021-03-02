import { NextApiRequest, NextApiResponse } from 'next';

const Users = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    response.status(200).json({
      users: [{ name: 'Rodrigo' }, { name: 'Binário' }, { name: 'Matheus' }],
      method: 'POST',
    });
  } else {
    response.status(200).json({
      users: [{ name: 'Rodrigo' }, { name: 'Binário' }, { name: 'Matheus' }],
      method: 'GET',
    });
  }
};

export default Users;
