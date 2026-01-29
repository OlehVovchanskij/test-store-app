import { Typography } from '@/components/ui/Typography/Typography';
import { View } from 'react-native';
import SwitchTheme from './SwitchTheme/SwitchTheme';

export const AppSettings = () => {
  return (
    <View className="m-4 mt-6 rounded-xl bg-secondary/20">
      <Typography variant="h3" className="p-4 text-white">
        App Settings
      </Typography>
      <SwitchTheme />
    </View>
  );
};
