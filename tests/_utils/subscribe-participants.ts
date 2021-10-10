import request from 'supertest';
import app from '../../src/app';

export const subscribeParticipants = async (
  courseId: string,
  tokensParticipants: Array<string>
) => {
  for (const token of tokensParticipants) {
    await request(app)
      .post('/api/subscriptions')
      .set({ authorization: `Bearer ${token}` })
      .send({
        courseId,
        reason: 'My Reason',
        videoLink: 'link',
      });
  }
};
