import { create } from 'zustand';
import { AuthStore } from './AuthStore.types';
import { fetchMe } from '../api/auth.api';
export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  accessToken: null,
  user: null,
  isLoading: false,
  error: null,
  login: (accessToken, user) =>
    set(() => ({
      isAuthenticated: true,
      accessToken,
      user,
      error: null,
    })),
  logout: () =>
    set(() => ({
      isAuthenticated: false,
      accessToken: null,
      user: null,
      error: null,
    })),
  setLoading: (isLoading) =>
    set(() => ({
      isLoading,
    })),
  fetchMe: async () => {
    set({ isLoading: true });
    try {
      const res = await fetchMe();

      set({
        user: res,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (e) {
      set({
        user: null,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  setError: (error) =>
    set(() => ({
      error,
    })),
}));
