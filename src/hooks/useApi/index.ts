import { useCallback } from 'react';
import api from 'services/api';
import { ApiGetAsks, Register, RegisterReturn } from './types';

const useApi = () => {
  const apiGetAsks = useCallback(async () => {
    return api.get<ApiGetAsks>('/api/participants/asks');
  }, []);

  const apiRegister = useCallback(async (data: Register) => {
    return api.post<RegisterReturn>('/api/register', data);
  }, []);

  return { apiGetAsks, apiRegister };
};

export default useApi;
