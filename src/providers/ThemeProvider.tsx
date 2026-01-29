import { useThemeStore } from '@/store/ThemeStore';
import cn from 'clsx';
import { useColorScheme } from 'nativewind';
import { FC, PropsWithChildren, useEffect } from 'react';
import { View } from 'react-native';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeStore((s) => s.theme);
  const loadTheme = useThemeStore((s) => s.loadTheme);

  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return <View className={cn(theme === 'dark' ? 'dark' : '', 'flex-1')}>{children}</View>;
};

export default ThemeProvider;
