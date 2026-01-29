import { Typography } from '@/components/ui/Typography/Typography';
import { useThemeStore } from '@/store/ThemeStore';
import { Switch, View } from 'react-native';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <View className="mb-2 flex-row items-center justify-between px-4">
      <Typography variant="h3" className=" pb-2 text-secondary">
        Dark Mode
      </Typography>
      <Switch onValueChange={toggleTheme} value={theme === 'dark'} />
    </View>
  );
};

export default SwitchTheme;
