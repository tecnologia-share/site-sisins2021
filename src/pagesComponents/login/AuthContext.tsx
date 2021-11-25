import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useState } from 'react';
import api from 'services/api';

export interface UserCredentials {
  email: string;
  password: string;
}

interface User {
  email: string;
  token: string;
}

type AuthContextData = {
  isAuthenticated: boolean;
  user: User;
  signIn(credentials: UserCredentials): Promise<void>;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const route = useRouter();

  async function signIn({ email, password }: UserCredentials) {
    try {
      const { data } = await api.post('/api/authenticate', { email, password });
      setUser({ email, token: data.token });
      route.push('/inscricoes');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
