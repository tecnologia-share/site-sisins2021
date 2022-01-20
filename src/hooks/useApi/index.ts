import { useCallback } from 'react';
import api from 'services/api';
import {
  ApiGetAsks,
  ApiGetCourses,
  Exam,
  Register,
  RegisterReturn,
  SubscribeInCoursesParams,
  SubscribeInCoursesResponse,
} from './types';

const useApi = () => {
  const apiGetAsks = useCallback(async () => {
    return api.get<ApiGetAsks>('/api/ask');
  }, []);

  const apiRegister = useCallback(async (data: Register) => {
    return api.post<RegisterReturn>('/api/register', data);
  }, []);

  const apiGetCourseExam = useCallback(async (id: string) => {
    return api.get<{ exam: Exam }>(`/api/courses/${id}/exam`);
  }, []);

  const apiSubscribeInCourses = useCallback(
    async (courses: SubscribeInCoursesParams) => {
      /** @TODO pegar o Access Token */
      const token = '123';

      return api.post<SubscribeInCoursesResponse>(
        '/api/subscriptions',
        courses,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    []
  );

  const apiGetCourses = useCallback(async () => {
    return api.get<ApiGetCourses>('/api/courses');
  }, []);

  return {
    apiGetAsks,
    apiRegister,
    apiGetCourseExam,
    apiGetCourses,
    apiSubscribeInCourses,
  };
};

export default useApi;
