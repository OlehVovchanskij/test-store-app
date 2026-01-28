import { SECURESTORAGE_KEYS } from '@/constants/storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { LoginCredentials } from '../types';

export const loginRequest = async (credentials: LoginCredentials) => {
  const res = await axios.post('https://dummyjson.com/auth/login', credentials);

  await SecureStore.setItemAsync(SECURESTORAGE_KEYS.ACCESS_TOKEN, res.data.accessToken);

  return res.data;
};

export const fetchMeRequest = async () => {
  const accessToken = await SecureStore.getItemAsync(SECURESTORAGE_KEYS.ACCESS_TOKEN);

  if (!accessToken) return null;

  const res = await axios.get('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
