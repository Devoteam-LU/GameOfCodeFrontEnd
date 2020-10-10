import { AuthState as AS } from './auth/AuthContext';

export { AuthContext } from './auth/AuthContext';
export { AuthProvider } from './auth/AuthProvider';

export type AuthState<T> = AS<T>;
