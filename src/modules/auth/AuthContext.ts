/* eslint-disable import/prefer-default-export */
import { Dispatch, SetStateAction, createContext } from 'react';
import { User } from '../../types';

export interface AuthState<T> {
  isAuthenticated: T;
  user: T extends true ? User : User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  logout: () => void;
}

export const AuthContext = createContext<AuthState<true | false>>({
  isAuthenticated: false,
  user: undefined,
  setUser: () => undefined,
  logout: () => undefined,
});
