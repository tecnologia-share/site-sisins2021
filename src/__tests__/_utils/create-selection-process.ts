import request from 'supertest';
import app from '../../app';

export const createSelectionProcess = async (
  adminToken: string
): Promise<string> => {
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);

  const selectionProcessResponse = await request(app)
    .post('/api/selection-process')
    .set({ authorization: `Bearer ${adminToken}` })
    .send({
      name: 'Selection Process Name',
      startDate: pastDate.toJSON(),
      endDate: futureDate.toJSON(),
      manualLink: 'link manual',
      editalLink: 'link edital',
    });

  return selectionProcessResponse.body.selectionProcess.id;
};
