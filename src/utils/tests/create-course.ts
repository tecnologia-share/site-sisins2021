import request from 'supertest';
import app from '../../app';

export const createCourse = async (
  selectionProcessId: string,
  adminToken: string
): Promise<string> => {
  const courseResponse = await request(app)
    .post('/api/courses')
    .set({ authorization: `Bearer ${adminToken}` })
    .send({
      name: 'Name',
      category: 'Category',
      description: 'Description',
      time: 'Time',
      professor: 'Professor',
      selectionProcessId,
      duration: '6 meses',
    });

  return courseResponse.body.course.id;
};
