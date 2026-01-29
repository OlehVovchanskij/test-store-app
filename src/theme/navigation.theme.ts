import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    card: '#F8FAFC',
    border: '#E5E7EB',
    primary: '#2563EB',
    text: '#111827',
  },
};

export const DarkThemeCustom = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#020617',
    card: '#0F172A',
    border: '#1E293B',
    primary: '#3B82F6',
    text: '#F8FAFC',
  },
};
