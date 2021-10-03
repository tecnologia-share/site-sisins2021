import request from 'supertest';
import app from '../../app';
/**
 * criar um curso, se passar o id de um processo seletivo inativo, o curso também será inativo
 * @param  {string} selectionProcessId ID processo seletivo(ativo ou inativo)
 * @param  {string} adminToken token JWT do usuário ADM
 * @returns ID do curso
 */
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
