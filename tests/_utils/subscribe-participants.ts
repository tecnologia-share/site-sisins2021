import request from 'supertest';
import app from '@/shared/infra/http/app';

export const subscribeParticipants = async (
  courseId: string,
  tokensParticipants: Array<string>
) => {
  for (const token of tokensParticipants) {
    await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        option1: {
          courseId,
          reason: 'My Reason',
          videoLink: 'link',
        },
      });
  }
};
