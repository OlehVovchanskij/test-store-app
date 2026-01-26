import { User } from '../types';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
export interface AuthActions {
  login: (accessToken: string, user: User) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  fetchMe: () => Promise<void>;
}
export type AuthStore = AuthState & AuthActions;
