import { LoginCredentials, User } from '../types';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
export interface AuthActions {
  login: (credentials: LoginCredentials) => void;
  logout: () => void;

  fetchMe: () => Promise<void>;
}
export type AuthStore = AuthState & AuthActions;
