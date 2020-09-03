import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AvatarProps {
  url: string;
}

interface UserProps {
  email: string;
  id: number;
  name: string;
}

interface AuthContextData {
  user: UserProps;
  avatar: AvatarProps;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  avatar: AvatarProps;
  user: UserProps;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Fluffy:token');
    const avatar = localStorage.getItem('@Fluffy:avatar');
    const user = localStorage.getItem('@Fluffy:user');

    if (token && user && avatar) {
      return { token, avatar: JSON.parse(avatar), user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password,
    });

    const { avatar, token, user } = response.data;

    localStorage.setItem('@Fluffy:token', token);
    localStorage.setItem('@Fluffy:avatar', JSON.stringify(avatar));
    localStorage.setItem('@Fluffy:user', JSON.stringify(user));

    setData({ token, user, avatar });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Fluffy:token');
    localStorage.removeItem('@Fluffy:avatar');
    localStorage.removeItem('@Fluffy:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        avatar: data.avatar,
        token: data.token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
