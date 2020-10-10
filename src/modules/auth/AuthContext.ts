/* eslint-disable import/prefer-default-export */
import { Dispatch, SetStateAction, createContext } from 'react';
import { UserDto } from '../../api-clients/api';

export interface AuthState<T> {
  isAuthenticated: T;
  user: T extends true ? UserDto : UserDto | undefined;
  setUser: Dispatch<SetStateAction<UserDto | undefined>>;
  logout: () => void;
  login: (token : string) => void;
}

export const AuthContext = createContext<AuthState<true | false>>({
  isAuthenticated: false,
  user: undefined,
  setUser: () => undefined,
  logout: () => undefined,
  login: (token : string) => undefined
});
