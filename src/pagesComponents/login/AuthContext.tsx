import Router, { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
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

export function signOut() {
  destroyCookie(undefined, 'share.token');
  destroyCookie(undefined, 'share.refreshToken');
  Router.push('/login');
}

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
      setCookie(undefined, 'share.token', data.token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      setCookie(undefined, 'share.refreshToken', data.refresh_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });
      api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
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
