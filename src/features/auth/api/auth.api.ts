import axios from 'axios';
import { LoginCredentials } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import { useAuthStore } from '../store/AuthStore';
import { SECURESTORAGE_KEYS } from '@/constants/storage';
import { set } from 'react-hook-form';
export const login = async (credentials: LoginCredentials) => {
  const { login, setError, setLoading } = useAuthStore.getState();
  try {
    setLoading(true);
    const res = await axios.post('https://dummyjson.com/auth/login', credentials);

    await SecureStore.setItemAsync(SECURESTORAGE_KEYS.ACCESS_TOKEN, res.data.accessToken);

    login(res.data.accessToken, res.data);
  } catch (error: any) {
    setError(error.response?.data.message);
  } finally {
    setLoading(false);
  }
};
export const fetchMe = async () => {
  const accessToken = await SecureStore.getItemAsync(SECURESTORAGE_KEYS.ACCESS_TOKEN);

  if (!accessToken) {
    return null;
  }

  try {
    const res = await axios.get('https://dummyjson.com/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Fetched user data:', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
