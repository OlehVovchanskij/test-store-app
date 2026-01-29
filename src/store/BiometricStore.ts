import { ASYNCSTORAGE_KEYS } from '@/constants/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface BiometricState {
  enabled: boolean;
  load: () => Promise<void>;
  setEnabled: (value: boolean) => Promise<void>;
}

export const useBiometricStore = create<BiometricState>((set) => ({
  enabled: false,

  load: async () => {
    const value = await AsyncStorage.getItem(ASYNCSTORAGE_KEYS.BIOMETRIC_ENABLED);
    set({ enabled: value === 'true' });
  },

  setEnabled: async (value) => {
    await AsyncStorage.setItem(ASYNCSTORAGE_KEYS.BIOMETRIC_ENABLED, String(value));
    set({ enabled: value });
  },
}));
