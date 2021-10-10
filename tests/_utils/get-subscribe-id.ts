import { Connection } from 'typeorm';
import { Inscricao } from '../../src/models/Inscricao';

export const getSubscribeId = async (
  connection: Connection
): Promise<string> => {
  const subscribeRepository = connection.getRepository(Inscricao);

  const subscribe = await subscribeRepository.find();

  return subscribe[0].id;
};
