import Header from '@/components/ui/Header/Header';
import ThemedView from '@/components/ui/ThemedView/ThemedView';

import { AppSettings } from '../components/Settings/AppSettings';

export const ProfileScreen = () => {
  return (
    <ThemedView edges={['left', 'right']} className="flex-1  ">
      <Header text="Profile" />

      <AppSettings />
    </ThemedView>
  );
};
