import { useThemeStore } from '@/store/ThemeStore';
import cn from 'clsx';
import { useColorScheme } from 'nativewind';
import { FC, PropsWithChildren, useEffect } from 'react';
import { View } from 'react-native';
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeStore((s) => s.theme);
  const { setColorScheme } = useColorScheme();
  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return <View className={cn('flex-1', theme === 'dark' ? 'dark' : '')}>{children}</View>;
};
