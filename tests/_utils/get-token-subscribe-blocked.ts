import { Connection, getRepository } from 'typeorm';

import request from 'supertest';
import app from '../../src/shared/infra/http/app';
import { Participante } from '../../src/modules/typeorm/models/Participante';
import { SubscriptionStatus } from '../../src/typings/SubscriptionStatus';
import { Inscricao } from '../../src/modules/typeorm/models/Inscricao';

export const getTokenSubscribeBlocked = async (
  connection: Connection,
  courseInactiveId: string,
  adminToken: string
) => {
  const participantsRepository = connection.getRepository(Participante);
  const participantBlocked = participantsRepository.create({
    email: 'participant_blocked@mail.com',
    senha: '$2b$10$6FD3duMwr0qUTbREF.jE7O7AidMeeZPcGRTIAUh77Ml/jbpVnUYwy',
    cidade: 'Test',
    estado: 'Test',
    cpf: '12345678912',
    nascimento: new Date(1999, 2, 27),
    nome: 'Test',
    pais: 'Test',
    telefone: '1234',
  });
  await participantsRepository.save(participantBlocked);

  const responseParticipante = await request(app)
    .post('/api/authenticate')
    .send({
      email: 'participant_blocked@mail.com',
      password: 'correct_password',
    });

  const subscriptionsRepository = getRepository(Inscricao);

  const subscription = subscriptionsRepository.create({
    curso_id: courseInactiveId,
    motivo: 'any_reason',
    participante_id: participantBlocked.id,
    status: SubscriptionStatus.droppedOut,
    link_video: 'any_link',
  });
  await subscriptionsRepository.save(subscription);

  await request(app)
    .patch('/api/subscriptions')
    .set({ authorization: `Bearer ${adminToken}` })
    .send({
      id: subscription.id,
      status: SubscriptionStatus.droppedOut,
    });

  return responseParticipante.body.token;
};
