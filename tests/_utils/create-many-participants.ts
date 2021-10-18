import { Connection } from 'typeorm';
import { Participante } from '@/shared/infra/typeorm/models/Participante';

export const createManyParticipants = async (
  connection: Connection,
  qty: number
) => {
  const participantsArray: Participante[] = [];
  const usersRepository = connection.getRepository(Participante);

  for (let i = 0; i < qty; i++) {
    participantsArray.push(
      usersRepository.create({
        email: `participant_${i}_@example.com`,
        senha: '$2b$10$6FD3duMwr0qUTbREF.jE7O7AidMeeZPcGRTIAUh77Ml/jbpVnUYwy',
        cidade: `participant ${i}`,
        estado: `participant ${i}`,
        cpf: `1234567891${i}`,
        nascimento: new Date(1999, 2, 27),
        nome: `city ${i}`,
        pais: `country ${i}`,
        telefone: '1234',
      })
    );
  }

  await usersRepository.save(participantsArray);
};
