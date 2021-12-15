import { useCallback } from 'react';
import api from 'services/api';
import { ApiGetAsks, ApiGetCourses, Register, RegisterReturn } from './types';

const useApi = () => {
  const apiGetAsks = useCallback(async () => {
    return api.get<ApiGetAsks>('/api/ask');
  }, []);

  const apiRegister = useCallback(async (data: Register) => {
    return api.post<RegisterReturn>('/api/register', data);
  }, []);

  const apiGetCourses = useCallback(async () => {
    return api.get<ApiGetCourses>('/api/courses');
  }, []);

  return { apiGetAsks, apiRegister, apiGetCourses };
};

export default useApi;
