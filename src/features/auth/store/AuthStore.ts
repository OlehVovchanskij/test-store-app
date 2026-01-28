import { SECURESTORAGE_KEYS } from '@/constants/storage';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { fetchMeRequest, loginRequest } from '../api/auth.api';
import { LoginCredentials } from '../types';
import { AuthStore } from './AuthStore.types';
export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  accessToken: null,
  user: null,
  isLoading: false,
  error: null,

  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true });

    try {
      const data = await loginRequest(credentials);

      set({
        accessToken: data.accessToken,
        user: data,
        isAuthenticated: true,
        error: null,
      });
    } catch (e: any) {
      set({
        error: e.response?.data?.message ?? 'Login error',
      });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchMe: async () => {
    set({ isLoading: true });

    try {
      const user = await fetchMeRequest();

      if (!user) {
        set({ isAuthenticated: false });
        return;
      }

      set({
        user,
        isAuthenticated: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    await SecureStore.deleteItemAsync(SECURESTORAGE_KEYS.ACCESS_TOKEN);

    set({
      isAuthenticated: false,
      user: null,
      accessToken: null,
    });
  },
}));
