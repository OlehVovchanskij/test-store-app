import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => Promise<void>;
  loadTheme: () => Promise<void>;
}

const STORAGE_KEY = 'theme';

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',

  toggleTheme: async () => {
    const nextTheme = get().theme === 'light' ? 'dark' : 'light';

    await AsyncStorage.setItem(STORAGE_KEY, nextTheme);
    set({ theme: nextTheme });
  },

  loadTheme: async () => {
    const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);

    if (savedTheme === 'light' || savedTheme === 'dark') {
      set({ theme: savedTheme });
    }
  },
}));
